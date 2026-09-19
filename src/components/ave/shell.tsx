import { Link, useRouterState } from "@tanstack/react-router";
import { BookOpen, Church, Home, Sparkles, BookHeart } from "lucide-react";
import { usePrayerStore } from "@/stores/prayer-store";

const TABS = [
  { to: "/", label: "Today", icon: Home },
  { to: "/pray", label: "Pray", icon: Sparkles },
  { to: "/stories", label: "Stories", icon: BookOpen },
  { to: "/saints", label: "Saints", icon: BookHeart },
  { to: "/teach", label: "Teach", icon: Church },
] as const;

export function Shell({ children }: { children: React.ReactNode }) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const prayerScreen = usePrayerStore((s) => s.screen);
  const praying = path.startsWith("/pray") && prayerScreen !== "home";

  return (
    <div className="mx-auto flex min-h-dvh max-w-lg flex-col bg-bg">
      <main className={praying ? "flex-1" : "flex-1 pb-24"}>{children}</main>
      {praying ? null : (
        <nav className="fixed inset-x-0 bottom-0 z-20 mx-auto max-w-lg border-t border-border bg-bg/90 backdrop-blur-md">
          <ul className="grid grid-cols-5 px-1 py-2">
            {TABS.map((t) => {
              const on = t.to === "/" ? path === "/" : path.startsWith(t.to);
              const Icon = t.icon;
              return (
                <li key={t.to}>
                  <Link
                    to={t.to}
                    className={`flex flex-col items-center gap-1 rounded-xl px-1 py-1 text-[11px] ${
                      on ? "text-accent" : "text-muted"
                    }`}
                  >
                    <Icon className="size-5" strokeWidth={on ? 2.2 : 1.7} />
                    {t.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </div>
  );
}
