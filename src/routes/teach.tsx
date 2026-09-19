import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { WHYS } from "@/lib/ave/whys";
import { BookOpen, Church, Moon } from "lucide-react";

export const Route = createFileRoute("/teach")({ component: Teach });

function Teach() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  if (path !== "/teach") return <Outlet />;

  return (
    <div className="px-5 pt-10 pb-8">
      <p className="text-[11px] tracking-[0.18em] text-gold uppercase">Pass it on</p>
      <h1 className="font-display mt-1 text-4xl text-fg">Teach</h1>
      <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
        Why we kneel, why the lamp, why Mary. Short enough for a toddler’s ear; true enough for you.
      </p>

      <div className="mt-6 grid grid-cols-3 gap-2">
        <Link to="/church" className="rounded-2xl bg-surface-2 p-3 text-center">
          <Church className="mx-auto size-5 text-gold" />
          <p className="mt-2 text-[11px] text-accent">Church</p>
        </Link>
        <Link to="/mass" className="rounded-2xl bg-surface-2 p-3 text-center">
          <BookOpen className="mx-auto size-5 text-gold" />
          <p className="mt-2 text-[11px] text-accent">Sunday</p>
        </Link>
        <Link to="/bedtime" className="rounded-2xl bg-surface-2 p-3 text-center">
          <Moon className="mx-auto size-5 text-gold" />
          <p className="mt-2 text-[11px] text-accent">Bedtime</p>
        </Link>
      </div>

      <ul className="mt-6 space-y-3">
        {WHYS.map((w) => (
          <li key={w.id}>
            <Link
              to="/teach/$id"
              params={{ id: w.id }}
              className="block overflow-hidden rounded-3xl bg-surface"
            >
              {w.image && <img src={w.image} alt="" className="h-28 w-full object-cover" />}
              <div className="p-4">
                <p className="text-[10px] tracking-[0.16em] text-gold uppercase">Why we…</p>
                <h2 className="font-display text-2xl text-fg">{w.kidTitle}</h2>
                <p className="mt-1 text-sm leading-relaxed text-muted">{w.kid}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
