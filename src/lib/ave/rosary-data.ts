export type MysterySetId = "joyful" | "sorrowful" | "glorious" | "luminous";
export type VoiceId = "celeste" | "orion";
export type FollowMode = "listen" | "read";
export type PrayKind = "full" | "decade" | "learn";
export type PrayerId =
  | "sign-of-cross"
  | "apostles-creed"
  | "our-father"
  | "hail-mary"
  | "glory-be"
  | "fatima"
  | "hail-holy-queen"
  | "closing"
  | "mystery";

export const PRAYER_TEXT: Record<Exclude<PrayerId, "mystery">, string> = {
  "sign-of-cross": `In the name of the Father, and of the Son, and of the Holy Spirit. Amen.`,
  "apostles-creed": `I believe in God, the Father almighty, Creator of heaven and earth, and in Jesus Christ, his only Son, our Lord, who was conceived by the Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate, was crucified, died and was buried; he descended into hell; on the third day he rose again from the dead; he ascended into heaven, and is seated at the right hand of God the Father almighty; from there he will come to judge the living and the dead. I believe in the Holy Spirit, the holy catholic Church, the communion of saints, the forgiveness of sins, the resurrection of the body, and life everlasting. Amen.`,
  "our-father": `Our Father, who art in heaven, hallowed be thy name; thy kingdom come; thy will be done on earth as it is in heaven. Give us this day our daily bread, and forgive us our trespasses, as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.`,
  "hail-mary": `Hail Mary, full of grace, the Lord is with thee; blessed art thou among women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.`,
  "glory-be": `Glory be to the Father, and to the Son, and to the Holy Spirit, as it was in the beginning, is now, and ever shall be, world without end. Amen.`,
  "fatima": `O my Jesus, forgive us our sins, save us from the fires of hell, lead all souls to heaven, especially those in most need of thy mercy.`,
  "hail-holy-queen": `Hail, holy Queen, mother of mercy, our life, our sweetness, and our hope. To thee do we cry, poor banished children of Eve. To thee do we send up our sighs, mourning and weeping in this valley of tears. Turn then, most gracious advocate, thine eyes of mercy toward us, and after this our exile, show unto us the blessed fruit of thy womb, Jesus. O clement, O loving, O sweet Virgin Mary. Pray for us, O holy Mother of God. That we may be made worthy of the promises of Christ.`,
  "closing": `O God, whose only-begotten Son, by his life, death, and resurrection, has purchased for us the rewards of eternal life, grant, we beseech thee, that meditating upon these mysteries of the most holy Rosary of the Blessed Virgin Mary, we may imitate what they contain and obtain what they promise, through the same Christ our Lord. Amen.`,
};

export const PRAYER_TITLE: Record<Exclude<PrayerId, "mystery">, string> = {
  "sign-of-cross": `Sign of the Cross`,
  "apostles-creed": `The Apostles' Creed`,
  "our-father": `Our Father`,
  "hail-mary": `Hail Mary`,
  "glory-be": `Glory Be`,
  "fatima": `Fatima Prayer`,
  "hail-holy-queen": `Hail, Holy Queen`,
  "closing": `Closing Prayer`,
};

export type MysteryCard = {
  id: string;
  set: MysterySetId;
  index: number;
  title: string;
  fruit: string;
  verse: string;
  verseRef: string;
  meditation: string;
  announce: string;
};

export const MYSTERY_SETS: { id: MysterySetId; label: string; latin: string; days: string; about: string }[] = [
  { id: "joyful", label: "Joyful", latin: "Mysteria Gaudiosa", days: "Monday · Saturday", about: `The beginning of the story: Mary's yes, the birth of Jesus, and his childhood.` },
  { id: "sorrowful", label: "Sorrowful", latin: "Mysteria Dolorosa", days: "Tuesday · Friday", about: `His Passion — from the garden to the Cross. For suffering, mercy, and courage.` },
  { id: "glorious", label: "Glorious", latin: "Mysteria Gloriosa", days: "Wednesday · Sunday", about: `The Resurrection through Mary's crowning. For hope, heaven, and the Spirit.` },
  { id: "luminous", label: "Luminous", latin: "Mysteria Luminosa", days: "Thursday", about: `His public life — baptism to the Eucharist. For walking with him now.` },
];

export const MYSTERIES: MysteryCard[] = [
  {
    id: "joyful-1",
    set: "joyful",
    index: 1,
    title: `The Annunciation`,
    fruit: `Humility`,
    verse: `Behold, I am the handmaid of the Lord. Let it be to me according to your word.`,
    verseRef: `Luke 1:38`,
    meditation: `The angel does not ask Mary to understand the whole road. He asks for her yes. She gives it, and the Word takes flesh in hiddenness. Ask for a heart that can say yes before it sees.`,
    announce: `The first Joyful Mystery: the Annunciation. The angel Gabriel greets Mary, and she gives her yes to God.`,
  },
  {
    id: "joyful-2",
    set: "joyful",
    index: 2,
    title: `The Visitation`,
    fruit: `Charity`,
    verse: `Blessed are you among women, and blessed is the fruit of your womb.`,
    verseRef: `Luke 1:42`,
    meditation: `Mary, newly carrying Jesus, goes in haste to Elizabeth. Love does not wait to be comfortable. Ask for a faith that moves toward someone else.`,
    announce: `The second Joyful Mystery: the Visitation. Mary goes in haste to Elizabeth, carrying Christ to another.`,
  },
  {
    id: "joyful-3",
    set: "joyful",
    index: 3,
    title: `The Nativity`,
    fruit: `Love of God`,
    verse: `And she gave birth to her firstborn son and wrapped him in swaddling cloths and laid him in a manger.`,
    verseRef: `Luke 2:7`,
    meditation: `God comes small. There is no palace, only a trough and night air. Make room. Ask to love him as he is, not as you would arrange him.`,
    announce: `The third Joyful Mystery: the Nativity. In Bethlehem, the Word is made flesh and laid in a manger.`,
  },
  {
    id: "joyful-4",
    set: "joyful",
    index: 4,
    title: `The Presentation`,
    fruit: `Obedience`,
    verse: `They brought him up to Jerusalem to present him to the Lord.`,
    verseRef: `Luke 2:22`,
    meditation: `Mary and Joseph offer back the child who was never theirs to keep. Everything given is already his. Ask for a life placed, quietly, in the Father's hands.`,
    announce: `The fourth Joyful Mystery: the Presentation. Mary and Joseph offer the child Jesus in the Temple.`,
  },
  {
    id: "joyful-5",
    set: "joyful",
    index: 5,
    title: `The Finding in the Temple`,
    fruit: `Piety`,
    verse: `After three days they found him in the temple, sitting among the teachers.`,
    verseRef: `Luke 2:46`,
    meditation: `They search, and they find him about his Father's work. When he seems hidden, keep looking. Ask for the grace to listen when he is found.`,
    announce: `The fifth Joyful Mystery: the Finding in the Temple. After three days, they find Jesus among the teachers.`,
  },
  {
    id: "sorrowful-1",
    set: "sorrowful",
    index: 1,
    title: `The Agony in the Garden`,
    fruit: `Contrition`,
    verse: `My soul is very sorrowful, even to death. Remain here, and watch with me.`,
    verseRef: `Matthew 26:38`,
    meditation: `He does not hide from the cup. He asks that it pass, and then he drinks it. Stay awake with him. Ask for a heart that does not run from the Father's will.`,
    announce: `The first Sorrowful Mystery: the Agony in the Garden. Jesus prays, and his sweat becomes like blood.`,
  },
  {
    id: "sorrowful-2",
    set: "sorrowful",
    index: 2,
    title: `The Scourging at the Pillar`,
    fruit: `Purity`,
    verse: `Then Pilate took Jesus and flogged him.`,
    verseRef: `John 19:1`,
    meditation: `The innocent one is struck so that we might be healed. Do not look away. Ask for purity of heart, and for mercy toward bodies that suffer.`,
    announce: `The second Sorrowful Mystery: the Scourging at the Pillar. He is wounded for our transgressions.`,
  },
  {
    id: "sorrowful-3",
    set: "sorrowful",
    index: 3,
    title: `The Crowning with Thorns`,
    fruit: `Moral courage`,
    verse: `And twisting together a crown of thorns, they put it on his head.`,
    verseRef: `Matthew 27:29`,
    meditation: `They mock the King, and he does not answer in kind. Ask for the courage to be faithful when truth is laughed at, and for a crown that is his, not the world's.`,
    announce: `The third Sorrowful Mystery: the Crowning with Thorns. The King of kings is mocked with a crown of pain.`,
  },
  {
    id: "sorrowful-4",
    set: "sorrowful",
    index: 4,
    title: `The Carrying of the Cross`,
    fruit: `Patience`,
    verse: `He went out, bearing his own cross, to the place called The Place of a Skull.`,
    verseRef: `John 19:17`,
    meditation: `The wood is heavy and the road is public. He walks it anyway. Ask for patience under your own wood, and the grace to help carry someone else's.`,
    announce: `The fourth Sorrowful Mystery: the Carrying of the Cross. He takes up the wood and walks toward Calvary.`,
  },
  {
    id: "sorrowful-5",
    set: "sorrowful",
    index: 5,
    title: `The Crucifixion`,
    fruit: `Perseverance`,
    verse: `When Jesus had received the sour wine, he said, 'It is finished,' and he bowed his head and gave up his spirit.`,
    verseRef: `John 19:30`,
    meditation: `Love goes all the way to the end. From the cross he still gives his mother, still forgives, still thirsts. Ask to remain, and to finish what love has begun.`,
    announce: `The fifth Sorrowful Mystery: the Crucifixion. Jesus gives his life, and the veil of the Temple is torn.`,
  },
  {
    id: "glorious-1",
    set: "glorious",
    index: 1,
    title: `The Resurrection`,
    fruit: `Faith`,
    verse: `He is not here, for he has risen, as he said.`,
    verseRef: `Matthew 28:6`,
    meditation: `The tomb is empty, and the first word is do not be afraid. Death is not the last sentence. Ask for a faith that can walk out of dark rooms.`,
    announce: `The first Glorious Mystery: the Resurrection. He is not here. He is risen, as he said.`,
  },
  {
    id: "glorious-2",
    set: "glorious",
    index: 2,
    title: `The Ascension`,
    fruit: `Hope`,
    verse: `As they were looking on, he was lifted up, and a cloud took him out of their sight.`,
    verseRef: `Acts 1:9`,
    meditation: `He goes to prepare a place, and he does not leave them orphaned. Heaven is not elsewhere forever — it is where he is. Ask for hope that lifts the eyes.`,
    announce: `The second Glorious Mystery: the Ascension. The Lord is taken up, and a cloud hides him from their sight.`,
  },
  {
    id: "glorious-3",
    set: "glorious",
    index: 3,
    title: `The Descent of the Holy Spirit`,
    fruit: `Love of the Holy Spirit`,
    verse: `And they were all filled with the Holy Spirit and began to speak.`,
    verseRef: `Acts 2:4`,
    meditation: `Fire does not destroy the upper room. It sends them. Ask to be filled, and then to go — to speak, to forgive, to become a church.`,
    announce: `The third Glorious Mystery: the Descent of the Holy Spirit. Tongues of fire rest on the apostles, and they are sent.`,
  },
  {
    id: "glorious-4",
    set: "glorious",
    index: 4,
    title: `The Assumption`,
    fruit: `Grace of a happy death`,
    verse: `A great sign appeared in heaven: a woman clothed with the sun.`,
    verseRef: `Revelation 12:1`,
    meditation: `Mary is gathered, body and soul, into the life her Son won. What God has begun in her, he means for us. Ask for a holy ending, and a home in him.`,
    announce: `The fourth Glorious Mystery: the Assumption. Mary is taken body and soul into the glory of heaven.`,
  },
  {
    id: "glorious-5",
    set: "glorious",
    index: 5,
    title: `The Coronation`,
    fruit: `Trust in Mary's intercession`,
    verse: `On her head a crown of twelve stars.`,
    verseRef: `Revelation 12:1`,
    meditation: `The girl of Nazareth is Queen, not by grasping, but by remaining. Ask her to keep you near the throne of mercy, and to teach you how to reign by serving.`,
    announce: `The fifth Glorious Mystery: the Coronation. The Mother of God is crowned Queen of heaven and earth.`,
  },
  {
    id: "luminous-1",
    set: "luminous",
    index: 1,
    title: `The Baptism in the Jordan`,
    fruit: `Openness to the Holy Spirit`,
    verse: `This is my beloved Son, with whom I am well pleased.`,
    verseRef: `Matthew 3:17`,
    meditation: `Jesus stands in the water with sinners, and the heavens open. Ask to hear the Father's voice over your own life, and to live as a beloved child.`,
    announce: `The first Luminous Mystery: the Baptism in the Jordan. A voice from heaven: this is my beloved Son.`,
  },
  {
    id: "luminous-2",
    set: "luminous",
    index: 2,
    title: `The Wedding at Cana`,
    fruit: `To Jesus through Mary`,
    verse: `His mother said to the servants, 'Do whatever he tells you.'`,
    verseRef: `John 2:5`,
    meditation: `She notices the lack before anyone asks. She points only to him. Ask for her attentiveness, and the obedience that lets water become wine.`,
    announce: `The second Luminous Mystery: the Wedding at Cana. Do whatever he tells you, and water becomes wine.`,
  },
  {
    id: "luminous-3",
    set: "luminous",
    index: 3,
    title: `The Proclamation of the Kingdom`,
    fruit: `Conversion`,
    verse: `The time is fulfilled, and the kingdom of God is at hand; repent and believe in the gospel.`,
    verseRef: `Mark 1:15`,
    meditation: `The kingdom is not a rumor. It is near, and it asks for a turned life. Ask for the courage to change, and to believe good news that costs something.`,
    announce: `The third Luminous Mystery: the Proclamation of the Kingdom. Repent, and believe in the Gospel.`,
  },
  {
    id: "luminous-4",
    set: "luminous",
    index: 4,
    title: `The Transfiguration`,
    fruit: `Desire for holiness`,
    verse: `And he was transfigured before them, and his face shone like the sun.`,
    verseRef: `Matthew 17:2`,
    meditation: `For a moment the disciples see what is always true. Then they must walk down the mountain. Ask to want holiness, and to carry the light into ordinary days.`,
    announce: `The fourth Luminous Mystery: the Transfiguration. His face shines like the sun, and the disciples see his glory.`,
  },
  {
    id: "luminous-5",
    set: "luminous",
    index: 5,
    title: `The Institution of the Eucharist`,
    fruit: `Adoration`,
    verse: `This is my body, which is given for you. Do this in remembrance of me.`,
    verseRef: `Luke 22:19`,
    meditation: `He leaves himself as bread. Not a memory only — a presence. Ask for a heart that kneels, receives, and is changed by what it cannot earn.`,
    announce: `The fifth Luminous Mystery: the Institution of the Eucharist. This is my body, given for you. Do this in memory of me.`,
  },
];

export const VOICES: { id: VoiceId; name: string; blurb: string; detail: string }[] = [
  { id: "celeste", name: "Celeste", blurb: "Soft, unhurried", detail: "A real spoken voice — gentle, prayerful, never rushed." },
  { id: "orion", name: "Orion", blurb: "Warm, human", detail: "A close, cinematic reading, like someone praying next to you." },
];

export function mysteriesFor(set: MysterySetId) {
  return MYSTERIES.filter((m) => m.set === set);
}

export function mysterySetMeta(id: MysterySetId) {
  return MYSTERY_SETS.find((s) => s.id === id)!;
}

export function ordinal(n: number) {
  return ["First", "Second", "Third", "Fourth", "Fifth"][n - 1] ?? String(n);
}

export function clipUrl(voice: VoiceId, clipId: string) {
  return `/audio/${voice}/${clipId}.mp3`;
}

export function timestampsUrl(voice: VoiceId, clipId: string) {
  return `/audio/${voice}/${clipId}.timestamps.json`;
}
