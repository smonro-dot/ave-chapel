import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { Search, Heart } from "lucide-react";
import { useMemo, useState } from "react";
import {
  PATRONAGE_CHIPS,
  SAINTS,
  TOPIC_CHIPS,
  saintImage,
  searchSaints,
} from "@/lib/ave/saints";
import { formatFeast } from "@/lib/ave/calendar";
import { useAveStore } from "@/stores/ave-store";

export const Route = createFileRoute("/saints")({ component: SaintsBook });

function SaintsBook() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const [q, setQ] = useState("");
  const [patron, setPatron] = useState<string | null>(null);
  const [topic, setTopic] = useState<string | null>(null);
  const fav = useAveStore((s) => s.favoriteSaints);

  const list = useMemo(() => {
    let rows = q.trim() ? searchSaints(q) : SAINTS;
    if (patron) {
      const n = patron.toLowerCase();
      rows = rows.filter((s) => s.patronages.some((x) => x.toLowerCase().includes(n)));
    }
    if (topic) {
      const n = topic.toLowerCase();
      rows = rows.filter((s) => s.topics.some((x) => x.toLowerCase().includes(n)));
    }
    return rows;
  }, [q, patron, topic]);

  if (path !== "/saints") return <Outlet />;

  const favorites = SAINTS.filter((s) => fav.includes(s.slug));

  return (
    <div className="px-5 pt-10 pb-6">
      <p className="text-[11px] tracking-[0.18em] text-gold uppercase">The book</p>
      <h1 className="font-display mt-1 text-4xl text-fg">Saints</h1>
      <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
        Search by name, what they watch over, or a topic. Read the little line to him; open the life, the
        stories, the miracles, and how the Church named them when you want the rest.
      </p>
      <p className="mt-2 text-xs text-gold">{SAINTS.length} lives in the book</p>

      <label className="mt-5 flex items-center gap-2 rounded-2xl border border-border bg-surface px-3 py-3">
        <Search className="size-4 shrink-0 text-gold" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="lost keys, cancer, Ireland, Thérèse…"
          className="w-full bg-transparent text-sm text-fg outline-none placeholder:text-muted"
          type="search"
          autoCapitalize="off"
        />
      </label>

      <p className="mt-5 text-[11px] tracking-[0.16em] text-gold uppercase">Patron of</p>
      <ChipRow
        items={[...PATRONAGE_CHIPS]}
        active={patron}
        onPick={(v) => {
          setPatron(v === patron ? null : v);
        }}
      />

      <p className="mt-4 text-[11px] tracking-[0.16em] text-gold uppercase">Topic</p>
      <ChipRow
        items={[...TOPIC_CHIPS]}
        active={topic}
        onPick={(v) => {
          setTopic(v === topic ? null : v);
        }}
      />

      {favorites.length > 0 && !q && !patron && !topic && (
        <section className="mt-6">
          <p className="text-[11px] tracking-[0.16em] text-gold uppercase">Kept close</p>
          <ul className="mt-2 flex gap-2 overflow-x-auto pb-1">
            {favorites.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/saints/$slug"
                  params={{ slug: s.slug }}
                  className="flex w-36 flex-col overflow-hidden rounded-2xl bg-surface"
                >
                  <img src={saintImage(s)} alt="" className="h-20 w-full object-cover" />
                  <span className="px-3 py-2 font-display text-sm text-fg">{s.shortName}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <p className="mt-6 text-xs text-muted">
        {list.length} {list.length === 1 ? "saint" : "saints"}
        {patron ? ` · ${patron}` : ""}
        {topic ? ` · ${topic}` : ""}
      </p>
      <ul className="mt-3 space-y-3">
        {list.map((s) => (
          <li key={s.slug}>
            <Link
              to="/saints/$slug"
              params={{ slug: s.slug }}
              className="flex gap-4 overflow-hidden rounded-3xl bg-surface"
            >
              <img src={saintImage(s)} alt="" className="h-28 w-24 shrink-0 object-cover" />
              <div className="py-3 pr-4">
                <div className="flex items-center gap-2">
                  <h2 className="font-display text-xl text-fg">{s.shortName}</h2>
                  {fav.includes(s.slug) && <Heart className="size-3 fill-gold text-gold" />}
                </div>
                <p className="text-[10px] text-gold">{formatFeast(s.feast)}</p>
                <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted">{s.kidLine}</p>
                <p className="mt-2 line-clamp-1 text-[10px] text-rose">{s.patronages.slice(0, 3).join(" · ")}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      {list.length === 0 && (
        <p className="mt-8 text-sm text-muted">No one by that search. Try a patronage chip, or a first name.</p>
      )}
    </div>
  );
}

function ChipRow({
  items,
  active,
  onPick,
}: {
  items: string[];
  active: string | null;
  onPick: (v: string) => void;
}) {
  return (
    <div className="mt-2 flex gap-2 overflow-x-auto pb-1">
      {items.map((item) => {
        const on = item === active;
        return (
          <button
            key={item}
            type="button"
            onClick={() => onPick(item)}
            className={`shrink-0 rounded-full px-3 py-1.5 text-xs ${
              on ? "bg-gold text-accent-fg" : "border border-border bg-surface text-accent"
            }`}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}
