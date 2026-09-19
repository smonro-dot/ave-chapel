import type { MysterySetId } from "./rosary-data";

export type BeadKind = "crucifix" | "small" | "large" | "medal";

export type HangingBead = {
  id: string;
  kind: BeadKind;
  x: number;
  y: number;
  r: number;
  decade?: number;
  hailIndex?: number;
};

const CX = 200;
const CY = 172;
const RX = 142;
const RY = 154;

function round(n: number) {
  return Math.round(n * 100) / 100;
}

function bead(id: string, kind: BeadKind, x: number, y: number, extra: Partial<HangingBead> = {}): HangingBead {
  const r = kind === "small" ? 6.2 : kind === "large" ? 8.8 : kind === "medal" ? 22 : 26;
  return { id, kind, x: round(x), y: round(y), r, ...extra };
}

function buildBeads(): HangingBead[] {
  const beads: HangingBead[] = [];
  beads.push(bead("medal", "medal", CX, 326));

  const loop: { id: string; kind: BeadKind; decade: number; hailIndex?: number }[] = [];
  for (let d = 1; d <= 5; d++) {
    if (d !== 1) loop.push({ id: `d${d}-of`, kind: "large", decade: d });
    for (let i = 1; i <= 10; i++) loop.push({ id: `d${d}-hm-${i}`, kind: "small", decade: d, hailIndex: i });
  }
  const inset = 0.34;
  const span = Math.PI * 2 - inset * 2;
  for (let i = 0; i < loop.length; i++) {
    const ang = Math.PI / 2 + inset + (i / (loop.length - 1)) * span;
    const item = loop[i]!;
    beads.push(
      bead(item.id, item.kind, CX + RX * Math.cos(ang), CY + RY * Math.sin(ang), {
        decade: item.decade,
        hailIndex: item.hailIndex,
      }),
    );
  }

  beads.push(bead("tail-glory", "large", CX, 362));
  beads.push(bead("tail-hm-1", "small", CX, 380));
  beads.push(bead("tail-hm-2", "small", CX, 396));
  beads.push(bead("tail-hm-3", "small", CX, 412));
  beads.push(bead("tail-of", "large", CX, 434));
  beads.push(bead("crucifix", "crucifix", CX, 488));
  return beads;
}

export const HANGING_BEADS = buildBeads();
export const BEAD_BY_ID = Object.fromEntries(HANGING_BEADS.map((b) => [b.id, b])) as Record<string, HangingBead>;

function linksBetween(a: HangingBead, b: HangingBead) {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const n = Math.hypot(dx, dy) > 22 ? 2 : 1;
  const rot = (Math.atan2(dy, dx) * 180) / Math.PI;
  const out: { x: number; y: number; rot: number }[] = [];
  for (let i = 1; i <= n; i++) {
    const t = i / (n + 1);
    out.push({ x: round(a.x + dx * t), y: round(a.y + dy * t), rot });
  }
  return out;
}

export function loopChainPath() {
  const ring = HANGING_BEADS.filter((b) => b.id.startsWith("d") || b.id === "medal")
    .map((b) => ({ b, ang: Math.atan2(b.y - CY, b.x - CX) }))
    .sort((a, b) => a.ang - b.ang);
  const medalAt = ring.findIndex((x) => x.b.id === "medal");
  const ordered = medalAt >= 0 ? [...ring.slice(medalAt), ...ring.slice(0, medalAt)] : ring;
  return `${ordered.map((x, i) => `${i === 0 ? "M" : "L"} ${x.b.x.toFixed(2)} ${x.b.y.toFixed(2)}`).join(" ")} Z`;
}

export function tailChainPath() {
  const ids = ["medal", "tail-glory", "tail-hm-1", "tail-hm-2", "tail-hm-3", "tail-of", "crucifix"];
  return ids
    .map((id, i) => {
      const b = BEAD_BY_ID[id]!;
      return `${i === 0 ? "M" : "L"} ${b.x.toFixed(2)} ${b.y.toFixed(2)}`;
    })
    .join(" ");
}

function chainLinks() {
  const ring = HANGING_BEADS.filter((b) => b.id.startsWith("d") || b.id === "medal")
    .map((b) => ({ b, ang: Math.atan2(b.y - CY, b.x - CX) }))
    .sort((a, b) => a.ang - b.ang);
  const links: { x: number; y: number; rot: number }[] = [];
  for (let i = 0; i < ring.length; i++) {
    links.push(...linksBetween(ring[i]!.b, ring[(i + 1) % ring.length]!.b));
  }
  const tail = ["medal", "tail-glory", "tail-hm-1", "tail-hm-2", "tail-hm-3", "tail-of", "crucifix"];
  for (let i = 0; i < tail.length - 1; i++) {
    links.push(...linksBetween(BEAD_BY_ID[tail[i]!]!, BEAD_BY_ID[tail[i + 1]!]!));
  }
  return links;
}

export const CHAIN_LINKS = chainLinks();

export function beadImage(bead: HangingBead, set: MysterySetId) {
  if (bead.kind === "large") return "/images/bead-gold.png";
  if (set === "sorrowful") return "/images/bead-garnet.png";
  if (set === "luminous") return "/images/bead-amber.png";
  return "/images/bead-pearl.png";
}

export const LOOP_PATH = loopChainPath();
export const TAIL_PATH = tailChainPath();
