import { useEffect, useRef, useState } from "react";
import { Pause, Volume2 } from "lucide-react";
import { playNarration, stopNarration } from "@/lib/ave/speak";
import { narrateSpeech, type NarrateVoice } from "@/lib/ave/tts";

const memory = new Map<string, string>();

export function ReadAloud({
  text,
  label = "Read aloud",
  clip,
  voice = "luna",
}: {
  text: string;
  label?: string;
  clip?: string;
  voice?: NarrateVoice;
}) {
  const [playing, setPlaying] = useState(false);
  const [busy, setBusy] = useState(false);
  const audio = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    return () => {
      audio.current?.pause();
      audio.current = null;
    };
  }, []);

  async function toggle() {
    if (playing) {
      stopNarration();
      audio.current = null;
      setPlaying(false);
      return;
    }
    setBusy(true);
    try {
      let src = clip;
      if (!src) {
        const key = `${voice}:${text}`;
        src = memory.get(key);
        if (!src) {
          const res = await narrateSpeech({ data: { text, voice } });
          if (!res.ok) return;
          src = `data:${res.type};base64,${res.audio}`;
          memory.set(key, src);
        }
      }
      const el = playNarration(src);
      audio.current = el;
      el.onended = () => {
        setPlaying(false);
        audio.current = null;
      };
      setPlaying(true);
    } finally {
      setBusy(false);
    }
  }

  return (
    <button
      type="button"
      onClick={() => void toggle()}
      disabled={busy}
      className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-2 text-xs text-accent disabled:opacity-50"
    >
      {playing ? <Pause className="size-3.5" /> : <Volume2 className="size-3.5" />}
      {busy ? "Preparing…" : playing ? "Pause" : label}
    </button>
  );
}
