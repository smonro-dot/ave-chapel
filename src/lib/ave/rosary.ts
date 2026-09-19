export type BeadKind = "crucifix" | "small" | "large" | "medal";

export type RosaryBead = {
  id: string;
  kind: BeadKind;
  x: number;
  y: number;
  mystery?: number;
};

const CX = 160;
const CY = 168;
const RX = 108;
const RY = 128;

function bead(id: string, kind: BeadKind, x: number, y: number, extra?: { mystery?: number }): RosaryBead {
  return { id, kind, x, y, ...extra };
}

export function buildBeads(): RosaryBead[] {
  const beads: RosaryBead[] = [];
  beads.push(bead("medal", "medal", CX, CY + RY + 8));

  const decades: { start: number; count: number; mystery: number }[] = [
    { start: -90, count: 10, mystery: 1 },
    { start: -18, count: 10, mystery: 2 },
    { start: 54, count: 10, mystery: 3 },
    { start: 126, count: 10, mystery: 4 },
    { start: 198, count: 10, mystery: 5 },
  ];

  decades.forEach((d, di) => {
    for (let i = 0; i < d.count; i++) {
      const theta = ((d.start + i * 7.2) * Math.PI) / 180;
      beads.push(
        bead(`d${di + 1}-${i}`, "small", CX + RX * Math.cos(theta), CY + RY * Math.sin(theta), {
          mystery: d.mystery,
        }),
      );
    }
    const ofTheta = ((d.start + 10 * 7.2) * Math.PI) / 180;
    beads.push(
      bead(`of-${di + 1}`, "large", CX + RX * Math.cos(ofTheta), CY + RY * Math.sin(ofTheta), {
        mystery: d.mystery,
      }),
    );
  });

  const tailX = CX;
  const medalY = CY + RY + 8;
  beads.push(bead("tail-glory", "large", tailX, medalY + 34));
  beads.push(bead("tail-hm-1", "small", tailX, medalY + 56));
  beads.push(bead("tail-hm-2", "small", tailX, medalY + 74));
  beads.push(bead("tail-hm-3", "small", tailX, medalY + 92));
  beads.push(bead("tail-of", "large", tailX, medalY + 116));
  beads.push(bead("crucifix", "crucifix", tailX, medalY + 178));
  return beads;
}

export const BEADS = buildBeads();

export const JOYFUL = [
  { n: 1, title: "The Annunciation", storyId: "annunciation" },
  { n: 2, title: "The Visitation", storyId: "visitation" },
  { n: 3, title: "The Nativity", storyId: "nativity" },
  { n: 4, title: "The Presentation", storyId: "presentation" },
  { n: 5, title: "The Finding in the Temple", storyId: "finding" },
];

export const SORROWFUL = [
  { n: 1, title: "The Agony in the Garden", storyId: null },
  { n: 2, title: "The Scourging", storyId: null },
  { n: 3, title: "The Crowning with Thorns", storyId: null },
  { n: 4, title: "The Carrying of the Cross", storyId: null },
  { n: 5, title: "The Crucifixion", storyId: null },
];

export const GLORIOUS = [
  { n: 1, title: "The Resurrection", storyId: null },
  { n: 2, title: "The Ascension", storyId: null },
  { n: 3, title: "The Descent of the Holy Spirit", storyId: null },
  { n: 4, title: "The Assumption", storyId: null },
  { n: 5, title: "The Coronation", storyId: null },
];

export const LUMINOUS = [
  { n: 1, title: "The Baptism in the Jordan", storyId: null },
  { n: 2, title: "The Wedding at Cana", storyId: null },
  { n: 3, title: "The Proclamation of the Kingdom", storyId: null },
  { n: 4, title: "The Transfiguration", storyId: null },
  { n: 5, title: "The Institution of the Eucharist", storyId: null },
];

export function mysteriesFor(set: "joyful" | "sorrowful" | "glorious" | "luminous") {
  if (set === "sorrowful") return SORROWFUL;
  if (set === "glorious") return GLORIOUS;
  if (set === "luminous") return LUMINOUS;
  return JOYFUL;
}

export const PRAYERS = {
  sign: "In the name of the Father, and of the Son, and of the Holy Spirit. Amen.",
  apostles:
    "I believe in God, the Father almighty, Creator of heaven and earth, and in Jesus Christ, his only Son, our Lord, who was conceived by the Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate, was crucified, died and was buried; he descended into hell; on the third day he rose again from the dead; he ascended into heaven, and is seated at the right hand of God the Father almighty; from there he will come to judge the living and the dead. I believe in the Holy Spirit, the holy catholic Church, the communion of saints, the forgiveness of sins, the resurrection of the body, and life everlasting. Amen.",
  ourFather:
    "Our Father, who art in heaven, hallowed be thy name; thy kingdom come; thy will be done on earth as it is in heaven. Give us this day our daily bread; and forgive us our trespasses, as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.",
  hailMary:
    "Hail Mary, full of grace, the Lord is with thee; blessed art thou among women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.",
  glory:
    "Glory be to the Father, and to the Son, and to the Holy Spirit, as it was in the beginning, is now, and ever shall be, world without end. Amen.",
  fatima: "O my Jesus, forgive us our sins, save us from the fires of hell; lead all souls to heaven, especially those in most need of thy mercy.",
  hailHolyQueen:
    "Hail, holy Queen, mother of mercy, our life, our sweetness, and our hope. To thee do we cry, poor banished children of Eve; to thee do we send up our sighs, mourning and weeping in this vale of tears. Turn then, most gracious advocate, thine eyes of mercy toward us; and after this our exile, show unto us the blessed fruit of thy womb, Jesus. O clement, O loving, O sweet Virgin Mary.",
};

export function loopChainPath() {
  const steps = 64;
  const pts: string[] = [];
  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * Math.PI * 2 - Math.PI / 2;
    pts.push(`${CX + RX * Math.cos(t)},${CY + RY * Math.sin(t)}`);
  }
  return `M ${pts.join(" L ")}`;
}

export function tailChainPath() {
  const medalY = CY + RY + 8;
  return `M ${CX},${medalY} L ${CX},${medalY + 178}`;
}
