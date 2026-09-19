import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { PlanTrack } from "@/lib/ave/types";

const ALL_TRACKS: PlanTrack[] = ["gospel", "decade", "saints", "why", "mass", "bedtime"];

type AveState = {
  tracks: PlanTrack[];
  heardStories: string[];
  favoriteSaints: string[];
  beadId: string;
  kidsDecade: boolean;
  markStory: (id: string) => void;
  toggleFavorite: (slug: string) => void;
  setBead: (id: string) => void;
  setKidsDecade: (v: boolean) => void;
};

export const useAveStore = create<AveState>()(
  persist(
    (set, get) => ({
      tracks: ALL_TRACKS,
      heardStories: [],
      favoriteSaints: [],
      beadId: "crucifix",
      kidsDecade: true,
      markStory: (id) => {
        const heard = get().heardStories;
        if (heard.includes(id)) return;
        set({ heardStories: [...heard, id] });
      },
      toggleFavorite: (slug) => {
        const fav = get().favoriteSaints;
        set({
          favoriteSaints: fav.includes(slug) ? fav.filter((s) => s !== slug) : [...fav, slug],
        });
      },
      setBead: (id) => set({ beadId: id }),
      setKidsDecade: (v) => set({ kidsDecade: v }),
    }),
    { name: "ave-family" },
  ),
);

export { ALL_TRACKS };
