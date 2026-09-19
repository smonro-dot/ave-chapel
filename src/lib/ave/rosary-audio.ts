import { clipUrl, timestampsUrl, type VoiceId } from "./rosary-data";
import { stopNarration } from "./speak";

export type WordTiming = { word: string; start: number; end: number };

type TimestampFile = {
  graph_chars: string[] | string;
  graph_times: [number, number][];
};

let player: HTMLAudioElement | null = null;
let preview: HTMLAudioElement | null = null;
let previewEnded: (() => void) | null = null;
let warmer: HTMLAudioElement | null = null;

function prep(el: HTMLAudioElement) {
  el.preload = "auto";
  el.setAttribute("playsinline", "true");
}

export function getPlayer() {
  if (typeof window === "undefined") return null;
  if (!player) {
    player = new Audio();
    prep(player);
  }
  return player;
}

function getWarmer() {
  if (typeof window === "undefined") return null;
  if (!warmer) {
    warmer = new Audio();
    prep(warmer);
  }
  return warmer;
}

export function playClip(src: string, rate: number) {
  stopPreview();
  stopNarration();
  const el = getPlayer();
  if (!el) return Promise.resolve();
  const abs = new URL(src, window.location.href).href;
  if (el.src !== abs) el.src = src;
  el.playbackRate = rate;
  try {
    el.currentTime = 0;
  } catch {
    /* ignore */
  }
  return el.play();
}

export function pauseClip() {
  getPlayer()?.pause();
}

export function warmupClip(src: string) {
  const el = getWarmer();
  if (!el) return;
  const abs = new URL(src, window.location.href).href;
  if (el.src !== abs) el.src = src;
}

export function playPreview(src: string, onEnd?: () => void) {
  if (typeof window === "undefined") return;
  stopPreview();
  getPlayer()?.pause();
  preview = new Audio(src);
  prep(preview);
  previewEnded = () => {
    onEnd?.();
    stopPreview();
  };
  preview.addEventListener("ended", previewEnded);
  preview.play().catch(() => {
    onEnd?.();
    stopPreview();
  });
}

export function stopPreview() {
  if (preview && previewEnded) preview.removeEventListener("ended", previewEnded);
  preview?.pause();
  preview = null;
  previewEnded = null;
}

export function wordsFromTimestamps(file: TimestampFile): WordTiming[] {
  const chars = Array.isArray(file.graph_chars) ? file.graph_chars : file.graph_chars.split("");
  const times = file.graph_times;
  const out: WordTiming[] = [];
  let word = "";
  let start = 0;
  let end = 0;
  let open = false;
  for (let i = 0; i < chars.length; i++) {
    const ch = chars[i] ?? "";
    const t = times[i] ?? times[times.length - 1] ?? [0, 0];
    if (/\s/.test(ch)) {
      if (word) {
        out.push({ word, start, end });
        word = "";
        open = false;
      }
      continue;
    }
    if (!open) {
      start = t[0];
      open = true;
    }
    word += ch;
    end = t[1];
  }
  if (word) out.push({ word, start, end });
  return out;
}

export function fallbackTimings(text: string, duration: number): WordTiming[] {
  const words = text.trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) return [];
  const weights = words.map((w) => Math.max(2, w.replace(/[^a-zA-Z]/g, "").length) + (/[.!?]$/.test(w) ? 4 : /[,;:]$/.test(w) ? 2 : 0));
  const total = weights.reduce((a, b) => a + b, 0);
  let t = 0.12;
  const span = Math.max(0.4, duration - 0.35);
  return words.map((word, i) => {
    const d = (weights[i]! / total) * span;
    const start = t;
    const end = t + d;
    t = end;
    return { word, start, end };
  });
}

export function wordAt(timings: WordTiming[], t: number) {
  if (timings.length === 0) return 0;
  const last = timings.length - 1;
  if (t <= timings[0]!.start) return 0;
  if (t >= timings[last]!.end) return last;
  let lo = 0;
  let hi = last;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    const w = timings[mid]!;
    if (t < w.start) hi = mid - 1;
    else if (t > w.end) lo = mid + 1;
    else return mid;
  }
  return Math.max(0, Math.min(last, lo));
}

const cache = new Map<string, { timings: WordTiming[] }>();

export async function loadTimings(voice: VoiceId, clipId: string, text: string) {
  const key = `${voice}:${clipId}`;
  const hit = cache.get(key);
  if (hit) return hit;
  try {
    const res = await fetch(timestampsUrl(voice, clipId));
    if (!res.ok) throw new Error("no timestamps");
    const json = (await res.json()) as TimestampFile;
    const timings = wordsFromTimestamps(json);
    const out = { timings };
    cache.set(key, out);
    return out;
  } catch {
    const out = { timings: fallbackTimings(text, 8) };
    cache.set(key, out);
    return out;
  }
}

export { clipUrl };
