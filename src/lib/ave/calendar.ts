import { SAINTS } from "./saints";
import type { Feast, Saint } from "./types";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function formatFeast(feast: Feast) {
  return `${MONTHS[feast.month - 1]} ${feast.day}`;
}

export function liturgicalSeason(date = new Date()) {
  const m = date.getMonth() + 1;
  const d = date.getDate();
  if (m === 12 && d >= 17) return "Advent";
  if (m === 12 || (m === 1 && d <= 13)) return "Christmas";
  if (m === 2 || m === 3) return "Lent approaching";
  if (m === 4) return "Eastertide";
  return "Ordinary Time";
}

export function todaysSaints(date = new Date()): Saint[] {
  const m = date.getMonth() + 1;
  const d = date.getDate();
  return SAINTS.filter((s) => s.feast.month === m && s.feast.day === d);
}

export function nearestSaints(date = new Date(), n = 3): Saint[] {
  const today = todaysSaints(date);
  if (today.length) return today.slice(0, n);
  const key = (s: Saint) => s.feast.month * 32 + s.feast.day;
  const now = (date.getMonth() + 1) * 32 + date.getDate();
  const upcoming = [...SAINTS].sort((a, b) => {
    const da = (key(a) - now + 400) % 400;
    const db = (key(b) - now + 400) % 400;
    return da - db;
  });
  return upcoming.slice(0, n);
}

export function mysterySetForDay(date = new Date()) {
  const day = date.getDay();
  if (day === 0 || day === 3) return "glorious" as const;
  if (day === 1 || day === 6) return "joyful" as const;
  if (day === 2 || day === 5) return "sorrowful" as const;
  return "luminous" as const;
}

export const MYSTERY_LABEL = {
  joyful: "Joyful Mysteries",
  sorrowful: "Sorrowful Mysteries",
  glorious: "Glorious Mysteries",
  luminous: "Luminous Mysteries",
};
