import { useEffect, useRef, useState } from "react";
import { Captions, CaptionsOff, ChevronLeft, ChevronRight, Pause, Play, X } from "lucide-react";
import { RosaryHanging } from "@/components/ave/rosary-hanging";
import { cx } from "@/lib/ave/cx";
import { clipUrl, mysterySetMeta } from "@/lib/ave/rosary-data";
import {
  getPlayer,
  loadTimings,
  pauseClip,
  playClip,
  warmupClip,
  wordAt,
  type WordTiming,
} from "@/lib/ave/rosary-audio";
import { usePrayerStore } from "@/stores/prayer-store";

function Karaoke({ timings, wordIndex, className }: { timings: WordTiming[]; wordIndex: number; className?: string }) {
  const active = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = active.current;
    if (!el) return;
    const box = el.closest("[data-karaoke]");
    if (!box) {
      el.scrollIntoView({ block: "center", behavior: "smooth", inline: "nearest" });
      return;
    }
    const a = el.getBoundingClientRect();
    const b = box.getBoundingClientRect();
    if (a.top < b.top + 12 || a.bottom > b.bottom - 12) {
      el.scrollIntoView({ block: "center", behavior: "smooth", inline: "nearest" });
    }
  }, [wordIndex]);

  if (timings.length === 0) return null;
  return (
    <p className={cx("font-display text-pretty text-2xl leading-snug text-muted sm:text-3xl", className)}>
      {timings.map((w, i) => {
        const on = i === wordIndex;
        const past = i < wordIndex;
        return (
          <span key={`${w.start}-${i}`}>
            <span
              ref={on ? active : undefined}
              className={cx(
                "transition-colors duration-150",
                on && "text-word-lit",
                past && "text-fg/60",
                !on && !past && "text-subtle",
              )}
            >
              {w.word}
            </span>
            {i < timings.length - 1 ? " " : ""}
          </span>
        );
      })}
    </p>
  );
}

function useEngine() {
  const voice = usePrayerStore((s) => s.voice);
  const followMode = usePrayerStore((s) => s.followMode);
  const playbackRate = usePrayerStore((s) => s.playbackRate);
  const screen = usePrayerStore((s) => s.screen);
  const stepIndex = usePrayerStore((s) => s.stepIndex);
  const steps = usePrayerStore((s) => s.steps);
  const playing = usePrayerStore((s) => s.playing);
  const setPlaying = usePrayerStore((s) => s.setPlaying);
  const setWordIndex = usePrayerStore((s) => s.setWordIndex);
  const step = steps[stepIndex];
  const stepId = step?.id;
  const [timings, setTimings] = useState<WordTiming[]>([]);
  const [waiting, setWaiting] = useState(false);
  const [ready, setReady] = useState(false);
  const ended = useRef(false);
  const lastId = useRef<string | undefined>(undefined);

  useEffect(() => {
    const el = getPlayer();
    if (el) el.playbackRate = playbackRate;
  }, [playbackRate]);

  useEffect(() => {
    if (screen !== "pray" || !step) {
      pauseClip();
      setTimings([]);
      setReady(false);
      return;
    }
    let cancel = false;
    ended.current = false;
    setWaiting(false);
    setReady(false);
    setWordIndex(0);
    const listen = followMode === "listen";
    const changed = lastId.current !== stepId;
    lastId.current = stepId;
    if (listen && changed) {
      playClip(clipUrl(voice, step.clipId), usePrayerStore.getState().playbackRate).catch(() => {
        if (!cancel) setPlaying(false);
      });
    } else if (!listen) {
      pauseClip();
    }
    const next = steps[stepIndex + 1];
    if (listen && next && next.clipId !== step.clipId) warmupClip(clipUrl(voice, next.clipId));
    void (async () => {
      const loaded = await loadTimings(voice, step.clipId, step.text);
      if (!cancel) {
        setTimings(loaded.timings);
        setReady(true);
      }
    })();
    return () => {
      cancel = true;
    };
  }, [screen, stepId, voice, followMode, setPlaying, setWordIndex, stepIndex, steps, step]);

  useEffect(() => {
    const el = getPlayer();
    if (followMode === "listen" && el) {
      if (playing) el.play().catch(() => setPlaying(false));
      else el.pause();
    }
  }, [playing, followMode, setPlaying]);

  useEffect(() => {
    const el = getPlayer();
    if (followMode !== "listen" || !el || screen !== "pray") return;
    const onEnded = () => {
      if (ended.current) return;
      ended.current = true;
      const cur = usePrayerStore.getState();
      if (cur.steps[cur.stepIndex]?.awaitContinue) {
        setWaiting(true);
        cur.setPlaying(false);
      } else {
        cur.next();
      }
    };
    el.addEventListener("ended", onEnded);
    return () => el.removeEventListener("ended", onEnded);
  }, [followMode, screen, stepId]);

  useEffect(() => {
    if (screen !== "pray" || !ready || timings.length === 0) return;
    let raf = 0;
    const el = getPlayer();
    let origin = performance.now();
    if (followMode === "listen" && el) origin = performance.now() - el.currentTime * 1000;
    let pausedAt = 0;
    const tick = () => {
      const st = usePrayerStore.getState();
      if (st.screen !== "pray") return;
      if (!st.playing) {
        pausedAt = performance.now();
        raf = requestAnimationFrame(tick);
        return;
      }
      if (pausedAt) {
        origin += performance.now() - pausedAt;
        pausedAt = 0;
      }
      const rate = st.playbackRate || 1;
      const t =
        followMode === "listen" && el && !el.paused ? el.currentTime : ((performance.now() - origin) / 1000) * rate;
      const idx = wordAt(timings, t);
      if (idx !== st.wordIndex) st.setWordIndex(idx);
      const last = timings[timings.length - 1];
      if (followMode === "read" && !ended.current && last && t >= last.end + 0.35) {
        ended.current = true;
        if (st.steps[st.stepIndex]?.awaitContinue) {
          setWaiting(true);
          st.setPlaying(false);
        } else {
          st.next();
        }
        return;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [screen, ready, timings, followMode, stepId]);

  return {
    timings,
    waiting,
    continueLearn: () => {
      setWaiting(false);
      usePrayerStore.getState().next();
    },
  };
}

function Controls({
  waiting,
  playing,
  stepIndex,
  onPrev,
  onNext,
  onContinue,
  onTogglePlay,
}: {
  waiting: boolean;
  playing: boolean;
  stepIndex: number;
  onPrev: () => void;
  onNext: () => void;
  onContinue: () => void;
  onTogglePlay: () => void;
}) {
  return (
    <div className="flex items-center justify-center gap-3 px-3 pb-2.5">
      <button
        type="button"
        onClick={onPrev}
        disabled={stepIndex === 0}
        aria-label="Previous prayer"
        className="flex size-11 items-center justify-center rounded-full text-fg disabled:opacity-30"
      >
        <ChevronLeft className="size-5" />
      </button>
      {waiting ? (
        <button type="button" onClick={onContinue} className="min-w-36 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-fg">
          Continue
        </button>
      ) : (
        <button
          type="button"
          onClick={onTogglePlay}
          aria-label={playing ? "Pause" : "Play"}
          className="flex size-14 items-center justify-center rounded-full bg-accent text-accent-fg"
        >
          {playing ? <Pause className="size-5" /> : <Play className="ml-0.5 size-5" />}
        </button>
      )}
      <button type="button" onClick={onNext} aria-label="Next prayer" className="flex size-11 items-center justify-center rounded-full text-fg">
        <ChevronRight className="size-5" />
      </button>
    </div>
  );
}

export function PraySession() {
  const steps = usePrayerStore((s) => s.steps);
  const stepIndex = usePrayerStore((s) => s.stepIndex);
  const wordIndex = usePrayerStore((s) => s.wordIndex);
  const playing = usePrayerStore((s) => s.playing);
  const setPlaying = usePrayerStore((s) => s.setPlaying);
  const next = usePrayerStore((s) => s.next);
  const prev = usePrayerStore((s) => s.prev);
  const jumpToBead = usePrayerStore((s) => s.jumpToBead);
  const goHome = usePrayerStore((s) => s.goHome);
  const mysterySet = usePrayerStore((s) => s.mysterySet);
  const kind = usePrayerStore((s) => s.kind);
  const playbackRate = usePrayerStore((s) => s.playbackRate);
  const setPlaybackRate = usePrayerStore((s) => s.setPlaybackRate);
  const showWords = usePrayerStore((s) => s.showWords);
  const setShowWords = usePrayerStore((s) => s.setShowWords);
  const { timings, waiting, continueLearn } = useEngine();
  const step = steps[stepIndex];
  const done = new Set(steps.slice(0, stepIndex).map((s) => s.beadId));
  const progress = steps.length ? (stepIndex + 1) / steps.length : 0;
  const decadeMax = kind === "decade" ? 1 : 5;
  const where = step?.decade ? `Decade ${step.decade} of ${decadeMax}` : "Opening";
  const mystery = step?.mystery;
  const panel = showWords || waiting;
  const compactPlay = playing && !panel;

  const toggle = () => {
    const el = getPlayer();
    if (playing) {
      el?.pause();
      setPlaying(false);
    } else {
      el?.play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
      setPlaying(true);
    }
  };

  return (
    <div className="relative h-dvh overflow-hidden bg-bg">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 rosary-session">
          <RosaryHanging
            alignTop
            prominent
            mysterySet={mysterySet}
            activeBeadId={step?.beadId}
            completedBeadIds={done}
            onBeadClick={jumpToBead}
          />
        </div>
      </div>
      <div className="absolute inset-x-0 top-0 z-20 h-0.5 bg-fg/10">
        <div className="h-full bg-accent transition-[width] duration-200" style={{ width: `${progress * 100}%` }} />
      </div>
      <header className="absolute inset-x-0 top-0 z-20 flex items-center gap-1 px-2 pt-3">
        <button type="button" onClick={goHome} aria-label="Close" className="flex size-11 items-center justify-center rounded-full text-fg">
          <X className="size-5" />
        </button>
        <div className="min-w-0 flex-1 text-center">
          <p className="truncate text-xs uppercase tracking-[0.16em] text-subtle">{mysterySetMeta(mysterySet).label}</p>
          <p className="truncate text-sm text-fg">
            {step?.title}
            {step?.subtitle ? <span className="text-muted">{` · ${step.subtitle}`}</span> : null}
          </p>
        </div>
        <button
          type="button"
          onClick={() => setShowWords(!showWords)}
          className={cx("flex size-11 items-center justify-center rounded-full", showWords ? "text-fg" : "text-muted")}
          aria-label={showWords ? "Hide prayer words" : "Show prayer words"}
          aria-pressed={showWords}
        >
          {showWords ? <Captions className="size-4" /> : <CaptionsOff className="size-4" />}
        </button>
        <button
          type="button"
          onClick={() => setPlaybackRate(playbackRate === 1 ? 0.9 : playbackRate === 0.9 ? 1.1 : 1)}
          className="h-11 min-w-11 rounded-full px-2 text-xs tabular-nums text-muted"
          aria-label="Playback speed"
        >
          {playbackRate.toFixed(1)}x
        </button>
      </header>

      {panel ? (
        <div className="absolute inset-x-0 bottom-0 z-20 px-3 pb-[max(0.6rem,env(safe-area-inset-bottom))]">
          <div className="w-full overflow-hidden rounded-3xl bg-surface/80 shadow-[0_0_0_1px_rgba(243,236,224,0.08)] backdrop-blur-md">
            <div className="px-4 pt-3 pb-1.5">
              {waiting && mystery ? (
                <div className="max-h-36 overflow-y-auto">
                  <p className="font-display text-xl text-fg">{mystery.title}</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-muted">{`Fruit · ${mystery.fruit}`}</p>
                  <blockquote className="mt-3 text-sm leading-relaxed text-fg/80">
                    {mystery.verse}
                    <cite className="mt-1 block text-xs text-subtle not-italic">{mystery.verseRef}</cite>
                  </blockquote>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{mystery.meditation}</p>
                </div>
              ) : (
                <div data-karaoke className="max-h-24 overflow-y-auto pr-1">
                  <Karaoke timings={timings} wordIndex={wordIndex} className="text-lg sm:text-xl" />
                </div>
              )}
            </div>
            <Controls
              waiting={waiting}
              playing={playing}
              stepIndex={stepIndex}
              onPrev={prev}
              onNext={next}
              onContinue={continueLearn}
              onTogglePlay={toggle}
            />
          </div>
          <p className="mt-1 text-center text-xs tabular-nums text-subtle">
            {where} · {stepIndex + 1} / {steps.length}
          </p>
        </div>
      ) : (
        <div className="absolute inset-x-0 bottom-0 z-20 flex flex-col items-center gap-2 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
          {compactPlay ? null : (
            <p className="text-xs tabular-nums text-subtle">
              {where} · {stepIndex + 1} / {steps.length}
            </p>
          )}
          <div className="flex items-center gap-2 rounded-full bg-surface px-2 py-1.5 shadow-[0_0_0_1px_rgba(243,236,224,0.12)]">
            <button
              type="button"
              onClick={prev}
              disabled={stepIndex === 0}
              aria-label="Previous prayer"
              className="flex size-11 items-center justify-center rounded-full text-fg disabled:opacity-30"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={toggle}
              aria-label={playing ? "Pause" : "Play"}
              className="flex size-12 items-center justify-center rounded-full bg-accent text-accent-fg"
            >
              {playing ? <Pause className="size-5" /> : <Play className="ml-0.5 size-5" />}
            </button>
            <button type="button" onClick={next} aria-label="Next prayer" className="flex size-11 items-center justify-center rounded-full text-fg">
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export function PrayComplete() {
  const mysterySet = usePrayerStore((s) => s.mysterySet);
  const kind = usePrayerStore((s) => s.kind);
  const start = usePrayerStore((s) => s.start);
  const goHome = usePrayerStore((s) => s.goHome);
  const completedCount = usePrayerStore((s) => s.completedCount);
  const meta = mysterySetMeta(mysterySet);
  return (
    <div className="relative flex min-h-dvh flex-col items-center justify-center px-6 text-center">
      <RosaryHanging mysterySet={mysterySet} completedBeadIds={new Set(["medal"])} className="pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative z-10 max-w-sm">
        <p className="text-xs uppercase tracking-[0.18em] text-gold">Amen</p>
        <h1 className="font-display mt-2 text-4xl text-fg">It is finished.</h1>
        <p className="mt-3 text-sm text-muted">
          You prayed the {meta.label} Mysteries
          {kind === "decade" ? " — one decade" : kind === "learn" ? ", and sat with them" : ""}.
        </p>
        {completedCount > 1 ? (
          <p className="mt-1 text-xs tabular-nums text-subtle">{completedCount} rosaries completed on this device</p>
        ) : null}
        <div className="mt-6 grid w-full gap-2">
          <button type="button" onClick={() => start(kind)} className="rounded-full bg-accent py-3 text-sm font-medium text-accent-fg">
            Pray again
          </button>
          <button type="button" onClick={goHome} className="rounded-full border border-border py-3 text-sm text-fg">
            Return home
          </button>
        </div>
      </div>
    </div>
  );
}
