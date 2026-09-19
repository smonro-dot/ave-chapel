import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { useState } from "react";
import { relatedSaints, saintBySlug, saintImage } from "@/lib/ave/saints";
import { formatFeast } from "@/lib/ave/calendar";
import { ReadAloud } from "@/components/ave/read-aloud";
import { VoiceToggle } from "@/components/ave/voice-toggle";
import { useAveStore } from "@/stores/ave-store";

export const Route = createFileRoute("/saints/$slug")({ component: SaintPage });

function SaintPage() {
  const { slug } = Route.useParams();
  const saint = saintBySlug(slug);
  const [tab, setTab] = useState<"little" | "dad">("little");
  const [dadPart, setDadPart] = useState<"life" | "stories" | "miracles" | "path">("life");
  const fav = useAveStore((s) => s.favoriteSaints);
  const toggle = useAveStore((s) => s.toggleFavorite);

  if (!saint) {
    return (
      <div className="p-8">
        <p className="text-accent">That name is not in the book yet.</p>
        <Link to="/saints" className="mt-3 inline-block text-gold">
          Back to the saints
        </Link>
      </div>
    );
  }

  const related = relatedSaints(saint);
  const kept = fav.includes(saint.slug);

  return (
    <div>
      <div className="relative h-72">
        <img src={saintImage(saint)} alt="" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent" />
        <Link to="/saints" className="absolute left-4 top-4 rounded-full bg-bg/70 px-3 py-1.5 text-xs text-accent">
          Book
        </Link>
        <button
          type="button"
          onClick={() => toggle(saint.slug)}
          className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full bg-bg/70"
          aria-label={kept ? "Remove from kept close" : "Keep close"}
        >
          <Heart className={`size-4 ${kept ? "fill-gold text-gold" : "text-accent"}`} />
        </button>
      </div>
      <div className="px-5 pb-10">
        <p className="text-[11px] tracking-[0.18em] text-gold uppercase">{formatFeast(saint.feast)}</p>
        <h1 className="font-display mt-1 text-4xl text-fg">{saint.name}</h1>
        <p className="mt-1 text-sm text-muted">{saint.title}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {saint.patronages.slice(0, 6).map((p) => (
            <Link
              key={p}
              to="/saints"
              className="rounded-full border border-border px-2.5 py-1 text-[10px] text-rose"
            >
              {p}
            </Link>
          ))}
        </div>

        <div className="mt-5">
          <VoiceToggle tab={tab} onChange={setTab} />
        </div>

        {tab === "little" ? (
          <div className="mt-5 space-y-4">
            <p className="text-lg leading-relaxed text-accent">{saint.kidLine}</p>
            {saint.stories[0] && (
              <p className="text-base leading-relaxed text-accent">
                {saint.stories[0].title}: {shorten(saint.stories[0].text)}
              </p>
            )}
            <ReadAloud text={`${saint.kidLine} ${saint.stories[0]?.text ?? ""}`} label="Read to him" />
            <div className="rounded-2xl border border-border bg-surface p-4">
              <p className="text-[11px] tracking-[0.16em] text-gold uppercase">A little prayer</p>
              <p className="mt-2 text-sm leading-relaxed text-fg">{saint.prayer}</p>
            </div>
          </div>
        ) : (
          <div className="mt-5">
            <div className="flex gap-1 overflow-x-auto pb-1">
              {(
                [
                  ["life", "Life"],
                  ["stories", "Stories"],
                  ["miracles", "Miracles"],
                  ["path", "How named"],
                ] as const
              ).map(([id, label]) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => setDadPart(id)}
                  className={`shrink-0 rounded-full px-3 py-1.5 text-xs ${
                    dadPart === id ? "bg-gold text-accent-fg" : "bg-surface text-muted"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            {dadPart === "life" && (
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-accent">
                <p>{saint.summary}</p>
                <p>{saint.life}</p>
                <p className="text-xs text-muted">
                  {saint.born} — {saint.died}
                </p>
              </div>
            )}
            {dadPart === "stories" && (
              <ul className="mt-4 space-y-4">
                {saint.stories.map((st) => (
                  <li key={st.title} className="rounded-2xl bg-surface p-4">
                    <p className="text-[11px] tracking-[0.16em] text-gold uppercase">{st.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-accent">{st.text}</p>
                  </li>
                ))}
              </ul>
            )}
            {dadPart === "miracles" && (
              <ul className="mt-4 space-y-4">
                {saint.miracles.map((st) => (
                  <li key={st.title} className="rounded-2xl bg-surface p-4">
                    <p className="text-[11px] tracking-[0.16em] text-gold uppercase">{st.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-accent">{st.text}</p>
                  </li>
                ))}
              </ul>
            )}
            {dadPart === "path" && (
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-accent">
                <p>{saint.pathToSainthood}</p>
                <p className="text-xs text-muted">Canonized / cultus: {saint.canonized}</p>
                <div className="rounded-2xl border border-border p-4">
                  <p className="text-[11px] tracking-[0.16em] text-gold uppercase">Ask with him</p>
                  <p className="mt-2 text-fg">{saint.prayer}</p>
                </div>
              </div>
            )}
          </div>
        )}

        {related.length > 0 && (
          <section className="mt-8">
            <p className="text-[11px] tracking-[0.16em] text-gold uppercase">Nearby in the book</p>
            <ul className="mt-2 space-y-2">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link to="/saints/$slug" params={{ slug: r.slug }} className="block text-sm text-accent">
                    {r.shortName} — {r.patronages[0]}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
}

function shorten(text: string) {
  const cut = text.split(". ").slice(0, 2).join(". ");
  return cut.endsWith(".") ? cut : `${cut}.`;
}
