import { STORIES } from "./stories";
import { WHYS } from "./whys";
import { nearestSaints } from "./calendar";
import type { PlanTrack } from "./types";

export type DayCard = {
  weekday: string;
  dateLabel: string;
  title: string;
  hint: string;
  to: string;
  params?: { id?: string; slug?: string };
};

const WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export function familyWeek(tracks: PlanTrack[], from = new Date()): DayCard[] {
  const start = startOfWeek(from);
  const rotation = tracks.length ? tracks : (["gospel", "decade", "bedtime"] as PlanTrack[]);
  return WEEKDAYS.map((weekday, i) => {
    const d = addDays(start, i);
    const dateLabel = d.toLocaleDateString(undefined, { month: "short", day: "numeric" });
    const today = sameDay(d, from);
    const track = i === 0 && rotation.includes("mass") ? "mass" : rotation[i % rotation.length];
    const card = cardFor(track, i, d);
    return {
      weekday: today ? "Today" : weekday,
      dateLabel,
      ...card,
    };
  });
}

function cardFor(track: PlanTrack, i: number, d: Date): Omit<DayCard, "weekday" | "dateLabel"> {
  if (track === "gospel") {
    const stories = STORIES.filter((s) => s.kind === "mystery" || s.kind === "gospel");
    const s = stories[i % stories.length];
    return { title: s.kidTitle, hint: "A story for him", to: "/stories/$id", params: { id: s.id } };
  }
  if (track === "decade") {
    return { title: "A decade together", hint: "Beads, one mystery", to: "/pray" };
  }
  if (track === "saints") {
    const saint = nearestSaints(d, 1)[0];
    return {
      title: saint ? saint.shortName : "A saint",
      hint: "From the book",
      to: saint ? "/saints/$slug" : "/saints",
      params: saint ? { slug: saint.slug } : undefined,
    };
  }
  if (track === "why") {
    const w = WHYS[i % WHYS.length];
    return { title: w.kidTitle, hint: "Why we do this", to: "/teach/$id", params: { id: w.id } };
  }
  if (track === "mass") {
    return { title: "Sunday Mass", hint: "Gospel in kid English", to: "/mass" };
  }
  return { title: "Bedtime prayer", hint: "Nine quiet minutes", to: "/bedtime" };
}

function startOfWeek(from: Date) {
  const d = new Date(from);
  d.setHours(12, 0, 0, 0);
  d.setDate(d.getDate() - d.getDay());
  return d;
}

function addDays(d: Date, n: number) {
  const x = new Date(d);
  x.setDate(x.getDate() + n);
  return x;
}

function sameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}
