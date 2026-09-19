import { create } from "zustand";
import { persist } from "zustand/middleware";
import { mysterySetForDay } from "@/lib/ave/calendar";
import { clipUrl } from "@/lib/ave/rosary-data";
import { buildRosary, type PrayStep } from "@/lib/ave/rosary-sequence";
import { pauseClip, playClip, stopPreview } from "@/lib/ave/rosary-audio";
import type { FollowMode, MysterySetId, PrayKind, VoiceId } from "@/lib/ave/rosary-data";

type PrayerState = {
  voice: VoiceId;
  followMode: FollowMode;
  includeFatima: boolean;
  playbackRate: number;
  showWords: boolean;
  screen: "home" | "pray" | "complete";
  kind: PrayKind;
  mysterySet: MysterySetId;
  decadeIndex: number;
  steps: PrayStep[];
  stepIndex: number;
  playing: boolean;
  wordIndex: number;
  completedCount: number;
  setVoice: (v: VoiceId) => void;
  setFollowMode: (m: FollowMode) => void;
  setIncludeFatima: (v: boolean) => void;
  setPlaybackRate: (v: number) => void;
  setShowWords: (v: boolean) => void;
  setMysterySet: (v: MysterySetId) => void;
  setDecadeIndex: (v: number) => void;
  start: (kind: PrayKind, decadeIndex?: number) => void;
  next: () => void;
  prev: () => void;
  jumpToBead: (beadId: string) => void;
  setPlaying: (v: boolean) => void;
  setWordIndex: (v: number) => void;
  goHome: () => void;
};

export const usePrayerStore = create<PrayerState>()(
  persist(
    (set, get) => ({
      voice: "celeste",
      followMode: "listen",
      includeFatima: true,
      playbackRate: 1,
      showWords: false,
      screen: "home",
      kind: "full",
      mysterySet: mysterySetForDay(),
      decadeIndex: 1,
      steps: [],
      stepIndex: 0,
      playing: false,
      wordIndex: 0,
      completedCount: 0,
      setVoice: (voice) => set({ voice }),
      setFollowMode: (followMode) => set({ followMode }),
      setIncludeFatima: (includeFatima) => set({ includeFatima }),
      setPlaybackRate: (playbackRate) => set({ playbackRate }),
      setShowWords: (showWords) => set({ showWords }),
      setMysterySet: (mysterySet) => set({ mysterySet }),
      setDecadeIndex: (decadeIndex) => set({ decadeIndex }),
      start: (kind, decadeIndex) => {
        stopPreview();
        const state = get();
        const idx = decadeIndex ?? state.decadeIndex;
        const steps = buildRosary({
          set: state.mysterySet,
          kind,
          decadeIndex: idx,
          includeFatima: state.includeFatima,
        });
        const showWords = state.followMode === "read" || state.showWords || kind === "learn";
        set({
          kind,
          decadeIndex: idx,
          steps,
          stepIndex: 0,
          wordIndex: 0,
          playing: true,
          showWords,
          screen: "pray",
        });
        if (state.followMode === "listen" && steps[0]) {
          playClip(clipUrl(state.voice, steps[0].clipId), state.playbackRate).catch(() => get().setPlaying(false));
        }
      },
      next: () => {
        const { stepIndex, steps, completedCount } = get();
        if (stepIndex >= steps.length - 1) {
          set({ screen: "complete", playing: false, completedCount: completedCount + 1 });
          return;
        }
        set({ stepIndex: stepIndex + 1, wordIndex: 0 });
      },
      prev: () => {
        const { stepIndex } = get();
        if (stepIndex <= 0) return;
        set({ stepIndex: stepIndex - 1, wordIndex: 0 });
      },
      jumpToBead: (beadId) => {
        const { steps, stepIndex } = get();
        const ahead = steps.findIndex((s, i) => i >= stepIndex && s.beadId === beadId);
        const any = steps.findIndex((s) => s.beadId === beadId);
        const i = ahead >= 0 ? ahead : any;
        if (i >= 0) set({ stepIndex: i, wordIndex: 0 });
      },
      setPlaying: (playing) => set({ playing }),
      setWordIndex: (wordIndex) => set({ wordIndex }),
      goHome: () => {
        pauseClip();
        stopPreview();
        set({ screen: "home", playing: false, steps: [], stepIndex: 0 });
      },
    }),
    {
      name: "ave-rosary",
      skipHydration: true,
      partialize: (s) => ({
        voice: s.voice,
        followMode: s.followMode,
        includeFatima: s.includeFatima,
        playbackRate: s.playbackRate,
        showWords: s.showWords,
        mysterySet: s.mysterySet,
        completedCount: s.completedCount,
      }),
    },
  ),
);
