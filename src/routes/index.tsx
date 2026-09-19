import { createFileRoute, Link } from "@tanstack/react-router";
import { BookHeart, BookOpen, Church, Moon, Sparkles } from "lucide-react";
import { liturgicalSeason, mysterySetForDay, MYSTERY_LABEL, nearestSaints, formatFeast } from "@/lib/ave/calendar";
import { STORIES } from "@/lib/ave/stories";
import { ALL_TRACKS, useAveStore } from "@/stores/ave-store";
import { familyWeek, type DayCard } from "@/lib/ave/plan";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const saints = nearestSaints();
  const set = mysterySetForDay();
  const heard = useAveStore((s) => s.heardStories);
  const tonight = STORIES.find((s) => !heard.includes(s.id)) ?? STORIES[0];
  const season = liturgicalSeason();
  const saint = saints[0];
  const week = familyWeek(ALL_TRACKS);

  return (
    <div>
      <div className="relative h-72 overflow-hidden">
        <img src="/images/chapel.jpg" alt="" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-bg/20" />
        <div className="absolute bottom-6 left-5 right-5">
          <p className="text-xs tracking-[0.25em] text-gold uppercase">{season}</p>
          <h1 className="font-display mt-1 text-5xl text-fg">Ave</h1>
          <p className="mt-2 max-w-xs text-sm text-accent/90">
            {MYSTERY_LABEL[set]} today. A story tonight. The saints whenever you need them.
          </p>
        </div>
      </div>

      <div className="space-y-4 px-5 pt-5 pb-6">
        {saint && (
          <Link
            to="/saints/$slug"
            params={{ slug: saint.slug }}
            className="block rounded-3xl border border-border bg-surface p-5"
          >
            <p className="text-[11px] tracking-[0.18em] text-gold uppercase">Saint of the day</p>
            <h2 className="font-display mt-1 text-2xl text-fg">{saint.name}</h2>
            <p className="mt-1 text-xs text-muted">{formatFeast(saint.feast)}</p>
            <p className="mt-3 text-sm leading-relaxed text-accent">{saint.kidLine}</p>
          </Link>
        )}

        <Link to="/stories/$id" params={{ id: tonight.id }} className="block overflow-hidden rounded-3xl border border-border">
          <img src={tonight.image} alt="" className="h-40 w-full object-cover" />
          <div className="bg-surface p-5">
            <p className="text-[11px] tracking-[0.18em] text-gold uppercase">Tonight’s story</p>
            <h2 className="font-display mt-1 text-2xl text-fg">{tonight.kidTitle}</h2>
            <p className="mt-2 text-sm text-muted">{tonight.kid[0]}</p>
          </div>
        </Link>

        <div className="grid grid-cols-2 gap-3">
          <Link to="/pray" className="rounded-3xl bg-surface-2 p-4">
            <Sparkles className="size-5 text-gold" />
            <p className="mt-3 font-display text-xl text-fg">Pray</p>
            <p className="text-xs text-muted">Listen or read along</p>
          </Link>
          <Link to="/stories" className="rounded-3xl bg-surface-2 p-4">
            <BookOpen className="size-5 text-gold" />
            <p className="mt-3 font-display text-xl text-fg">Stories</p>
            <p className="text-xs text-muted">Joyful Mysteries</p>
          </Link>
          <Link to="/saints" className="rounded-3xl bg-surface-2 p-4">
            <BookHeart className="size-5 text-gold" />
            <p className="mt-3 font-display text-xl text-fg">Saints</p>
            <p className="text-xs text-muted">The whole book</p>
          </Link>
          <Link to="/teach" className="rounded-3xl bg-surface-2 p-4">
            <Church className="size-5 text-gold" />
            <p className="mt-3 font-display text-xl text-fg">Teach</p>
            <p className="text-xs text-muted">Why we do this</p>
          </Link>
          <Link to="/mass" className="rounded-3xl bg-surface-2 p-4">
            <BookOpen className="size-5 text-gold" />
            <p className="mt-3 font-display text-xl text-fg">Sunday</p>
            <p className="text-xs text-muted">Mass prep</p>
          </Link>
          <Link to="/church" className="rounded-3xl bg-surface-2 p-4">
            <Church className="size-5 text-gold" />
            <p className="mt-3 font-display text-xl text-fg">Church</p>
            <p className="text-xs text-muted">Tap the nave</p>
          </Link>
          <Link to="/bedtime" className="col-span-2 rounded-3xl bg-surface-2 p-4">
            <Moon className="size-5 text-gold" />
            <p className="mt-3 font-display text-xl text-fg">Bedtime</p>
            <p className="text-xs text-muted">Nine quiet minutes</p>
          </Link>
        </div>

        <section>
          <p className="text-[11px] tracking-[0.18em] text-gold uppercase">This week</p>
          <ul className="mt-3 space-y-2">
            {week.map((d) => (
              <li key={d.dateLabel}>
                <DayLink d={d} />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

function DayLink({ d }: { d: DayCard }) {
  const inner = (
    <>
      <p className="text-[10px] tracking-[0.14em] text-gold uppercase">
        {d.weekday} · {d.dateLabel}
      </p>
      <p className="font-display text-lg text-fg">{d.title}</p>
      <p className="text-xs text-muted">{d.hint}</p>
    </>
  );
  const cls = "block rounded-2xl bg-surface px-4 py-3";
  if (d.to === "/stories/$id" && d.params?.id) {
    return (
      <Link to="/stories/$id" params={{ id: d.params.id }} className={cls}>
        {inner}
      </Link>
    );
  }
  if (d.to === "/saints/$slug" && d.params?.slug) {
    return (
      <Link to="/saints/$slug" params={{ slug: d.params.slug }} className={cls}>
        {inner}
      </Link>
    );
  }
  if (d.to === "/teach/$id" && d.params?.id) {
    return (
      <Link to="/teach/$id" params={{ id: d.params.id }} className={cls}>
        {inner}
      </Link>
    );
  }
  if (d.to === "/mass") {
    return (
      <Link to="/mass" className={cls}>
        {inner}
      </Link>
    );
  }
  if (d.to === "/bedtime") {
    return (
      <Link to="/bedtime" className={cls}>
        {inner}
      </Link>
    );
  }
  if (d.to === "/church") {
    return (
      <Link to="/church" className={cls}>
        {inner}
      </Link>
    );
  }
  return (
    <Link to="/pray" className={cls}>
      {inner}
    </Link>
  );
}
