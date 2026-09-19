import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { STORIES } from "@/lib/ave/stories";
import { useAveStore } from "@/stores/ave-store";

export const Route = createFileRoute("/stories")({ component: Stories });

function Stories() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const heard = useAveStore((s) => s.heardStories);
  if (path !== "/stories") return <Outlet />;

  return (
    <div className="px-5 pt-10">
      <p className="text-[11px] tracking-[0.18em] text-gold uppercase">For little ears</p>
      <h1 className="font-display mt-1 text-4xl text-fg">Stories</h1>
      <p className="mt-2 max-w-sm text-sm text-muted">
        Sixty seconds, a picture, then a card for you. Joyful Mysteries first — they are the right size for two.
      </p>
      <ul className="mt-6 space-y-4">
        {STORIES.map((s) => (
          <li key={s.id}>
            <Link to="/stories/$id" params={{ id: s.id }} className="flex gap-4 overflow-hidden rounded-3xl bg-surface">
              <img src={s.image} alt="" className="h-28 w-24 shrink-0 object-cover" />
              <div className="py-3 pr-4">
                <p className="text-[10px] tracking-[0.16em] text-gold uppercase">{s.kind}</p>
                <h2 className="font-display text-xl text-fg">{s.kidTitle}</h2>
                <p className="mt-1 line-clamp-2 text-xs text-muted">{s.kid[0]}</p>
                {heard.includes(s.id) && <p className="mt-2 text-[10px] text-gold">Heard</p>}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
