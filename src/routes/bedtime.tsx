import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { BEDTIME_STEPS } from "@/lib/ave/bedtime";
import { ReadAloud } from "@/components/ave/read-aloud";

export const Route = createFileRoute("/bedtime")({ component: Bedtime });

function Bedtime() {
  const [step, setStep] = useState(0);
  const current = BEDTIME_STEPS[step];
  const last = step === BEDTIME_STEPS.length - 1;
  const image = current.image ?? "/images/night.jpg";

  return (
    <div>
      <div className="relative h-72">
        <img src={image} alt="" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-bg/20" />
        <div className="absolute bottom-5 left-5 right-5">
          <p className="text-[11px] tracking-[0.18em] text-gold uppercase">
            {step + 1} of {BEDTIME_STEPS.length}
          </p>
          <h1 className="font-display mt-1 text-4xl text-fg">{current.title}</h1>
        </div>
      </div>
      <div className="px-5 pb-10">
        <div className="mt-2 flex gap-1">
          {BEDTIME_STEPS.map((s, i) => (
            <button
              key={s.id}
              type="button"
              aria-label={s.title}
              onClick={() => setStep(i)}
              className={`h-1.5 flex-1 rounded-full ${i <= step ? "bg-gold" : "bg-border"}`}
            />
          ))}
        </div>
        <p className="mt-6 text-lg leading-relaxed text-accent">{current.kid}</p>
        <div className="mt-5 rounded-3xl border border-border bg-surface p-5">
          <p className="text-[11px] tracking-[0.16em] text-gold uppercase">Pray</p>
          <p className="mt-2 text-sm leading-relaxed text-fg">{current.prayer}</p>
          <div className="mt-4">
            <ReadAloud text={current.prayer} clip={`/audio/stories/bedtime-${current.id}.mp3`} />
          </div>
        </div>
        <div className="mt-6 flex gap-3">
          {step > 0 && (
            <button
              type="button"
              onClick={() => setStep((s) => s - 1)}
              className="flex-1 rounded-full border border-border py-3 text-sm text-accent"
            >
              Back
            </button>
          )}
          {last ? (
            <Link
              to="/"
              className="flex flex-1 items-center justify-center rounded-full bg-gold py-3 text-sm font-semibold text-accent-fg"
            >
              Amen
            </Link>
          ) : (
            <button
              type="button"
              onClick={() => setStep((s) => s + 1)}
              className="flex-1 rounded-full bg-gold py-3 text-sm font-semibold text-accent-fg"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
