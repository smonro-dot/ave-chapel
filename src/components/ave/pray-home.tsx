import { useEffect, useState } from "react";
import { Captions, CircleHelp, Headphones, Pause, Play } from "lucide-react";
import { RosaryHanging } from "@/components/ave/rosary-hanging";
import { cx } from "@/lib/ave/cx";
import { mysterySetForDay } from "@/lib/ave/calendar";
import { clipUrl, mysteriesFor, MYSTERY_SETS, VOICES, type FollowMode, type VoiceId } from "@/lib/ave/rosary-data";
import { playPreview, stopPreview } from "@/lib/ave/rosary-audio";
import { usePrayerStore } from "@/stores/prayer-store";

function HowItWorks({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute inset-0 z-30 overflow-y-auto bg-bg/92 px-4 py-5 backdrop-blur-md">
      <div className="mx-auto w-full max-w-lg pb-10">
        <header className="mb-5 flex items-start justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-gold">How it works</p>
            <h2 className="font-display mt-1 text-3xl text-fg">A rosary you can follow</h2>
          </div>
          <button type="button" onClick={onClose} className="rounded-full border border-border px-3 py-1.5 text-xs text-accent">
            Close
          </button>
        </header>
        <ol className="space-y-4 text-sm leading-relaxed text-accent">
          <li>
            <span className="text-gold">1.</span> Choose today’s mysteries, or another set. Saturday is Joyful.
          </li>
          <li>
            <span className="text-gold">2.</span> Listen with Celeste or Orion, or read along in silence. Each bead lights as you pray.
          </li>
          <li>
            <span className="text-gold">3.</span> Five decades is the full rosary. One decade is a single mystery — enough for a two-year-old beside you.
          </li>
        </ol>
      </div>
    </div>
  );
}

function ModeToggle({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (id: string) => void;
  options: { id: string; label: string; icon?: typeof Headphones }[];
}) {
  return (
    <div className="grid grid-cols-2 gap-1 rounded-full bg-surface-2 p-1">
      {options.map((opt) => {
        const Icon = opt.icon;
        const on = value === opt.id;
        return (
          <button
            key={opt.id}
            type="button"
            onClick={() => onChange(opt.id)}
            className={cx(
              "flex h-10 items-center justify-center gap-1.5 rounded-full text-sm transition-colors",
              on ? "bg-accent text-accent-fg" : "text-muted hover:text-fg",
            )}
          >
            {Icon ? <Icon className="size-3.5" /> : null}
            <span>{opt.label}</span>
          </button>
        );
      })}
    </div>
  );
}

export function PrayHome() {
  const mysterySet = usePrayerStore((s) => s.mysterySet);
  const setMysterySet = usePrayerStore((s) => s.setMysterySet);
  const followMode = usePrayerStore((s) => s.followMode);
  const setFollowMode = usePrayerStore((s) => s.setFollowMode);
  const voice = usePrayerStore((s) => s.voice);
  const setVoice = usePrayerStore((s) => s.setVoice);
  const includeFatima = usePrayerStore((s) => s.includeFatima);
  const setIncludeFatima = usePrayerStore((s) => s.setIncludeFatima);
  const start = usePrayerStore((s) => s.start);
  const [help, setHelp] = useState(false);
  const [pickDecade, setPickDecade] = useState(false);
  const [previewId, setPreviewId] = useState<VoiceId | null>(null);
  const today = mysterySetForDay();
  const meta = MYSTERY_SETS.find((s) => s.id === mysterySet)!;
  const decades = mysteriesFor(mysterySet);
  const weekday = new Date().toLocaleDateString("en-US", { weekday: "long" });

  useEffect(() => () => stopPreview(), []);

  function preview(id: VoiceId) {
    if (previewId === id) {
      stopPreview();
      setPreviewId(null);
      return;
    }
    setPreviewId(id);
    playPreview(clipUrl(id, "hail-mary"), () => setPreviewId(null));
  }

  return (
    <div className="relative flex h-[calc(100dvh-5.5rem)] flex-col overflow-hidden">
      <header className="relative z-10 flex shrink-0 items-end justify-between px-5 pt-5 pb-1">
        <div>
          <p className="font-display text-3xl font-semibold tracking-[0.18em] text-fg">AVE</p>
          <p className="mt-1 text-xs tracking-wide text-muted">Listen or read. Each bead lights as you pray.</p>
        </div>
        <div className="flex items-end gap-1">
          <p className="text-right text-xs text-muted">
            {weekday}
            <span className="mt-0.5 block text-fg/80">
              {MYSTERY_SETS.find((s) => s.id === today)?.label} today
            </span>
          </p>
          <button
            type="button"
            onClick={() => setHelp(true)}
            className="flex size-9 items-center justify-center rounded-full text-fg hover:bg-fg/10"
            aria-label="How the rosary works"
          >
            <CircleHelp className="size-5" />
          </button>
        </div>
      </header>

      <div className="relative mx-auto min-h-0 w-full max-w-lg flex-1 overflow-hidden px-2">
        <div className="absolute inset-0">
          <RosaryHanging mysterySet={mysterySet} />
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-lg shrink-0 overflow-y-auto px-4 pb-3">
        <div className="flex gap-1 overflow-x-auto pb-2">
          {MYSTERY_SETS.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => {
                setMysterySet(s.id);
                setPickDecade(false);
              }}
              className={cx(
                "h-9 shrink-0 rounded-full px-3.5 text-sm transition-colors",
                mysterySet === s.id ? "bg-accent text-accent-fg" : "text-muted hover:text-fg",
              )}
            >
              {s.label}
              {s.id === today ? <span className="ml-1.5 text-xs uppercase tracking-wider opacity-70">Today</span> : null}
            </button>
          ))}
        </div>
        <p className="font-display text-lg text-fg">{meta.label} Mysteries</p>
        <p className="mb-3 text-xs tracking-wide text-subtle">{meta.latin}</p>

        <ModeToggle
          value={followMode}
          onChange={(id) => setFollowMode(id as FollowMode)}
          options={[
            { id: "listen", label: "Listen", icon: Headphones },
            { id: "read", label: "Read along", icon: Captions },
          ]}
        />
        <p className="mt-1.5 px-1 text-xs text-subtle">
          {followMode === "listen"
            ? "Voice and beads only. Turn words on later if you want them."
            : "Silent, scrolling words so you can read as you pray."}
        </p>

        <div className="mt-2 grid grid-cols-2 gap-1.5">
          {VOICES.map((v) => {
            const on = voice === v.id;
            const previewing = previewId === v.id;
            return (
              <div
                key={v.id}
                className={cx(
                  "flex items-start gap-1 rounded-2xl p-1 transition-colors",
                  on ? "bg-accent text-accent-fg" : "bg-surface-2 text-muted",
                )}
              >
                <button
                  type="button"
                  onClick={() => setVoice(v.id)}
                  className={cx("min-h-11 flex-1 rounded-xl px-2 py-1.5 text-left", !on && "hover:text-fg")}
                >
                  <span className="block text-sm font-medium">{v.name}</span>
                  <span className={cx("mt-0.5 block text-xs", on ? "opacity-70" : "text-subtle")}>{v.blurb}</span>
                </button>
                <button
                  type="button"
                  aria-label={previewing ? `Stop ${v.name} preview` : `Preview ${v.name}`}
                  onClick={() => preview(v.id)}
                  className={cx("mt-1 flex size-8 shrink-0 items-center justify-center rounded-full", on ? "bg-accent-fg/10" : "bg-fg/10")}
                >
                  {previewing ? <Pause className="size-3.5" /> : <Play className="size-3.5" />}
                </button>
              </div>
            );
          })}
        </div>

        {pickDecade ? (
          <div className="mt-4 grid gap-1.5">
            <p className="px-1 text-xs leading-relaxed text-subtle">One decade: Our Father, ten Hail Marys, Glory Be. About five minutes.</p>
            {decades.map((m) => (
              <button
                key={m.id}
                type="button"
                onClick={() => start("decade", m.index)}
                className="flex min-h-11 items-center justify-between gap-3 rounded-2xl bg-surface-2 px-4 text-left hover:bg-fg/10"
              >
                <span className="text-sm text-fg">
                  {m.index}. {m.title}
                </span>
                <span className="shrink-0 text-xs text-subtle">{m.fruit}</span>
              </button>
            ))}
            <button type="button" onClick={() => setPickDecade(false)} className="mt-1 text-xs text-gold">
              Back
            </button>
          </div>
        ) : (
          <div className="mt-4 grid gap-2">
            <button
              type="button"
              onClick={() => start("full")}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-accent py-3.5 text-sm font-medium text-accent-fg"
            >
              <Play className="ml-0.5 size-4" />
              Pray five decades
            </button>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setPickDecade(true)}
                className="rounded-full border border-border py-3 text-sm text-fg"
              >
                One decade
              </button>
              <button type="button" onClick={() => start("learn")} className="rounded-full border border-border py-3 text-sm text-fg">
                Learn as you go
              </button>
            </div>
            <button
              type="button"
              onClick={() => {
                usePrayerStore.setState({ showWords: true, playbackRate: 0.9 });
                start("decade", 1);
              }}
              className="rounded-full bg-surface-2 py-3 text-sm text-fg"
            >
              Kids’ decade
            </button>
            <p className="px-1 text-xs leading-relaxed text-subtle">
              Five decades is the full rosary (~20 min). One decade is a single mystery (~5 min). Kids’ decade is slow, with the words on.
            </p>
          </div>
        )}

        <label className="mt-2 flex min-h-10 cursor-pointer items-center justify-between gap-3 text-sm text-muted">
          <span>Include the Fatima prayer</span>
          <input
            type="checkbox"
            checked={includeFatima}
            onChange={(e) => setIncludeFatima(e.target.checked)}
            className="size-4 accent-accent"
            suppressHydrationWarning
          />
        </label>
      </div>
      {help ? <HowItWorks onClose={() => setHelp(false)} /> : null}
    </div>
  );
}
