import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { loadSundayMass, MASS_POSTURES, type MassPrep } from "@/lib/ave/mass";
import { ReadAloud } from "@/components/ave/read-aloud";
import { VoiceToggle } from "@/components/ave/voice-toggle";

export const Route = createFileRoute("/mass")({ component: MassPrepPage });

function MassPrepPage() {
  const [prep, setPrep] = useState<MassPrep | null>(null);
  const [tab, setTab] = useState<"little" | "dad">("little");

  useEffect(() => {
    let live = true;
    loadSundayMass().then((m) => {
      if (live) setPrep(m);
    });
    return () => {
      live = false;
    };
  }, []);

  return (
    <div className="px-5 pt-10 pb-10">
      <Link to="/" className="text-xs text-gold">
        Today
      </Link>
      <p className="mt-3 text-[11px] tracking-[0.18em] text-gold uppercase">Sunday</p>
      <h1 className="font-display mt-1 text-4xl text-fg">Mass together</h1>
      {!prep ? (
        <p className="mt-6 text-sm text-muted">Fetching this Sunday’s readings…</p>
      ) : (
        <>
          <p className="mt-2 text-sm text-muted">
            {prep.dateLabel}
            {prep.season ? ` · ${prep.season}` : ""}
          </p>
          <h2 className="font-display mt-5 text-2xl text-fg">{prep.gospelTitle}</h2>
          <p className="mt-1 text-xs text-gold">{prep.gospel}</p>
          <div className="mt-4">
            <VoiceToggle tab={tab} onChange={setTab} />
          </div>
          {tab === "little" ? (
            <div className="mt-5 space-y-3">
              {prep.kidGospel.map((line) => (
                <p key={line} className="text-lg leading-relaxed text-accent">
                  {line}
                </p>
              ))}
              <ReadAloud text={prep.kidGospel.join(" ")} label="Read to him" />
            </div>
          ) : (
            <div className="mt-5 space-y-3 text-sm leading-relaxed text-accent">
              <p>
                First reading: {prep.firstReading}. Psalm: {prep.psalm}.
                {prep.secondReading ? ` Second: ${prep.secondReading}.` : ""} Gospel: {prep.gospel}.
              </p>
              <p>
                A two-year-old will not follow the lectionary. He can learn the postures, one word from the
                Gospel, and that this hour is not optional entertainment.
              </p>
            </div>
          )}

          <div className="mt-6 rounded-3xl border border-border bg-surface p-5">
            <p className="text-[11px] tracking-[0.16em] text-gold uppercase">Watch for</p>
            <p className="mt-2 text-sm leading-relaxed text-fg">{prep.watchFor}</p>
          </div>

          <h3 className="font-display mt-8 text-2xl text-fg">What our bodies do</h3>
          <ol className="mt-3 space-y-2">
            {MASS_POSTURES.map((p) => (
              <li key={p.when} className="rounded-2xl bg-surface-2 px-4 py-3">
                <p className="text-[11px] tracking-[0.14em] text-gold uppercase">{p.when}</p>
                <p className="mt-1 text-sm text-accent">{p.do}</p>
              </li>
            ))}
          </ol>

          <div className="mt-6 rounded-3xl bg-surface p-5">
            <p className="text-[11px] tracking-[0.16em] text-gold uppercase">After donuts</p>
            <p className="mt-2 text-sm leading-relaxed text-fg">{prep.afterDonuts}</p>
          </div>
        </>
      )}
    </div>
  );
}
