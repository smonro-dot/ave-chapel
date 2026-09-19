import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { CHURCH_SPOTS } from "@/lib/ave/church";
import { ReadAloud } from "@/components/ave/read-aloud";
import { VoiceToggle } from "@/components/ave/voice-toggle";

export const Route = createFileRoute("/church")({ component: ChurchWalk });

function ChurchWalk() {
  const [id, setId] = useState("tabernacle");
  const [tab, setTab] = useState<"little" | "dad">("little");
  const spot = CHURCH_SPOTS.find((s) => s.id === id) ?? CHURCH_SPOTS[0];

  return (
    <div className="pb-8">
      <div className="px-5 pt-10">
        <Link to="/teach" className="text-xs text-gold">
          Teach
        </Link>
        <h1 className="font-display mt-1 text-4xl text-fg">Inside the church</h1>
        <p className="mt-2 text-sm text-muted">Tap a gold mark. Whisper the little line. Keep the rest for you.</p>
      </div>

      <div className="relative mx-5 mt-5 overflow-hidden rounded-3xl">
        <img src="/images/church.jpg" alt="Nave of a church" className="h-80 w-full object-cover" />
        {CHURCH_SPOTS.map((s) => {
          const on = s.id === id;
          return (
            <button
              key={s.id}
              type="button"
              aria-label={s.label}
              onClick={() => setId(s.id)}
              className={`absolute size-11 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 ${
                on ? "border-gold bg-gold" : "border-gold/80 bg-gold/35"
              }`}
              style={{ left: `${s.x}%`, top: `${s.y}%` }}
            >
              <span className="sr-only">{s.label}</span>
            </button>
          );
        })}
      </div>

      <div className="px-5 pt-5">
        {spot.image && (
          <img src={spot.image} alt="" className="mb-4 h-36 w-full rounded-2xl object-cover" />
        )}
        <p className="text-[11px] tracking-[0.18em] text-gold uppercase">This place</p>
        <h2 className="font-display mt-1 text-3xl text-fg">{spot.label}</h2>
        <div className="mt-3">
          <VoiceToggle tab={tab} onChange={setTab} />
        </div>
        {tab === "little" ? (
          <div className="mt-4 space-y-3">
            <p className="text-lg leading-relaxed text-accent">{spot.kid}</p>
            <ReadAloud text={spot.kid} label="Read to him" />
          </div>
        ) : (
          <p className="mt-4 text-sm leading-relaxed text-accent">{spot.why}</p>
        )}
        <div className="mt-5 rounded-2xl border border-border bg-surface p-4">
          <p className="text-[11px] tracking-[0.16em] text-gold uppercase">Do this</p>
          <p className="mt-2 text-sm text-fg">{spot.doThis}</p>
        </div>
        <ul className="mt-5 flex flex-wrap gap-2">
          {CHURCH_SPOTS.map((s) => (
            <li key={s.id}>
              <button
                type="button"
                onClick={() => setId(s.id)}
                className={`rounded-full px-3 py-1.5 text-xs ${
                  s.id === id ? "bg-gold text-accent-fg" : "bg-surface text-muted"
                }`}
              >
                {s.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
