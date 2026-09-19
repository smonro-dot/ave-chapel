export type MassPrep = {
  dateLabel: string;
  season: string;
  firstReading: string;
  psalm: string;
  secondReading?: string;
  gospel: string;
  gospelTitle: string;
  kidGospel: string[];
  watchFor: string;
  afterDonuts: string;
};

const FALLBACK: MassPrep = {
  dateLabel: "This Sunday",
  season: "Ordinary Time",
  firstReading: "Isaiah 55:6–9",
  psalm: "Psalm 145",
  secondReading: "Philippians 1:20–24, 27",
  gospel: "Matthew 20:1–16",
  gospelTitle: "The workers in the vineyard",
  kidGospel: [
    "A man hired workers for his vineyard. Some came early. Some came late.",
    "At the end he paid them all the same.",
    "God is generous. He does not love us because we clocked in first.",
  ],
  watchFor: "When the priest says “The Lord be with you,” answer “And with your spirit.”",
  afterDonuts: "Was anyone in the story treated more kindly than they “earned”? Who is God like in that story?",
};

const KID_GOSPELS: Record<string, Pick<MassPrep, "gospelTitle" | "kidGospel" | "watchFor" | "afterDonuts">> = {
  "matthew 20": {
    gospelTitle: "The workers in the vineyard",
    kidGospel: [
      "A man hired workers. Some came early, some late. He paid them all the same.",
      "The early workers grumbled. The man said: I am not cheating you. I am being kind.",
      "God’s love is not a prize for being first in line.",
    ],
    watchFor: "Listen for “the last will be first.” Fold your hands when the Gospel book is raised.",
    afterDonuts: "When is it hard to be happy that God is generous to someone else?",
  },
  "luke 15": {
    gospelTitle: "The lost sheep (or the lost son)",
    kidGospel: [
      "Someone was lost. The father — or the shepherd — went looking.",
      "When they were found, there was a party.",
      "God looks for us. Heaven is happy when we come home.",
    ],
    watchFor: "A story about being lost and found. Watch the priest’s hands at the consecration — Jesus is found among us.",
    afterDonuts: "Who looks for you when you hide? Who looks for people who feel far from God?",
  },
  "luke 16": {
    gospelTitle: "The rich man and Lazarus",
    kidGospel: [
      "A rich man had many things. A poor man named Lazarus sat at the gate.",
      "When they died, Lazarus was held close. The rich man was far away.",
      "Jesus wants us to notice people who need us now.",
    ],
    watchFor: "Listen for a name: Lazarus. After church we will talk about noticing.",
    afterDonuts: "Who sits at a gate that we walk past?",
  },
  "matthew 16": {
    gospelTitle: "Peter the rock",
    kidGospel: [
      "Jesus asked, “Who do you say that I am?”",
      "Peter said, “You are the Christ.”",
      "Jesus made Peter the first pope, a rock for the Church.",
    ],
    watchFor: "When we say the Creed, we answer Jesus’ question too.",
    afterDonuts: "Who is Jesus? What words would you use?",
  },
  "john 6": {
    gospelTitle: "The bread of life",
    kidGospel: [
      "Jesus said, “I am the bread of life.”",
      "He wants to feed us with Himself.",
      "That is why we are quiet at Communion.",
    ],
    watchFor: "The Host. Whisper: “Jesus, I love you.”",
    afterDonuts: "Why is this bread different from the donut?",
  },
  "luke 1": {
    gospelTitle: "Mary says yes",
    kidGospel: [
      "An angel asked Mary to be Jesus’ mother.",
      "Mary said yes.",
      "God waited for her yes. He waits for ours too.",
    ],
    watchFor: "A Hail Mary in the prayers of the faithful, or a statue of Mary.",
    afterDonuts: "When is it hard to say yes?",
  },
};

export async function loadSundayMass(): Promise<MassPrep> {
  const d = nextSunday();
  const y = d.getFullYear();
  const md = `${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  try {
    const res = await fetch(
      `https://cpbjr.github.io/catholic-readings-api/readings/${y}/${md}.json`,
    );
    if (!res.ok) return { ...FALLBACK, dateLabel: label(d) };
    const json = (await res.json()) as {
      season?: string;
      readings?: { firstReading?: string; psalm?: string; secondReading?: string; gospel?: string };
    };
    const g = json.readings?.gospel ?? FALLBACK.gospel;
    const extra = matchKid(g);
    return {
      dateLabel: label(d),
      season: json.season ?? FALLBACK.season,
      firstReading: json.readings?.firstReading ?? FALLBACK.firstReading,
      psalm: json.readings?.psalm ?? FALLBACK.psalm,
      secondReading: json.readings?.secondReading,
      gospel: g,
      ...extra,
    };
  } catch {
    return { ...FALLBACK, dateLabel: label(d) };
  }
}

function matchKid(gospel: string): Pick<MassPrep, "gospelTitle" | "kidGospel" | "watchFor" | "afterDonuts"> {
  const n = gospel.toLowerCase();
  for (const [k, v] of Object.entries(KID_GOSPELS)) {
    if (n.includes(k)) return v;
  }
  return {
    gospelTitle: "This Sunday’s Gospel",
    kidGospel: [
      "We will hear a story Jesus told, or something He did.",
      "Listen for one word you know: love, Father, bread, sheep, yes.",
      "After church we will talk about it over something sweet.",
    ],
    watchFor: "When everyone stands for the Gospel, we stand too. The book is Jesus speaking.",
    afterDonuts: "What one picture from Mass do you remember — a color, a sound, a word?",
  };
}

function nextSunday(from = new Date()) {
  const d = new Date(from);
  const day = d.getDay();
  const add = day === 0 ? 0 : 7 - day;
  d.setDate(d.getDate() + add);
  return d;
}

function label(d: Date) {
  return d.toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric" });
}

export const MASS_POSTURES = [
  { when: "Enter", do: "Find the red lamp. Genuflect on the right knee toward the tabernacle." },
  { when: "Opening", do: "Stand. Sign of the Cross. “And with your spirit.”" },
  { when: "Readings", do: "Sit. The first reading and the psalm. Whisper the response if you can." },
  { when: "Gospel", do: "Stand. Small cross on forehead, lips, and heart." },
  { when: "Homily / Creed", do: "Sit, then stand. We believe." },
  { when: "Preparation", do: "Sit. Watch the gifts of bread and wine." },
  { when: "Holy, holy", do: "Stand, then kneel after the “Holy, holy, holy.”" },
  { when: "Consecration", do: "Kneel. The bell. Jesus is here. A bow of the head at each elevation." },
  { when: "Our Father", do: "Stand. Hands open or together — house rule." },
  { when: "Communion", do: "If not receiving, a little cross on the chest. A quiet “Jesus, I love you.”" },
  { when: "Leave", do: "Genuflect. Holy water. We take Him with us." },
];
