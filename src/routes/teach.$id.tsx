import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { whyById } from "@/lib/ave/whys";
import { ReadAloud } from "@/components/ave/read-aloud";
import { VoiceToggle } from "@/components/ave/voice-toggle";

export const Route = createFileRoute("/teach/$id")({ component: WhyPage });

function WhyPage() {
  const { id } = Route.useParams();
  const page = whyById(id);
  const [tab, setTab] = useState<"little" | "dad">("little");

  if (!page) {
    return (
      <div className="p-8">
        <p>That page isn’t here.</p>
        <Link to="/teach" className="text-gold">
          Back
        </Link>
      </div>
    );
  }

  return (
    <div>
      {page.image && (
        <div className="relative h-56">
          <img src={page.image} alt="" className="absolute inset-0 size-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg" />
        </div>
      )}
      <div className={`px-5 pb-10 ${page.image ? "" : "pt-10"}`}>
        <Link to="/teach" className="text-xs text-gold">
          Teach
        </Link>
        <p className="mt-3 text-[11px] tracking-[0.18em] text-gold uppercase">{page.title}</p>
        <h1 className="font-display mt-1 text-4xl text-fg">{page.kidTitle}</h1>
        <div className="mt-4">
          <VoiceToggle tab={tab} onChange={setTab} />
        </div>
        {tab === "little" ? (
          <div className="mt-5 space-y-4">
            <p className="text-lg leading-relaxed text-accent">{page.kid}</p>
            <ReadAloud text={page.kid} label="Read to him" />
          </div>
        ) : (
          <ul className="mt-5 space-y-4">
            {page.forYou.map((p) => (
              <li key={p} className="text-sm leading-relaxed text-accent">
                {p}
              </li>
            ))}
          </ul>
        )}
        <div className="mt-8 rounded-3xl border border-border bg-surface p-5">
          <p className="text-[11px] tracking-[0.16em] text-gold uppercase">Try tonight</p>
          <p className="mt-2 text-sm leading-relaxed text-fg">{page.tryTonight}</p>
        </div>
      </div>
    </div>
  );
}
