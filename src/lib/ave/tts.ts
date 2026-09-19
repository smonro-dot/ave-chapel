import { createServerFn } from "@tanstack/react-start";

export type NarrateVoice = "luna" | "orion" | "celeste";

export const narrateSpeech = createServerFn({ method: "POST" })
  .validator((d: { text: string; voice?: NarrateVoice }) => ({
    text: String(d.text ?? "")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 1600),
    voice: d.voice === "orion" || d.voice === "celeste" ? d.voice : ("luna" as NarrateVoice),
  }))
  .handler(async ({ data }) => {
    const apiKey = process.env.XAI_API_KEY;
    if (!apiKey) return { ok: false as const, error: "unavailable" };
    if (!data.text) return { ok: false as const, error: "empty" };

    const wrapped = `<slow><soft>${data.text}</soft></slow>`;
    const res = await fetch("https://api.x.ai/v1/tts", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: wrapped,
        voice_id: data.voice,
        language: "en",
        speed: 0.88,
        output_format: { codec: "mp3", sample_rate: 24000, bit_rate: 128000 },
      }),
    });
    if (!res.ok) return { ok: false as const, error: `tts ${res.status}` };

    const buf = Buffer.from(await res.arrayBuffer());
    if (buf[0] === 0x7b) {
      try {
        const json = JSON.parse(buf.toString("utf8")) as { audio?: string };
        if (json.audio) return { ok: true as const, audio: json.audio, type: "audio/mpeg" };
      } catch {
        /* fall through */
      }
    }
    return { ok: true as const, audio: buf.toString("base64"), type: "audio/mpeg" };
  });
