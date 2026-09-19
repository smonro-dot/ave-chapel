import {
  BEAD_BY_ID,
  CHAIN_LINKS,
  HANGING_BEADS,
  LOOP_PATH,
  TAIL_PATH,
  beadImage,
  type HangingBead,
} from "@/lib/ave/rosary-beads";
import { cx } from "@/lib/ave/cx";
import type { MysterySetId } from "@/lib/ave/rosary-data";

type BeadState = "idle" | "active" | "done";

function BeadMark({
  bead,
  state,
  mysterySet,
  prominent,
  onClick,
}: {
  bead: HangingBead;
  state: BeadState;
  mysterySet: MysterySetId;
  prominent: boolean;
  onClick?: () => void;
}) {
  const clickable = !!onClick;
  const active = state === "active";
  const motion = active ? (prominent ? "animate-bead-pray" : "animate-bead-live") : "bead-rest";
  const glow = active ? "url(#bead-glow-hot)" : state === "done" ? "url(#bead-glow-soft)" : undefined;
  const n = (v: number) => v.toFixed(2);

  if (bead.kind === "crucifix") {
    return (
      <g transform={`translate(${n(bead.x)} ${n(bead.y)})`} onClick={onClick} className={clickable ? "cursor-pointer" : undefined}>
        {active ? (
          <ellipse cx="0" cy="8" rx="28" ry="44" fill="var(--color-glow-hot)" opacity="0.28" className="origin-center animate-bead-pulse" />
        ) : null}
        <g className={motion}>
          <image
            href="/images/crucifix.png"
            x={n(-24)}
            y={n(-39)}
            width={48}
            height={86}
            preserveAspectRatio="xMidYMid meet"
            style={{ filter: glow, opacity: state === "idle" ? 0.9 : 1 }}
          />
        </g>
        {clickable ? <rect x="-28" y="-52" width="56" height="108" fill="transparent" /> : null}
      </g>
    );
  }

  if (bead.kind === "medal") {
    return (
      <g transform={`translate(${n(bead.x)} ${n(bead.y)})`} onClick={onClick} className={clickable ? "cursor-pointer" : undefined}>
        {active ? <circle r="36" fill="var(--color-glow-hot)" opacity="0.28" className="animate-bead-pulse" /> : null}
        <g className={motion}>
          <image
            href="/images/medal.png"
            x={n(-22)}
            y={n(-23.76)}
            width={n(44)}
            height={n(47.52)}
            preserveAspectRatio="xMidYMid meet"
            style={{ filter: glow, opacity: state === "idle" ? 0.92 : 1 }}
          />
        </g>
        {clickable ? <circle r="28" fill="transparent" /> : null}
      </g>
    );
  }

  const size = bead.r * 2;
  const href = beadImage(bead, mysterySet);
  return (
    <g transform={`translate(${n(bead.x)} ${n(bead.y)})`} onClick={onClick} className={clickable ? "cursor-pointer" : undefined}>
      {active ? <circle r={n(bead.r * 2.15)} fill="var(--color-glow-hot)" opacity="0.32" className="animate-bead-pulse" /> : null}
      <g className={motion}>
        <circle r={n(bead.r + 0.55)} fill="var(--color-bg)" />
        <image
          href={href}
          x={n(-size / 2)}
          y={n(-size / 2)}
          width={n(size)}
          height={n(size)}
          preserveAspectRatio="xMidYMid slice"
          clipPath="url(#round-bead)"
          style={{ filter: glow, opacity: state === "idle" ? 0.92 : 1 }}
        />
        <circle
          r={n(bead.r)}
          fill="none"
          stroke={active ? "var(--color-glow-hot)" : "var(--color-accent)"}
          strokeWidth={active ? "1.15" : "0.55"}
          opacity={active ? 0.95 : 0.55}
        />
      </g>
      {clickable ? <circle r={n(Math.max(14, bead.r + 8))} fill="transparent" /> : null}
    </g>
  );
}

export function RosaryHanging({
  activeBeadId,
  completedBeadIds,
  mysterySet,
  onBeadClick,
  alignTop = false,
  prominent = false,
  className,
}: {
  activeBeadId?: string;
  completedBeadIds?: Set<string>;
  mysterySet: MysterySetId;
  onBeadClick?: (id: string) => void;
  alignTop?: boolean;
  prominent?: boolean;
  className?: string;
}) {
  const done = completedBeadIds ?? new Set<string>();
  const ordered = [...HANGING_BEADS].sort((a, b) => (a.id === activeBeadId ? 1 : b.id === activeBeadId ? -1 : 0));
  void BEAD_BY_ID;

  return (
    <svg
      viewBox="0 0 400 560"
      preserveAspectRatio={alignTop ? "xMidYMin meet" : "xMidYMid meet"}
      className={cx("block h-full w-full select-none", !prominent && "animate-rosary-sway", className)}
      role="img"
      aria-label="Rosary"
      overflow="visible"
    >
      <defs>
        <linearGradient id="chain-metal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--color-chain-light)" />
          <stop offset="45%" stopColor="var(--color-gold)" />
          <stop offset="100%" stopColor="var(--color-chain-dark)" />
        </linearGradient>
        <clipPath id="round-bead" clipPathUnits="objectBoundingBox">
          <circle cx="0.5" cy="0.5" r="0.5" />
        </clipPath>
        <filter id="bead-glow-hot" x="-160%" y="-160%" width="420%" height="420%">
          <feGaussianBlur stdDeviation="5.4" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="1 0 0 0 0.16
                    0 0.86 0 0 0.08
                    0 0 0.4 0 0
                    0 0 0 1 0"
            result="warm"
          />
          <feMerge>
            <feMergeNode in="warm" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="bead-glow-soft" x="-70%" y="-70%" width="240%" height="240%">
          <feGaussianBlur stdDeviation="1.6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g>
        <path d={LOOP_PATH} fill="none" stroke="url(#chain-metal)" strokeWidth="1.35" strokeOpacity="0.8" />
        <path d={TAIL_PATH} fill="none" stroke="url(#chain-metal)" strokeWidth="1.35" strokeOpacity="0.8" />
        {CHAIN_LINKS.map((link, i) => (
          <ellipse
            key={`link-${i}`}
            cx={link.x.toFixed(2)}
            cy={link.y.toFixed(2)}
            rx="2.8"
            ry="1.15"
            transform={`rotate(${link.rot.toFixed(1)} ${link.x.toFixed(2)} ${link.y.toFixed(2)})`}
            fill="none"
            stroke="var(--color-chain-light)"
            strokeWidth="0.65"
            opacity="0.7"
          />
        ))}
        {ordered.map((bead) => {
          const state: BeadState = bead.id === activeBeadId ? "active" : done.has(bead.id) ? "done" : "idle";
          return (
            <BeadMark
              key={bead.id}
              bead={bead}
              state={state}
              mysterySet={mysterySet}
              prominent={prominent}
              onClick={onBeadClick ? () => onBeadClick(bead.id) : undefined}
            />
          );
        })}
      </g>
    </svg>
  );
}
