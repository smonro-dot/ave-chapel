import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PrayComplete, PraySession } from "@/components/ave/pray-session";
import { PrayHome } from "@/components/ave/pray-home";
import { pauseClip, stopPreview } from "@/lib/ave/rosary-audio";
import { usePrayerStore } from "@/stores/prayer-store";

export const Route = createFileRoute("/pray")({ component: Pray });

function Pray() {
  const screen = usePrayerStore((s) => s.screen);

  useEffect(() => {
    void usePrayerStore.persist.rehydrate();
    return () => {
      pauseClip();
      stopPreview();
    };
  }, []);

  return (
    <div className="relative min-h-dvh overflow-x-hidden bg-bg text-fg">
      <div className="pointer-events-none fixed inset-0">
        <img src="/images/chapel.jpg" alt="" className="h-full w-full object-cover opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/75 via-bg/45 to-bg" />
      </div>
      <div className="relative">
        {screen === "home" ? <PrayHome /> : null}
        {screen === "pray" ? (
          <div className="fixed inset-0 z-40">
            <PraySession />
          </div>
        ) : null}
        {screen === "complete" ? (
          <div className="fixed inset-0 z-40 bg-bg">
            <PrayComplete />
          </div>
        ) : null}
      </div>
    </div>
  );
}
