export type Feast = { month: number; day: number };

export type SaintStory = { title: string; text: string };

export type Saint = {
  slug: string;
  name: string;
  shortName: string;
  title: string;
  feast: Feast;
  born: string;
  died: string;
  canonized: string;
  symbols: string[];
  patronages: string[];
  topics: string[];
  kidLine: string;
  summary: string;
  life: string;
  stories: SaintStory[];
  miracles: SaintStory[];
  pathToSainthood: string;
  prayer: string;
  image?: string;
};

export type StoryKind = "mystery" | "gospel" | "saint";

export type Story = {
  id: string;
  title: string;
  kidTitle: string;
  kind: StoryKind;
  image: string;
  video?: string;
  duration: string;
  scripture?: string;
  kid: string[];
  dad: { happened: string; why: string; ask: string };
  saintSlug?: string;
};

export type WhyPage = {
  id: string;
  title: string;
  kidTitle: string;
  image?: string;
  kid: string;
  forYou: string[];
  tryTonight: string;
};

export type ChurchSpot = {
  id: string;
  label: string;
  kid: string;
  why: string;
  doThis: string;
  x: number;
  y: number;
  image?: string;
};

export type PlanTrack =
  | "gospel"
  | "decade"
  | "saints"
  | "why"
  | "mass"
  | "bedtime";
