import type { WhyPage } from "./types";

export const WHYS: WhyPage[] = [
  {
    id: "rosary",
    title: "Why we pray the Rosary",
    kidTitle: "The Gospel on a string",
    kid: "The beads help us remember stories of Jesus and Mary, one prayer at a time.",
    forYou: [
      "The Rosary is a Gospel meditation, not a lucky charm. Each decade holds a scene from the life of Christ.",
      "The Hail Mary is Scripture: Gabriel’s greeting and Elizabeth’s. We ask Mary to pray with us, the way you’d ask a friend.",
      "John Paul II called it a “compendium of the Gospel.” Pray it slowly with a toddler — one decade is enough.",
    ],
    tryTonight: "Pray one decade on the beads and look at tonight’s mystery picture together.",
  },
  {
    id: "mary",
    title: "Why Mary",
    kidTitle: "Jesus’ mother",
    image: "/images/annunciation.jpg",
    kid: "Mary is Jesus’ mother. We love her because Jesus loves her. We ask her to pray for us.",
    forYou: [
      "Catholics do not worship Mary. Worship (latria) is for God alone. We give her hyperdulia: special honor as Theotokos, Mother of God.",
      "Every true Marian devotion ends in Christ. “Do whatever he tells you” (John 2:5) is her whole program.",
      "If your son asks “is Mary God?” the answer is a clear no — and then: she is the first disciple, and she never stops pointing at her Son.",
    ],
    tryTonight: "Look at a picture of Mary and say one Hail Mary, very slowly.",
  },
  {
    id: "mass",
    title: "Why Mass — and why we kneel",
    kidTitle: "Jesus is here",
    image: "/images/church.jpg",
    kid: "At Mass, Jesus comes to be with us in a special way. We kneel because He is God, and we are small.",
    forYou: [
      "The Mass is the same sacrifice of Calvary, made present — not repeated, not a mere meal. That is why it is not a concert.",
      "We kneel at the consecration because the Church believes the bread and wine become the Body and Blood of Christ (transubstantiation).",
      "A two-year-old will not follow the Roman Canon. He can learn: we stand, we sit, we kneel, we whisper. The body catechizes before the mind does.",
    ],
    tryTonight: "Practice together: sit, stand, kneel, and make a little sign of the cross.",
  },
  {
    id: "tabernacle",
    title: "Why the little red lamp",
    kidTitle: "Someone is home",
    image: "/images/tabernacle.jpg",
    kid: "The red light means Jesus is in the tabernacle. We genuflect — one knee down — to say hello to Him.",
    forYou: [
      "The sanctuary lamp burns whenever the Blessed Sacrament is reserved. It is not décor. It is a presence lamp.",
      "Genuflection on the right knee is the body’s creed: I believe You are here.",
      "Teach the boy to look for the lamp when you enter. If it is lit, we genuflect. If not, a bow to the altar is enough.",
    ],
    tryTonight: "When you enter church this Sunday, whisper: “Jesus is home.” Then genuflect together.",
  },
  {
    id: "saints",
    title: "Why saints",
    kidTitle: "Friends in heaven",
    image: "/images/francis.jpg",
    kid: "Saints are friends of Jesus who live with Him in heaven. We can ask them to pray for us, like asking Grandma to pray.",
    forYou: [
      "The communion of saints means the Church is not cut by death. We ask their intercession; we do not treat them as demigods.",
      "Patron saints are not mascots. They are people who suffered, sinned, converted, and were made holy. That is the point for a child: holiness is possible.",
      "Canonization is the Church’s judgment that this person is in heaven and a safe friend to imitate.",
    ],
    tryTonight: "Pick a saint in the compendium and read the little-one line out loud.",
  },
  {
    id: "confession",
    title: "Why confession",
    kidTitle: "Jesus forgives",
    kid: "When we do something unkind, we can tell Jesus we are sorry. A priest helps us hear: you are forgiven.",
    forYou: [
      "Reconciliation is a sacrament, not a scolding. Christ gave the apostles authority to forgive sins (John 20:23).",
      "A two-year-old is not yet at the age of reason. Still, “I’m sorry” and “I forgive you” at home is the seed of the sacrament.",
      "When he is older: examination, confession, absolution, penance. Go yourself. He will copy what you do, not what you recommend.",
    ],
    tryTonight: "If anyone was snappy today, say sorry out loud and give a blessing on the forehead.",
  },
  {
    id: "sign",
    title: "Why the Sign of the Cross",
    kidTitle: "Father, Son, and Spirit",
    kid: "We touch our head, heart, and shoulders and say the Father, the Son, and the Holy Spirit. We belong to God.",
    forYou: [
      "The Sign of the Cross is a creedal act: Trinity and Crucifixion in one gesture. Tertullian already describes it in the 200s.",
      "It begins and ends prayer, meals, and Mass. It marks a child as claimed.",
      "At two, the gesture will be messy. Keep doing it. The words will catch up.",
    ],
    tryTonight: "Make the Sign of the Cross slowly on his hand, then let him try on you.",
  },
  {
    id: "year",
    title: "Why the year looks like a story",
    kidTitle: "Advent, Christmas, Lent, Easter",
    kid: "The Church year tells Jesus’ story again and again: waiting, born, dying, risen, and ordinary days of love.",
    forYou: [
      "The liturgical year is how Catholics inhabit time: Advent (wait), Christmas (Incarnation), Lent (repent), Easter (risen), Ordinary Time (grow).",
      "Friday abstinence, holy days, ember days — the body keeps a calendar the mind forgets.",
      "With a toddler, light one candle in Advent. Hide the chocolate in Lent. Alleluia at Easter. That is enough.",
    ],
    tryTonight: "Name the season we’re in, and one small thing we’ll do because of it.",
  },
];

export function whyById(id: string) {
  return WHYS.find((w) => w.id === id);
}
