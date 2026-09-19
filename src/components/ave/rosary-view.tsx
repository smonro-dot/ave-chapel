import { BEADS, loopChainPath, tailChainPath, type RosaryBead } from "@/lib/ave/rosary";
import { useAveStore } from "@/stores/ave-store";

type BeadState = "idle" | "active" | "done";

function order() {
  const tail = ["crucifix", "tail-of", "tail-hm-3", "tail-hm-2", "tail-hm-1", "tail-glory", "medal"];
  const rest = BEADS.filter((b) => !tail.includes(b.id)).map((b) => b.id);
  return [...tail, ...rest];
}

const ORDER = order();

export function RosaryView({ mystery }: { mystery: number }) {
  const beadId = useAveStore((s) => s.beadId);
  const setBead = useAveStore((s) => s.setBead);
  const idx = ORDER.indexOf(beadId);

  function state(b: RosaryBead): BeadState {
    const i = ORDER.indexOf(b.id);
    if (b.id === beadId) return "active";
    if (i >= 0 && i < idx) return "done";
    return "idle";
  }

  return (
    <svg viewBox="0 40 320 430" className="mx-auto w-full max-w-sm">
      <defs>
        <radialGradient id="pearl" cx="32%" cy="28%">
          <stop offset="0%" stopColor="#f7f1e6" />
          <stop offset="70%" stopColor="#e8dcc4" />
          <stop offset="100%" stopColor="#b9a88a" />
        </radialGradient>
        <radialGradient id="gold" cx="32%" cy="28%">
          <stop offset="0%" stopColor="#ead9a8" />
          <stop offset="100%" stopColor="#c4a574" />
        </radialGradient>
        <radialGradient id="lit" cx="34%" cy="30%">
          <stop offset="0%" stopColor="#fff6e4" />
          <stop offset="100%" stopColor="#e8dcc4" />
        </radialGradient>
      </defs>
      <path d={loopChainPath()} fill="none" stroke="#3a342c" strokeWidth="1.4" />
      <path d={tailChainPath()} fill="none" stroke="#3a342c" strokeWidth="1.4" />
      {BEADS.map((b) => {
        const st = state(b);
        const fill = st === "active" ? "url(#lit)" : b.kind === "large" ? "url(#gold)" : "url(#pearl)";
        const r = b.kind === "large" ? 7.5 : b.kind === "small" ? 5 : 8;
        const cls = st === "active" ? "animate-bead-pulse" : "";
        if (b.kind === "crucifix") {
          return (
            <g
              key={b.id}
              className={cls}
              onClick={() => setBead(b.id)}
              style={{ cursor: "pointer" }}
            >
              <rect x={b.x - 6} y={b.y - 22} width="12" height="36" rx="1.5" fill="#e8dcc4" />
              <rect x={b.x - 12} y={b.y - 12} width="24" height="8" rx="1.5" fill="#e8dcc4" />
            </g>
          );
        }
        if (b.kind === "medal") {
          return (
            <ellipse
              key={b.id}
              cx={b.x}
              cy={b.y}
              rx="11"
              ry="14"
              fill="#c4a574"
              stroke="#e8dcc4"
              strokeWidth="1.2"
              className={cls}
              onClick={() => setBead(b.id)}
              style={{ cursor: "pointer" }}
            />
          );
        }
        const dim = b.mystery && b.mystery !== mystery && st === "idle" ? 0.45 : 1;
        return (
          <circle
            key={b.id}
            cx={b.x}
            cy={b.y}
            r={r}
            fill={fill}
            opacity={dim}
            className={cls}
            onClick={() => setBead(b.id)}
            style={{ cursor: "pointer" }}
          />
        );
      })}
    </svg>
  );
}
