import { i as __toESM } from "../_runtime.mjs";
import { R as require_react, _ as createRootRoute, d as useRouterState, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, v as Link, y as useRouter, z as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { b as BookHeart, g as Check, i as Sparkles, l as House, p as Church, r as TriangleAlert, y as BookOpen } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/calendar-BTjgNkKl.js
function s(saint) {
	return saint;
}
/** More lives for the book — popular patrons, Doctors, American and family saints. */
var EXTRA_SAINTS = [
	s({
		slug: "anne",
		name: "St. Anne",
		shortName: "Anne",
		title: "Mother of the Blessed Virgin Mary",
		feast: {
			month: 7,
			day: 26
		},
		born: "Galilee, 1st century B.C. (tradition)",
		died: "1st century (tradition)",
		canonized: "Venerated from the early Church; feast in the West by the 8th century",
		symbols: [
			"book",
			"door",
			"lily",
			"child Mary"
		],
		patronages: [
			"grandparents",
			"mothers",
			"housewives",
			"Canada",
			"miners",
			"childless couples"
		],
		topics: [
			"family",
			"grandparents",
			"Mary",
			"mothers"
		],
		kidLine: "Anne is Mary’s mommy — Jesus’ grandma. She taught Mary to love God.",
		summary: "The grandmother of Jesus, honored as the one who raised the woman who said yes.",
		life: "Scripture does not name Mary’s parents. The 2nd-century Protoevangelium of James calls them Joachim and Anne, a long-childless couple given a daughter late. The Church does not treat that book as Gospel, but she has long honored Anne as Mary’s mother. Medieval Europe was full of her shrines. In New France she became the grandmother of a whole people — Sainte-Anne-de-Beaupré still draws pilgrims.",
		stories: [{
			title: "The late child",
			text: "Tradition says Anne and Joachim were old and ashamed of empty arms. An angel promised a child who would be blessed among women. Waiting is part of the story grandparents already know."
		}],
		miracles: [{
			title: "Beaupré",
			text: "The Canadian shrine records healings of the crippled and the hopeless, beginning with a 17th-century sailor who helped raise the first chapel and found his own lameness gone."
		}],
		pathToSainthood: "Not a modern canonization. Cultus is ancient in East and West. Pius X approved her as patroness of Canada. The Church’s judgment is the liturgy: we keep her feast with Joachim on July 26.",
		prayer: "St. Anne, grandmother of God-with-us, pray for our house and for every grandparent who still teaches the faith.",
		image: "/images/anne.jpg"
	}),
	s({
		slug: "joachim",
		name: "St. Joachim",
		shortName: "Joachim",
		title: "Father of the Blessed Virgin Mary",
		feast: {
			month: 7,
			day: 26
		},
		born: "Galilee, 1st century B.C. (tradition)",
		died: "1st century (tradition)",
		canonized: "Venerated with St. Anne from antiquity",
		symbols: [
			"shepherd’s staff",
			"doves",
			"basket"
		],
		patronages: [
			"grandfathers",
			"fathers",
			"married couples"
		],
		topics: [
			"family",
			"grandparents",
			"fathers",
			"Mary"
		],
		kidLine: "Joachim is Mary’s daddy — Jesus’ grandpa. He waited a long time to be a father.",
		summary: "The quiet grandfather in the Holy Family’s older generation.",
		life: "Paired always with Anne. Tradition paints him as a generous man of Judah whose offering was once refused because he had no child, who went into the wilderness to pray, and who met Anne again at the Golden Gate of Jerusalem with the news of Mary. Whether or not the details are history, the Church keeps a grandfather in the story of the Incarnation.",
		stories: [{
			title: "The Golden Gate",
			text: "Art loves the meeting of Anne and Joachim at the gate — two old people who did not stop asking. A father can tell that story without a footnote."
		}],
		miracles: [{
			title: "A long yes",
			text: "The miracle attached to him is not a wonder in a plaza. It is fruitfulness after shame — the kind of answer that takes years."
		}],
		pathToSainthood: "Cultus with Anne. Their shared feast is July 26 in the General Roman Calendar.",
		prayer: "St. Joachim, pray for fathers who feel late, small, or unseen.",
		image: "/images/anne.jpg"
	}),
	s({
		slug: "andrew",
		name: "St. Andrew the Apostle",
		shortName: "Andrew",
		title: "First-called, apostle",
		feast: {
			month: 11,
			day: 30
		},
		born: "Bethsaida, 1st century",
		died: "Patras, c. A.D. 60, crucified on an X-shaped cross",
		canonized: "Venerated from the beginning",
		symbols: [
			"saltire cross",
			"fish",
			"net"
		],
		patronages: [
			"Scotland",
			"fishermen",
			"Russia",
			"Greece",
			"singles"
		],
		topics: [
			"apostles",
			"missions",
			"courage",
			"invitation"
		],
		kidLine: "Andrew was Peter’s brother. He met Jesus first, then ran to get Peter.",
		summary: "The apostle who brings other people to Christ, beginning with his own brother.",
		life: "A fisherman of Galilee, first a disciple of John the Baptist. John’s Gospel has him hear “Behold the Lamb,” stay with Jesus, and fetch Simon: “We have found the Messiah.” He appears with the boy who had five loaves. Tradition sends him to Greece; he was bound, not nailed, to an X-shaped cross at Patras so that his witness would last longer.",
		stories: [{
			title: "He went and found his brother",
			text: "Evangelization in one sentence. Andrew does not write a treatise. He brings Peter."
		}],
		miracles: [{
			title: "The loaves",
			text: "John 6: Andrew notices the boy with the barley loaves. Small things offered become enough."
		}],
		pathToSainthood: "Apostolic martyr. His relics went to Constantinople, then to Amalfi; Scotland took him as national patron.",
		prayer: "St. Andrew, first-called, teach us to bring the people we love to Jesus."
	}),
	s({
		slug: "james-greater",
		name: "St. James the Greater",
		shortName: "James",
		title: "Apostle, son of Zebedee",
		feast: {
			month: 7,
			day: 25
		},
		born: "Galilee, 1st century",
		died: "Jerusalem, A.D. 44, beheaded by Herod Agrippa",
		canonized: "Venerated from the beginning",
		symbols: [
			"scallop shell",
			"staff",
			"pilgrim hat"
		],
		patronages: [
			"pilgrims",
			"Spain",
			"laborers",
			"veterinarians",
			"horsemen"
		],
		topics: [
			"apostles",
			"pilgrimage",
			"courage",
			"martyrs"
		],
		kidLine: "James walked a long way with Jesus. People still walk a long road to visit him.",
		summary: "One of the three at Tabor and Gethsemane; Spain’s pilgrim saint.",
		life: "Son of Zebedee, brother of John, called from the boat. Jesus named them Boanerges. He wanted seats at the right and left, and was told he would drink the cup. Acts 12: he is the first apostle martyred. Medieval Spain claimed his tomb at Compostela; the Camino still teaches what a long walk can do to a soul.",
		stories: [{
			title: "The cup",
			text: "“Can you drink the cup I am to drink?” James said yes. Later Herod’s sword made the yes visible."
		}],
		miracles: [{
			title: "Compostela",
			text: "Pilgrims for a thousand years have arrived at his shrine changed. The Church does not need a laboratory for that miracle."
		}],
		pathToSainthood: "Apostolic martyr. Patron of Spain; the scallop is the badge of the Camino.",
		prayer: "St. James, pray for everyone on a long road home."
	}),
	s({
		slug: "thomas-apostle",
		name: "St. Thomas the Apostle",
		shortName: "Thomas",
		title: "Didymus, apostle to India",
		feast: {
			month: 7,
			day: 3
		},
		born: "Galilee, 1st century",
		died: "Mylapore, India, c. A.D. 72, pierced with a spear (tradition)",
		canonized: "Venerated from the beginning",
		symbols: [
			"spear",
			"carpenter’s square",
			"belt"
		],
		patronages: [
			"architects",
			"builders",
			"India",
			"the doubting"
		],
		topics: [
			"faith",
			"doubt",
			"apostles",
			"missions"
		],
		kidLine: "Thomas wanted to see Jesus’ hands. Jesus let him. Then Thomas said, “My Lord and my God.”",
		summary: "The apostle who refused a rumor and then made the highest confession in the Gospel.",
		life: "Called Didymus, “the Twin.” He is willing to die with Jesus (John 11) and honest enough to say he does not know the way (John 14). After the Resurrection he misses the first appearance and will not take the others’ word. Eight days later the Lord offers the wounds. Tradition carries him to India; the St. Thomas Christians of Kerala still claim him.",
		stories: [{
			title: "Unless I see",
			text: "Doubt here is not chic unbelief. It is a man who loved too much to be satisfied with a story. Jesus does not scold him off the stage. He invites the hand into the side."
		}],
		miracles: [{
			title: "India",
			text: "Communities on the Malabar coast have kept his memory for centuries. The miracle is a Church where the map said there should not be one."
		}],
		pathToSainthood: "Apostle and martyr. Feast July 3 (translation of relics); older calendars kept December 21.",
		prayer: "St. Thomas, help us say it when we see Him: my Lord and my God."
	}),
	s({
		slug: "george",
		name: "St. George",
		shortName: "George",
		title: "Martyr, protector",
		feast: {
			month: 4,
			day: 23
		},
		born: "Cappadocia or Lydda, c. 275",
		died: "Nicomedia or Lydda, c. 303, under Diocletian",
		canonized: "Venerated from the 4th century; cultus ancient",
		symbols: [
			"red cross",
			"white banner",
			"armor"
		],
		patronages: [
			"soldiers",
			"England",
			"scouts",
			"knights",
			"skin diseases"
		],
		topics: [
			"courage",
			"martyrs",
			"soldiers",
			"protection"
		],
		kidLine: "George was a brave soldier who loved Jesus more than a mean king. He is often painted with a dragon.",
		summary: "A real martyr under Diocletian; the dragon is the later picture of that fight.",
		life: "The oldest witnesses know a soldier-martyr buried at Lydda in Palestine. Acts of his passion grew legendary. The dragon story — a town terrorized, a girl offered, a knight who signs the Cross and saves them — is medieval allegory for baptism crushing evil. England took him as patron in the Crusades. The red cross on white is still his.",
		stories: [{
			title: "The dragon",
			text: "Tell a two-year-old: there was something scary. George did not run. He trusted Jesus, and the scary thing lost. That is the whole catechesis."
		}],
		miracles: [{
			title: "Lydda",
			text: "Pilgrims in late antiquity already visited his tomb. Soldiers across East and West have asked his help in the night before a fight."
		}],
		pathToSainthood: "Pre-congregation martyr. Benedict XIV called him a historical saint whose legends need sifting. The Church keeps April 23.",
		prayer: "St. George, pray for the brave, and for anyone who is afraid in the dark.",
		image: "/images/george.jpg"
	}),
	s({
		slug: "lawrence",
		name: "St. Lawrence",
		shortName: "Lawrence",
		title: "Deacon and martyr of Rome",
		feast: {
			month: 8,
			day: 10
		},
		born: "Spain, c. 225",
		died: "Rome, 258, roasted on a gridiron (tradition)",
		canonized: "Venerated from the beginning in Rome",
		symbols: [
			"gridiron",
			"dalmatic",
			"purse"
		],
		patronages: [
			"deacons",
			"cooks",
			"comedians",
			"the poor",
			"Rome",
			"librarians"
		],
		topics: [
			"the poor",
			"martyrs",
			"deacons",
			"humor"
		],
		kidLine: "Lawrence took care of poor people. When a mean ruler asked for the Church’s treasure, Lawrence brought the poor.",
		summary: "The archdeacon who showed Rome that the treasure of the Church is her poor.",
		life: "Served Pope Sixtus II. In the Valerian persecution the pope was seized; Lawrence, told to produce the Church’s wealth, gathered the lame, the blind, and the widows. He was killed four days after Sixtus. Tradition says a gridiron; Ambrose and Prudentius already sing him. Rome still stops for him in August heat.",
		stories: [{
			title: "These are the treasure",
			text: "A prefect wanted gold. Lawrence brought people. That sentence still indicts every rich diocese."
		}, {
			title: "Turn me over",
			text: "The quip on the gridiron — “I’m done on this side” — may be legend. The Church kept it because joy at the end is a kind of miracle."
		}],
		miracles: [{
			title: "The treasure",
			text: "Not a healing. A redefinition: the poor are the patrimony. That conversion of the imagination is why Rome loved him."
		}],
		pathToSainthood: "Roman martyr of 258. One of the most venerated deacons in the calendar. Feast August 10.",
		prayer: "St. Lawrence, show us where the treasure really is."
	}),
	s({
		slug: "sebastian",
		name: "St. Sebastian",
		shortName: "Sebastian",
		title: "Martyr, soldier of Rome",
		feast: {
			month: 1,
			day: 20
		},
		born: "Narbonne or Milan, 3rd century",
		died: "Rome, c. 288, beaten to death after surviving arrows",
		canonized: "Venerated from the 4th century",
		symbols: [
			"arrows",
			"column",
			"armor"
		],
		patronages: [
			"athletes",
			"soldiers",
			"archers",
			"plague victims",
			"police"
		],
		topics: [
			"courage",
			"martyrs",
			"athletes",
			"soldiers"
		],
		kidLine: "Sebastian was a soldier who loved Jesus. Mean men hurt him, but he would not stop being brave.",
		summary: "The Praetorian who encouraged other martyrs and was himself twice condemned.",
		life: "A captain in the imperial guard under Diocletian, he used his post to strengthen imprisoned Christians. Found out, he was shot with arrows and left for dead; Irene of Rome nursed him. He went back to the emperor to rebuke him and was then beaten to death. His relics rest at San Sebastiano on the Appian Way.",
		stories: [{
			title: "He went back",
			text: "Surviving the arrows was not the point. Walking back into the palace was. Courage is not one scene."
		}],
		miracles: [{
			title: "Plague saint",
			text: "Medieval cities carried his relics in plague years. Athletes still ask the man who stood at a column for a steady body."
		}],
		pathToSainthood: "Early Roman martyr. Feast January 20. One of the Fourteen Holy Helpers in later devotion.",
		prayer: "St. Sebastian, pray for strong bodies and stronger hearts."
	}),
	s({
		slug: "valentine",
		name: "St. Valentine",
		shortName: "Valentine",
		title: "Priest and martyr of Rome",
		feast: {
			month: 2,
			day: 14
		},
		born: "Italy, 3rd century",
		died: "Rome, c. 269, beheaded",
		canonized: "Venerated from late antiquity",
		symbols: [
			"roses",
			"crocus",
			"heart",
			"birds"
		],
		patronages: [
			"engaged couples",
			"happy marriages",
			"beekeepers",
			"epilepsy",
			"love"
		],
		topics: [
			"marriage",
			"martyrs",
			"love"
		],
		kidLine: "Valentine loved Jesus and helped people get married when it was not allowed. We remember him with notes of love.",
		summary: "A Roman martyr whose name later gathered every story about faithful love.",
		life: "The historical Valentine is thin: a priest or bishop of the 3rd century, buried on the Via Flaminia, feast on February 14. Later legends say he married Christian couples against imperial edict and sent a note “from your Valentine” on the eve of his death. Chaucer and the English then tied the day to spring pairing of birds. The Church keeps a martyr; the culture keeps a card. Both can be baptized.",
		stories: [{
			title: "From your Valentine",
			text: "Whether he wrote it or not, the line is true: Christian love has a name, a cost, and a note you can hold."
		}],
		miracles: [{
			title: "Sight restored",
			text: "One legend: he healed the jailer’s blind daughter. Then he wrote her the farewell. Mercy, then a letter."
		}],
		pathToSainthood: "Pre-congregation martyr. Removed from the General Calendar in 1969 for sparse facts, still in the Roman Martyrology on February 14. Local and popular cultus never stopped.",
		prayer: "St. Valentine, pray for our marriage, and for every couple learning how to stay."
	}),
	s({
		slug: "bernadette",
		name: "St. Bernadette Soubirous",
		shortName: "Bernadette",
		title: "Visionary of Lourdes",
		feast: {
			month: 4,
			day: 16
		},
		born: "Lourdes, 1844",
		died: "Nevers, 1879",
		canonized: "1933 by Pope Pius XI",
		symbols: [
			"rosary",
			"blue sash",
			"grotto",
			"candle"
		],
		patronages: [
			"the sick",
			"shepherds",
			"poverty",
			"Lourdes",
			"those ridiculed for piety"
		],
		topics: [
			"Mary",
			"the sick",
			"humility",
			"apparitions"
		],
		kidLine: "Bernadette was a poor girl. Mary came to her at a grotto and asked her to pray and to dig for a spring.",
		summary: "The child of Lourdes who would not embroider the lady, and then hid herself in a convent.",
		life: "The Soubirous family was hungry and lived in a former jail. In 1858 a lady in white appeared eighteen times in the grotto of Massabielle. Bernadette, asthmatic and barely catechized, reported the words “I am the Immaculate Conception” — a title defined only four years earlier, which the girl did not understand. She dug at the lady’s command; a spring rose. She entered the Sisters of Nevers, was treated roughly, and died at 35 of tuberculosis of the bone, saying “pray for me, poor sinner.”",
		stories: [{
			title: "The spring",
			text: "A dirty hole in a riverbank. She ate grass and smeared mud on her face as told. The crowd laughed. Then water came. Obedience looked foolish first."
		}],
		miracles: [{
			title: "Lourdes",
			text: "The Church’s medical bureau has documented healings that survive hostile review. They are not the point of the shrine. Conversion is. The water is a sign."
		}, {
			title: "Incorruption",
			text: "Her body, exhumed for the cause, was found remarkably preserved. She lies in a glass reliquary at Nevers — not as a spectacle, as a quiet."
		}],
		pathToSainthood: "Died 1879. Beatified 1925, canonized 1933. The Church canonized her life, not the apparitions — though she judged Lourdes worthy of belief.",
		prayer: "St. Bernadette, little and true, pray for the sick and for anyone who is laughed at.",
		image: "/images/bernadette.jpg"
	}),
	s({
		slug: "martha",
		name: "St. Martha of Bethany",
		shortName: "Martha",
		title: "Hostess of the Lord, sister of Mary and Lazarus",
		feast: {
			month: 7,
			day: 29
		},
		born: "Bethany, 1st century",
		died: "1st century",
		canonized: "Venerated from the beginning",
		symbols: [
			"keys",
			"ladle",
			"dragon (later legend)"
		],
		patronages: [
			"cooks",
			"housewives",
			"hospitality",
			"servants",
			"hoteliers"
		],
		topics: [
			"family",
			"hospitality",
			"work",
			"friendship"
		],
		kidLine: "Martha made dinner for Jesus. She worked hard. Jesus loved her house.",
		summary: "The woman who served, complained, believed, and still kept a place at the table for God.",
		life: "Luke 10: she is anxious about many things while her sister sits. John 11: she runs to meet Jesus before Lazarus’s tomb and makes the same confession as Peter — “I believe you are the Christ.” John 12: she serves again at the supper. The Church needs both sisters. A toddler understands the one who is in the kitchen.",
		stories: [{
			title: "The better part",
			text: "Jesus does not hate dinner. He hates the worry that cannot sit down. Martha’s feast day now sits with Mary and Lazarus — the whole house saved."
		}],
		miracles: [{
			title: "Lazarus her brother",
			text: "The great sign in her family is her brother’s return from the tomb. Hospitality, then, is not small. It is the house where God raises the dead."
		}],
		pathToSainthood: "New Testament saint. Since 2021 the feast is of Martha, Mary, and Lazarus together on July 29.",
		prayer: "St. Martha, pray for everyone cooking while the conversation happens in the other room."
	}),
	s({
		slug: "perpetua",
		name: "Ss. Perpetua and Felicity",
		shortName: "Perpetua",
		title: "Martyrs of Carthage",
		feast: {
			month: 3,
			day: 7
		},
		born: "Carthage, late 2nd century",
		died: "Carthage, 203, killed in the arena",
		canonized: "Venerated from the 3rd century; named in the Roman Canon",
		symbols: [
			"cow",
			"ladder",
			"infant"
		],
		patronages: [
			"mothers",
			"expectant mothers",
			"martyrs",
			"Carthage"
		],
		topics: [
			"mothers",
			"martyrs",
			"courage",
			"friendship"
		],
		kidLine: "Perpetua and Felicity were mommies who loved Jesus so much they were brave in a hard place.",
		summary: "A noblewoman and her slave, both young mothers, who died together and are named at every Mass in the Canon.",
		life: "Vibia Perpetua, 22, nursing a child, kept a prison diary — one of the earliest writings we have from a Christian woman. Felicity, her slave, gave birth in jail two days before the games. They were thrown to a wild cow, then killed by the sword. Perpetua guided the gladiator’s wavering hand to her own throat. The Church reads them as what baptism costs and what friendship in Christ looks like across class.",
		stories: [{
			title: "The ladder",
			text: "Perpetua dreamed a bronze ladder and a dragon under it. She stepped on the dragon’s head and climbed. Baptism as combat, told to a child as: Jesus helps us be brave."
		}],
		miracles: [{
			title: "The diary",
			text: "That a young mother’s own words survive from 203 is itself a mercy. We know their names because they wrote, and because Rome would not forget."
		}],
		pathToSainthood: "Named in the Roman Canon. Feast March 7. Their passion was public reading in African churches within years of the death.",
		prayer: "Ss. Perpetua and Felicity, pray for mothers, and for friends who will not leave each other."
	}),
	s({
		slug: "helena",
		name: "St. Helena",
		shortName: "Helena",
		title: "Empress, finder of the True Cross",
		feast: {
			month: 8,
			day: 18
		},
		born: "Drepanum (perhaps), c. 250",
		died: "Nicomedia, c. 330",
		canonized: "Venerated from late antiquity",
		symbols: [
			"cross",
			"crown",
			"nails"
		],
		patronages: [
			"converts",
			"difficult marriages",
			"archaeologists",
			"divorced people"
		],
		topics: [
			"conversion",
			"the Cross",
			"mothers",
			"pilgrimage"
		],
		kidLine: "Helena was an empress who went looking for Jesus’ Cross, and she found it.",
		summary: "Constantine’s mother, a convert who spent her old age digging up the memory of the Passion.",
		life: "Of humble origin, wife then discarded by Constantius Chlorus, mother of Constantine. She converted after her son’s rise. In old age she went to the Holy Land, built churches on the Mount of Olives and at Bethlehem, and — by the tradition Eusebius and later writers keep — recovered the relic of the True Cross. Whether every nail is authentic, the pilgrimage of an empress to the poor places of the Gospel is the point.",
		stories: [{
			title: "The three crosses",
			text: "Legend: three crosses found, a dying woman healed when laid on the true one. God identifies His wood by mercy, not by a label."
		}],
		miracles: [{
			title: "The finding",
			text: "The Church keeps the Feast of the Exaltation of the Cross in September in part because of this recovery. Relics can be abused. They can also keep a people from spiritualizing Calvary away."
		}],
		pathToSainthood: "Cultus ancient, especially in the East. Feast August 18 in the Roman Martyrology.",
		prayer: "St. Helena, teach us to look for the Cross, not to look away."
	}),
	s({
		slug: "polycarp",
		name: "St. Polycarp of Smyrna",
		shortName: "Polycarp",
		title: "Bishop and martyr, hearer of the apostle John",
		feast: {
			month: 2,
			day: 23
		},
		born: "c. 69",
		died: "Smyrna, c. 155, burned then stabbed",
		canonized: "Venerated from the 2nd century",
		symbols: [
			"fire",
			"dove",
			"bishop’s staff"
		],
		patronages: ["earache", "against dysentery"],
		topics: [
			"martyrs",
			"apostolic fathers",
			"courage",
			"tradition"
		],
		kidLine: "Polycarp learned about Jesus from someone who knew Jesus. He was brave even when he was old.",
		summary: "The old bishop who would not curse Christ after eighty-six years of service.",
		life: "A disciple of the apostle John, friend of Ignatius of Antioch, teacher of Irenaeus. He held Smyrna in a time of heresy and empire. Arrested as an old man, he was told to say “Caesar is lord.” He answered that he had served Christ eighty-six years. The fire did not at first consume him; a dagger finished it. The Martyrdom of Polycarp is the first full martyr-act outside the New Testament.",
		stories: [{
			title: "Eighty-six years",
			text: "“How can I blaspheme my King who saved me?” A sentence a father can memorize for the day the world asks him to be quieter."
		}],
		miracles: [{
			title: "The fire",
			text: "Witnesses said the flames arched around him like a sail. Whether physics or sign, the Church kept the report as the smell of bread baking — a strange mercy in a killing."
		}],
		pathToSainthood: "Apostolic father and martyr. Feast February 23.",
		prayer: "St. Polycarp, keep us faithful for the long years."
	}),
	s({
		slug: "justin",
		name: "St. Justin Martyr",
		shortName: "Justin",
		title: "Philosopher and apologist",
		feast: {
			month: 6,
			day: 1
		},
		born: "Flavia Neapolis (Nablus), c. 100",
		died: "Rome, c. 165, beheaded",
		canonized: "Venerated from the 2nd century",
		symbols: [
			"scroll",
			"philosopher’s cloak",
			"sword"
		],
		patronages: [
			"philosophers",
			"apologists",
			"speakers"
		],
		topics: [
			"conversion",
			"Scripture",
			"reason",
			"martyrs"
		],
		kidLine: "Justin asked a lot of questions. He found out Jesus is the true answer, and he told other people.",
		summary: "The philosopher who argued that every honest question is already on the way to the Word.",
		life: "A Samaritan-born seeker who tried Stoics, Peripatetics, Pythagoreans, Platonists. An old Christian on a seashore told him to read the prophets. He converted, kept the philosopher’s cloak, and opened a school in Rome. His Apologies describe Sunday Eucharist in the 150s — our earliest full outline of Mass. Denounced by a rival, he was beheaded under Marcus Aurelius.",
		stories: [{
			title: "The old man on the shore",
			text: "Arguments had not been enough. A conversation was. Intellectual conversion often looks like hospitality."
		}],
		miracles: [{
			title: "The Apologies",
			text: "That we still know how second-century Christians prayed on Sunday is Justin’s gift. He gave the Church her memory of herself."
		}],
		pathToSainthood: "Martyr. Feast June 1. Patron of those who think for a living and still have to die for a Name.",
		prayer: "St. Justin, make our questions honest, and our answers brave."
	}),
	s({
		slug: "leo-great",
		name: "St. Leo the Great",
		shortName: "Leo",
		title: "Pope and Doctor of the Church",
		feast: {
			month: 11,
			day: 10
		},
		born: "Tuscany, c. 400",
		died: "Rome, 461",
		canonized: "Venerated from his death; Doctor, 1754",
		symbols: [
			"tiara",
			"book",
			"Attila turning away"
		],
		patronages: [
			"popes",
			"spiritual directors",
			"musicians"
		],
		topics: [
			"papacy",
			"Incarnation",
			"Doctors",
			"courage"
		],
		kidLine: "Leo was a pope who told the truth about Jesus: He is truly God and truly a man. He also talked a fierce king out of wrecking Rome.",
		summary: "The pope who defined Chalcedon in a letter and met Attila at the gates.",
		life: "Elected 440. His Tome to Flavian stated the hypostatic union so clearly the Council of Chalcedon cried “Peter has spoken through Leo.” In 452 he met Attila; the Huns turned back. In 455 he could not stop the Vandals, but he reduced the slaughter. His sermons on the Nativity still teach Christmas: Christian, remember your dignity.",
		stories: [{
			title: "Attila",
			text: "A bishop in gold vestments on a road, facing a warlord. Diplomacy as a work of mercy."
		}],
		miracles: [{
			title: "The Tome",
			text: "The miracle is doctrinal: one letter held the center of the faith when the world wanted Jesus to be only God, or only man."
		}],
		pathToSainthood: "Pope, confessor. Named “the Great.” Declared Doctor of the Church in 1754. Feast November 10.",
		prayer: "St. Leo, keep us from shrinking Christ, and from shrinking our courage."
	}),
	s({
		slug: "jerome",
		name: "St. Jerome",
		shortName: "Jerome",
		title: "Doctor of the Church, translator of the Vulgate",
		feast: {
			month: 9,
			day: 30
		},
		born: "Stridon, c. 347",
		died: "Bethlehem, 420",
		canonized: "Venerated from antiquity; Doctor from the start of that list",
		symbols: [
			"lion",
			"skull",
			"cardinal red (later art)",
			"book"
		],
		patronages: [
			"translators",
			"librarians",
			"scripture scholars",
			"archivists"
		],
		topics: [
			"Scripture",
			"Doctors",
			"penance",
			"languages"
		],
		kidLine: "Jerome loved God’s book so much he learned hard languages to write it clearly. A lion is often with him in pictures.",
		summary: "The irascible genius who gave the Latin Church her Bible.",
		life: "Scholar, satirist, desert monk, secretary to Pope Damasus. He learned Hebrew from Jewish teachers and produced the Vulgate, the Latin Bible that formed the West for a millennium. He was difficult, sarcastic, and capable of deep friendship (Paula, Eustochium). He died in Bethlehem near the cave of the Nativity, still arguing and still praying.",
		stories: [{
			title: "The lion",
			text: "A legend: he pulled a thorn from a lion’s paw, and the beast stayed. Read it as you like. The real thorn he pulled was ignorance of Scripture."
		}],
		miracles: [{
			title: "The Vulgate",
			text: "A translation that taught Europe to pray. Not flashy. More lasting than a healing at a shrine."
		}],
		pathToSainthood: "Confessor and Doctor. Feast September 30. One of the four great Latin Doctors.",
		prayer: "St. Jerome, make us students of the Word, even when we are cranky."
	}),
	s({
		slug: "bernard",
		name: "St. Bernard of Clairvaux",
		shortName: "Bernard",
		title: "Abbot, Doctor mellifluus",
		feast: {
			month: 8,
			day: 20
		},
		born: "Fontaine-lès-Dijon, 1090",
		died: "Clairvaux, 1153",
		canonized: "1174 by Pope Alexander III",
		symbols: [
			"white cowl",
			"bees",
			"book",
			"dog"
		],
		patronages: [
			"beekeepers",
			"Gibraltar",
			"Cistercians",
			"preachers"
		],
		topics: [
			"Mary",
			"monks",
			"Doctors",
			"love"
		],
		kidLine: "Bernard was a monk who talked about Jesus and Mary with great love. People said his words were like honey.",
		summary: "The Cistercian who pulled Europe by the sleeve back toward the love of God.",
		life: "A Burgundian noble who entered Cîteaux with thirty friends and relatives, then founded Clairvaux. He advised popes, preached the Second Crusade (which failed), and wrote on the Song of Songs as the story of the soul and the Word. His devotion to Mary is the “Our Lady, our mediator” that later centuries would deepen. He could be severe. He was also tender.",
		stories: [{
			title: "Lactatio",
			text: "A mystical legend: Mary gives him a drop of milk as wisdom. Too sweet for some. Keep the meaning: all true teaching is received, not invented."
		}],
		miracles: [{
			title: "The honey",
			text: "Called Doctor Mellifluus — the honey-tongued. Crowds wept. The miracle is a preacher who made people want holiness."
		}],
		pathToSainthood: "Canonized 1174. Named Doctor of the Church in 1830. Feast August 20.",
		prayer: "St. Bernard, teach us to love Mary because we love her Son."
	}),
	s({
		slug: "albert-the-great",
		name: "St. Albert the Great",
		shortName: "Albert",
		title: "Bishop, Doctor, teacher of Aquinas",
		feast: {
			month: 11,
			day: 15
		},
		born: "Lauingen, c. 1200",
		died: "Cologne, 1280",
		canonized: "1931 by Pope Pius XI (who also named him Doctor)",
		symbols: [
			"book",
			"globe",
			"Dominican habit"
		],
		patronages: [
			"scientists",
			"philosophers",
			"students",
			"naturalists",
			"Cincinnati"
		],
		topics: [
			"science",
			"study",
			"Doctors",
			"Dominicans"
		],
		kidLine: "Albert loved to look at plants, stars, and animals, and he said: God made these. He was St. Thomas’s teacher.",
		summary: "The bishop who refused the split between the laboratory and the chapel.",
		life: "A German Dominican who taught in Paris and Cologne. He wrote on Aristotle, minerals, animals, the Blessed Sacrament. He recognized Thomas Aquinas’s genius when others called the silent student a “dumb ox.” Late in life he walked to Paris to defend his dead student’s work. He died in Cologne, memory fading, still a Dominican.",
		stories: [{
			title: "The dumb ox",
			text: "Classmates mocked Thomas. Albert said: this ox will bellow so loud the world will hear. Teachers exist to see what mockers miss."
		}],
		miracles: [{
			title: "The unity of truth",
			text: "No thunderbolt. A life that treated creation as readable. Catholic science still stands in his shadow."
		}],
		pathToSainthood: "Beatified 1622, canonized and named Doctor in 1931. Patron of scientists, 1941. Feast November 15.",
		prayer: "St. Albert, bless every child who asks “why,” and every father who does not fake an answer."
	}),
	s({
		slug: "francis-de-sales",
		name: "St. Francis de Sales",
		shortName: "Francis de Sales",
		title: "Bishop of Geneva, Doctor, gentleman saint",
		feast: {
			month: 1,
			day: 24
		},
		born: "Thorens, Savoy, 1567",
		died: "Lyons, 1622",
		canonized: "1665 by Pope Alexander VII",
		symbols: [
			"heart",
			"crown of thorns",
			"pen"
		],
		patronages: [
			"writers",
			"journalists",
			"the deaf",
			"teachers",
			"the Catholic press"
		],
		topics: [
			"gentleness",
			"lay holiness",
			"Doctors",
			"friendship"
		],
		kidLine: "Francis was a kind bishop. He said you can be holy at home, not only in a church.",
		summary: "The gentleman who taught that holiness is for kitchens, shops, and marriages.",
		life: "A Savoyard noble, ordained, then missionary in Calvinist Chablais — he slipped pamphlets under doors, the original Catholic journalist. As bishop of Geneva (in exile at Annecy) he directed souls with a courtesy that disarmed. With Jane Frances de Chantal he founded the Visitation. Introduction to the Devout Life is still the book you hand a layperson. He died of a stroke at 55, worn out by letters.",
		stories: [{
			title: "The pamphlets",
			text: "He wrote because he could not preach in some towns. Words left on a threshold. Fathers who text a line of faith at lunch are in this line."
		}],
		miracles: [{
			title: "A convert’s patience",
			text: "He won the Chablais back not by a miracle of fire but by years of meek argument. Pius IX named him Doctor in 1877."
		}],
		pathToSainthood: "Canonized 1665. Doctor of the Church, 1877. Patron of writers and journalists, 1923. Feast January 24.",
		prayer: "St. Francis de Sales, make our words gentle and our homes devout."
	}),
	s({
		slug: "john-baptist-de-la-salle",
		name: "St. John Baptist de La Salle",
		shortName: "De La Salle",
		title: "Founder of the Christian Brothers",
		feast: {
			month: 4,
			day: 7
		},
		born: "Reims, 1651",
		died: "Rouen, 1719",
		canonized: "1900 by Pope Leo XIII",
		symbols: [
			"book",
			"boys at desks",
			"star"
		],
		patronages: [
			"teachers",
			"school principals",
			"educators of the poor"
		],
		topics: [
			"teachers",
			"children",
			"the poor",
			"schools"
		],
		kidLine: "John loved schools. He wanted every child — even poor children — to learn and to know God.",
		summary: "The canon of Reims who gave away a fortune and invented the Catholic school as we know it.",
		life: "Born to privilege, ordained, then captured by the work of training teachers for poor boys. He brought the teachers into his house, resigned his canonry, distributed his wealth in a famine, and founded the Brothers of the Christian Schools. They taught in French, not Latin; in groups, not tutors. He wrote a method, a rule, and a spirituality of the classroom. He died on Good Friday 1719.",
		stories: [{
			title: "The fortune",
			text: "Relatives were furious. He let the money go. A school for the poor is always paid for by someone who could have kept it."
		}],
		miracles: [{
			title: "The classroom",
			text: "The miracle is institutional: free schools, trained lay teachers, simultaneous instruction. Modern Catholic education begins here."
		}],
		pathToSainthood: "Beatified 1888, canonized 1900. Named patron of teachers in 1950. Feast April 7.",
		prayer: "St. John Baptist de La Salle, pray for every tired teacher, including the one at home."
	}),
	s({
		slug: "camillus",
		name: "St. Camillus de Lellis",
		shortName: "Camillus",
		title: "Founder of the Camillians, giant of the sick",
		feast: {
			month: 7,
			day: 14
		},
		born: "Bucchianico, 1550",
		died: "Rome, 1614",
		canonized: "1746 by Pope Benedict XIV",
		symbols: ["red cross on a black habit", "sickbed"],
		patronages: [
			"nurses",
			"hospitals",
			"the sick",
			"doctors"
		],
		topics: [
			"the sick",
			"nurses",
			"conversion",
			"mercy"
		],
		kidLine: "Camillus was very tall and used to be wild. Then he spent his life taking care of sick people.",
		summary: "The converted soldier who taught Europe to put a red cross on the care of the dying.",
		life: "Six-foot-six, a gambler and soldier with a running sore on his leg. Converted at 25, tried the Capuchins, was sent away because of the wound. He served in a Roman hospital, saw the cruelty, and founded a company of men who would tend the sick even in plague ships and battlefields. They wore a red cross — before the Geneva one. He died having spent himself.",
		stories: [{
			title: "The wound",
			text: "The thing that kept him out of one order became the door to his vocation. Illness is not always an interruption."
		}],
		miracles: [{
			title: "Plague wards",
			text: "Camillians stayed when others fled. Survivors called it a miracle. It was a vow: to serve Christ in the sick even at the cost of life."
		}],
		pathToSainthood: "Beatified 1742, canonized 1746. Patron of nurses and hospitals. Feast July 14.",
		prayer: "St. Camillus, stay with us in waiting rooms and at night fevers."
	}),
	s({
		slug: "john-of-god",
		name: "St. John of God",
		shortName: "John of God",
		title: "Founder of the Hospitallers",
		feast: {
			month: 3,
			day: 8
		},
		born: "Montemor-o-Novo, Portugal, 1495",
		died: "Granada, 1550",
		canonized: "1690 by Pope Alexander VIII",
		symbols: [
			"pomegranate",
			"crown of thorns",
			"beggar"
		],
		patronages: [
			"hospitals",
			"heart patients",
			"booksellers",
			"firefighters",
			"the mentally ill"
		],
		topics: [
			"the sick",
			"mental illness",
			"mercy",
			"hospitals"
		],
		kidLine: "John took sick people into his house when no one else wanted them.",
		summary: "The wandering soldier who went “mad” for God and invented a hospital that felt like a home.",
		life: "A Portuguese shepherd, then soldier, then peddler of books. A sermon by John of Ávila broke him; he ran the streets of Granada in holy folly and was locked in a psychiatric ward. Ávila visited and told him to turn the madness into work. He rented a house, begged for the sick, carried them on his back. He died of pneumonia after saving patients from a hospital fire, jumping into the cold river.",
		stories: [{
			title: "The fire",
			text: "He went in and came out with the sick. Later he would be named a patron of firefighters. Love looks like wet clothes and smoke."
		}],
		miracles: [{
			title: "The house",
			text: "Granada still remembers a hospital born from a breakdown. God uses even the night of the mind."
		}],
		pathToSainthood: "Canonized 1690. Patron of hospitals and of the dying. Feast March 8.",
		prayer: "St. John of God, carry the ones we cannot carry."
	}),
	s({
		slug: "gerard-majella",
		name: "St. Gerard Majella",
		shortName: "Gerard",
		title: "Redemptorist lay brother",
		feast: {
			month: 10,
			day: 16
		},
		born: "Muro Lucano, 1726",
		died: "Caposele, 1755",
		canonized: "1904 by Pope Pius X",
		symbols: [
			"lily",
			"crucifix",
			"letter"
		],
		patronages: [
			"expectant mothers",
			"childbirth",
			"children",
			"the falsely accused"
		],
		topics: [
			"mothers",
			"children",
			"humility",
			"Redemptorists"
		],
		kidLine: "Gerard loved mothers and babies. Families still ask him to watch over a baby on the way.",
		summary: "The young tailor-brother who became the patron of those who wait for a child.",
		life: "A frail Italian tailor, refused by Franciscans as too weak, accepted by the Redemptorists as a lay brother. He served as gardener, sacristan, porter. Falsely accused of impurity by a woman who later recanted; he had kept silence as his director ordered. He died of tuberculosis at 29. The patronage of expectant mothers grew from favors reported at his intercession, including a handkerchief he left with a family “for the time of need.”",
		stories: [{
			title: "The handkerchief",
			text: "A small cloth, a promise. When the labor went wrong they placed it on the mother, and both lived. From such domestic mercies a patronage is born."
		}],
		miracles: [{
			title: "Childbirth",
			text: "Centuries of mothers have kept his picture in a hospital bag. The Church named him their patron because the favors did not stop."
		}],
		pathToSainthood: "Beatified 1893, canonized 1904. Feast October 16. A saint who died younger than many new fathers.",
		prayer: "St. Gerard, watch over every mother and the child she carries."
	}),
	s({
		slug: "peregrine",
		name: "St. Peregrine Laziosi",
		shortName: "Peregrine",
		title: "Servite priest, patron of cancer patients",
		feast: {
			month: 5,
			day: 1
		},
		born: "Forlì, 1260",
		died: "Forlì, 1345",
		canonized: "1726 by Pope Benedict XIII",
		symbols: ["leg with a sore", "Servite habit"],
		patronages: [
			"cancer patients",
			"the sick",
			"AIDS patients"
		],
		topics: [
			"the sick",
			"conversion",
			"cancer",
			"healing"
		],
		kidLine: "Peregrine was very sick in his leg. He asked Jesus for help, and Jesus made him well. We ask him to pray for people who are very ill.",
		summary: "The political hothead whose own healed cancer made him the friend of the diagnosed.",
		life: "As a young man in Forlì he struck St. Philip Benizi in the face during a riot. Shame converted him; he joined the Servites. For years he stood as a penance and developed varicose veins and a cancerous ulcer of the leg. The night before amputation he dragged himself to the crucifix. He woke healed. He lived another twenty years, dying at 85.",
		stories: [{
			title: "The slap",
			text: "He hit a holy man, then followed him. Conversion can start in embarrassment."
		}],
		miracles: [{
			title: "The night before the knife",
			text: "A vision of Christ reaching from the Cross to touch the leg. In the morning the surgeons found nothing to cut. This is why his name is whispered in oncology waiting rooms."
		}],
		pathToSainthood: "Canonized 1726. Named special patron of cancer patients. Feast May 1.",
		prayer: "St. Peregrine, pray for everyone who has heard a hard diagnosis, and for those who love them."
	}),
	s({
		slug: "apollonia",
		name: "St. Apollonia",
		shortName: "Apollonia",
		title: "Virgin martyr of Alexandria",
		feast: {
			month: 2,
			day: 9
		},
		born: "Alexandria, 2nd–3rd century",
		died: "Alexandria, 249, leapt into the fire",
		canonized: "Venerated from the 3rd century",
		symbols: [
			"pincers",
			"tooth",
			"palm"
		],
		patronages: [
			"dentists",
			"toothache",
			"dental patients"
		],
		topics: [
			"martyrs",
			"courage",
			"dentists"
		],
		kidLine: "Apollonia was brave when mean people hurt her teeth. Dentists keep her as a friend.",
		summary: "The deaconess whose broken teeth made her the unlikely patron of a whole profession.",
		life: "During a riot in Alexandria under Decius, an aged Christian woman — Dionysius of Alexandria calls her a deaconess — had her teeth smashed. Threatened with fire unless she repeated impieties, she asked a moment’s pause and leapt into the flames herself. Eusebius kept the letter. The pincers in her icons are not a joke; they are the instrument of her passion.",
		stories: [{
			title: "A moment’s pause",
			text: "She was not thrown. She jumped. The Church has always seen that as the freedom of a martyr, not a suicide — she chose the fire rather than the lie."
		}],
		miracles: [{
			title: "Toothache",
			text: "Medieval Christians invoked her at the first pang. Patronage sometimes grows from the wound itself."
		}],
		pathToSainthood: "Early martyr. Feast February 9. Patroness of dentists — a fact every Catholic child with a loose tooth can be told.",
		prayer: "St. Apollonia, pray for sore mouths, brave dentists, and anyone in sudden pain."
	}),
	s({
		slug: "florian",
		name: "St. Florian",
		shortName: "Florian",
		title: "Martyr, patron of firefighters",
		feast: {
			month: 5,
			day: 4
		},
		born: "Cetinium (now in Austria), c. 250",
		died: "Enns river, c. 304, drowned with a stone",
		canonized: "Venerated from late antiquity in Austria and Bavaria",
		symbols: [
			"bucket",
			"flag",
			"burning house",
			"millstone"
		],
		patronages: [
			"firefighters",
			"brewers",
			"Austria",
			"chimney sweeps",
			"against flood and fire"
		],
		topics: [
			"courage",
			"martyrs",
			"firefighters",
			"soldiers"
		],
		kidLine: "Florian was a soldier who put out fires and loved Jesus. Firefighters ask him to pray.",
		summary: "The officer who would not offer incense, and who still holds a bucket in a thousand firehouse statues.",
		life: "A senior officer of the imperial army in Noricum. When Diocletian’s edicts reached the Danube he refused to sacrifice. He was flogged, then thrown into the Enns with a stone around his neck. Legend adds that he once saved a town with a single bucket of prayer. Austria and Poland took him to heart; immigrant firefighters carried him to American houses.",
		stories: [{
			title: "One bucket",
			text: "Whether or not the fire yielded to a pail, the picture is right: one person, on time, with water. That is a fire company."
		}],
		miracles: [{
			title: "The river",
			text: "His body was recovered and buried; a spring rose. Central Europe still walks in his procession on May 4."
		}],
		pathToSainthood: "Pre-congregation martyr. Feast May 4. Unofficial but universal patron of firefighters.",
		prayer: "St. Florian, guard those who run toward smoke, and keep our home safe in the night."
	}),
	s({
		slug: "cosmas-damian",
		name: "Ss. Cosmas and Damian",
		shortName: "Cosmas and Damian",
		title: "Unmercenary physicians, martyrs",
		feast: {
			month: 9,
			day: 26
		},
		born: "Arabia, 3rd century",
		died: "Cyrrhus or Aegea, c. 287",
		canonized: "Venerated from the 4th century; named in the Roman Canon",
		symbols: [
			"medicine box",
			"twin portraits",
			"red robes"
		],
		patronages: [
			"physicians",
			"surgeons",
			"pharmacists",
			"twins",
			"barbers"
		],
		topics: [
			"the sick",
			"mercy",
			"martyrs",
			"twins"
		],
		kidLine: "Cosmas and Damian were twin doctors who did not make people pay. They loved Jesus and helped sick people for free.",
		summary: "The brother-physicians who would not take a fee, and who are named at the heart of the Mass.",
		life: "Twin brothers from Arabia, trained in medicine, they practiced without charge “for the love of Christ” — hence anargyroi, unmercenaries, in the East. Arrested under Diocletian, they survived several attempted executions in the legends before being beheaded. Rome put them in the Canon; a basilica in the Forum still bears their names.",
		stories: [{
			title: "No fee",
			text: "The scandal is economic. Healing as gift. A father can say: some things we do because people are ours, not because they can pay."
		}],
		miracles: [{
			title: "The leg of the Ethiopian",
			text: "A famous medieval miracle: they grafted a dead man’s leg onto a cancer patient in the night. Whether surgery or vision, Christian medicine has always been a bit bold."
		}],
		pathToSainthood: "Named in the Roman Canon. Feast September 26 (West), November 1 (East, with other unmercenaries).",
		prayer: "Ss. Cosmas and Damian, bless doctors, and make our care generous."
	}),
	s({
		slug: "ivo",
		name: "St. Ivo of Kermartin",
		shortName: "Ivo",
		title: "Advocate of the poor",
		feast: {
			month: 5,
			day: 19
		},
		born: "Kermartin, Brittany, 1253",
		died: "Louannec, 1303",
		canonized: "1347 by Pope Clement VI",
		symbols: [
			"lawyer’s cap",
			"poor clients",
			"cat (later folk)"
		],
		patronages: [
			"lawyers",
			"judges",
			"notaries",
			"abandoned children",
			"Brittany"
		],
		topics: [
			"justice",
			"the poor",
			"lawyers",
			"honesty"
		],
		kidLine: "Ivo was a lawyer who helped poor people, even when they could not pay.",
		summary: "The parish priest and judge who made “honest lawyer” a possible sentence.",
		life: "A Breton noble, trained in civil and canon law at Paris and Orléans. He served as a diocesan judge, refused bribes, fasted, and represented widows and orphans for nothing. Ordained, he became a parish priest who still pleaded in court. He built a hospital with his own money. Brittany still calls him “sant Erwan.”",
		stories: [{
			title: "The widow’s case",
			text: "He would leave the bench to argue for the party who had no counsel. Procedure bent toward the poor, not the other way."
		}],
		miracles: [{
			title: "Canonization in 44 years",
			text: "Miracles at his tomb were numerous enough that a lawyer became a saint while people who had seen him still lived. That itself is evidence."
		}],
		pathToSainthood: "Canonized 1347. Universal patron of lawyers. Feast May 19.",
		prayer: "St. Ivo, keep every lawyer honest, and every father just in the small cases at home."
	}),
	s({
		slug: "genesius",
		name: "St. Genesius of Rome",
		shortName: "Genesius",
		title: "Actor and martyr",
		feast: {
			month: 8,
			day: 25
		},
		born: "Rome, 3rd century",
		died: "Rome, c. 303, beheaded",
		canonized: "Venerated from late antiquity",
		symbols: ["comic mask", "baptismal font on a stage"],
		patronages: [
			"actors",
			"comedians",
			"musicians",
			"torture victims"
		],
		topics: [
			"conversion",
			"actors",
			"martyrs",
			"baptism"
		],
		kidLine: "Genesius was an actor who made fun of baptism — then he wanted it for real, and he said so.",
		summary: "The mime who mocked the Church, was converted mid-scene, and died for the part he had just received.",
		life: "A Roman actor commissioned to parody Christian baptism before Diocletian. In the middle of the sketch he saw, or believed he saw, angels and a book of his sins washed clean. He stopped the joke and asked for real baptism. The emperor, not amused, had him beaten and beheaded. Theatre people have claimed him ever since.",
		stories: [{
			title: "Mid-scene",
			text: "Conversion does not always wait for the end of the show. Sometimes the joke becomes the sacrament."
		}],
		miracles: [{
			title: "The book of sins",
			text: "He saw his own page made white. Whether vision or grace, he would not go back to the script."
		}],
		pathToSainthood: "Early martyr. Feast August 25. Patron of actors — pray for him before the school play.",
		prayer: "St. Genesius, bless everyone who performs, and make our play true."
	}),
	s({
		slug: "brigid-kildare",
		name: "St. Brigid of Kildare",
		shortName: "Brigid",
		title: "Abbess, Mary of the Gael",
		feast: {
			month: 2,
			day: 1
		},
		born: "Faughart, c. 451",
		died: "Kildare, c. 525",
		canonized: "Venerated from the 6th century in Ireland",
		symbols: [
			"rush cross",
			"cow",
			"oak",
			"lamp"
		],
		patronages: [
			"Ireland",
			"dairymaids",
			"poets",
			"midwives",
			"newborns",
			"scholars"
		],
		topics: [
			"Ireland",
			"hospitality",
			"the poor",
			"nuns"
		],
		kidLine: "Brigid was a kind Irish girl who shared butter and milk and built a church under an oak.",
		summary: "Ireland’s second patron, whose rush cross still hangs over doors on the eve of spring.",
		life: "Daughter of a chieftain and a slave, she gave away so much food her father despaired. She founded a double monastery at Cill Dara, the church of the oak, and a school of art that would illuminate Gospels. Stories multiply: the cloak that spread over a field, the beer from bathwater for thirsty lepers, the abbess who should have been a bishop in all but name. History is thinner than folklore; holiness is not.",
		stories: [{
			title: "The rush cross",
			text: "She wove a cross from floor rushes at a dying chieftain’s bed and taught him Christ with her hands. Irish children still weave them on January 31."
		}],
		miracles: [{
			title: "Butter for the poor",
			text: "Whatever she gave away was found replaced. A household miracle, the right size for a child: God is not outgiven."
		}],
		pathToSainthood: "Early Irish cultus, twin to Patrick’s. Feast February 1, Imbolc in the old calendar of the land.",
		prayer: "St. Brigid, keep a fire in this house, and a welcome at this door."
	}),
	s({
		slug: "louis-ix",
		name: "St. Louis IX of France",
		shortName: "Louis",
		title: "King of France, tertiary",
		feast: {
			month: 8,
			day: 25
		},
		born: "Poissy, 1214",
		died: "Tunis, 1270",
		canonized: "1297 by Pope Boniface VIII",
		symbols: [
			"crown of thorns",
			"scepter",
			"fleur-de-lis"
		],
		patronages: [
			"France",
			"tertiaries",
			"barbers",
			"builders",
			"parenthood"
		],
		topics: [
			"fathers",
			"justice",
			"kings",
			"the poor"
		],
		kidLine: "Louis was a king who prayed, loved his children, and was fair. He built a beautiful chapel for Jesus’ Crown of Thorns.",
		summary: "The king who heard the poor under an oak and raised eleven children toward heaven.",
		life: "Crowned at 12, formed by his mother Blanche. He married Margaret of Provence; they had eleven children. He reformed justice, forbade usury, fed beggars from his table, and built the Sainte-Chapelle for relics of the Passion. He led two Crusades, was captured in Egypt, and died of dysentery near Tunis. Joinville’s Life shows a man who was both king and catechist of his own boys.",
		stories: [{
			title: "Under the oak at Vincennes",
			text: "He sat on the ground and heard cases, so the poor could reach him. Authority as availability."
		}],
		miracles: [{
			title: "The Sainte-Chapelle",
			text: "Not a healing — a room of glass that still teaches what a king thought worthy of gold: the Crown of Thorns, not his own."
		}],
		pathToSainthood: "Canonized 1297, within a generation. Feast August 25. Model of the Christian ruler and of a serious father.",
		prayer: "St. Louis, teach fathers to be just, and to tell their sons the stories that matter."
	}),
	s({
		slug: "margaret-scotland",
		name: "St. Margaret of Scotland",
		shortName: "Margaret",
		title: "Queen, mother of kings",
		feast: {
			month: 11,
			day: 16
		},
		born: "Hungary, c. 1045",
		died: "Edinburgh, 1093",
		canonized: "1250 by Pope Innocent IV",
		symbols: [
			"black cross",
			"book of Gospels",
			"crown"
		],
		patronages: [
			"Scotland",
			"large families",
			"learning",
			"orphans"
		],
		topics: [
			"mothers",
			"family",
			"the poor",
			"queens"
		],
		kidLine: "Margaret was a queen with many children. She prayed, fed poor people, and taught her family to love God.",
		summary: "The English-Hungarian princess who civilized a court by love and the Mass.",
		life: "Raised in the Hungarian court, shipwrecked onto the Scottish coast, she married King Malcolm III. She bore eight children, reformed court manners, founded churches, ransomed English captives, and served orphans with her own hands. Malcolm, a rough soldier, never learned to read; he kissed her books. She died of grief a few days after he was killed in battle.",
		stories: [{
			title: "The king who kissed the book",
			text: "He could not read her Gospel book, so he gold-bound it. Devotion sometimes looks like a husband’s clumsy honor."
		}],
		miracles: [{
			title: "The Gospel book",
			text: "A manuscript of hers, dropped in a river, was found unharmed. It survives in Oxford. A small sign for a woman of the Word."
		}],
		pathToSainthood: "Canonized 1250. Patroness of Scotland. Feast November 16 (June 10 in some older calendars).",
		prayer: "St. Margaret, pray for large families, and for every mother civilizing a noisy house."
	}),
	s({
		slug: "margaret-mary",
		name: "St. Margaret Mary Alacoque",
		shortName: "Margaret Mary",
		title: "Apostle of the Sacred Heart",
		feast: {
			month: 10,
			day: 16
		},
		born: "L’Hautecour, 1647",
		died: "Paray-le-Monial, 1690",
		canonized: "1920 by Pope Benedict XV",
		symbols: ["heart with flames", "Visitation habit"],
		patronages: [
			"polio sufferers",
			"devotees of the Sacred Heart",
			"loss of parents"
		],
		topics: [
			"Sacred Heart",
			"prayer",
			"reparation",
			"Eucharist"
		],
		kidLine: "Jesus showed Margaret Mary His Heart — on fire with love for us. That is why we see pictures of Jesus with a heart.",
		summary: "The Visitation nun who received the Sacred Heart and taught the Church to look at love wounded.",
		life: "A Burgundian girl who lost her father, suffered a long illness, and entered the Visitation at Paray-le-Monial. Between 1673 and 1675 she received revelations of Christ’s Heart, asking for a feast, for First Friday Communion, and for a holy hour of reparation. She was mocked in her own convent until St. Claude de la Colombière, her Jesuit confessor, discerned the grace. She died saying “I shall die happy, because I have the Heart of Jesus.”",
		stories: [{
			title: "The holy hour",
			text: "He asked her to keep Him company in the Garden for an hour. A toddler can sit with a candle. That is already the devotion."
		}],
		miracles: [{
			title: "The feast",
			text: "The Sacred Heart feast is now universal. A hidden nun changed the calendar. That is a miracle of obedience more than of fire."
		}],
		pathToSainthood: "Beatified 1864, canonized 1920. Feast October 16. The Sacred Heart devotion she carried is now ordinary Catholic air.",
		prayer: "St. Margaret Mary, make our family’s heart a little like His."
	}),
	s({
		slug: "catherine-laboure",
		name: "St. Catherine Labouré",
		shortName: "Catherine Labouré",
		title: "Daughter of Charity, seer of the Miraculous Medal",
		feast: {
			month: 11,
			day: 28
		},
		born: "Fain-lès-Moutiers, 1806",
		died: "Paris, 1876",
		canonized: "1947 by Pope Pius XII",
		symbols: [
			"miraculous medal",
			"cornette",
			"rays from hands"
		],
		patronages: [
			"the elderly",
			"miraculous medal",
			"catechists"
		],
		topics: [
			"Mary",
			"humility",
			"medal",
			"the poor"
		],
		kidLine: "Mary showed Catherine a medal. On it Mary’s hands pour light. People still wear it.",
		summary: "The silent sister who kept a secret for forty years while the medal went around the world.",
		life: "A Burgundy farmer’s daughter, she saw a vision of St. Vincent as a child and joined the Daughters of Charity in Paris. In 1830, in the chapel on the Rue du Bac, the Blessed Virgin showed her the design of a medal: Mary standing on the globe, rays from her fingers, the prayer “O Mary, conceived without sin, pray for us who have recourse to thee.” Catherine told only her confessor. She spent the rest of her life answering the door and caring for old men, unrecognized. The medal spread by millions.",
		stories: [{
			title: "The chair",
			text: "In one apparition Mary sat in the chapel and Catherine rested her hands on Mary’s knees, like a child. That is the tone of this devotion: near, not theatrical."
		}],
		miracles: [{
			title: "The medal",
			text: "Conversions and healings attached to it from the 1830s. The Church does not treat the medal as magic. It is a sacramental: a visible plea."
		}],
		pathToSainthood: "Her identity was revealed only after death. Beatified 1933, canonized 1947. Body incorrupt at the Rue du Bac. Feast November 28.",
		prayer: "St. Catherine, keep us small, and keep this medal from becoming a charm."
	}),
	s({
		slug: "louis-montfort",
		name: "St. Louis de Montfort",
		shortName: "Louis de Montfort",
		title: "Missionary, apostle of Marian consecration",
		feast: {
			month: 4,
			day: 28
		},
		born: "Montfort-sur-Meu, 1673",
		died: "Saint-Laurent-sur-Sèvre, 1716",
		canonized: "1947 by Pope Pius XII",
		symbols: [
			"book",
			"rosary",
			"walking staff"
		],
		patronages: [
			"preachers",
			"the Rosary",
			"consecrated persons"
		],
		topics: [
			"Mary",
			"Rosary",
			"missions",
			"consecration"
		],
		kidLine: "Louis told people: belong to Jesus with Mary’s help. He loved the Rosary.",
		summary: "The ragged missionary who taught that giving oneself to Mary is the short road to Christ.",
		life: "A Breton priest who walked western France preaching parish missions, often forbidden pulpits, sometimes beaten. He wrote True Devotion to Mary — the manuscript was lost for over a century — and the Secret of the Rosary. He founded the Company of Mary and the Daughters of Wisdom. He died at 43, worn out. John Paul II took his motto Totus Tuus from him.",
		stories: [{
			title: "The lost book",
			text: "True Devotion lay hidden in a chest through the Revolution and was found in 1842. Some seeds need winter."
		}],
		miracles: [{
			title: "Totus Tuus",
			text: "A pope’s whole pontificate traced to a skinny Breton’s little treatise. Influence is a slow miracle."
		}],
		pathToSainthood: "Beatified 1888, canonized 1947. Feast April 28. Patron of those who make or renew Marian consecration.",
		prayer: "St. Louis, let our family belong to Jesus through Mary, without fuss."
	}),
	s({
		slug: "john-xxiii",
		name: "St. John XXIII",
		shortName: "John XXIII",
		title: "Pope of the Council, Good Pope John",
		feast: {
			month: 10,
			day: 11
		},
		born: "Sotto il Monte, 1881",
		died: "Vatican, 1963",
		canonized: "2014 by Pope Francis",
		symbols: [
			"papal tiara",
			"open window",
			"smile"
		],
		patronages: [
			"papal delegates",
			"Christian unity",
			"the Second Vatican Council"
		],
		topics: [
			"papacy",
			"peace",
			"humor",
			"Council"
		],
		kidLine: "Pope John was a round, kind pope who opened a big Church meeting so people could love Jesus better.",
		summary: "The peasant pope who called Vatican II and made the papacy feel like a grandfather.",
		life: "Angelo Roncalli, fourth of thirteen children, diplomat in Bulgaria, Turkey, and France, Patriarch of Venice, elected at 76 as a “caretaker.” He called the Second Vatican Council, wrote Pacem in Terris, visited prisoners and hospitals, and kept a humor that disarmed. He died of stomach cancer during the Council, beloved even by people who did not love Rome.",
		stories: [{
			title: "A moon over the square",
			text: "On the night before the Council opened he spoke from the window to a crowd: “Go home and give your children a kiss.” A pontificate in one domestic sentence."
		}],
		miracles: [{
			title: "The opening",
			text: "He said he wanted to open the windows. Whether one likes every draft, the courage to call a council as an old man is a kind of wonder."
		}],
		pathToSainthood: "Beatified 2000 by John Paul II, canonized 2014 with John Paul II. Feast October 11, opening day of Vatican II.",
		prayer: "St. John XXIII, give us grandfatherly courage and a peaceful house."
	}),
	s({
		slug: "josemaria",
		name: "St. Josemaría Escrivá",
		shortName: "Josemaría",
		title: "Founder of Opus Dei",
		feast: {
			month: 6,
			day: 26
		},
		born: "Barbastro, 1902",
		died: "Rome, 1975",
		canonized: "2002 by Pope John Paul II",
		symbols: [
			"Mass kit",
			"rose",
			"ordinary desk"
		],
		patronages: ["diabetics", "ordinary work"],
		topics: [
			"work",
			"lay holiness",
			"everyday",
			"Mass"
		],
		kidLine: "Josemaría said that doing ordinary things — work, dishes, play — can be a way to love God.",
		summary: "The priest who taught that a desk and a kitchen are altars if the intention is love.",
		life: "A Spanish priest who, in 1928, saw a mission to remind ordinary Christians that they are called to holiness without leaving the world. He founded Opus Dei, suffered the Civil War, moved to Rome, and wrote The Way — short, sharp points for people who have jobs. Critics found the movement too tight; the Church judged the founder’s holiness. He died in his workroom.",
		stories: [{
			title: "The chocolate",
			text: "He taught children (and adults) to offer little things: a sweet not taken, a job finished well. The little way, in a suit."
		}],
		miracles: [{
			title: "A surgeon’s hands",
			text: "The miracle for canonization involved a medical healing after prayer for his intercession. The deeper claim is a million sanctified workdays."
		}],
		pathToSainthood: "Beatified 1992, canonized 2002. Feast June 26. A saint for commutes and inboxes.",
		prayer: "St. Josemaría, bless this ordinary day, and the work in it."
	}),
	s({
		slug: "newman",
		name: "St. John Henry Newman",
		shortName: "Newman",
		title: "Cardinal, convert, Doctor of the Church",
		feast: {
			month: 10,
			day: 9
		},
		born: "London, 1801",
		died: "Edgbaston, 1890",
		canonized: "2019 by Pope Francis; named Doctor of the Church by Pope Leo XIV, 1 November 2025",
		symbols: [
			"cardinal’s hat",
			"book",
			"Oratorian collar"
		],
		patronages: [
			"converts",
			"students",
			"essayists"
		],
		topics: [
			"conversion",
			"conscience",
			"study",
			"England"
		],
		kidLine: "John Henry loved truth so much he left a church he knew to come into the Catholic Church, even though it cost him friends.",
		summary: "The Oxford man who followed an argument into Rome and taught the West about conscience and development.",
		life: "Anglican priest, leader of the Oxford Movement, received into the Church in 1845 at great personal cost. Founded the Oratory in Birmingham, wrote Apologia pro Vita Sua, The Idea of a University, and the Essay on Development. Made cardinal by Leo XIII. A prose master who never became a bishop, which may have been a mercy. Heart Speaks to Heart was his motto.",
		stories: [{
			title: "Lead, Kindly Light",
			text: "A poem written in illness at sea, years before his conversion: “one step enough for me.” A father’s prayer when the map is short."
		}],
		miracles: [{
			title: "The deacon in America",
			text: "His canonization miracle was the healing of a pregnant American deacon’s wife from a grave diagnosis. The Englishman’s reach is now ordinary."
		}],
		pathToSainthood: "Beatified 2010 by Benedict XVI at Birmingham, canonized 2019. In 2025 Pope Leo XIV named him a Doctor of the Church. Feast October 9.",
		prayer: "St. John Henry, keep our consciences tender and our minds honest."
	}),
	s({
		slug: "charbel",
		name: "St. Charbel Makhlouf",
		shortName: "Charbel",
		title: "Maronite hermit of Lebanon",
		feast: {
			month: 7,
			day: 24
		},
		born: "Bekaa Kafra, 1828",
		died: "Annaya, 1898",
		canonized: "1977 by Pope Paul VI",
		symbols: [
			"hood",
			"light from the tomb",
			"cedars"
		],
		patronages: [
			"Lebanon",
			"hermits",
			"those who suffer in silence"
		],
		topics: [
			"prayer",
			"silence",
			"the sick",
			"monks"
		],
		kidLine: "Charbel was a quiet monk on a mountain. He loved to pray. People still ask him to pray when someone is sick.",
		summary: "The hermit whose silence outlived empires, and whose tomb still draws the sick.",
		life: "A Maronite shepherd boy who became a monk at Annaya, then a hermit in a hillside cell. He celebrated Mass with intense recollection, lived on almost nothing, and died of a stroke on Christmas Eve after a liturgy. Lights were seen at his tomb; his body was found intact and exuding moisture. He has become a sign of Lebanese holiness beyond all factions.",
		stories: [{
			title: "The mountain",
			text: "He chose a cell over a pulpit. In a loud age, that choice is already a sermon."
		}],
		miracles: [{
			title: "Healings at Annaya",
			text: "Thousands of favors, including documented medical cases, are attached to his intercession. Oil, light, and silence — the style of his wonders matches his life."
		}],
		pathToSainthood: "Beatified 1965, canonized 1977. Feast July 24 (third Sunday of July in the Maronite calendar).",
		prayer: "St. Charbel, teach us to be quiet enough to pray."
	}),
	s({
		slug: "damien-molokai",
		name: "St. Damien of Molokai",
		shortName: "Damien",
		title: "Apostle to the lepers",
		feast: {
			month: 5,
			day: 10
		},
		born: "Tremelo, Belgium, 1840",
		died: "Kalaupapa, Hawaii, 1889",
		canonized: "2009 by Pope Benedict XVI",
		symbols: [
			"leprosy bandages",
			"SS.CC. habit",
			"Hawaiian chapel"
		],
		patronages: [
			"people with leprosy",
			"outcasts",
			"Hawaii",
			"those with HIV"
		],
		topics: [
			"the sick",
			"outcasts",
			"missions",
			"courage"
		],
		kidLine: "Damien went to live with people nobody else would live with, so they would not be alone.",
		summary: "The Belgian priest who became Hawaiian, then a patient among his patients.",
		life: "Jozef De Veuster of the Congregation of the Sacred Hearts volunteered for the isolated leprosy settlement on Molokai in 1873. He built churches, houses, and coffins; dressed wounds; and wrote letters that shamed a comfortable world. After sixteen years he announced at Mass: “We lepers.” He died of the disease in 1889. Robert Louis Stevenson defended him against a smearing Protestant critic in a famous open letter.",
		stories: [{
			title: "We lepers",
			text: "The grammar of the Incarnation. He would not speak of “you” any longer."
		}],
		miracles: [{
			title: "A life as argument",
			text: "The miracle the Church needed was already public: a man who stayed. Formal healings later confirmed what Hawaii already knew."
		}],
		pathToSainthood: "Beatified 1995, canonized 2009. Feast May 10. Patron of those the healthy prefer not to see.",
		prayer: "St. Damien, send us toward the people who sit alone."
	}),
	s({
		slug: "katharine-drexel",
		name: "St. Katharine Drexel",
		shortName: "Katharine",
		title: "Foundress of the Sisters of the Blessed Sacrament",
		feast: {
			month: 3,
			day: 3
		},
		born: "Philadelphia, 1858",
		died: "Bensalem, 1955",
		canonized: "2000 by Pope John Paul II",
		symbols: [
			"lilies",
			"schoolhouse",
			"tabernacle"
		],
		patronages: [
			"racial justice",
			"philanthropists",
			"orphans"
		],
		topics: [
			"America",
			"the poor",
			"Eucharist",
			"justice"
		],
		kidLine: "Katharine was a rich American girl who spent her money building schools for children who were treated unfairly.",
		summary: "The heiress who spent a fortune on Black and Native American missions, and herself on the tabernacle.",
		life: "Daughter of a Philadelphia banker, she inherited millions and, after Leo XIII challenged her to become a missionary, founded a congregation dedicated to Native and Black Americans. She built schools and Xavier University in New Orleans — the first Catholic HBCU. She took the Jim Crow fight personally, suing when the law blocked her work. After a heart attack in 1935 she spent twenty years in adoration. She died at 96.",
		stories: [{
			title: "The pope’s question",
			text: "She told Leo XIII how hard it was to find missionaries. He asked: “Why not become one yourself?” Vocations sometimes arrive as a dare."
		}],
		miracles: [{
			title: "Deafness healed",
			text: "The canonization miracle was the restoration of a boy’s hearing after prayer for her intercession — a fitting sign for a woman who spent her life helping people be heard."
		}],
		pathToSainthood: "Beatified 1988, canonized 2000. Feast March 3. Second American-born saint.",
		prayer: "St. Katharine, make our generosity concrete, and our adoration long."
	}),
	s({
		slug: "andre-bessette",
		name: "St. André Bessette",
		shortName: "André",
		title: "Brother of Holy Cross, porter of St. Joseph",
		feast: {
			month: 1,
			day: 6
		},
		born: "Saint-Grégoire, Quebec, 1845",
		died: "Montreal, 1937",
		canonized: "2010 by Pope Benedict XVI",
		symbols: [
			"oil of St. Joseph",
			"Oratory dome",
			"porter’s keys"
		],
		patronages: [
			"the sick",
			"Canada",
			"porters",
			"the poorly educated"
		],
		topics: [
			"Joseph",
			"the sick",
			"humility",
			"Canada"
		],
		kidLine: "André was a small, sickly doorman. He loved St. Joseph. A great church grew from his little door.",
		summary: "The illiterate porter whose devotion to St. Joseph built an oratory on a mountain.",
		life: "Orphaned, frail, barely able to read, he was accepted by the Holy Cross Brothers with reluctance and posted as porter at Notre-Dame College in Montreal: “I was at the door for forty years.” He rubbed the sick with oil from a lamp before St. Joseph’s statue and told them to pray to Joseph, not to him. Crowds came. He collected nickels for a shrine on Mount Royal; the vast Oratory stands there now. He died at 91.",
		stories: [{
			title: "The door",
			text: "A whole theology of work: the lowest job, done as if Joseph himself had assigned it."
		}],
		miracles: [{
			title: "Oil and oakum",
			text: "Thousands of healings were attributed to Joseph through André’s hands. The Church required, and found, a miracle for canonization; Montreal had already stopped counting."
		}],
		pathToSainthood: "Beatified 1982, canonized 2010. Feast January 6 (January 7 in Canada). First male Canadian-born saint.",
		prayer: "St. André, open doors, and send us to St. Joseph when we are little and tired."
	}),
	s({
		slug: "isaac-jogues",
		name: "St. Isaac Jogues",
		shortName: "Isaac Jogues",
		title: "Jesuit martyr of North America",
		feast: {
			month: 10,
			day: 19
		},
		born: "Orléans, 1607",
		died: "Ossernenon (Auriesville, New York), 1646",
		canonized: "1930 by Pope Pius XI",
		symbols: [
			"mangled hands",
			"Jesuit cassock",
			"canoe"
		],
		patronages: [
			"America",
			"missionaries",
			"the Americas"
		],
		topics: [
			"missions",
			"martyrs",
			"America",
			"courage"
		],
		kidLine: "Isaac came across the ocean to tell people about Jesus. It was very hard. He still went back.",
		summary: "The priest who lost his fingers to torture, received permission to say Mass anyway, and returned to the people who had maimed him.",
		life: "A French Jesuit sent to the Huron missions. Captured by Mohawks in 1642, he was tortured; they chewed off his fingers. He escaped to France, where Urban VIII allowed him to celebrate Mass with mutilated hands — “it would be unjust for a martyr of Christ not to drink the Blood of Christ.” He went back as a peace envoy and was tomahawked at Ossernenon. He is one of the North American Martyrs.",
		stories: [{
			title: "The permission",
			text: "The Church changed a rubric for a pair of ruined hands. Sacraments are for the wounded."
		}],
		miracles: [{
			title: "The return",
			text: "Going back is the miracle. Conversion of the Mohawk — including Kateri’s people — grew from such returns."
		}],
		pathToSainthood: "Canonized 1930 with his companions. Feast October 19 (September 26 in Canada). Patron of the missions of North America.",
		prayer: "St. Isaac, for every hard place we would rather not enter again."
	}),
	s({
		slug: "charles-lwanga",
		name: "St. Charles Lwanga",
		shortName: "Charles Lwanga",
		title: "Martyr of Uganda, patron of youth",
		feast: {
			month: 6,
			day: 3
		},
		born: "Bulimu, Buganda, c. 1860",
		died: "Namugongo, 1886, burned",
		canonized: "1964 by Pope Paul VI",
		symbols: [
			"flame",
			"white robe",
			"palm"
		],
		patronages: [
			"youth",
			"converts",
			"torture victims",
			"African Catholic youth"
		],
		topics: [
			"youth",
			"courage",
			"purity",
			"Africa"
		],
		kidLine: "Charles was a young man who protected boys in the king’s house and would not stop following Jesus, even in the fire.",
		summary: "The page who baptized his boys on the road to the pyre, and smiled.",
		life: "Chief of the royal pages at the court of Mwanga II. After the killing of the Anglican bishop Hannington and of Joseph Mukasa, Charles baptized the younger catechumens in secret. Arrested for refusing the king’s sexual demands and for their Christianity, they were marched to Namugongo. Charles was burned on Ascension Thursday, 1886. Twenty-two Catholic martyrs — and Anglican companions — made Uganda a Christian nation by blood.",
		stories: [{
			title: "On the road",
			text: "He baptized the youngest with a little instruction and a lot of courage. Catechesis can be brief when the fire is near."
		}],
		miracles: [{
			title: "Uganda",
			text: "Within a century the country that killed them became one of the most Christian on the continent. Tertullian’s sentence, made visible."
		}],
		pathToSainthood: "Beatified 1920, canonized 1964 by Paul VI in Rome, with African bishops present. Feast June 3.",
		prayer: "St. Charles Lwanga, guard the young, and make them brave and clean."
	}),
	s({
		slug: "john-neumann",
		name: "St. John Neumann",
		shortName: "John Neumann",
		title: "Bishop of Philadelphia, Redemptorist",
		feast: {
			month: 1,
			day: 5
		},
		born: "Prachatice, Bohemia, 1811",
		died: "Philadelphia, 1860",
		canonized: "1977 by Pope Paul VI",
		symbols: [
			"bishop’s staff",
			"schoolhouse",
			"small stature"
		],
		patronages: [
			"Catholic schools",
			"immigrants",
			"sick children",
			"Philadelphia"
		],
		topics: [
			"America",
			"immigrants",
			"schools",
			"bishops"
		],
		kidLine: "John came from far away to be a priest in America. He built schools so children could learn about God.",
		summary: "The tiny immigrant bishop who put a parish school system under the feet of a new country.",
		life: "Too many priests in Bohemia, not enough in America. He arrived in New York in 1836, was ordained, rode circuits in upstate woods, joined the Redemptorists, and at 41 became bishop of Philadelphia. He organized the first diocesan school system in the United States, learned languages to hear confessions of immigrants, and collapsed of a stroke on a street at 48. People had thought him unimpressive. Rome did not.",
		stories: [{
			title: "Forty hours",
			text: "He spread the Forty Hours Devotion so the Eucharist would not be lonely in a busy city. A bishop’s job is to keep the lamp lit."
		}],
		miracles: [{
			title: "The schools",
			text: "Institutional miracle: Catholic schooling as a system, not a hobby. Healings later served the cause; the schools served the children."
		}],
		pathToSainthood: "Beatified 1963, canonized 1977 — first American male saint. Feast January 5.",
		prayer: "St. John Neumann, bless immigrant families and the schools that catch their children."
	}),
	s({
		slug: "solanus-casey",
		name: "Bl. Solanus Casey",
		shortName: "Solanus",
		title: "Capuchin porter of Detroit",
		feast: {
			month: 7,
			day: 30
		},
		born: "Oak Grove, Wisconsin, 1870",
		died: "Detroit, 1957",
		canonized: "Beatified 2017; canonization cause open",
		symbols: [
			"violin",
			"Capuchin habit",
			"soup kitchen"
		],
		patronages: [
			"Detroit",
			"the sick",
			"those who fail exams"
		],
		topics: [
			"humility",
			"the sick",
			"America",
			"gratitude"
		],
		kidLine: "Solanus was a kind American brother who played the violin and listened to people at the door.",
		summary: "The simplex priest who could not preach public sermons, so he blessed a city from a doorway.",
		life: "Barney Casey, Irish-American logger and streetcar conductor, struggled through seminary Latin and was ordained a “simplex” priest — able to say Mass, not to preach or hear confessions. The Capuchins made him porter in Yonkers, then Detroit. Crowds came for blessings, healings, and the sentence he stamped on every request: “Give thanks beforehand.” He founded a soup kitchen in the Depression. He died in 1957; Detroit lined the streets.",
		stories: [{
			title: "Give thanks beforehand",
			text: "He asked people to thank God before the answer. That is faith as manners."
		}],
		miracles: [{
			title: "The doorkeeper’s favors",
			text: "A woman with a skin disease healed overnight was among the favors studied for beatification. Detroit’s memory is longer than the dossier."
		}],
		pathToSainthood: "Declared Venerable 1995, beatified 2017 in Detroit. Not yet canonized — the Church still walks with him. He is in this book because American families already ask his prayers.",
		prayer: "Bl. Solanus, we thank God beforehand for whatever He will do in this house."
	}),
	s({
		slug: "philip",
		name: "St. Philip the Apostle",
		shortName: "Philip",
		title: "Apostle",
		feast: {
			month: 5,
			day: 3
		},
		born: "Bethsaida, 1st century",
		died: "Hierapolis, 1st century, crucified (tradition)",
		canonized: "Venerated from the beginning",
		symbols: [
			"loaves",
			"cross",
			"dragon (later)"
		],
		patronages: [
			"hatters",
			"pastry chefs",
			"Luxembourg"
		],
		topics: [
			"apostles",
			"invitation",
			"Eucharist"
		],
		kidLine: "Philip told his friend Nathanael: “Come and see.” That is still how we share Jesus.",
		summary: "The apostle of the invitation, who never stopped bringing people into the conversation.",
		life: "From Bethsaida, like Peter and Andrew. Jesus finds him and says “Follow me.” Philip finds Nathanael. At the feeding he does the math (“two hundred denarii would not buy enough”). At the Last Supper he asks to see the Father, and Jesus says “He who has seen me has seen the Father.” Tradition sends him to Phrygia.",
		stories: [{
			title: "Come and see",
			text: "The whole missionary method of a family: not a lecture. An invitation to look."
		}],
		miracles: [{
			title: "The bread",
			text: "He saw the problem (no food). Jesus made it his problem, then more than solved it. Apostles do arithmetic; God does the rest."
		}],
		pathToSainthood: "Apostle. Feast May 3 with St. James the Less.",
		prayer: "St. Philip, teach us to say come and see, especially to our own."
	}),
	s({
		slug: "barnabas",
		name: "St. Barnabas",
		shortName: "Barnabas",
		title: "Apostle, son of encouragement",
		feast: {
			month: 6,
			day: 11
		},
		born: "Cyprus, 1st century",
		died: "Salamis, Cyprus, 1st century, stoned (tradition)",
		canonized: "Venerated from the beginning",
		symbols: [
			"olive branch",
			"Gospel of Matthew",
			"stones"
		],
		patronages: [
			"Cyprus",
			"peacemakers",
			"encouragers"
		],
		topics: [
			"encouragement",
			"missions",
			"friendship",
			"apostles"
		],
		kidLine: "Barnabas’s name means “son of encouragement.” He was Paul’s friend and helped people be brave.",
		summary: "The Levite who vouched for Paul when no one else would, and who lived up to his nickname.",
		life: "A Cypriot Levite named Joseph, nicknamed Barnabas by the apostles. He sold a field. He introduced Saul to the Jerusalem church. He fetched Paul to Antioch; together they took the first missionary journey. They split over John Mark — Barnabas taking the younger man who had failed. Tradition has him martyred in Cyprus. Every parish needs a Barnabas more than it needs a genius.",
		stories: [{
			title: "He took Mark",
			text: "Paul wanted reliability. Barnabas wanted a second chance. The Church kept both men, and Mark later wrote a Gospel. Encouragement is apostolic."
		}],
		miracles: [{
			title: "Antioch",
			text: "Acts 11: he saw the grace of God and was glad. Discernment that rejoices is a quiet wonder."
		}],
		pathToSainthood: "Called apostle in Acts 14. Feast June 11.",
		prayer: "St. Barnabas, make this house a place of encouragement."
	}),
	s({
		slug: "brendan",
		name: "St. Brendan the Navigator",
		shortName: "Brendan",
		title: "Abbot of Clonfert",
		feast: {
			month: 5,
			day: 16
		},
		born: "County Kerry, c. 484",
		died: "Annaghdown, c. 577",
		canonized: "Venerated from the early Irish church",
		symbols: [
			"coracle",
			"whale",
			"monks at oars"
		],
		patronages: [
			"sailors",
			"travelers",
			"whales",
			"boatmen"
		],
		topics: [
			"Ireland",
			"travelers",
			"monks",
			"adventure"
		],
		kidLine: "Brendan was a monk who sailed far in a little boat to find a holy island, and to find God.",
		summary: "The Irish abbot whose voyage became the Middle Ages’ favorite adventure of grace.",
		life: "Founder of Clonfert, teacher of monks. The Navigatio Brendani tells of a seven-year voyage in a leather boat to the “Isle of the Promised Saints,” with islands of birds, a sea of crystal, and a whale mistaken for land. History cannot chart it; sailors still claim him. Some read Newfoundland in the story. Read it first as a picture of the soul: we leave, we are fed, we return.",
		stories: [{
			title: "The whale",
			text: "They said Mass on a “island” that moved. Creation is not a stage set. It is alive, and God is in the motion."
		}],
		miracles: [{
			title: "The voyage",
			text: "That Irish monks crossed terrible water in skin boats is not legend. That God met them is the claim of the story."
		}],
		pathToSainthood: "Early Irish cultus. Feast May 16. Patron of sailors — a good friend on any trip.",
		prayer: "St. Brendan, go with us when we leave home, even for a small errand."
	}),
	s({
		slug: "bede",
		name: "St. Bede the Venerable",
		shortName: "Bede",
		title: "Monk of Jarrow, Doctor of the Church",
		feast: {
			month: 5,
			day: 25
		},
		born: "Northumbria, c. 673",
		died: "Jarrow, 735",
		canonized: "Named Doctor in 1899 by Leo XIII; cultus ancient in England",
		symbols: [
			"book",
			"quill",
			"monk’s cowl"
		],
		patronages: [
			"historians",
			"English writers",
			"scholars"
		],
		topics: [
			"study",
			"England",
			"Doctors",
			"monks"
		],
		kidLine: "Bede was a monk who wrote down the stories of his people so no one would forget what God had done.",
		summary: "The quiet Englishman who gave a nation its memory and died singing the doxology.",
		life: "Given to the monastery of Wearmouth-Jarrow as a child, he almost never left. He wrote the Ecclesiastical History of the English People — still the reason we know Augustine of Canterbury, Cuthbert, and the coming of the faith to the Angles. He wrote on time, Scripture, grammar. On the eve of the Ascension he finished a translation of John, distributed his little treasures, and died saying “Glory be to the Father.”",
		stories: [{
			title: "The last sentence",
			text: "He wanted to finish the Gospel before vespers. Work, done for God, may be completed on a deathbed. That is a happy death."
		}],
		miracles: [{
			title: "A history that held",
			text: "Without Bede, early English Christianity is scraps. God sometimes saves a people by giving them a librarian."
		}],
		pathToSainthood: "Called Venerable in his own generation. Declared Doctor of the Church in 1899. Feast May 25.",
		prayer: "St. Bede, bless the stories we tell our children, and make them true."
	}),
	s({
		slug: "elmo",
		name: "St. Erasmus of Formia (Elmo)",
		shortName: "Elmo",
		title: "Bishop and martyr, one of the Fourteen Holy Helpers",
		feast: {
			month: 6,
			day: 2
		},
		born: "Antioch, 3rd century",
		died: "Formia, c. 303",
		canonized: "Venerated from the early Middle Ages",
		symbols: [
			"windlass",
			"ship",
			"blue light"
		],
		patronages: [
			"sailors",
			"stomach pain",
			"colic",
			"childbirth",
			"explosives workers"
		],
		topics: [
			"sailors",
			"the sick",
			"martyrs",
			"protection"
		],
		kidLine: "Sailors call him Elmo. When they see a little blue light on the mast in a storm, they remember he is near.",
		summary: "The martyr whose windlass became a sailor’s light in the rigging.",
		life: "A bishop who fled Diocletian’s persecution, preached in Italy, and was tortured — later legend adds a windlass and his entrails, which is why he is invoked for abdominal pain. Sailors named St. Elmo’s fire, the blue glow of static on masts, after him: a sign that the saint is watching in the storm. Formia keeps his relics.",
		stories: [{
			title: "The blue light",
			text: "A physicist will say corona discharge. A sailor in a gale will say a name. Both can be true. Sacramentals have always borrowed nature."
		}],
		miracles: [{
			title: "The Helpers",
			text: "Medieval Christians grouped fourteen saints for desperate needs. Elmo was the one you asked when the sea or the gut turned on you."
		}],
		pathToSainthood: "Early martyr, later Holy Helper. Feast June 2.",
		prayer: "St. Elmo, in every storm — weather, stomach, or soul — stay with us."
	}),
	s({
		slug: "barbara",
		name: "St. Barbara",
		shortName: "Barbara",
		title: "Virgin martyr, Holy Helper",
		feast: {
			month: 12,
			day: 4
		},
		born: "Nicomedia or Heliopolis, 3rd century (legend)",
		died: "3rd century, beheaded by her father (legend)",
		canonized: "Cultus medieval; removed from General Calendar 1969, still in the Martyrology",
		symbols: [
			"tower",
			"chalice",
			"lightning",
			"three windows"
		],
		patronages: [
			"miners",
			"artillerymen",
			"lightning",
			"architects",
			"fireworks",
			"a happy death"
		],
		topics: [
			"martyrs",
			"protection",
			"the dying",
			"courage"
		],
		kidLine: "Barbara’s father locked her in a tower. She still chose Jesus. People ask her to pray in storms and in mines.",
		summary: "A martyr whose tower and three windows taught the Trinity to people who worked with fire and stone.",
		life: "The historical dossier is thin, which is why her feast left the universal calendar. The legend is thick and loved: a pagan father, a tower, three windows she ordered for the Trinity, baptism, flight, betrayal, lightning upon the father who killed her. Miners, gunners, and anyone who works with sudden fire took her as patron. The Church still permits her cult where it is alive.",
		stories: [{
			title: "Three windows",
			text: "She wanted light in threes. Architecture as creed. A child can count to three and hear the Father, the Son, and the Spirit."
		}],
		miracles: [{
			title: "Lightning",
			text: "Her father struck by fire from heaven is the legend’s justice. Better to ask her now to keep fire in its place."
		}],
		pathToSainthood: "Legendary passion, real cultus. In the Martyrology on December 4. Included here because families still search “patron of lightning / miners / a happy death.”",
		prayer: "St. Barbara, keep sudden dangers far, and keep us ready for a holy death."
	}),
	s({
		slug: "roch",
		name: "St. Roch",
		shortName: "Roch",
		title: "Pilgrim of Montpellier",
		feast: {
			month: 8,
			day: 16
		},
		born: "Montpellier, c. 1295",
		died: "Montpellier, c. 1327",
		canonized: "Popular canonization in the plague centuries; confirmed in cultus",
		symbols: [
			"pilgrim staff",
			"dog with bread",
			"plague sore on the thigh"
		],
		patronages: [
			"plague",
			"dogs",
			"invalids",
			"knee problems",
			"surgeons"
		],
		topics: [
			"the sick",
			"animals",
			"pilgrimage",
			"the poor"
		],
		kidLine: "Roch was sick on a road. A dog brought him bread. He is a friend of dogs and of people who feel poorly.",
		summary: "The pilgrim who nursed plague victims, caught it, and was fed by a dog in the woods.",
		life: "A French noble who gave away his goods and walked as a pilgrim, nursing the plague-stricken in Italy. He fell ill, dragged himself to a forest, and was supplied with bread by a hunting dog. Healed, he went home, was taken for a spy, and died in prison unrecognized. When plague returned to Europe, his pictures went up over doors: a man lifting his tunic to show the sore, a dog at his feet.",
		stories: [{
			title: "The dog",
			text: "Tell it straight: God used a dog. Animals in hagiography are not cute extras. They are providence with fur."
		}],
		miracles: [{
			title: "Plague crosses",
			text: "Cities that invoked him recorded cessations. Correlation is not cause; a people on their knees is already a healing of a kind."
		}],
		pathToSainthood: "Cultus confirmed by the later Middle Ages. Feast August 16. Patron of dogs — and of anyone waiting for a recovery.",
		prayer: "St. Roch, pray for the sick, and for the animals that keep us company."
	})
];
function saint(s) {
	return s;
}
var SAINTS = [...[
	saint({
		slug: "mary",
		name: "The Blessed Virgin Mary",
		shortName: "Mary",
		title: "Mother of God, Queen of Heaven",
		feast: {
			month: 1,
			day: 1
		},
		born: "Nazareth, 1st century B.C.",
		died: "Assumed into heaven; traditional date of the Dormition August 15",
		canonized: "Venerated from the beginning; dogmas defined 431, 1854, 1950",
		symbols: [
			"lily",
			"stars",
			"moon",
			"roses"
		],
		patronages: [
			"all people",
			"mothers",
			"the Church",
			"the Americas"
		],
		topics: [
			"Mary",
			"Incarnation",
			"mothers",
			"prayer"
		],
		kidLine: "Mary is Jesus’ mother. She said yes to God, and she loves us.",
		summary: "Mary of Nazareth is the Mother of God. Every Catholic prayer that names her ends in her Son.",
		life: "A Jewish girl of Nazareth was asked by the angel Gabriel to bear the Messiah. She consented. She visited Elizabeth, bore Jesus in Bethlehem, fled to Egypt, lived in hidden years at Nazareth, stood at the Cross, and was with the apostles at Pentecost. The Church teaches she was conceived without original sin (Immaculate Conception), remained ever-virgin, and was assumed body and soul into heaven.",
		stories: [{
			title: "The fiat",
			text: "Luke 1: “Let it be done to me according to your word.” That sentence is the hinge of history. God waited on a girl’s freedom."
		}, {
			title: "Cana",
			text: "At the wedding she noticed the wine was gone and told the servants, “Do whatever he tells you.” That remains her whole program."
		}],
		miracles: [{
			title: "Guadalupe, Lourdes, Fatima",
			text: "Approved apparitions are not required belief, but the Church has judged these worthy of credence. They always send people back to the Gospel, the Rosary, and conversion."
		}],
		pathToSainthood: "Mary is not a canonized saint in the modern legal sense — she is Theotokos. The Council of Ephesus (431) defined that title. Later dogmas (Immaculate Conception, Assumption) unfold what the Church had long prayed.",
		prayer: "Hail Mary, full of grace, the Lord is with thee…",
		image: "/images/annunciation.jpg"
	}),
	saint({
		slug: "joseph",
		name: "St. Joseph",
		shortName: "Joseph",
		title: "Spouse of the Blessed Virgin, Patron of the Universal Church",
		feast: {
			month: 3,
			day: 19
		},
		born: "House of David, 1st century B.C.",
		died: "Nazareth, before the public ministry of Jesus",
		canonized: "Venerated from antiquity; Patron of the Church, 1870",
		symbols: [
			"lily",
			"carpenter’s square",
			"Child Jesus"
		],
		patronages: [
			"fathers",
			"workers",
			"the dying",
			"the Church",
			"carpenters",
			"housing"
		],
		topics: [
			"fathers",
			"work",
			"family",
			"silence"
		],
		kidLine: "Joseph was Jesus’ daddy on earth. He kept Mary and Jesus safe.",
		summary: "The silent man of the Gospel: just, chaste, a worker, a protector.",
		life: "A carpenter of David’s line, betrothed to Mary. Finding her with child, he meant to divorce her quietly until an angel told him the truth. He named Jesus, protected the family in Egypt, and raised the boy in Nazareth. Scripture records not one spoken word of his.",
		stories: [{
			title: "The dreamer",
			text: "Like his namesake in Genesis, Joseph receives God’s will in dreams — take Mary, flee to Egypt, return. Obedience without a speech."
		}],
		miracles: [{
			title: "Patron of a happy death",
			text: "Tradition holds he died with Jesus and Mary at his side. Catholics ask him for a holy death and for help with work and home."
		}],
		pathToSainthood: "Cultus is ancient. Pius IX named him Patron of the Universal Church in 1870. John XXIII inserted his name in the Roman Canon. Francis added him to all Eucharistic Prayers.",
		prayer: "St. Joseph, terror of demons, pray for us. Guardian of virgins, pray for us."
	}),
	saint({
		slug: "john-the-baptist",
		name: "St. John the Baptist",
		shortName: "John the Baptist",
		title: "Forerunner of the Lord",
		feast: {
			month: 6,
			day: 24
		},
		born: "Hill country of Judah, c. 1 B.C.",
		died: "Machaerus, c. A.D. 29, beheaded",
		canonized: "Venerated from the beginning",
		symbols: [
			"camel hair",
			"lamb",
			"shell"
		],
		patronages: [
			"converts",
			"farms",
			"baptism",
			"Jordan"
		],
		topics: [
			"baptism",
			"courage",
			"prophets"
		],
		kidLine: "John told people: “Get ready! Jesus is coming.”",
		summary: "The last prophet of the Old Covenant, who pointed at the Lamb.",
		life: "Son of Zechariah and Elizabeth, filled with the Spirit from the womb. He preached repentance at the Jordan, baptized Jesus, and was imprisoned for condemning Herod’s marriage. He was beheaded at the request of Herodias’s daughter.",
		stories: [{
			title: "He must increase",
			text: "When his own disciples worried that Jesus was drawing crowds, John said: “He must increase, I must decrease.”"
		}],
		miracles: [{
			title: "The leap",
			text: "In Elizabeth’s womb he leaped at Mary’s greeting — the first witness to the unborn Christ."
		}],
		pathToSainthood: "Jesus called him the greatest born of women. The Church keeps two feasts: his birth (June 24) and his martyrdom (August 29).",
		prayer: "St. John the Baptist, make straight the way of the Lord."
	}),
	saint({
		slug: "peter",
		name: "St. Peter the Apostle",
		shortName: "Peter",
		title: "Prince of the Apostles, first Pope",
		feast: {
			month: 6,
			day: 29
		},
		born: "Bethsaida, 1st century",
		died: "Rome, c. A.D. 64–67, crucified upside down",
		canonized: "Venerated from the beginning",
		symbols: [
			"keys",
			"rooster",
			"upside-down cross"
		],
		patronages: [
			"popes",
			"fishermen",
			"Rome",
			"the papacy"
		],
		topics: [
			"papacy",
			"forgiveness",
			"courage"
		],
		kidLine: "Peter was a fisherman. Jesus made him the first pope. He made mistakes and Jesus still loved him.",
		summary: "Simon the fisherman, renamed Rock, who denied Christ and was forgiven into leadership.",
		life: "Called from his nets, he confessed Jesus as the Christ. He sank on the water, slept in Gethsemane, denied three times, and wept. The risen Lord asked three times, “Do you love me?” and charged him to feed the sheep. He led the Church in Jerusalem, then Antioch, then Rome, where he was martyred under Nero.",
		stories: [{
			title: "The keys",
			text: "“You are Peter, and on this rock I will build my Church… I will give you the keys of the kingdom.” (Matthew 16:18–19)"
		}],
		miracles: [{
			title: "The shadow",
			text: "Acts 5: the sick were laid so that Peter’s shadow might fall on them, and they were healed."
		}],
		pathToSainthood: "Apostolic martyr. His tomb under St. Peter’s Basilica is among the best-attested relics in Christendom.",
		prayer: "St. Peter, keeper of the keys, pray for the Church and for our family."
	}),
	saint({
		slug: "paul",
		name: "St. Paul the Apostle",
		shortName: "Paul",
		title: "Apostle to the Gentiles",
		feast: {
			month: 6,
			day: 29
		},
		born: "Tarsus, c. A.D. 5",
		died: "Rome, c. A.D. 67, beheaded",
		canonized: "Venerated from the beginning",
		symbols: [
			"sword",
			"book",
			"letters"
		],
		patronages: [
			"writers",
			"missionaries",
			"theologians",
			"tentmakers"
		],
		topics: [
			"conversion",
			"missions",
			"Scripture"
		],
		kidLine: "Paul used to hurt Christians. Then Jesus stopped him on the road, and Paul told the whole world about Jesus.",
		summary: "The persecutor turned apostle, whose letters still teach the Church how to believe.",
		life: "Saul of Tarsus, a Pharisee, approved the stoning of Stephen. On the road to Damascus he saw the risen Christ. After years of formation he became the missionary of the Mediterranean, founding churches and writing letters that are now Scripture. Beheaded in Rome as a Roman citizen.",
		stories: [{
			title: "Damascus",
			text: "“Saul, Saul, why are you persecuting me?” The voice identified the Church with Jesus himself."
		}],
		miracles: [{
			title: "The handkerchiefs",
			text: "Acts 19: cloths that had touched Paul were taken to the sick, and they recovered — an early hint of relics."
		}],
		pathToSainthood: "Apostolic martyr. Feast shared with Peter on June 29; conversion kept January 25.",
		prayer: "St. Paul, pray that we may know Christ, and him crucified."
	}),
	saint({
		slug: "john-apostle",
		name: "St. John the Apostle",
		shortName: "John",
		title: "Beloved Disciple, Evangelist",
		feast: {
			month: 12,
			day: 27
		},
		born: "Galilee, 1st century",
		died: "Ephesus, c. A.D. 100",
		canonized: "Venerated from the beginning",
		symbols: [
			"eagle",
			"chalice",
			"book"
		],
		patronages: [
			"writers",
			"friendship",
			"theologians"
		],
		topics: [
			"love",
			"Gospel",
			"Mary"
		],
		kidLine: "John was Jesus’ close friend. Jesus asked him to take care of Mary.",
		summary: "The youngest apostle, who leaned on the Lord’s breast and took Mary home.",
		life: "Son of Zebedee, fisherman, with James “sons of thunder.” At the Cross he received Mary as his mother. Tradition holds he wrote the Fourth Gospel, three letters, and Revelation, and died in old age at Ephesus — the only apostle not martyred.",
		stories: [{
			title: "Behold your mother",
			text: "From the Cross: “Woman, behold your son… Behold your mother.” John took her into his home. So does the Church."
		}],
		miracles: [{
			title: "The poisoned cup",
			text: "Later legend: a poisoned chalice was offered him; he blessed it and the poison left as a serpent. Hence the chalice in his art."
		}],
		pathToSainthood: "Apostle and evangelist. His Gospel is the high-water mark of New Testament theology.",
		prayer: "Beloved disciple, teach us to remain, and to take Mary home."
	}),
	saint({
		slug: "matthew",
		name: "St. Matthew the Apostle",
		shortName: "Matthew",
		title: "Apostle and Evangelist",
		feast: {
			month: 9,
			day: 21
		},
		born: "Capernaum, 1st century",
		died: "Traditionally Ethiopia or Persia, martyr",
		canonized: "Venerated from the beginning",
		symbols: [
			"winged man",
			"money bag",
			"book"
		],
		patronages: [
			"accountants",
			"bankers",
			"tax collectors",
			"bookkeepers"
		],
		topics: [
			"conversion",
			"Gospel",
			"money"
		],
		kidLine: "Matthew collected taxes. Jesus said “follow me,” and Matthew did.",
		summary: "A publican whose yes became the first Gospel in the canon.",
		life: "Also called Levi. Jesus called him from the tax booth, then ate with sinners in his house. His Gospel, written for Jewish Christians, shows Jesus as the new Moses and the fulfillment of the Law.",
		stories: [{
			title: "The booth",
			text: "He left the coins on the table. The Church has always loved that picture: grace is more interesting than a career."
		}],
		miracles: [{
			title: "The Gospel itself",
			text: "The Church’s chief miracle in Matthew is the text: the Sermon on the Mount, the Our Father, the keys given to Peter."
		}],
		pathToSainthood: "Apostle and evangelist. His relic cult is ancient in Salerno and elsewhere.",
		prayer: "St. Matthew, you left the coins. Teach us to follow."
	}),
	saint({
		slug: "luke",
		name: "St. Luke the Evangelist",
		shortName: "Luke",
		title: "Evangelist, beloved physician",
		feast: {
			month: 10,
			day: 18
		},
		born: "Antioch, 1st century",
		died: "Traditionally Boeotia, c. A.D. 84",
		canonized: "Venerated from the beginning",
		symbols: [
			"winged ox",
			"icons",
			"book"
		],
		patronages: [
			"doctors",
			"artists",
			"painters",
			"surgeons"
		],
		topics: [
			"healing",
			"Gospel",
			"Mary",
			"poor"
		],
		kidLine: "Luke was a doctor who wrote down Mary’s stories about Jesus.",
		summary: "Companion of Paul, painter of the infancy narratives, evangelist of the poor.",
		life: "A Gentile physician, he wrote the Gospel of Luke and the Acts of the Apostles — a two-volume work. He gives us the Magnificat, the Benedictus, the shepherds, the Prodigal Son, and the Good Samaritan. Tradition names him the first iconographer of Mary.",
		stories: [{
			title: "Mary’s memory",
			text: "Twice Luke says Mary “kept all these things in her heart.” Much of the infancy Gospel reads like her testimony."
		}],
		miracles: [{
			title: "Healing in the text",
			text: "Only Luke records that Jesus healed Malchus’s ear in Gethsemane — a physician’s detail."
		}],
		pathToSainthood: "Evangelist. Patron of physicians and of those who make sacred images.",
		prayer: "St. Luke, physician of souls, pray for the sick in our house."
	}),
	saint({
		slug: "mark",
		name: "St. Mark the Evangelist",
		shortName: "Mark",
		title: "Evangelist, interpreter of Peter",
		feast: {
			month: 4,
			day: 25
		},
		born: "Jerusalem, 1st century",
		died: "Alexandria, traditionally martyred",
		canonized: "Venerated from the beginning",
		symbols: ["winged lion", "book"],
		patronages: [
			"notaries",
			"Venice",
			"prisoners",
			"lions"
		],
		topics: ["Gospel", "courage"],
		kidLine: "Mark wrote a fast, exciting Gospel about Jesus, told to him by Peter.",
		summary: "Peter’s interpreter, whose short Gospel runs like a passion with an introduction.",
		life: "John Mark of Jerusalem, cousin of Barnabas, companion (and briefly a disappointment) to Paul, then Peter’s aide in Rome. His Gospel is the earliest. Tradition makes him first bishop of Alexandria.",
		stories: [{
			title: "The young man who fled",
			text: "Only Mark mentions a young man who left his linen cloth in Gethsemane. Many think it is a signature."
		}],
		miracles: [{
			title: "Venice and the lion",
			text: "His relics were brought to Venice in 828. The winged lion of his Gospel became the city’s sign."
		}],
		pathToSainthood: "Evangelist and martyr of Alexandria by tradition.",
		prayer: "St. Mark, give us a Gospel that runs."
	}),
	saint({
		slug: "jude",
		name: "St. Jude Thaddeus",
		shortName: "Jude",
		title: "Apostle, patron of impossible causes",
		feast: {
			month: 10,
			day: 28
		},
		born: "Galilee, 1st century",
		died: "Persia or Syria, martyr",
		canonized: "Venerated from the beginning",
		symbols: [
			"club",
			"flame",
			"medallion of Christ"
		],
		patronages: [
			"impossible causes",
			"desperate situations",
			"hospitals"
		],
		topics: [
			"hope",
			"impossible causes",
			"prayer"
		],
		kidLine: "Jude helps when things seem too hard. He was a friend of Jesus.",
		summary: "The apostle people turn to when every other door has closed.",
		life: "One of the Twelve, sometimes called Thaddeus, author of a short New Testament letter. Confused for centuries with Judas Iscariot, his cult was neglected — which is why the desperate found him. Tradition has him evangelizing with Simon in Persia and dying a martyr.",
		stories: [{
			title: "The neglected apostle",
			text: "Because his name was close to Judas, people avoided him. The forgotten apostle became the friend of forgotten causes."
		}],
		miracles: [{
			title: "The novena",
			text: "Countless modern favors — jobs, conversions, recoveries — are attributed to his novena. The Church does not certify each one; she certifies the saint."
		}],
		pathToSainthood: "Apostolic martyr. Feast with Simon on October 28.",
		prayer: "St. Jude, helper in the hardest hour, pray for us."
	}),
	saint({
		slug: "mary-magdalene",
		name: "St. Mary Magdalene",
		shortName: "Mary Magdalene",
		title: "Apostle to the Apostles",
		feast: {
			month: 7,
			day: 22
		},
		born: "Magdala, 1st century",
		died: "Traditionally Ephesus or Provence",
		canonized: "Venerated from the beginning; feast raised to feast rank 2016",
		symbols: [
			"jar of ointment",
			"hair",
			"empty tomb"
		],
		patronages: [
			"converts",
			"penitents",
			"pharmacists",
			"contemplatives"
		],
		topics: [
			"resurrection",
			"women",
			"conversion"
		],
		kidLine: "Mary Magdalene saw Jesus alive at the empty tomb and ran to tell the friends.",
		summary: "The first witness of the Resurrection, sent to tell the apostles.",
		life: "Jesus cast seven demons from her. She followed him, stood at the Cross, and came to the tomb at dawn. The risen Christ spoke her name. He sent her to the brothers. Western legend later conflated her with the sinful woman of Luke 7; the liturgy now honors her as apostle to the apostles, not as a conflated penitent.",
		stories: [{
			title: "Noli me tangere",
			text: "“Do not cling to me, but go to my brothers.” Mission, not possession, is the first Easter order."
		}],
		miracles: [{
			title: "The name",
			text: "She recognized him when he said “Mary.” The miracle is particular love."
		}],
		pathToSainthood: "Gospel witness. Francis raised her memorial to a feast in 2016, equal in rank to the apostles.",
		prayer: "St. Mary Magdalene, teach us to stay at the tomb until He speaks our name."
	}),
	saint({
		slug: "stephen",
		name: "St. Stephen",
		shortName: "Stephen",
		title: "First martyr, deacon",
		feast: {
			month: 12,
			day: 26
		},
		born: "1st century",
		died: "Jerusalem, c. A.D. 34, stoned",
		canonized: "Venerated from the beginning",
		symbols: [
			"stones",
			"dalmatic",
			"palm"
		],
		patronages: [
			"deacons",
			"stonemasons",
			"headaches",
			"coffin makers"
		],
		topics: [
			"martyrdom",
			"forgiveness",
			"deacons"
		],
		kidLine: "Stephen loved Jesus so much he told the truth even when people were angry. He asked God to forgive them.",
		summary: "The Church’s first martyr, whose face was like an angel’s as he died forgiving.",
		life: "One of the seven deacons. His preaching in the synagogue of the Freedmen led to trial before the Sanhedrin. He gave a long speech of salvation history, saw the heavens opened, and was stoned. Saul held the cloaks.",
		stories: [{
			title: "Forgive them",
			text: "His last words echo the Cross: “Lord, do not hold this sin against them.”"
		}],
		miracles: [{
			title: "The face",
			text: "Acts 6:15 — those who sat in the council saw his face as the face of an angel."
		}],
		pathToSainthood: "Proto-martyr. His feast sits on the day after Christmas: the Child, then the cost.",
		prayer: "St. Stephen, first to die for Jesus, pray that we forgive."
	}),
	saint({
		slug: "anthony-of-padua",
		name: "St. Anthony of Padua",
		shortName: "Anthony",
		title: "Doctor of the Church, Hammer of Heretics",
		feast: {
			month: 6,
			day: 13
		},
		born: "Lisbon, 1195",
		died: "Padua, 1231",
		canonized: "1232 by Pope Gregory IX — one of the fastest in history",
		symbols: [
			"Child Jesus",
			"lily",
			"book",
			"bread"
		],
		patronages: [
			"lost things",
			"lost people",
			"mail",
			"the poor",
			"travelers",
			"Padua",
			"Lisbon"
		],
		topics: [
			"lost things",
			"preaching",
			"children",
			"Franciscans"
		],
		kidLine: "Anthony helps us find what we lost. He loved the Baby Jesus.",
		summary: "Franciscan preacher, finder of lost things, and a Doctor who died at thirty-six.",
		life: "Born Fernando in Lisbon, an Augustinian who joined the Franciscans after seeing the relics of Morocco’s proto-martyrs. Storms landed him in Italy. Francis himself authorized him to teach theology. His preaching in France and Italy drew such crowds that shops closed. He died on the way back to Padua, not yet 36.",
		stories: [{
			title: "The Child Jesus",
			text: "A host glimpsed Anthony holding the Christ Child in a blaze of light. That is why he is painted with the toddler Lord."
		}, {
			title: "The lost psalter",
			text: "A novice stole Anthony’s psalter. Anthony prayed; the novice was moved to return it. Hence “Tony, Tony, look around…”"
		}],
		miracles: [{
			title: "The mule and the Host",
			text: "A doubter’s mule, starved, genuflected before the Eucharist rather than eat its oats. A Eucharistic miracle story long attached to him."
		}, {
			title: "Incorruption of the tongue",
			text: "When his tomb was opened in 1263, the tongue was found incorrupt — the preacher’s instrument preserved."
		}],
		pathToSainthood: "Gregory IX canonized him less than a year after death, on the strength of fame of sanctity and miracles. Pius XII declared him a Doctor of the Church in 1946.",
		prayer: "St. Anthony, restorer of lost things, pray for us.",
		image: "/images/nativity.jpg"
	}),
	saint({
		slug: "francis-of-assisi",
		name: "St. Francis of Assisi",
		shortName: "Francis",
		title: "Founder of the Friars Minor, stigmatist",
		feast: {
			month: 10,
			day: 4
		},
		born: "Assisi, 1181/82",
		died: "Assisi, 3 October 1226",
		canonized: "1228 by Pope Gregory IX",
		symbols: [
			"birds",
			"wolf",
			"stigmata",
			"tau cross"
		],
		patronages: [
			"animals",
			"ecology",
			"Italy",
			"merchants",
			"the poor"
		],
		topics: [
			"poverty",
			"animals",
			"creation",
			"peace"
		],
		kidLine: "Francis loved Jesus, the poor, and the animals. He called the sun his brother.",
		summary: "The merchant’s son who married Lady Poverty and received the wounds of Christ.",
		life: "Giovanni di Pietro Bernardone, nicknamed Francesco. After war, prison, and a vision, he stripped before the bishop, repaired San Damiano, and gathered brothers. He went to the Sultan, made the first Christmas crib at Greccio, received the stigmata at La Verna, and wrote the Canticle of the Sun. He died on the bare ground, naked as he had come.",
		stories: [{
			title: "San Damiano",
			text: "The crucifix spoke: “Francis, rebuild my church, which is falling into ruin.” He started with stones, then rebuilt a people."
		}, {
			title: "The wolf of Gubbio",
			text: "A later legend: he tamed a wolf that had terrorized a town, calling it Brother Wolf. Whether history or parable, it is his spirit."
		}],
		miracles: [{
			title: "The stigmata",
			text: "In 1224, on La Verna, he received the five wounds of the Passion — the first recorded stigmatist in the West."
		}],
		pathToSainthood: "Canonized by his friend Gregory IX two years after death. His tomb is in the basilica at Assisi.",
		prayer: "Lord, make me an instrument of your peace.",
		image: "/images/francis.jpg"
	}),
	saint({
		slug: "clare",
		name: "St. Clare of Assisi",
		shortName: "Clare",
		title: "Foundress of the Poor Clares",
		feast: {
			month: 8,
			day: 11
		},
		born: "Assisi, 1194",
		died: "Assisi, 1253",
		canonized: "1255 by Pope Alexander IV",
		symbols: [
			"monstrance",
			"lamp",
			"habit"
		],
		patronages: [
			"television",
			"eye disease",
			"goldsmiths",
			"laundry"
		],
		topics: [
			"poverty",
			"Eucharist",
			"women",
			"contemplation"
		],
		kidLine: "Clare was Francis’s friend. She loved Jesus in the Eucharist and lived very simply.",
		summary: "The noble girl who ran to the Portiuncula and never looked back.",
		life: "Chiara Offreduccio fled her family by night, had her hair cut by Francis, and founded a monastery of radical poverty at San Damiano. She fought popes to keep the privilege of poverty. Twice she is said to have turned away invaders by holding up the Blessed Sacrament.",
		stories: [{
			title: "The monstrance",
			text: "When Saracen mercenaries approached, Clare, ill, had herself carried to the door with the ciborium. The attackers fled."
		}],
		miracles: [{
			title: "Christmas vision",
			text: "Too ill for Midnight Mass, she saw it on the wall of her cell — which is why she is patron of television."
		}],
		pathToSainthood: "Canonized two years after death. Her sisters still live the Form of Life she wrote.",
		prayer: "St. Clare, hold up Christ before the things that frighten us."
	}),
	saint({
		slug: "therese-of-lisieux",
		name: "St. Thérèse of Lisieux",
		shortName: "Thérèse",
		title: "Doctor of the Church, the Little Flower",
		feast: {
			month: 10,
			day: 1
		},
		born: "Alençon, 1873",
		died: "Lisieux, 30 September 1897",
		canonized: "1925 by Pope Pius XI",
		symbols: [
			"roses",
			"crucifix",
			"Carmelite habit"
		],
		patronages: [
			"missions",
			"florists",
			"France",
			"AIDS patients",
			"aviators"
		],
		topics: [
			"little way",
			"missions",
			"children",
			"hidden life"
		],
		kidLine: "Thérèse did tiny things with great love. She sends roses from heaven.",
		summary: "A cloistered nun who never went on mission, named patron of missions, Doctor of the Church.",
		life: "Thérèse Martin, youngest of five surviving sisters, all nuns. She entered Carmel at 15 by appealing to Leo XIII. She lived a hidden life of small obediences, wrote Story of a Soul under obedience, suffered tuberculosis and a trial of faith, and died at 24 promising to spend her heaven doing good on earth.",
		stories: [{
			title: "The little way",
			text: "She could not do great deeds, so she offered the small ones: a smile, an unnoticed chore, sitting beside a nun she found difficult."
		}],
		miracles: [{
			title: "Shower of roses",
			text: "After her death, favors attributed to her were so many that Pius XI called her “the greatest saint of modern times.” She had promised a shower of roses."
		}],
		pathToSainthood: "Beatified 1923, canonized 1925. John Paul II declared her a Doctor of the Church in 1997 — the youngest, and one of only a handful of women.",
		prayer: "St. Thérèse, little flower, obtain for us a childlike trust.",
		image: "/images/therese.jpg"
	}),
	saint({
		slug: "juan-diego",
		name: "St. Juan Diego Cuauhtlatoatzin",
		shortName: "Juan Diego",
		title: "Visionary of Guadalupe",
		feast: {
			month: 12,
			day: 9
		},
		born: "Cuautitlán, c. 1474",
		died: "Tepeyac, 1548",
		canonized: "2002 by Pope John Paul II",
		symbols: [
			"tilma",
			"roses",
			"Guadalupe image"
		],
		patronages: ["Indigenous peoples of the Americas", "Mexico"],
		topics: [
			"Mary",
			"poor",
			"Americas",
			"conversion"
		],
		kidLine: "Mary appeared to Juan Diego. Roses grew in winter, and her picture was on his cloak.",
		summary: "A Chichimeca convert whose tilma still bears the image of Our Lady of Guadalupe.",
		life: "A widower, baptized Juan Diego, walking to Mass at Tlatelolco in December 1531 when Mary met him on Tepeyac. She sent him to Bishop Zumárraga. Unbelieved, he was given Castilian roses in winter as a sign. When he opened the tilma, the image of the Virgin was on the cactus-fiber cloak. A shrine was built. He lived out his days as its hermit-custodian.",
		stories: [{
			title: "The uncle",
			text: "He tried to avoid Mary to fetch a priest for his dying uncle. She met him on the other path: “Am I not here, I who am your mother?” The uncle was healed."
		}],
		miracles: [{
			title: "The tilma",
			text: "Cactus cloth should have decayed in decades. The tilma has lasted five centuries, and the image has unexplained features (stars matching the December 1531 sky, eyes that reflect figures). The Church presents it as a sign, not a science project."
		}],
		pathToSainthood: "Beatified 1990, canonized 2002 at the basilica itself by John Paul II.",
		prayer: "St. Juan Diego, humble messenger, pray for the peoples of the Americas.",
		image: "/images/guadalupe.jpg"
	}),
	saint({
		slug: "patrick",
		name: "St. Patrick",
		shortName: "Patrick",
		title: "Apostle of Ireland",
		feast: {
			month: 3,
			day: 17
		},
		born: "Roman Britain, c. 385",
		died: "Ireland, c. 461",
		canonized: "Venerated from antiquity (pre-congregation)",
		symbols: [
			"shamrock",
			"snakes",
			"bishop’s staff"
		],
		patronages: [
			"Ireland",
			"Nigeria",
			"engineers",
			"excluded people"
		],
		topics: [
			"missions",
			"Trinity",
			"courage"
		],
		kidLine: "Patrick taught Ireland about God the Father, Son, and Holy Spirit — three leaves, one shamrock.",
		summary: "The slave who came back as a missionary and claimed a nation for Christ.",
		life: "Born to a Roman-British family, kidnapped by Irish raiders at 16, he shepherded on the west coast and learned to pray. He escaped, was ordained, and returned as bishop. He baptized, ordained, and confronted kings. His Confessio is still readable: a sinner’s thanks.",
		stories: [{
			title: "The shamrock",
			text: "Later tradition: he used a three-leaf clover to teach the Trinity. Whether or not the gesture is historical, the doctrine is."
		}],
		miracles: [{
			title: "The snakes",
			text: "Legend says he drove snakes from Ireland. Ireland had no snakes; the story is a picture of driving out pagan cult."
		}],
		pathToSainthood: "Apostle of a nation; cultus immemorial. His Lorica (“Christ with me…”) is still prayed.",
		prayer: "Christ with me, Christ before me, Christ behind me."
	}),
	saint({
		slug: "nicholas",
		name: "St. Nicholas of Myra",
		shortName: "Nicholas",
		title: "Bishop, Wonderworker",
		feast: {
			month: 12,
			day: 6
		},
		born: "Patara, c. 270",
		died: "Myra, 343",
		canonized: "Venerated from antiquity",
		symbols: [
			"gold balls",
			"ship",
			"children"
		],
		patronages: [
			"children",
			"sailors",
			"pawnbrokers",
			"Russia",
			"brides"
		],
		topics: [
			"children",
			"generosity",
			"Christmas"
		],
		kidLine: "Nicholas loved children and secretly gave gold so they would be safe and fed.",
		summary: "The real bishop behind Santa Claus: generous, orthodox, a defender of the poor.",
		life: "Bishop of Myra in Lycia. At Nicaea he defended the divinity of Christ. Stories of secret dowries for three poor girls, grain for a famine, and sailors saved at sea made him the most beloved saint of the Middle Ages. Relics were taken to Bari in 1087.",
		stories: [{
			title: "The three bags of gold",
			text: "He threw gold through a window (or down a chimney) so three daughters would not be sold. The gold balls became the pawnbroker’s sign — and the orange in a Christmas stocking."
		}],
		miracles: [{
			title: "Myra’s wonderworker",
			text: "Byzantine titles call him “Wonderworker.” Sailors of the Mediterranean invoked him in storms for a thousand years."
		}],
		pathToSainthood: "Cultus immemorial in East and West. Bari still keeps his relics and a vial of “manna.”",
		prayer: "St. Nicholas, friend of children, teach us secret generosity."
	}),
	saint({
		slug: "michael",
		name: "St. Michael the Archangel",
		shortName: "Michael",
		title: "Prince of the heavenly host",
		feast: {
			month: 9,
			day: 29
		},
		born: "—",
		died: "—",
		canonized: "An angel; venerated from antiquity",
		symbols: [
			"sword",
			"scales",
			"dragon",
			"armor"
		],
		patronages: [
			"soldiers",
			"police",
			"the dying",
			"grocers",
			"mariners"
		],
		topics: [
			"protection",
			"spiritual warfare",
			"angels"
		],
		kidLine: "Michael is a good angel who protects us. His name means “Who is like God?”",
		summary: "The archangel who casts down the dragon and escorts souls.",
		life: "Not a human saint. Scripture names him in Daniel, Jude, and Revelation 12. The Church honors him as defender of the people of God. The Leonine prayer (“St. Michael the Archangel, defend us in battle”) was given for the whole Church.",
		stories: [{
			title: "The dragon",
			text: "Revelation 12: Michael and his angels fought the dragon, and the dragon was thrown down. Evil is real, and it is not winning."
		}],
		miracles: [{
			title: "Monte Gargano and Mont-Saint-Michel",
			text: "Medieval shrines mark apparitions. The Church does not require them; she requires the prayer."
		}],
		pathToSainthood: "Angelic person; feast of Ss. Michael, Gabriel, and Raphael on September 29.",
		prayer: "St. Michael the Archangel, defend us in battle. Be our protection against the wickedness and snares of the devil.",
		image: "/images/michael.jpg"
	}),
	saint({
		slug: "gabriel",
		name: "St. Gabriel the Archangel",
		shortName: "Gabriel",
		title: "Messenger of the Incarnation",
		feast: {
			month: 9,
			day: 29
		},
		born: "—",
		died: "—",
		canonized: "An angel; venerated from antiquity",
		symbols: [
			"lily",
			"scepter",
			"trumpet"
		],
		patronages: [
			"messengers",
			"postal workers",
			"broadcasters",
			"diplomats"
		],
		topics: [
			"Annunciation",
			"Mary",
			"angels"
		],
		kidLine: "Gabriel is the angel who told Mary the good news about Baby Jesus.",
		summary: "The archangel of the Annunciation and of Daniel’s visions.",
		life: "Named in Daniel 8–9 and Luke 1 (to Zechariah and to Mary). His name means “God is my strength.” He is the Church’s image of a message that does not belong to the messenger.",
		stories: [{
			title: "To Mary",
			text: "“Hail, full of grace.” The first Hail Mary was spoken by an angel."
		}],
		miracles: [{
			title: "The Incarnation announced",
			text: "The miracle is the message: the Word will take flesh."
		}],
		pathToSainthood: "Archangel; shared feast September 29.",
		prayer: "St. Gabriel, carry our yes to God, as you carried His to Mary.",
		image: "/images/annunciation.jpg"
	}),
	saint({
		slug: "raphael",
		name: "St. Raphael the Archangel",
		shortName: "Raphael",
		title: "Medicine of God",
		feast: {
			month: 9,
			day: 29
		},
		born: "—",
		died: "—",
		canonized: "An angel; venerated from antiquity",
		symbols: [
			"fish",
			"staff",
			"jar"
		],
		patronages: [
			"travelers",
			"the blind",
			"nurses",
			"lovers",
			"pharmacists"
		],
		topics: [
			"healing",
			"travel",
			"angels"
		],
		kidLine: "Raphael is the angel who walks with travelers and helps sick people get well.",
		summary: "The archangel who walked Tobias home and healed blindness.",
		life: "The Book of Tobit (in the Catholic canon) tells of Raphael disguised as a companion on the road, driving away a demon, and restoring Tobit’s sight with fish gall. His name means “God heals.”",
		stories: [{
			title: "The road",
			text: "He is why Catholics still ask a blessing for a journey, and why a fish appears in his art."
		}],
		miracles: [{
			title: "Tobit’s eyes",
			text: "The healing in Tobit 11 is the type of all Raphael’s patronage of the sick and of happy marriage."
		}],
		pathToSainthood: "Archangel; feast September 29.",
		prayer: "St. Raphael, walk with us, and heal what is dim in us."
	}),
	saint({
		slug: "augustine",
		name: "St. Augustine of Hippo",
		shortName: "Augustine",
		title: "Bishop, Doctor of the Church",
		feast: {
			month: 8,
			day: 28
		},
		born: "Thagaste, 354",
		died: "Hippo, 430",
		canonized: "Venerated from antiquity; Doctor",
		symbols: [
			"heart",
			"book",
			"child with a shell"
		],
		patronages: [
			"theologians",
			"printers",
			"brewers",
			"sore eyes"
		],
		topics: [
			"conversion",
			"theology",
			"restlessness"
		],
		kidLine: "Augustine ran from God for a long time. Then he came home, and his heart was happy.",
		summary: "The restless heart that found rest, and then taught the West how to think about God.",
		life: "Son of St. Monica and a pagan father. Brilliant, sensual, a Manichee, then a skeptic, then a Neoplatonist. Converted in a Milan garden (“Tolle, lege”). Baptized by Ambrose, ordained, bishop of Hippo through the fall of the Roman order. Confessions and City of God remade Christian letters.",
		stories: [{
			title: "The garden",
			text: "A child’s voice: “Take and read.” He opened Romans 13, and the old life ended."
		}],
		miracles: [{
			title: "Monica’s tears",
			text: "A bishop told her: “It is impossible that the son of so many tears should perish.” That prophecy held."
		}],
		pathToSainthood: "Doctor of the Church; one of the four great Latin Doctors.",
		prayer: "You have made us for yourself, O Lord, and our heart is restless until it rests in you."
	}),
	saint({
		slug: "monica",
		name: "St. Monica",
		shortName: "Monica",
		title: "Mother of Augustine",
		feast: {
			month: 8,
			day: 27
		},
		born: "Thagaste, 331",
		died: "Ostia, 387",
		canonized: "Venerated from antiquity",
		symbols: ["tears", "girdle"],
		patronages: [
			"mothers",
			"wives",
			"alcoholics",
			"difficult marriages",
			"wayward children"
		],
		topics: [
			"mothers",
			"perseverance",
			"conversion"
		],
		kidLine: "Monica prayed and prayed for her boy Augustine. God heard her.",
		summary: "The mother who prayed a brilliant, lost son into the Church.",
		life: "A Christian Berber woman married to a difficult pagan, Patricius. She endured, converted her husband before his death, and followed Augustine across the sea when he fled her. In Milan, Ambrose became her ally. She died at Ostia after a vision of shared heaven with her son.",
		stories: [{
			title: "The window at Ostia",
			text: "Mother and son leaned out a window and spoke of eternal life until the world seemed small. Then she said she had no more reason to linger."
		}],
		miracles: [{
			title: "The long prayer",
			text: "Her miracle is perseverance: thirty years of tears that did not turn to bitterness."
		}],
		pathToSainthood: "Cultus from Hippo outward; feast the day before her son’s.",
		prayer: "St. Monica, pray for parents who wait, and for children who run."
	}),
	saint({
		slug: "thomas-aquinas",
		name: "St. Thomas Aquinas",
		shortName: "Thomas Aquinas",
		title: "Angelic Doctor",
		feast: {
			month: 1,
			day: 28
		},
		born: "Roccasecca, 1225",
		died: "Fossanova, 1274",
		canonized: "1323 by Pope John XXII",
		symbols: [
			"sun on the breast",
			"ox",
			"Summa"
		],
		patronages: [
			"students",
			"universities",
			"theologians",
			"schools"
		],
		topics: [
			"study",
			"Eucharist",
			"reason",
			"faith"
		],
		kidLine: "Thomas was a quiet, big boy who thought about God so carefully that the whole Church still reads him.",
		summary: "The Dominican whose mind was a cathedral, and whose last word was silence before the mystery.",
		life: "The “dumb ox” of Aquino, a Dominican against his family’s will (they imprisoned him). Student of Albert in Paris and Cologne. He wrote the Summa Theologiae, the Office of Corpus Christi, and hymns still sung: Adoro te devote, Pange lingua, Tantum ergo. After a vision in 1273 he stopped writing: “all I have written is straw.” He died on the way to the Council of Lyon.",
		stories: [{
			title: "The crucifix in Naples",
			text: "Christ on the cross asked: “You have written well of me, Thomas. What reward will you have?” “None but yourself, Lord.”"
		}],
		miracles: [{
			title: "The mute ox speaks",
			text: "Albert the Great: “We call him the dumb ox, but the bellow of this ox will be heard throughout the world.”"
		}],
		pathToSainthood: "Canonized 1323. Pius V named him a Doctor; Leo XIII made his thought the Church’s philosophical home.",
		prayer: "St. Thomas, give students clarity, and give us all humility before the mystery."
	}),
	saint({
		slug: "ignatius-loyola",
		name: "St. Ignatius of Loyola",
		shortName: "Ignatius",
		title: "Founder of the Society of Jesus",
		feast: {
			month: 7,
			day: 31
		},
		born: "Loyola, 1491",
		died: "Rome, 1556",
		canonized: "1622 by Pope Gregory XV",
		symbols: [
			"IHS",
			"book",
			"soldier’s gear"
		],
		patronages: [
			"retreats",
			"soldiers",
			"Jesuits",
			"spiritual exercises"
		],
		topics: [
			"discernment",
			"conversion",
			"education"
		],
		kidLine: "Ignatius was a soldier who got hurt, read about Jesus, and gave God his whole life.",
		summary: "The wounded knight who learned to discern spirits and founded the Jesuits.",
		life: "Íñigo, a courtier and soldier, was shattered by a cannonball at Pamplona. In bed he read the lives of Christ and the saints. At Manresa he wrote the Spiritual Exercises. After study in Paris he gathered companions, offered them to the pope, and built a company that would educate, missionize, and (at its best) discern.",
		stories: [{
			title: "The cannonball",
			text: "God used a broken leg. Conversion often starts where our plans end."
		}],
		miracles: [{
			title: "The Exercises",
			text: "Four centuries of retreatants would call the Exercises themselves a standing miracle of spiritual architecture."
		}],
		pathToSainthood: "Canonized 1622 with Teresa, Francis Xavier, Isidore, and Philip Neri — a crop of Counter-Reformation fire.",
		prayer: "Take, Lord, and receive all my liberty, my memory, my understanding, and my entire will."
	}),
	saint({
		slug: "francis-xavier",
		name: "St. Francis Xavier",
		shortName: "Francis Xavier",
		title: "Apostle of the Indies",
		feast: {
			month: 12,
			day: 3
		},
		born: "Xavier, 1506",
		died: "Shangchuan Island, 1552",
		canonized: "1622 by Pope Gregory XV",
		symbols: [
			"crucifix",
			"lily",
			"ship"
		],
		patronages: [
			"missions",
			"sailors",
			"tourism",
			"India",
			"Japan"
		],
		topics: [
			"missions",
			"travel",
			"baptism"
		],
		kidLine: "Francis Xavier sailed very far to tell people about Jesus, all the way to India and Japan.",
		summary: "Ignatius’s friend who died looking at China, having baptized tens of thousands.",
		life: "A Basque noble, roommate of Ignatius at Paris, one of the first Jesuits. Sent to India in 1541, he missioned along the Fishery Coast, in Malacca, the Moluccas, and Japan. He died of fever on an island off China, waiting for a boat that would not come in time.",
		stories: [{
			title: "The baptismal cup",
			text: "He wrote of arm-ache from pouring water — so many wanted to become Christian."
		}],
		miracles: [{
			title: "Incorrupt in Goa",
			text: "His body, kept in Bom Jesus Basilica, has long been venerated as incorrupt. Pilgrims still file past."
		}],
		pathToSainthood: "Canonized 1622. Patron of the missions with Thérèse.",
		prayer: "St. Francis Xavier, set our hearts on the people who have not yet heard."
	}),
	saint({
		slug: "teresa-avila",
		name: "St. Teresa of Ávila",
		shortName: "Teresa of Ávila",
		title: "Doctor of the Church, reformer of Carmel",
		feast: {
			month: 10,
			day: 15
		},
		born: "Ávila, 1515",
		died: "Alba de Tormes, 1582",
		canonized: "1622 by Pope Gregory XV",
		symbols: [
			"heart",
			"book",
			"dove",
			"arrow"
		],
		patronages: [
			"Spain",
			"headache sufferers",
			"lace makers",
			"contemplatives"
		],
		topics: [
			"prayer",
			"reform",
			"friendship with God"
		],
		kidLine: "Teresa talked to Jesus as a friend, and she was brave and funny.",
		summary: "The mystic who reformed Carmel, wrote like a friend, and was named a Doctor.",
		life: "Teresa de Ahumada entered a comfortable Carmel, then was seized by prayer and by the need to reform it. She founded the Discalced houses, wrote the Life, the Way of Perfection, and the Interior Castle, and partnered with John of the Cross. She died on the road, as reformers do.",
		stories: [{
			title: "The mud",
			text: "Thrown from a cart into the mud, she told the Lord: “If this is how you treat your friends, no wonder you have so few.”"
		}],
		miracles: [{
			title: "The transverberation",
			text: "She described an angel piercing her heart with a fire-tipped dart. Bernini’s statue is famous; the experience was hers."
		}],
		pathToSainthood: "Canonized 1622. Paul VI named her the first woman Doctor of the Church in 1970, with Catherine of Siena.",
		prayer: "Let nothing disturb you, let nothing frighten you. All things are passing; God never changes."
	}),
	saint({
		slug: "john-of-the-cross",
		name: "St. John of the Cross",
		shortName: "John of the Cross",
		title: "Doctor of the Church, mystic",
		feast: {
			month: 12,
			day: 14
		},
		born: "Fontiveros, 1542",
		died: "Úbeda, 1591",
		canonized: "1726 by Pope Benedict XIII",
		symbols: [
			"cross",
			"eagle",
			"mountain"
		],
		patronages: [
			"mystics",
			"poets",
			"contemplatives"
		],
		topics: [
			"prayer",
			"suffering",
			"dark night"
		],
		kidLine: "John loved Jesus even in the dark. He wrote poems about God’s love.",
		summary: "The small Carmelite who mapped the dark night and sang the living flame of love.",
		life: "Juan de Yepes, a poor weaver’s son, joined Carmel, then Teresa’s reform. Kidnapped and jailed by unreformed friars, he wrote the Spiritual Canticle in a cell. He died neglected, and then the Church learned to read him.",
		stories: [{
			title: "The prison",
			text: "Nine months in a cupboard in Toledo. He escaped with poems in his head. God is not only in consolation."
		}],
		miracles: [{
			title: "The poems",
			text: "The Dark Night, the Living Flame — among the summit of Spanish verse, written by a man who wanted none of the credit."
		}],
		pathToSainthood: "Canonized 1726; Doctor 1926.",
		prayer: "St. John, teach us not to fear the night in which God weans us."
	}),
	saint({
		slug: "catherine-siena",
		name: "St. Catherine of Siena",
		shortName: "Catherine of Siena",
		title: "Doctor of the Church, Dominican tertiary",
		feast: {
			month: 4,
			day: 29
		},
		born: "Siena, 1347",
		died: "Rome, 1380",
		canonized: "1461 by Pope Pius II",
		symbols: [
			"lily",
			"stigmata",
			"dove",
			"book"
		],
		patronages: [
			"Italy",
			"nurses",
			"fire prevention",
			"the papacy"
		],
		topics: [
			"truth",
			"papacy",
			"courage",
			"women"
		],
		kidLine: "Catherine told the truth even to the pope, because she loved the Church.",
		summary: "A wool-dyer’s daughter who dragged the papacy back from Avignon and was named a Doctor.",
		life: "Twenty-fourth child of the Benincasa family. A Dominican tertiary, mystic of the “interior cell,” she dictated the Dialogue, brokered peace among Italian cities, and wrote fierce letters to Gregory XI until he returned to Rome. She died at 33, exhausted by the later schism.",
		stories: [{
			title: "“Be who God meant you to be”",
			text: "“and you will set the world on fire.” The line is hers, or close enough to her fire."
		}],
		miracles: [{
			title: "The stigmata",
			text: "She received the wounds of Christ, visible only after death by her own prayer."
		}],
		pathToSainthood: "Canonized 1461. Patron of Italy (with Francis) and of Europe. Doctor, 1970.",
		prayer: "St. Catherine, set us on fire with holy truth."
	}),
	saint({
		slug: "joan-of-arc",
		name: "St. Joan of Arc",
		shortName: "Joan",
		title: "Maid of Orléans, martyr",
		feast: {
			month: 5,
			day: 30
		},
		born: "Domrémy, 1412",
		died: "Rouen, 30 May 1431, burned",
		canonized: "1920 by Pope Benedict XV",
		symbols: [
			"banner",
			"armor",
			"lilies"
		],
		patronages: [
			"France",
			"soldiers",
			"captives",
			"martyrs"
		],
		topics: [
			"courage",
			"vocation",
			"injustice"
		],
		kidLine: "Joan was a girl who listened to God and was brave, even when grown-ups were unfair.",
		summary: "A peasant girl who lifted a siege, crowned a king, and was burned — then cleared and raised to the altars.",
		life: "Voices of Michael, Catherine, and Margaret sent her to Charles VII. She relieved Orléans in 1429, saw the king crowned at Reims, was captured, sold to the English, and condemned by a rigged church court for heresy and for wearing male dress. She recanted under terror, then resumed the dress in prison to protect her chastity, and was burned. A rehabilitation trial in 1456 nullified the sentence.",
		stories: [{
			title: "Orléans",
			text: "A seventeen-year-old with a banner turned a war. The military fact is not a legend."
		}],
		miracles: [{
			title: "The name",
			text: "The people called her a saint before the lawyers did. Canonization caught up in 1920."
		}],
		pathToSainthood: "Beatified 1909, canonized 1920. Patron of France.",
		prayer: "St. Joan, hold the banner when we are afraid of the fire."
	}),
	saint({
		slug: "martin-de-porres",
		name: "St. Martin de Porres",
		shortName: "Martin de Porres",
		title: "Dominican lay brother",
		feast: {
			month: 11,
			day: 3
		},
		born: "Lima, 1579",
		died: "Lima, 1639",
		canonized: "1962 by Pope John XXIII",
		symbols: [
			"broom",
			"mice",
			"dog and cat eating together"
		],
		patronages: [
			"racial justice",
			"barbers",
			"the poor",
			"Peru",
			"public health"
		],
		topics: [
			"charity",
			"race",
			"animals",
			"humility"
		],
		kidLine: "Martin was kind to sick people, poor people, and even mice. He swept the floors for Jesus.",
		summary: "The mixed-race barber-brother of Lima whose charity made a whole city call him father.",
		life: "Son of a Spanish hidalgo and a freed Panamanian woman, he was barred from full Dominican profession because of race, so he became a lay brother. He ran the infirmary, begged for the poor, and was known for bilocation and for peace among animals. Lima’s Black and Indigenous poor were his parish.",
		stories: [{
			title: "The mice",
			text: "He asked the monastery mice to stay in the garden and leave the linens. They did, the story goes. He fed them there."
		}],
		miracles: [{
			title: "Bilocation",
			text: "Witnesses in Mexico and other cities claimed to see him while he never left Lima. The canonization process recorded these depositions."
		}],
		pathToSainthood: "Beatified 1837, canonized 1962. First Black saint of the Americas in the modern calendar.",
		prayer: "St. Martin, brother of the overlooked, pray for our cities."
	}),
	saint({
		slug: "rose-of-lima",
		name: "St. Rose of Lima",
		shortName: "Rose",
		title: "First canonized saint of the Americas",
		feast: {
			month: 8,
			day: 23
		},
		born: "Lima, 1586",
		died: "Lima, 1617",
		canonized: "1671 by Pope Clement X",
		symbols: [
			"crown of roses",
			"anchor",
			"Infant Jesus"
		],
		patronages: [
			"Latin America",
			"florists",
			"embroiderers",
			"Peru"
		],
		topics: [
			"penance",
			"Americas",
			"hidden life"
		],
		kidLine: "Rose loved Jesus so much she made her whole life a quiet prayer in her garden.",
		summary: "A Dominican tertiary of Lima, first flower of sanctity the New World offered the calendar.",
		life: "Isabel Flores de Oliva, nicknamed Rose. She refused marriage, became a tertiary, lived in a hut in the family garden, served the sick, and practiced severe penance. She died at 31. Ten thousand people crowded her funeral.",
		stories: [{
			title: "The garden hut",
			text: "Holiness does not need a convent wall. Hers was a backyard in colonial Lima."
		}],
		miracles: [{
			title: "The city",
			text: "Lima credited her prayers with deliverance from pirate attack and earthquake. The cult was immediate."
		}],
		pathToSainthood: "Beatified 1668, canonized 1671 — first saint of the Americas.",
		prayer: "St. Rose, make our hidden work a garden."
	}),
	saint({
		slug: "kateri-tekakwitha",
		name: "St. Kateri Tekakwitha",
		shortName: "Kateri",
		title: "Lily of the Mohawks",
		feast: {
			month: 7,
			day: 14
		},
		born: "Ossernenon (Auriesville), 1656",
		died: "Kahnawake, 1680",
		canonized: "2012 by Pope Benedict XVI",
		symbols: [
			"cross",
			"turtle clan",
			"lilies"
		],
		patronages: [
			"ecology",
			"Native Americans",
			"exiles",
			"orphans"
		],
		topics: [
			"conversion",
			"Native peoples",
			"purity"
		],
		kidLine: "Kateri loved Jesus and was brave in her village. She is the first Native American saint of the United States.",
		summary: "A Mohawk-Algonquin convert who lived the Gospel among her people and in exile.",
		life: "Daughter of a Mohawk chief and an Algonquin Christian, scarred and half-blind by smallpox. Baptized at 19, she was ostracized, fled to the mission at Kahnawake, took a private vow of virginity, and died at 24. Witnesses said her scars vanished at death.",
		stories: [{
			title: "The snow",
			text: "She prayed in the woods, a cross in the snow, when the longhouse was unfriendly."
		}],
		miracles: [{
			title: "The face",
			text: "At her death the pockmarks disappeared. A 2006 healing of a boy with a flesh-eating infection was accepted for her canonization."
		}],
		pathToSainthood: "Beatified 1980, canonized 2012. First Native American saint of the U.S. and Canada.",
		prayer: "St. Kateri, lily of this land, pray for this continent."
	}),
	saint({
		slug: "maximilian-kolbe",
		name: "St. Maximilian Kolbe",
		shortName: "Maximilian Kolbe",
		title: "Martyr of charity, Knight of the Immaculata",
		feast: {
			month: 8,
			day: 14
		},
		born: "Zduńska Wola, 1894",
		died: "Auschwitz, 14 August 1941",
		canonized: "1982 by Pope John Paul II",
		symbols: [
			"prison stripes",
			"palm",
			"Immaculata"
		],
		patronages: [
			"prisoners",
			"drug addicts",
			"families",
			"journalists",
			"the pro-life movement"
		],
		topics: [
			"sacrifice",
			"Mary",
			"martyrdom",
			"media"
		],
		kidLine: "Maximilian gave his life so another daddy could go home to his children.",
		summary: "The Franciscan who volunteered to die in another man’s place at Auschwitz.",
		life: "A Polish Conventual Franciscan, missionary to Japan, publisher of a vast Marian press. Arrested by the Nazis, he was sent to Auschwitz. When a man in his bunker was condemned to starvation, Kolbe stepped forward: “I am a priest.” He died by lethal injection after two weeks in the hunger bunker, the last of the ten.",
		stories: [{
			title: "“I am a priest”",
			text: "Franciszek Gajowniczek, the man he saved, was present at the canonization and spent the rest of his life telling the story."
		}],
		miracles: [{
			title: "The bunker",
			text: "Guards found him leading the condemned in hymns. The miracle is charity in hell."
		}],
		pathToSainthood: "Beatified 1971 as a confessor, canonized 1982 as a martyr — John Paul II insisting the gift of life was martyrdom.",
		prayer: "St. Maximilian, teach us what a life is for."
	}),
	saint({
		slug: "padre-pio",
		name: "St. Pio of Pietrelcina",
		shortName: "Padre Pio",
		title: "Capuchin stigmatist",
		feast: {
			month: 9,
			day: 23
		},
		born: "Pietrelcina, 1887",
		died: "San Giovanni Rotondo, 1968",
		canonized: "2002 by Pope John Paul II",
		symbols: [
			"stigmata",
			"gloves",
			"brown habit"
		],
		patronages: [
			"civil defense volunteers",
			"adolescents",
			"stress relief"
		],
		topics: [
			"confession",
			"suffering",
			"Eucharist",
			"spiritual warfare"
		],
		kidLine: "Padre Pio was a priest who loved confession and carried Jesus’ wounds with love.",
		summary: "The Capuchin whose five wounds, long hours in the confessional, and strange gifts drew the world to a mountain in Puglia.",
		life: "Francesco Forgione, frail, ordained a Capuchin. In 1918 he received the stigmata, which he bore fifty years. He heard confessions for 10–12 hours a day, built a hospital (Casa Sollievo della Sofferenza), and was at times restricted by the Holy Office. He obeyed. He died in 1968 saying, “Jesus, Mary, wait for me.”",
		stories: [{
			title: "“Pray, hope, and don’t worry”",
			text: "His most famous counsel. Not optimism: trust, after you have prayed."
		}],
		miracles: [{
			title: "The stigmata and bilocation",
			text: "Medical commissions examined the wounds. Bilocation and the “odor of sanctity” were sworn by many witnesses. The Church canonized the man, not every anecdote."
		}],
		pathToSainthood: "Beatified 1999, canonized 2002. One of the most popular saints of the last century.",
		prayer: "Pray, hope, and don’t worry. St. Pio, pray for us."
	}),
	saint({
		slug: "faustina",
		name: "St. Faustina Kowalska",
		shortName: "Faustina",
		title: "Apostle of Divine Mercy",
		feast: {
			month: 10,
			day: 5
		},
		born: "Głogowiec, 1905",
		died: "Kraków, 1938",
		canonized: "2000 by Pope John Paul II",
		symbols: [
			"Divine Mercy image",
			"rosary",
			"habit"
		],
		patronages: ["mercy", "the lonely"],
		topics: [
			"mercy",
			"confession",
			"trust"
		],
		kidLine: "Faustina learned that Jesus’ mercy is bigger than any mistake.",
		summary: "A Polish nun whose diary gave the Church Divine Mercy Sunday, the chaplet, and the image.",
		life: "Helena Kowalska, third of ten, barely literate at entry to the Congregation of Our Lady of Mercy. Visions of Christ as Mercy, the chaplet taught in 1935, the image painted under her direction, opposition from some superiors, death of tuberculosis at 33. Her diary was briefly restricted, then became a pillar of modern devotion.",
		stories: [{
			title: "Jesus, I trust in you",
			text: "The signature of the image is the whole spirituality. Not “I feel,” but “I trust.”"
		}],
		miracles: [{
			title: "The chaplet",
			text: "She was told to say it for the dying. Countless deathbeds have used it since."
		}],
		pathToSainthood: "Beatified 1993, canonized 2000 — the first saint of the new millennium. Divine Mercy Sunday was given to the universal Church that day.",
		prayer: "Jesus, I trust in you. St. Faustina, pray for us."
	}),
	saint({
		slug: "john-paul-ii",
		name: "St. John Paul II",
		shortName: "John Paul II",
		title: "Pope, the Great",
		feast: {
			month: 10,
			day: 22
		},
		born: "Wadowice, 1920",
		died: "Rome, 2 April 2005",
		canonized: "2014 by Pope Francis",
		symbols: [
			"white cassock",
			"crossed keys",
			"skiing"
		],
		patronages: [
			"World Youth Day",
			"families",
			"the young"
		],
		topics: [
			"youth",
			"family",
			"mercy",
			"papacy"
		],
		kidLine: "Pope John Paul loved young people and told them: “Be not afraid.”",
		summary: "The Polish pope who helped crack the Iron Curtain and told a generation not to be afraid.",
		life: "Karol Wojtyła, actor, quarry worker, underground seminarian, bishop of Kraków, elected in 1978. He survived assassination, traveled the world, wrote Theology of the Body, the Catechism project, and Evangelium Vitae, and died on Divine Mercy Saturday. His funeral filled Rome with the cry “Santo subito.”",
		stories: [{
			title: "The prison visit",
			text: "He went to the cell of Mehmet Ali Ağca, who had shot him, and forgave him. A photograph of that chair is a relic of mercy."
		}],
		miracles: [{
			title: "Sister Marie Simon-Pierre",
			text: "A French nun’s healing from Parkinson’s was accepted for beatification; a Costa Rican woman’s healing from aneurysm for canonization."
		}],
		pathToSainthood: "Beatified 2011, canonized 2014 with John XXIII. Feast on October 22, the inauguration of his pontificate.",
		prayer: "St. John Paul, teach us not to be afraid."
	}),
	saint({
		slug: "teresa-calcutta",
		name: "St. Teresa of Calcutta",
		shortName: "Mother Teresa",
		title: "Foundress of the Missionaries of Charity",
		feast: {
			month: 9,
			day: 5
		},
		born: "Skopje, 1910",
		died: "Calcutta, 1997",
		canonized: "2016 by Pope Francis",
		symbols: ["blue-bordered sari", "the dying poor"],
		patronages: [
			"World Youth Day",
			"the dying",
			"Calcutta"
		],
		topics: [
			"poor",
			"charity",
			"dark night"
		],
		kidLine: "Mother Teresa picked up people no one else would touch, because she saw Jesus in them.",
		summary: "The small woman who made Calcutta’s dying the center of the world.",
		life: "Gonxha Agnes Bojaxhiu, Loreto sister, then, after a 1946 “call within a call” on a train to Darjeeling, foundress of a congregation that served the poorest of the poor. Nobel Peace Prize, 1979. After her death her letters revealed decades of interior darkness — a saint who did not feel God, and stayed.",
		stories: [{
			title: "“You did it to me”",
			text: "Matthew 25 was her whole rule. The man in the gutter was Christ in distressing disguise."
		}],
		miracles: [{
			title: "Monica Besra",
			text: "A tribal woman’s healing from a tumor, 1998, was accepted for beatification. A Brazilian man’s healing from brain infection for canonization."
		}],
		pathToSainthood: "Beatified 2003, canonized 2016.",
		prayer: "St. Teresa, let us not look away."
	}),
	saint({
		slug: "carlo-acutis",
		name: "St. Carlo Acutis",
		shortName: "Carlo",
		title: "First millennial saint",
		feast: {
			month: 10,
			day: 12
		},
		born: "London, 1991",
		died: "Monza, 2006",
		canonized: "2025 by Pope Leo XIV",
		symbols: [
			"laptop",
			"monstrance",
			"red backpack"
		],
		patronages: [
			"the internet",
			"youth",
			"computer programmers"
		],
		topics: [
			"Eucharist",
			"youth",
			"internet",
			"ordinary holiness"
		],
		kidLine: "Carlo was a boy who loved Jesus in the Eucharist, video games, and making websites about miracles.",
		summary: "A teenager who catalogued Eucharistic miracles online and made holiness look like a normal life.",
		life: "Born in London, raised in Milan. He coded a website of Eucharistic miracles, loved Pokémon and football, defended classmates, went to daily Mass, and died of leukemia at 15. He had said: “The Eucharist is my highway to heaven.” Canonized in 2025, he is the first saint of the millennial generation.",
		stories: [{
			title: "The highway",
			text: "He treated daily Mass the way other boys treat a favorite game: showing up. That is the whole spirituality."
		}],
		miracles: [{
			title: "The healings for his cause",
			text: "A Brazilian boy with a pancreatic anomaly and a girl with a head injury were the miracles accepted on the path to the altars."
		}],
		pathToSainthood: "Beatified 2020 at Assisi; canonized 2025. His tomb is in Assisi.",
		prayer: "St. Carlo, make the internet a highway to heaven, not a ditch."
	}),
	saint({
		slug: "pier-giorgio-frassati",
		name: "St. Pier Giorgio Frassati",
		shortName: "Pier Giorgio",
		title: "Man of the Beatitudes",
		feast: {
			month: 7,
			day: 4
		},
		born: "Turin, 1901",
		died: "Turin, 1925",
		canonized: "2025 by Pope Leo XIV",
		symbols: [
			"climbing rope",
			"pipe",
			"mountain"
		],
		patronages: [
			"young adults",
			"students",
			"mountaineers",
			"World Youth Day"
		],
		topics: [
			"youth",
			"charity",
			"joy",
			"mountains"
		],
		kidLine: "Pier Giorgio loved mountains, his friends, and poor people. He climbed toward God.",
		summary: "A rich young man who gave his bus money away, climbed mountains, and died at 24.",
		life: "Son of an Italian diplomat and newspaper owner. A Dominican tertiary, he smuggled his father’s coat to the poor, joined Catholic Action, opposed fascism, and climbed. He died of polio, likely caught from the sick he visited. At his funeral the poor of Turin filled the streets; his family had not known the extent of his alms. John Paul II beatified him as “the man of the Beatitudes.” Canonized 2025.",
		stories: [{
			title: "Verso l’alto",
			text: "“To the heights” — scrawled on a climbing photo. It became his epitaph and a program for the young."
		}],
		miracles: [{
			title: "The funeral",
			text: "The surprise of the poor at his coffin was the first public miracle: a hidden life made visible."
		}],
		pathToSainthood: "Beatified 1990, canonized 2025.",
		prayer: "St. Pier Giorgio, take us to the heights — and down again to the poor."
	}),
	saint({
		slug: "tarcisius",
		name: "St. Tarcisius",
		shortName: "Tarcisius",
		title: "Martyr of the Eucharist, acolyte",
		feast: {
			month: 8,
			day: 15
		},
		born: "Rome, 3rd century",
		died: "Rome, c. 257, beaten",
		canonized: "Venerated from antiquity",
		symbols: ["Host", "boy in tunic"],
		patronages: ["altar servers", "first communicants"],
		topics: [
			"Eucharist",
			"children",
			"courage",
			"First Communion"
		],
		kidLine: "Tarcisius was a boy who carried Jesus in the Eucharist and would not drop Him, even when other boys hurt him.",
		summary: "A Roman acolyte who died rather than surrender the Blessed Sacrament.",
		life: "During a persecution (likely Valerian’s), the deacons could not take Communion to prisoners. A boy — an acolyte — was sent. On the Appian Way a mob of boys demanded to see what he carried. He would not. They beat him. A soldier named Quadratus carried him home dying. Pope Damasus later wrote his epitaph: he preferred to give his life rather than betray the Body of Christ.",
		stories: [{
			title: "The secret",
			text: "He had nothing in his hands they could understand — and everything. First communicants are told this story for a reason."
		}],
		miracles: [{
			title: "The epitaph",
			text: "Damasus’s poem is the historical core. The rest is the Church remembering a child who knew what he carried."
		}],
		pathToSainthood: "Early Roman martyr. Patron of altar servers and of children preparing for First Communion.",
		prayer: "St. Tarcisius, teach our children what they carry."
	}),
	saint({
		slug: "dominic-savio",
		name: "St. Dominic Savio",
		shortName: "Dominic Savio",
		title: "Student of Don Bosco",
		feast: {
			month: 5,
			day: 6
		},
		born: "Riva, 1842",
		died: "Mondonio, 1857",
		canonized: "1954 by Pope Pius XII",
		symbols: ["lily", "oratory uniform"],
		patronages: [
			"choirboys",
			"the falsely accused",
			"juvenile delinquents"
		],
		topics: [
			"children",
			"purity",
			"school"
		],
		kidLine: "Dominic was a boy who said: “Death, but not sin.” He wanted to be a saint while he was still little.",
		summary: "Don Bosco’s pupil, dead at 14, proof that childhood is a time for holiness, not a waiting room.",
		life: "A peasant boy sent to the Oratory in Turin. He founded the Company of the Immaculate Conception among the boys, broke up fights, and died of lung disease at 14. Don Bosco wrote his life. He is one of the youngest non-martyr saints.",
		stories: [{
			title: "The school of sanctity",
			text: "When a boy said one could not be a saint while playing, Dominic disagreed. Play, study, and Mass were his program."
		}],
		miracles: [{
			title: "Don Bosco’s testimony",
			text: "His spiritual father, himself a saint, is the chief witness. That is a rare chain."
		}],
		pathToSainthood: "Canonized 1954. A patron of those who want to be holy before they can drive.",
		prayer: "St. Dominic Savio, make holiness ordinary for children."
	}),
	saint({
		slug: "maria-goretti",
		name: "St. Maria Goretti",
		shortName: "Maria Goretti",
		title: "Virgin martyr of purity",
		feast: {
			month: 7,
			day: 6
		},
		born: "Corinaldo, 1890",
		died: "Nettuno, 1902",
		canonized: "1950 by Pope Pius XII",
		symbols: ["lilies", "white dress"],
		patronages: [
			"girls",
			"purity",
			"victims of assault",
			"youth"
		],
		topics: [
			"forgiveness",
			"purity",
			"mercy"
		],
		kidLine: "Maria forgave the person who hurt her. That is how strong love can be. (For little ones: she chose Jesus even when she was scared.)",
		summary: "An eleven-year-old who resisted assault, forgave her murderer, and was canonized with him present, converted.",
		life: "A poor farm girl of the Pontine marshes. Alessandro Serenelli, 20, attacked her. She fought, crying that it was a sin. He stabbed her. In hospital she forgave him. She died the next day. Alessandro, after years in prison and a dream of Maria offering lilies, converted, begged her mother’s pardon, and attended the canonization.",
		stories: [{
			title: "The mother and the killer",
			text: "Assunta Goretti forgave Alessandro at Christmas Mass. Mercy ran in the family."
		}],
		miracles: [{
			title: "Alessandro’s conversion",
			text: "A living miracle sat in St. Peter’s in 1950: the murderer, old, in a Capuchin tertiary’s habit."
		}],
		pathToSainthood: "Canonized 1950 before the largest crowd then recorded. She is not a mascot of naïveté; she is a martyr of charity and justice.",
		prayer: "St. Maria Goretti, obtain for us the courage to forgive."
	}),
	saint({
		slug: "john-bosco",
		name: "St. John Bosco",
		shortName: "John Bosco",
		title: "Father and teacher of youth",
		feast: {
			month: 1,
			day: 31
		},
		born: "Castelnuovo, 1815",
		died: "Turin, 1888",
		canonized: "1934 by Pope Pius XI",
		symbols: [
			"boys",
			"dream",
			"juggler’s hat"
		],
		patronages: [
			"youth",
			"students",
			"magicians",
			"editors"
		],
		topics: [
			"children",
			"education",
			"joy"
		],
		kidLine: "Don Bosco loved boys nobody wanted. He taught them, fed them, and played with them.",
		summary: "The priest who invented a playground of grace for the abandoned boys of industrial Turin.",
		life: "A farm boy with dreams (the famous dogs, the roses, the oratory). Ordained, he gathered street boys, taught them trades, and founded the Salesians on a method of reason, religion, and loving-kindness — no blows. He died exhausted, having built a family that still runs schools on every continent.",
		stories: [{
			title: "The juggler",
			text: "As a child he learned circus tricks to draw an audience, then catechized them. The method never changed."
		}],
		miracles: [{
			title: "The dreams",
			text: "He claimed prophetic dreams about boys’ souls. Many of his pupils later confirmed details."
		}],
		pathToSainthood: "Beatified 1929, canonized 1934. Patron of the young.",
		prayer: "St. John Bosco, send us to the children who are left out."
	}),
	saint({
		slug: "vincent-de-paul",
		name: "St. Vincent de Paul",
		shortName: "Vincent de Paul",
		title: "Apostle of charity",
		feast: {
			month: 9,
			day: 27
		},
		born: "Pouy, 1581",
		died: "Paris, 1660",
		canonized: "1737 by Pope Clement XII",
		symbols: ["children", "crucifix"],
		patronages: [
			"charities",
			"hospitals",
			"prisoners",
			"volunteers"
		],
		topics: [
			"poor",
			"charity",
			"organization"
		],
		kidLine: "Vincent spent his life helping poor people, sick people, and children without families.",
		summary: "The Gascon priest who organized charity so that love would outlive a mood.",
		life: "Born poor, ordained young, briefly (by his account) a slave in Tunis. In Paris he became chaplain to the galleys and to great houses, then used both worlds to found the Congregation of the Mission and, with Louise de Marillac, the Daughters of Charity — the first sisters in the streets, not behind grilles.",
		stories: [{
			title: "“It is not enough to love”",
			text: "He taught that the poor will forgive our help only if we love them. Technique without love is a clanging cymbal."
		}],
		miracles: [{
			title: "The societies",
			text: "The Vincentian family and the St. Vincent de Paul Society (founded 1833 in his spirit) are the standing miracle."
		}],
		pathToSainthood: "Canonized 1737. Patron of all charities.",
		prayer: "St. Vincent, make our love practical."
	}),
	saint({
		slug: "elizabeth-hungary",
		name: "St. Elizabeth of Hungary",
		shortName: "Elizabeth",
		title: "Princess, Franciscan tertiary",
		feast: {
			month: 11,
			day: 17
		},
		born: "Pozsony, 1207",
		died: "Marburg, 1231",
		canonized: "1235 by Pope Gregory IX",
		symbols: [
			"roses in the cloak",
			"bread",
			"crown"
		],
		patronages: [
			"bakers",
			"the homeless",
			"widows",
			"charities",
			"hospitals"
		],
		topics: [
			"charity",
			"widows",
			"roses"
		],
		kidLine: "Elizabeth was a princess who hid bread for the poor. When someone looked, it had become roses.",
		summary: "A royal who would rather be a servant, and whose cloak-full of bread became flowers.",
		life: "Daughter of the King of Hungary, married to Ludwig of Thuringia, whom she loved. She built hospitals, fed the hungry, and after Ludwig died on crusade she was driven from court. As a Franciscan tertiary she served the sick until she died at 24.",
		stories: [{
			title: "The miracle of the roses",
			text: "Caught carrying bread to the poor, she opened her cloak and the loaves were roses. The story is told of her (and of Elizabeth of Portugal). It is the shape of her life, whether or not the petals fell."
		}],
		miracles: [{
			title: "The hospitals",
			text: "Marburg’s hospital and a flood of healings at her tomb led to canonization four years after death."
		}],
		pathToSainthood: "Canonized 1235. One of the first Franciscan saints.",
		prayer: "St. Elizabeth, fill our cloaks for the hungry."
	}),
	saint({
		slug: "rita",
		name: "St. Rita of Cascia",
		shortName: "Rita",
		title: "Patron of impossible cases",
		feast: {
			month: 5,
			day: 22
		},
		born: "Roccaporena, 1381",
		died: "Cascia, 1457",
		canonized: "1900 by Pope Leo XIII",
		symbols: [
			"wound on the forehead",
			"roses",
			"figs"
		],
		patronages: [
			"impossible cases",
			"marital problems",
			"abuse victims",
			"parenthood"
		],
		topics: [
			"impossible causes",
			"marriage",
			"forgiveness"
		],
		kidLine: "Rita had a very hard life and never stopped being kind. She is a friend when things seem impossible.",
		summary: "Wife of a violent man, mother of two, nun, stigmatist — and the other saint of lost causes.",
		life: "Forced into marriage with a harsh husband, she converted him by patience. After he was murdered she begged her sons not to take revenge; they died of illness, and she entered the Augustinian convent at Cascia, which had first refused her. A wound on her forehead, like a thorn from the crown, marked her last years.",
		stories: [{
			title: "The bees and the roses",
			text: "In January she asked a cousin for a rose from her old garden. The cousin found one blooming in snow."
		}],
		miracles: [{
			title: "Incorrupt",
			text: "Her body remains in Cascia, and the cell still has a vine the nuns say she planted."
		}],
		pathToSainthood: "Canonized 1900. With Jude, the saint people call when the situation is absurd.",
		prayer: "St. Rita, advocate of the impossible, pray for us."
	}),
	saint({
		slug: "dymphna",
		name: "St. Dymphna",
		shortName: "Dymphna",
		title: "Virgin martyr, Lily of Éire",
		feast: {
			month: 5,
			day: 15
		},
		born: "Ireland, 7th century",
		died: "Geel, Belgium, beheaded",
		canonized: "Venerated from the Middle Ages",
		symbols: [
			"sword",
			"lily",
			"lamp"
		],
		patronages: [
			"mental illness",
			"anxiety",
			"runaways",
			"therapists",
			"incest survivors"
		],
		topics: [
			"mental health",
			"courage",
			"healing"
		],
		kidLine: "Dymphna is a friend for people whose minds feel sad or scared. She is gentle and brave.",
		summary: "An Irish princess martyred at Geel, whose shrine became a medieval refuge for the mentally ill.",
		life: "Legend: a Christian daughter of a pagan king who fled his disordered demand of marriage after her mother’s death. At Geel in Brabant she was found and beheaded. Historically thin; spiritually massive. For centuries Geel boarded the mentally ill in townspeople’s homes — a pioneer of humane care attributed to her patronage.",
		stories: [{
			title: "Geel",
			text: "The town still practices family foster care for psychiatric patients. The saint’s legend grew a civilization of mercy."
		}],
		miracles: [{
			title: "The boarders",
			text: "Healings at her tomb in the 1200s started the cult. The ongoing miracle is a town that did not lock people away."
		}],
		pathToSainthood: "Cultus medieval. A patron for the anxiety of our age.",
		prayer: "St. Dymphna, lily, pray for every frightened mind."
	}),
	saint({
		slug: "blaise",
		name: "St. Blaise",
		shortName: "Blaise",
		title: "Bishop and martyr",
		feast: {
			month: 2,
			day: 3
		},
		born: "Sebaste, Armenia, 3rd century",
		died: "Sebaste, c. 316, beheaded",
		canonized: "Venerated from antiquity",
		symbols: [
			"crossed candles",
			"comb",
			"animals"
		],
		patronages: [
			"throats",
			"veterinarians",
			"wool combers"
		],
		topics: [
			"healing",
			"blessing",
			"animals"
		],
		kidLine: "Blaise blesses throats. He once saved a boy who had a fishbone stuck.",
		summary: "The bishop whose throat blessing is still given every third of February.",
		life: "Bishop of Sebaste, a physician in the legends, he hid in a cave during persecution and blessed sick animals. Arrested, he saved a boy choking on a bone. He was tortured with wool-combs and beheaded.",
		stories: [{
			title: "The candles",
			text: "Two candles crossed at the throat, a blessing: “Through the intercession of St. Blaise, bishop and martyr, may you be delivered from every disease of the throat…”"
		}],
		miracles: [{
			title: "The fishbone",
			text: "The boy’s mother ran after the soldiers; Blaise prayed, the bone came free. Hence the patronage."
		}],
		pathToSainthood: "One of the Fourteen Holy Helpers. Cultus from the East to every parish candle-cupboard.",
		prayer: "St. Blaise, keep our throats free to praise."
	}),
	saint({
		slug: "christopher",
		name: "St. Christopher",
		shortName: "Christopher",
		title: "Christ-bearer",
		feast: {
			month: 7,
			day: 25
		},
		born: "Unknown, 3rd century?",
		died: "Traditionally Lycia, martyr",
		canonized: "Venerated from antiquity; cultus reduced to local calendars 1969",
		symbols: [
			"giant",
			"Child on the shoulder",
			"staff"
		],
		patronages: [
			"travelers",
			"drivers",
			"athletes",
			"bachelors"
		],
		topics: ["travel", "protection"],
		kidLine: "Christopher carried people across a river. Once the person was Jesus, and He was heavy because He carries the world.",
		summary: "The legendary ferryman who carried the Child — and remains the traveler’s friend.",
		life: "The historical Christopher is a shadowy martyr of Lycia. The Golden Legend made him a Canaanite giant who served a king, then the devil, then a hermit who told him to carry travelers. A child grew unbearably heavy: “You have carried the world, and Him who made it.” Rome reduced his universal feast in 1969 for lack of historical detail; devotion did not notice.",
		stories: [{
			title: "The river",
			text: "Every medal in a glove box is that story: we do not travel alone."
		}],
		miracles: [{
			title: "The name",
			text: "Christophoros — Christ-bearer. The miracle is the vocation: to carry Him into ordinary roads."
		}],
		pathToSainthood: "Early martyr with a later legend. Still blessed as a patron of travelers in many places.",
		prayer: "St. Christopher, bear Christ with us on the road."
	}),
	saint({
		slug: "cecilia",
		name: "St. Cecilia",
		shortName: "Cecilia",
		title: "Virgin martyr, patron of music",
		feast: {
			month: 11,
			day: 22
		},
		born: "Rome, 2nd or 3rd century",
		died: "Rome, martyr",
		canonized: "Venerated from antiquity",
		symbols: [
			"organ",
			"lutes",
			"roses"
		],
		patronages: [
			"musicians",
			"singers",
			"poets",
			"church music"
		],
		topics: [
			"music",
			"martyrdom",
			"marriage"
		],
		kidLine: "Cecilia sang to God in her heart. Musicians ask her to pray for them.",
		summary: "A Roman girl whose hidden hymn made her the saint of every choir loft.",
		life: "A noble Christian, married against her will to Valerian, whom she converted (and his brother Tiburtius). All were martyred. The Acts are late and embroidered; her name is in the Roman Canon, which is the Church’s way of saying: this one is rock.",
		stories: [{
			title: "The organ",
			text: "The Acts say she sang in her heart at her wedding while the instruments played. Hence the pipes and the lutes."
		}],
		miracles: [{
			title: "Incorrupt in 1599",
			text: "When her tomb in Santa Cecilia in Trastevere was opened, Stefano Maderno sculpted what he said he saw: a body, turned away, a wound in the neck."
		}],
		pathToSainthood: "Named in the Canon of the Mass. Basilica over her house in Trastevere.",
		prayer: "St. Cecilia, tune our hearts."
	}),
	saint({
		slug: "agnes",
		name: "St. Agnes of Rome",
		shortName: "Agnes",
		title: "Virgin martyr",
		feast: {
			month: 1,
			day: 21
		},
		born: "Rome, c. 291",
		died: "Rome, c. 304",
		canonized: "Venerated from antiquity",
		symbols: ["lamb", "palm"],
		patronages: [
			"girls",
			"chastity",
			"the betrothed",
			"Gardeners"
		],
		topics: [
			"purity",
			"children",
			"courage"
		],
		kidLine: "Agnes was a girl who belonged to Jesus. Her name means lamb.",
		summary: "A twelve- or thirteen-year-old Roman who would not marry a pagan, and whose name is in the Canon.",
		life: "During Diocletian’s persecution she refused suitors, declaring herself already promised to Christ. Accounts vary on the manner of death (stabbed in the throat after fire failed). Constantine’s daughter built her basilica on the Via Nomentana. Two lambs are still blessed there on her feast; their wool becomes pallia for metropolitan archbishops.",
		stories: [{
			title: "The pallium",
			text: "Every metropolitan wears a band of her lambs’ wool. A child’s martyrdom still dresses the bishops of the world."
		}],
		miracles: [{
			title: "The hair",
			text: "Legend: when stripped, her hair grew to cover her. Whether or not, the Church covered her with honor."
		}],
		pathToSainthood: "In the Roman Canon. One of the youngest named martyrs of Rome.",
		prayer: "St. Agnes, lamb of God, keep our children."
	}),
	saint({
		slug: "lucy",
		name: "St. Lucy",
		shortName: "Lucy",
		title: "Virgin martyr of Syracuse",
		feast: {
			month: 12,
			day: 13
		},
		born: "Syracuse, c. 283",
		died: "Syracuse, 304",
		canonized: "Venerated from antiquity",
		symbols: ["eyes on a plate", "lamp"],
		patronages: [
			"the blind",
			"eyes",
			"writers",
			"Syracuse"
		],
		topics: [
			"light",
			"martyrdom",
			"Advent"
		],
		kidLine: "Lucy’s name means light. She is a friend when eyes are tired or sick.",
		summary: "The Sicilian martyr whose feast in Advent is a festival of light in the dark north.",
		life: "A Christian of Syracuse, she vowed virginity, was denounced, and martyred under Diocletian. Later legend added the gouging of her eyes (restored by God). In Sweden and Norway her day is a crown of candles in the winter dark — a Catholic spark in a Lutheran land.",
		stories: [{
			title: "Lights in December",
			text: "A girl in white with a candle crown, singing: the north remembered a Sicilian saint when it needed light."
		}],
		miracles: [{
			title: "The eyes",
			text: "Whether historical or emblematic, she is invoked for diseases of the eyes and for inner sight."
		}],
		pathToSainthood: "In the Roman Canon. Feast December 13.",
		prayer: "St. Lucy, let us see."
	}),
	saint({
		slug: "benedict",
		name: "St. Benedict of Nursia",
		shortName: "Benedict",
		title: "Father of Western monasticism",
		feast: {
			month: 7,
			day: 11
		},
		born: "Nursia, c. 480",
		died: "Monte Cassino, 547",
		canonized: "Venerated from antiquity",
		symbols: [
			"crozier",
			"raven",
			"broken cup",
			"rule"
		],
		patronages: [
			"Europe",
			"students",
			"speleologists",
			"against poison",
			"architects"
		],
		topics: [
			"prayer",
			"work",
			"rule of life",
			"Europe"
		],
		kidLine: "Benedict taught monks to pray and to work. Ora et labora — pray and work.",
		summary: "The man whose little rule for beginners rebuilt Europe after Rome fell.",
		life: "A student in collapsing Rome, he fled to a cave at Subiaco. Disciples came. He founded Monte Cassino and wrote a Rule: enough prayer, enough work, enough wine, enough silence. Gregory the Great wrote his life. Paul VI named him patron of Europe.",
		stories: [{
			title: "The raven",
			text: "A jealous priest sent poisoned bread; a raven carried it away. The cup that would not hold poison is in his art."
		}],
		miracles: [{
			title: "The Rule",
			text: "Fifteen centuries of Benedictines — schools, manuscripts, farms — are the miracle of a moderate document."
		}],
		pathToSainthood: "Cultus from Gregory’s Dialogues. Patron of Europe.",
		prayer: "St. Benedict, teach our house a small, keepable rule."
	}),
	saint({
		slug: "scholastica",
		name: "St. Scholastica",
		shortName: "Scholastica",
		title: "Twin of Benedict, nun",
		feast: {
			month: 2,
			day: 10
		},
		born: "Nursia, c. 480",
		died: "Near Monte Cassino, 543",
		canonized: "Venerated from antiquity",
		symbols: ["dove", "nun’s habit"],
		patronages: [
			"nuns",
			"convulsive children",
			"against storms"
		],
		topics: [
			"prayer",
			"family",
			"women"
		],
		kidLine: "Scholastica was Benedict’s twin. She loved to talk about God with her brother.",
		summary: "The sister whose storm kept her brother at the table one last night.",
		life: "Twin of Benedict, abbess of a nearby house. Once a year they met. The last time, she asked him to stay and talk of heaven; he refused because of his Rule. She prayed, a storm broke, and he stayed. Three days later he saw her soul as a dove.",
		stories: [{
			title: "The storm",
			text: "Gregory: “She who loved more, could do more.” Charity outran the timetable."
		}],
		miracles: [{
			title: "The dove",
			text: "Benedict’s vision of her soul is the image on every holy card."
		}],
		pathToSainthood: "Told by Gregory the Great; feast February 10.",
		prayer: "St. Scholastica, win us one more hour of holy conversation."
	}),
	saint({
		slug: "bridget",
		name: "St. Brigid of Ireland",
		shortName: "Brigid",
		title: "Mary of the Gael",
		feast: {
			month: 2,
			day: 1
		},
		born: "Faughart, c. 451",
		died: "Kildare, 525",
		canonized: "Venerated from antiquity",
		symbols: [
			"rush cross",
			"oak",
			"cow"
		],
		patronages: [
			"Ireland",
			"dairy",
			"poets",
			"midwives",
			"scholars"
		],
		topics: [
			"Ireland",
			"hospitality",
			"women"
		],
		kidLine: "Brigid was kind and built a church under an oak. We make her cross from rushes.",
		summary: "Abbess of Kildare, companion of Patrick in the Irish imagination, fire of hospitality.",
		life: "Daughter of a chieftain and a slave, she took the veil and founded a double monastery at Kildare. The Lives are a forest of legend: the cloak that spread, the ale from water, the never-failing butter. Under the tales is a woman who made a Christian Ireland hospitable.",
		stories: [{
			title: "The rush cross",
			text: "She wove a cross at a dying chieftain’s bed while she told him the Gospel. Irish houses still hang it."
		}],
		miracles: [{
			title: "The cloak",
			text: "A king granted her as much land as her cloak would cover; it spread over the Curragh. A story about a woman’s nerve."
		}],
		pathToSainthood: "One of Ireland’s three patrons (with Patrick and Columba).",
		prayer: "St. Brigid, weave protection over this house."
	}),
	saint({
		slug: "thomas-more",
		name: "St. Thomas More",
		shortName: "Thomas More",
		title: "Martyr, Lord Chancellor",
		feast: {
			month: 6,
			day: 22
		},
		born: "London, 1478",
		died: "London, 6 July 1535, beheaded",
		canonized: "1935 by Pope Pius XI",
		symbols: [
			"axe",
			"chain of office",
			"book"
		],
		patronages: [
			"lawyers",
			"politicians",
			"adopted children",
			"civil servants"
		],
		topics: [
			"conscience",
			"family",
			"law"
		],
		kidLine: "Thomas More was a dad and a judge who would not tell a lie about the Church, even to keep his job.",
		summary: "The merry lawyer who would not sign, and lost his head laughing at the scaffold.",
		life: "Humanist, friend of Erasmus, author of Utopia, father of a learned household, Lord Chancellor of England. He would not swear the Oath of Supremacy making Henry VIII head of the Church in England. After fifteen months in the Tower he was tried for treason and beheaded. “I die the king’s good servant, and God’s first.”",
		stories: [{
			title: "The beard",
			text: "On the block he moved his beard aside: “It has committed no treason.” The joke was the last obedience: joy, not grimness."
		}],
		miracles: [{
			title: "The family",
			text: "Margaret Roper bribed the tide to take his head from London Bridge. Filial love is not a small miracle."
		}],
		pathToSainthood: "Beatified 1886, canonized 1935 with John Fisher. Patron of statesmen.",
		prayer: "St. Thomas More, king’s good servant, God’s first."
	}),
	saint({
		slug: "ignatius-antioch",
		name: "St. Ignatius of Antioch",
		shortName: "Ignatius of Antioch",
		title: "Bishop, Apostolic Father, martyr",
		feast: {
			month: 10,
			day: 17
		},
		born: "Syria, c. 35",
		died: "Rome, c. 107, thrown to beasts",
		canonized: "Venerated from the beginning",
		symbols: ["lions", "chains"],
		patronages: ["Church in the Middle East", "throat diseases"],
		topics: [
			"Eucharist",
			"martyrdom",
			"bishops"
		],
		kidLine: "Ignatius was a bishop who loved Jesus in the Eucharist so much he was not afraid of the lions.",
		summary: "The man who called the Eucharist “the medicine of immortality” on the road to the amphitheater.",
		life: "Third bishop of Antioch, perhaps a hearer of John. Arrested under Trajan, he wrote seven letters as he was marched to Rome: to churches, to Polycarp. He begged the Romans not to interfere with his martyrdom. He was killed by beasts in the Colosseum (or a similar arena).",
		stories: [{
			title: "Wheat of God",
			text: "“I am the wheat of God, and I am ground by the teeth of wild beasts, that I may be found the pure bread of Christ.”"
		}],
		miracles: [{
			title: "The letters",
			text: "They are among the most important Christian documents after the New Testament: bishops, Eucharist, unity."
		}],
		pathToSainthood: "Apostolic Father and martyr. His theology of the Real Presence is already fully Catholic.",
		prayer: "St. Ignatius, make us wheat, not tourists of the faith."
	}),
	saint({
		slug: "irenaeus",
		name: "St. Irenaeus of Lyons",
		shortName: "Irenaeus",
		title: "Bishop, Doctor of the Church",
		feast: {
			month: 6,
			day: 28
		},
		born: "Smyrna, c. 130",
		died: "Lyons, c. 202",
		canonized: "Venerated from antiquity; Doctor 2022",
		symbols: ["book", "bishop’s staff"],
		patronages: ["theologians"],
		topics: [
			"heresy",
			"Incarnation",
			"Scripture"
		],
		kidLine: "Irenaeus taught that Jesus came to recapture everything the devil had stolen — to make it all new.",
		summary: "The man who stood against Gnosticism and taught that the glory of God is the living man.",
		life: "A hearer of Polycarp (who had heard John), he became bishop of Lyons after a persecution. Against Gnostic secret knowledge he wrote Against Heresies: the rule of faith, the four Gospels, the recapitulatio of all things in Christ. Francis declared him a Doctor in 2022, “Doctor of Unity.”",
		stories: [{
			title: "The living man",
			text: "“The glory of God is man fully alive, and the life of man is the vision of God.”"
		}],
		miracles: [{
			title: "The fourfold Gospel",
			text: "He is an early, decisive witness that the Church already had four and only four Gospels."
		}],
		pathToSainthood: "Father and Doctor. Feast June 28.",
		prayer: "St. Irenaeus, keep us in the unity of the faith."
	}),
	saint({
		slug: "athanasius",
		name: "St. Athanasius",
		shortName: "Athanasius",
		title: "Doctor, champion of Nicaea",
		feast: {
			month: 5,
			day: 2
		},
		born: "Alexandria, c. 296",
		died: "Alexandria, 373",
		canonized: "Venerated from antiquity; Doctor",
		symbols: ["book", "boat"],
		patronages: ["theologians", "orthodoxy"],
		topics: [
			"Trinity",
			"Incarnation",
			"courage"
		],
		kidLine: "Athanasius said, over and over: Jesus is truly God. He would not take it back.",
		summary: "Athanasius contra mundum — against the world, for the divinity of the Son.",
		life: "Deacon at Nicaea, then patriarch of Alexandria. Five times exiled by Arian emperors. He wrote On the Incarnation: God became man that man might become God (by grace). Without him the Creed might have gone the other way.",
		stories: [{
			title: "The boat",
			text: "Fleeing on the Nile, he turned around and rowed toward the pursuers. “He is not far,” he said, and they passed him."
		}],
		miracles: [{
			title: "Nicaea held",
			text: "The homoousios — of one being with the Father — is in every Sunday Creed because this man would not yield."
		}],
		pathToSainthood: "Doctor of the Church. Feast May 2.",
		prayer: "St. Athanasius, keep us in the Creed."
	}),
	saint({
		slug: "ambrose",
		name: "St. Ambrose of Milan",
		shortName: "Ambrose",
		title: "Bishop, Doctor of the Church",
		feast: {
			month: 12,
			day: 7
		},
		born: "Trier, c. 340",
		died: "Milan, 397",
		canonized: "Venerated from antiquity; Doctor",
		symbols: [
			"bees",
			"whip",
			"book"
		],
		patronages: [
			"beekeepers",
			"Milan",
			"learning"
		],
		topics: [
			"baptism",
			"music",
			"bishops"
		],
		kidLine: "Ambrose taught Augustine. Bees once landed on baby Ambrose — a sign he would speak sweetly of God.",
		summary: "The governor the people made a bishop, who stood down an emperor and baptized Augustine.",
		life: "A catechumen, consularis of Liguria, he went to keep order at a noisy episcopal election and found himself elected. Baptized, ordained, and consecrated in a week. He read, preached, wrote hymns, excommunicated Theodosius after a massacre, and received Monica’s restless son.",
		stories: [{
			title: "Theodosius",
			text: "After the massacre at Thessalonica, Ambrose barred the emperor from Communion until public penance. No one is above the Gospel."
		}],
		miracles: [{
			title: "The bees",
			text: "A swarm settled on the infant’s face and left a drop of honey. Legend; the honey of his preaching is not."
		}],
		pathToSainthood: "One of the four Latin Doctors. The Ambrosian rite still marks Milan.",
		prayer: "St. Ambrose, give bishops a spine, and catechumens a home."
	}),
	saint({
		slug: "gregory-great",
		name: "St. Gregory the Great",
		shortName: "Gregory the Great",
		title: "Pope, Doctor of the Church",
		feast: {
			month: 9,
			day: 3
		},
		born: "Rome, c. 540",
		died: "Rome, 604",
		canonized: "Venerated from antiquity; Doctor",
		symbols: ["dove at the ear", "tiara"],
		patronages: [
			"teachers",
			"musicians",
			"singers",
			"England"
		],
		topics: [
			"papacy",
			"chant",
			"pastoral care"
		],
		kidLine: "Gregory sent missionaries to England and loved beautiful prayer-songs.",
		summary: "The prefect who became a monk, then a pope who invented the medieval papacy of service.",
		life: "A Roman noble, prefect of the city, then a monk in his own house. Sent as apocrisiarius to Constantinople, then elected pope in a plague. He fed Rome, ransomed captives, sent Augustine of Canterbury to the English, wrote the Pastoral Rule, and lent his name to the chant.",
		stories: [{
			title: "Non Angli sed angeli",
			text: "Seeing English slave-boys in the forum: “Not Angles, but angels.” He sent a mission that remade a people."
		}],
		miracles: [{
			title: "The dove",
			text: "A clerk said a dove dictated his writings. A picture of inspiration; the Pastoral Rule is the substance."
		}],
		pathToSainthood: "The only pope besides Leo I commonly called “the Great.” Doctor.",
		prayer: "St. Gregory, make our pastors shepherds, not managers."
	}),
	saint({
		slug: "dominic",
		name: "St. Dominic",
		shortName: "Dominic",
		title: "Founder of the Order of Preachers",
		feast: {
			month: 8,
			day: 8
		},
		born: "Caleruega, 1170",
		died: "Bologna, 1221",
		canonized: "1234 by Pope Gregory IX",
		symbols: [
			"star",
			"dog with a torch",
			"lily",
			"rosary"
		],
		patronages: [
			"astronomers",
			"Dominican Republic",
			"the Rosary"
		],
		topics: [
			"preaching",
			"Rosary",
			"truth"
		],
		kidLine: "Dominic preached the truth and loved the Rosary. A dog with a torch is his sign: a hound of the Lord.",
		summary: "The Spaniard who fought heresy with poverty, study, and the beads.",
		life: "A canon of Osma, he preached among the Albigensians without pomp. He founded the Order of Preachers — friars who would study and speak. Legend ties him to the Rosary given by Mary; historically the Dominicans were the beads’ great apostles. He died in Bologna, having told the brothers to love poverty like a mother.",
		stories: [{
			title: "The hound",
			text: "His mother dreamed of a dog setting the world on fire. Domini canes — dogs of the Lord."
		}],
		miracles: [{
			title: "The books in the fire",
			text: "In a trial by fire against heretics, his notes leaped from the flames; theirs burned. So the story goes in the Midi."
		}],
		pathToSainthood: "Canonized 1234. The Rosary’s best human friend.",
		prayer: "St. Dominic, give us preachers who are poor and true."
	}),
	saint({
		slug: "philip-neri",
		name: "St. Philip Neri",
		shortName: "Philip Neri",
		title: "Apostle of Rome, founder of the Oratory",
		feast: {
			month: 5,
			day: 26
		},
		born: "Florence, 1515",
		died: "Rome, 1595",
		canonized: "1622 by Pope Gregory XV",
		symbols: [
			"lily",
			"heart",
			"cat"
		],
		patronages: [
			"Rome",
			"joy",
			"the Oratory",
			"U.S. Special Forces"
		],
		topics: [
			"joy",
			"humor",
			"confession"
		],
		kidLine: "Philip was a priest who loved to laugh, play, and help people love God without being gloomy.",
		summary: "The second apostle of Rome, who saved souls with picnics, jokes, and the confessional.",
		life: "A Florentine who came to Rome as a lay apostle, lived in a garret, visited the sick, and was ordained at 36. He founded the Oratory: prayer, music, talk. His heart was said to have dilated; he lived in a kind of perpetual Pentecost. He made holiness look like friendship.",
		stories: [{
			title: "The book upside down",
			text: "He sent pompous penitents on ridiculous errands to kill pride. Joy was his ascesis."
		}],
		miracles: [{
			title: "The heart",
			text: "Autopsy found two ribs broken in an arch over an enlarged heart. He had claimed a ball of fire entered his chest in the catacombs."
		}],
		pathToSainthood: "Canonized 1622. Patron of those who suspect that saints frown.",
		prayer: "St. Philip, teach us a cheerful holiness."
	}),
	saint({
		slug: "alphonsus",
		name: "St. Alphonsus Liguori",
		shortName: "Alphonsus",
		title: "Doctor, founder of the Redemptorists",
		feast: {
			month: 8,
			day: 1
		},
		born: "Marianella, 1696",
		died: "Pagani, 1787",
		canonized: "1839 by Pope Gregory XVI",
		symbols: ["rosary", "monstrance"],
		patronages: [
			"confessors",
			"moral theologians",
			"arthritis"
		],
		topics: [
			"mercy",
			"confession",
			"Mary"
		],
		kidLine: "Alphonsus taught priests to be kind in confession, and he wrote songs and prayers to Mary.",
		summary: "The lawyer-turned-bishop who made moral theology merciful and wrote the Way of the Cross many parishes still use.",
		life: "A Neapolitan noble, a lawyer who lost a case and heard “leave the world.” He founded the Redemptorists for the abandoned poor of the countryside, wrote The Glories of Mary and a moral theology against Jansenist rigor, and spent old age in a wheelchair, deaf, wrongly expelled from his own congregation for a time, without bitterness.",
		stories: [{
			title: "The lost case",
			text: "One professional humiliation became a saint. God is not proud about instruments."
		}],
		miracles: [{
			title: "The Glories of Mary",
			text: "The book itself converted rigorists. He taught that it is never the wrong time to hope."
		}],
		pathToSainthood: "Canonized 1839; Doctor 1871. Patron of confessors.",
		prayer: "St. Alphonsus, make our confessors gentle, and our hope stubborn."
	}),
	saint({
		slug: "john-vianney",
		name: "St. John Vianney",
		shortName: "John Vianney",
		title: "Curé of Ars, patron of parish priests",
		feast: {
			month: 8,
			day: 4
		},
		born: "Dardilly, 1786",
		died: "Ars, 1859",
		canonized: "1925 by Pope Pius XI",
		symbols: ["cassock", "stole"],
		patronages: ["parish priests", "confessors"],
		topics: [
			"priesthood",
			"confession",
			"hidden life"
		],
		kidLine: "The Curé of Ars was a priest who sat in a little box for hours so people could tell God they were sorry.",
		summary: "A barely-passing seminarian who became the most sought-after confessor in Europe.",
		life: "A peasant, drafted, a deserter by accident, a weak student ordained by a mercy that looked like a mistake. Sent to the village of Ars, he stayed. By the 1850s pilgrims came by the trainload. He lived on potatoes, fought the devil in his rectory (the “grappin”), and heard confessions 12–18 hours a day.",
		stories: [{
			title: "The train to Ars",
			text: "People asked the way to the saint. The saint asked the way to the last sinner in line."
		}],
		miracles: [{
			title: "Reading hearts",
			text: "Countless penitents said he named sins they had hidden. The Church accepted the pattern, not each tale."
		}],
		pathToSainthood: "Canonized 1925. Patron of all priests.",
		prayer: "St. John Vianney, give us priests who stay."
	}),
	saint({
		slug: "edith-stein",
		name: "St. Teresa Benedicta of the Cross",
		shortName: "Edith Stein",
		title: "Carmelite, martyr, co-patron of Europe",
		feast: {
			month: 8,
			day: 9
		},
		born: "Breslau, 1891",
		died: "Auschwitz, 9 August 1942",
		canonized: "1998 by Pope John Paul II",
		symbols: [
			"Star of David",
			"Carmelite habit",
			"book"
		],
		patronages: [
			"Europe",
			"orphans",
			"converts",
			"philosophers"
		],
		topics: [
			"conversion",
			"Judaism",
			"martyrdom",
			"truth"
		],
		kidLine: "Edith was a brilliant woman who found Jesus, became a nun, and died because she was Jewish, offering her life with Him.",
		summary: "The Jewish philosopher who became a Carmelite and was murdered at Auschwitz.",
		life: "Born Edith Stein, the atheist daughter of observant Jews, Husserl’s assistant, a woman who read Teresa of Ávila all night and was baptized in 1922. She entered Cologne Carmel in 1933, was transferred to Echt for safety, and was arrested in the 1942 roundup of Catholic Jews in the Netherlands after the bishops spoke against the Nazis. She died in the gas chamber, having said, “Come, we are going for our people.”",
		stories: [{
			title: "The all-nighter",
			text: "Teresa’s Life on a friend’s shelf. By morning: “This is the truth.” Intellectuals are allowed to be converted by a book."
		}],
		miracles: [{
			title: "Benedicta",
			text: "She took the name of the Cross. The martyrdom sealed the name."
		}],
		pathToSainthood: "Beatified 1987 as a martyr, canonized 1998. Co-patron of Europe.",
		prayer: "St. Teresa Benedicta, hold together the people you loved: Jews, philosophers, Carmel."
	}),
	saint({
		slug: "oscar-romero",
		name: "St. Óscar Romero",
		shortName: "Óscar Romero",
		title: "Bishop, martyr of El Salvador",
		feast: {
			month: 3,
			day: 24
		},
		born: "Ciudad Barrios, 1917",
		died: "San Salvador, 24 March 1980",
		canonized: "2018 by Pope Francis",
		symbols: ["pallium", "radio microphone"],
		patronages: ["persecuted Christians", "El Salvador"],
		topics: [
			"justice",
			"the poor",
			"martyrdom"
		],
		kidLine: "Bishop Romero spoke up for poor people. He was killed at Mass.",
		summary: "The shy conservative bishop who became the voice of a crucified people and was shot at the altar.",
		life: "A bookish cleric, appointed archbishop as a “safe” choice. The murder of his friend Fr. Rutilio Grande opened his eyes. His Sunday homilies, broadcast on radio, named the dead and begged soldiers to disobey immoral orders. He was shot while celebrating Mass in a hospital chapel the day after that appeal.",
		stories: [{
			title: "The homily",
			text: "“In the name of God, stop the repression.” The next day they stopped him."
		}],
		miracles: [{
			title: "Cecilia Maribel Ramos",
			text: "A Salvadoran woman’s healing in 2015 was accepted for canonization."
		}],
		pathToSainthood: "Beatified 2015 as a martyr killed in odium fidei, canonized 2018.",
		prayer: "St. Óscar, give shepherds a voice for the ones who have none."
	}),
	saint({
		slug: "gianna",
		name: "St. Gianna Beretta Molla",
		shortName: "Gianna",
		title: "Wife, mother, physician",
		feast: {
			month: 4,
			day: 28
		},
		born: "Magenta, 1922",
		died: "Monza, 1962",
		canonized: "2004 by Pope John Paul II",
		symbols: ["stethoscope", "child"],
		patronages: [
			"mothers",
			"physicians",
			"unborn children"
		],
		topics: [
			"family",
			"life",
			"mothers",
			"doctors"
		],
		kidLine: "Gianna was a doctor and a mom who loved her baby even when it was dangerous for her.",
		summary: "A modern wife who chose her child’s life at the cost of her own.",
		life: "A pediatrician, wife of Pietro Molla, mother of three, pregnant with a fourth when a tumor was found. She refused a hysterectomy that would have killed the child. A daughter, Gianna Emanuela, was born; the mother died a week later of septic peritonitis. The daughter became a geriatrics physician.",
		stories: [{
			title: "The letter",
			text: "She told Pietro: if you must decide, “save the child.” The Church does not ask every mother for this exact sacrifice; she honors this one."
		}],
		miracles: [{
			title: "Two healings",
			text: "A Brazilian woman’s infection and a stillbirth recovery were accepted on the path to the altars."
		}],
		pathToSainthood: "Beatified 1994, canonized 2004 — with her husband and children in the square.",
		prayer: "St. Gianna, bless mothers, doctors, and every hidden child."
	}),
	saint({
		slug: "louis-zelie",
		name: "Ss. Louis and Zélie Martin",
		shortName: "Louis and Zélie",
		title: "Parents of St. Thérèse",
		feast: {
			month: 7,
			day: 12
		},
		born: "Bordeaux 1823 / Gandelain 1831",
		died: "1877 (Zélie) / 1894 (Louis)",
		canonized: "2015 by Pope Francis",
		symbols: [
			"wedding rings",
			"lace",
			"watch"
		],
		patronages: [
			"marriages",
			"parents",
			"illness in the family"
		],
		topics: [
			"family",
			"marriage",
			"parenting"
		],
		kidLine: "Louis and Zélie were Thérèse’s mom and dad. They loved each other and God, and they raised saints.",
		summary: "The first spouses canonized together, a watchmaker and a lace-maker who made a domestic church.",
		life: "Both had wanted religious life and been refused. They married, intended at first a Josephite union, then were counselled into a full marriage. Nine children, five surviving — all nuns. Zélie died of breast cancer; Louis sank into dementia and was institutionalized. Holiness looked like invoices, sickrooms, and Sunday vespers.",
		stories: [{
			title: "The correspondence",
			text: "Their letters are ordinary and burning: business, babies, a joke, a prayer. Canonizable love is specific."
		}],
		miracles: [{
			title: "The children",
			text: "Five daughters in religion, one a Doctor of the Church. The miracle had a street address in Lisieux."
		}],
		pathToSainthood: "Beatified 2008, canonized 2015 during the Synod on the Family.",
		prayer: "Ss. Louis and Zélie, make our marriage a little church."
	}),
	saint({
		slug: "elizabeth-seton",
		name: "St. Elizabeth Ann Seton",
		shortName: "Elizabeth Ann Seton",
		title: "First native-born American saint",
		feast: {
			month: 1,
			day: 4
		},
		born: "New York, 1774",
		died: "Emmitsburg, 1821",
		canonized: "1975 by Pope Paul VI",
		symbols: [
			"widow’s cap",
			"children",
			"book"
		],
		patronages: [
			"Catholic schools",
			"widows",
			"the death of children",
			"Maryland"
		],
		topics: [
			"conversion",
			"America",
			"education",
			"widows"
		],
		kidLine: "Mother Seton started Catholic schools in America and took care of children who had no one.",
		summary: "An Episcopalian widow of New York who became a Catholic foundress and the mother of parochial schools.",
		life: "Born Elizabeth Bayley, married to William Seton, mother of five. His death in Italy, and the kindness of the Filicchi family, drew her to the Eucharist and to Rome. She converted in 1805, lost friends and status, moved to Maryland, and founded the Sisters of Charity. She died at 46.",
		stories: [{
			title: "The real presence",
			text: "Watching the Blessed Sacrament in Italian churches, she wrote of a hunger that her old communion could not feed. The Eucharist made her Catholic."
		}],
		miracles: [{
			title: "American schools",
			text: "The parochial system that catechized immigrants is her monument."
		}],
		pathToSainthood: "Beatified 1963, canonized 1975 — first U.S.-born saint.",
		prayer: "St. Elizabeth Ann, teach this country the faith."
	}),
	saint({
		slug: "frances-cabrini",
		name: "St. Frances Xavier Cabrini",
		shortName: "Mother Cabrini",
		title: "Missionary of the Immigrants",
		feast: {
			month: 11,
			day: 13
		},
		born: "Sant’Angelo Lodigiano, 1850",
		died: "Chicago, 1917",
		canonized: "1946 by Pope Pius XII",
		symbols: [
			"ship",
			"immigrants",
			"habit"
		],
		patronages: ["immigrants", "hospital administrators"],
		topics: [
			"immigrants",
			"America",
			"courage"
		],
		kidLine: "Mother Cabrini was afraid of water, and God sent her across the ocean to help people who had just arrived.",
		summary: "The tiny foundress who wanted China and was sent to the United States instead.",
		life: "Rejected by convents as too frail, she founded the Missionary Sisters of the Sacred Heart. Leo XIII told her, “Not to the East, but to the West.” She crossed the Atlantic twenty-seven times, built schools, orphanages, and hospitals for Italian immigrants, and became a U.S. citizen. First U.S. citizen saint.",
		stories: [{
			title: "Afraid of the sea",
			text: "She never lost the fear. She went anyway. Patronage of immigrants is autobiography."
		}],
		miracles: [{
			title: "The hospitals",
			text: "Her houses still stand in New York, Chicago, Denver, Seattle — brick miracles."
		}],
		pathToSainthood: "Beatified 1938, canonized 1946. First American citizen on the calendar.",
		prayer: "St. Frances Cabrini, meet the stranger as Christ."
	}),
	saint({
		slug: "josephine-bakhita",
		name: "St. Josephine Bakhita",
		shortName: "Bakhita",
		title: "Canossian sister, former slave",
		feast: {
			month: 2,
			day: 8
		},
		born: "Darfur, c. 1869",
		died: "Schio, 1947",
		canonized: "2000 by Pope John Paul II",
		symbols: ["Canossian habit", "cross"],
		patronages: [
			"Sudan",
			"victims of trafficking",
			"survivors of slavery"
		],
		topics: [
			"freedom",
			"forgiveness",
			"Africa"
		],
		kidLine: "Bakhita was stolen as a little girl and made a slave. Later she learned God had always loved her, and she forgave.",
		summary: "Kidnapped, enslaved, resold — then baptized, professed, and serene.",
		life: "A child of Darfur, seized by slavers, given the name Bakhita (“lucky”). Tortured, tattooed, sold to an Italian consul, she was brought to Venice. A court declared her free. She was baptized Josephine, became a Canossian, and spent fifty years as a cook and porter in Schio, famous for a gentleness that had no earthly explanation.",
		stories: [{
			title: "The scars",
			text: "Asked what she would say to her kidnappers: she would kiss their hands, because through them she had come to know Jesus."
		}],
		miracles: [{
			title: "The face",
			text: "Photographers found a woman who had every right to be bitter, and was not. That is a miracle the camera can catch."
		}],
		pathToSainthood: "Beatified 1992, canonized 2000.",
		prayer: "St. Josephine Bakhita, pray for every stolen child, and teach us forgiveness."
	}),
	saint({
		slug: "martin-of-tours",
		name: "St. Martin of Tours",
		shortName: "Martin",
		title: "Soldier, bishop, monk",
		feast: {
			month: 11,
			day: 11
		},
		born: "Savanaria, 316",
		died: "Candes, 397",
		canonized: "Venerated from antiquity",
		symbols: [
			"cloak",
			"horse",
			"beggar"
		],
		patronages: [
			"soldiers",
			"France",
			"geese",
			"the poor",
			"conscientious objectors"
		],
		topics: [
			"charity",
			"soldiers",
			"baptism"
		],
		kidLine: "Martin was a soldier who cut his cloak in half to keep a beggar warm. The beggar was Jesus.",
		summary: "The Roman soldier whose halved cloak became the icon of Christian charity in the West.",
		life: "A catechumen in the imperial guard, he cut his cloak at Amiens for a beggar. That night Christ appeared wearing it. Martin left the army, became a monk, and was made bishop of Tours against his will. He tore down pagan shrines and protected heretics from execution — a rare combination. His tomb was the first great pilgrimage of the Latin West.",
		stories: [{
			title: "The cloak",
			text: "Charity is not the extra cloak. It is the one you are wearing."
		}],
		miracles: [{
			title: "The dream",
			text: "“Martin, still a catechumen, has clothed me.” Baptism followed."
		}],
		pathToSainthood: "One of the first non-martyrs widely venerated as a saint. Martinmas, November 11.",
		prayer: "St. Martin, split our cloaks."
	}),
	saint({
		slug: "anthony-abbot",
		name: "St. Anthony the Great",
		shortName: "Anthony the Great",
		title: "Father of monks",
		feast: {
			month: 1,
			day: 17
		},
		born: "Egypt, c. 251",
		died: "Egypt, 356",
		canonized: "Venerated from antiquity",
		symbols: [
			"tau staff",
			"pig",
			"bell",
			"desert"
		],
		patronages: [
			"basket weavers",
			"skin diseases",
			"gravediggers",
			"pigs"
		],
		topics: [
			"monasticism",
			"temptation",
			"desert"
		],
		kidLine: "Anthony went to the desert to pray. When scary thoughts came, he stayed with Jesus.",
		summary: "The rich young man who actually did what Jesus said, and invented the monastic desert.",
		life: "At about twenty he heard Matthew 19 read in church — sell, give, follow — and did it. He lived among tombs, then in an abandoned fort, then on a mountain. Athanasius wrote his life; it converted Augustine’s friend Ponticianus, and through him, the West. Anthony’s temptations (the grotesque trials in art) are the psychology of spiritual warfare painted large.",
		stories: [{
			title: "The church reading",
			text: "He walked in as the Gospel was read, as if it had been scheduled for him. Vocations still happen that way."
		}],
		miracles: [{
			title: "The Life by Athanasius",
			text: "The book made hermits in Gaul and Italy. One Egyptian’s hidden life organized a continent."
		}],
		pathToSainthood: "Father of monasticism. Feast January 17; blessing of animals in some places.",
		prayer: "St. Anthony, stay with us in the ugly hour."
	}),
	saint({
		slug: "john-chrysostom",
		name: "St. John Chrysostom",
		shortName: "John Chrysostom",
		title: "Golden Mouth, Doctor",
		feast: {
			month: 9,
			day: 13
		},
		born: "Antioch, c. 347",
		died: "Comana, 407",
		canonized: "Venerated from antiquity; Doctor",
		symbols: [
			"bees",
			"dove",
			"book"
		],
		patronages: [
			"preachers",
			"orators",
			"epilepsy"
		],
		topics: [
			"preaching",
			"the poor",
			"liturgy"
		],
		kidLine: "Chrysostom means golden mouth. He preached so that rich people would share with poor people.",
		summary: "The preacher who would not flatter empresses, and whose liturgy the East still prays.",
		life: "A monk of Antioch, then a preacher whose homilies on the poor are still sharp. Made patriarch of Constantinople against his will, he rebuked luxury, including the Empress Eudoxia’s. Exiled twice, he died on a forced march. His last words: “Glory to God for all things.”",
		stories: [{
			title: "The golden mouth",
			text: "He told the rich their unused extra cloak belonged to the naked. Catholic social teaching with a sting."
		}],
		miracles: [{
			title: "The liturgy",
			text: "The Divine Liturgy of St. John Chrysostom is still the ordinary Sunday rite of the Byzantine churches."
		}],
		pathToSainthood: "Doctor of the Church. Relics returned to Constantinople; now shared with Rome.",
		prayer: "St. John Chrysostom, give our homilies a spine and a gold mouth."
	}),
	saint({
		slug: "hildegard",
		name: "St. Hildegard of Bingen",
		shortName: "Hildegard",
		title: "Doctor of the Church, Sibyl of the Rhine",
		feast: {
			month: 9,
			day: 17
		},
		born: "Bermersheim, 1098",
		died: "Rupertsberg, 1179",
		canonized: "Equivalent canonization; Doctor 2012",
		symbols: [
			"mandala",
			"lyre",
			"abbess’s staff"
		],
		patronages: [
			"musicians",
			"writers",
			"natural scientists"
		],
		topics: [
			"music",
			"creation",
			"visions",
			"women"
		],
		kidLine: "Hildegard saw beautiful pictures from God, wrote music, and loved green growing things.",
		summary: "The abbess who composed, diagnosed, preached to emperors, and painted what she saw in the living light.",
		life: "Offered as a child oblate, she became abbess, then foundress. At 42 she wrote down the visions she had hidden: Scivias. She wrote medical texts, invented a language, composed the Ordo Virtutum, and went on preaching tours no woman was supposed to make. Benedict XVI named her a Doctor in 2012.",
		stories: [{
			title: "Viriditas",
			text: "“Greening power” — her word for the life of God in plants, music, and souls. A theology a toddler in a garden can begin."
		}],
		miracles: [{
			title: "The music",
			text: "Nine centuries later choirs still sing her antiphons. That is a long miracle."
		}],
		pathToSainthood: "Never formally canonized in the medieval process; equivalent canonization plus Doctorate, 2012.",
		prayer: "St. Hildegard, make us green with God’s life."
	}),
	saint({
		slug: "thomas-becket",
		name: "St. Thomas Becket",
		shortName: "Thomas Becket",
		title: "Archbishop, martyr",
		feast: {
			month: 12,
			day: 29
		},
		born: "London, 1118",
		died: "Canterbury, 29 December 1170",
		canonized: "1173 by Pope Alexander III",
		symbols: ["sword", "pallium"],
		patronages: [
			"secular clergy",
			"Exeter College",
			"Portsmouth"
		],
		topics: ["conscience", "Church and state"],
		kidLine: "Thomas Becket was a bishop who would not let the king boss the Church. He died in his cathedral.",
		summary: "Henry II’s drinking companion who became God’s man and was cut down at Vespers.",
		life: "Chancellor, then (the king thought) a tame archbishop. The convivial Thomas became the austere defender of canon law. Four knights, thinking they did Henry a favor, murdered him in Canterbury Cathedral. Europe was appalled. Henry did public penance. The shrine drew half the pilgrims of the West until Henry VIII smashed it.",
		stories: [{
			title: "“Will no one rid me”",
			text: "A king’s outburst, four ambitious men, a martyr. Words have consequences."
		}],
		miracles: [{
			title: "Canterbury",
			text: "Healings at the tomb were immediate and Europe-wide. Chaucer’s pilgrims are going to this man."
		}],
		pathToSainthood: "Canonized in three years. A caution to kings.",
		prayer: "St. Thomas of Canterbury, keep the altar free."
	}),
	saint({
		slug: "bonaventure",
		name: "St. Bonaventure",
		shortName: "Bonaventure",
		title: "Seraphic Doctor",
		feast: {
			month: 7,
			day: 15
		},
		born: "Bagnoregio, 1221",
		died: "Lyon, 1274",
		canonized: "1482 by Pope Sixtus IV",
		symbols: ["cardinal’s hat", "book"],
		patronages: ["bowel disorders", "theologians"],
		topics: [
			"Franciscans",
			"theology",
			"prayer"
		],
		kidLine: "Bonaventure was a wise Franciscan who wrote about how much God loves us.",
		summary: "The minister general who kept the Franciscans together and wrote theology on his knees.",
		life: "Healed as a child by Francis’s prayers (so the story), he became a Franciscan, a Paris master, minister general, and cardinal. He wrote the official life of Francis, the Itinerarium, and died at the Council of Lyon. The Seraphic Doctor to Aquinas’s Angelic.",
		stories: [{
			title: "The dishes",
			text: "When papal envoys brought the red hat, he was washing dishes. “Hang it on a tree until I finish.”"
		}],
		miracles: [{
			title: "The child",
			text: "Francis is said to have cried “O buona ventura!” over the sick boy — hence the name."
		}],
		pathToSainthood: "Canonized 1482; Doctor 1588.",
		prayer: "St. Bonaventure, let our study end in love, not in vanity."
	}),
	saint({
		slug: "peter-claver",
		name: "St. Peter Claver",
		shortName: "Peter Claver",
		title: "Slave of the slaves",
		feast: {
			month: 9,
			day: 9
		},
		born: "Verdú, 1580",
		died: "Cartagena, 1654",
		canonized: "1888 by Pope Leo XIII",
		symbols: ["ship", "baptismal shell"],
		patronages: [
			"slaves",
			"Colombia",
			"African Americans",
			"race relations"
		],
		topics: [
			"justice",
			"baptism",
			"Africa",
			"charity"
		],
		kidLine: "Peter Claver met slave ships with water, medicine, and the love of Jesus.",
		summary: "The Jesuit who met every slave ship at Cartagena for forty years.",
		life: "A Spanish Jesuit sent to Cartagena de Indias, the slave port of the New World. He called himself “the slave of the Africans forever.” He boarded the ships with fruit and bandages, catechized with pictures, baptized, and followed the enslaved into the mines. He died neglected; the city then remembered.",
		stories: [{
			title: "The docks",
			text: "He would not wait in the church. The church went to the hold."
		}],
		miracles: [{
			title: "The baptisms",
			text: "He is said to have baptized 300,000. Even if the number is swelling, the direction is the miracle."
		}],
		pathToSainthood: "Canonized 1888. Patron of the missions to African peoples.",
		prayer: "St. Peter Claver, send us to the holds we would rather not see."
	}),
	saint({
		slug: "isidore-farmer",
		name: "St. Isidore the Farmer",
		shortName: "Isidore",
		title: "Laborer of Madrid",
		feast: {
			month: 5,
			day: 15
		},
		born: "Madrid, c. 1070",
		died: "Madrid, 1130",
		canonized: "1622 by Pope Gregory XV",
		symbols: [
			"plow",
			"angels",
			"sheaf"
		],
		patronages: [
			"farmers",
			"rural communities",
			"Madrid",
			"day laborers"
		],
		topics: [
			"work",
			"prayer",
			"the poor"
		],
		kidLine: "Isidore was a farmer who went to Mass first. Angels helped with the plow.",
		summary: "A day-laborer whose employer found angels in the furrow because the man had been at Mass.",
		life: "A hired plowman on a Madrid estate, married to St. Maria de la Cabeza. He rose early for Mass; coworkers complained; the master found the work done — by oxen led, the story says, by angels. He shared food that multiplied. A working-class saint in a calendar of bishops.",
		stories: [{
			title: "The extra yoke",
			text: "Prayer does not replace work. In the legend, it supplies the time prayer took."
		}],
		miracles: [{
			title: "The angels",
			text: "Whether seen or a parable, the Church canonized a laborer. That is the point for a father who works."
		}],
		pathToSainthood: "Canonized 1622 with Ignatius, Xavier, Teresa, and Philip — the farmhand in that company.",
		prayer: "St. Isidore, bless our work, and keep Mass first."
	}),
	saint({
		slug: "joseph-cupertino",
		name: "St. Joseph of Cupertino",
		shortName: "Joseph of Cupertino",
		title: "The flying friar",
		feast: {
			month: 9,
			day: 18
		},
		born: "Cupertino, 1603",
		died: "Osimo, 1663",
		canonized: "1767 by Pope Clement XIII",
		symbols: ["levitation", "Franciscan habit"],
		patronages: [
			"students",
			"aviators",
			"test takers",
			"the mentally handicapped"
		],
		topics: [
			"study",
			"humility",
			"exams"
		],
		kidLine: "Joseph was not good at tests, but he loved God. Sometimes he floated when he prayed.",
		summary: "The slow student who levitated in ecstasy and is now the patron of exams.",
		life: "A village boy thought useless, rejected by several houses, finally a Franciscan conventual. He failed exams, then passed one because the bishop asked the only question he knew. His Masses dissolved into levitation so often he was hidden from visitors and investigated by the Inquisition, which found no fraud. He spent years in isolation, dying in Osimo.",
		stories: [{
			title: "The one question",
			text: "Every anxious student knows this story. Providence can look like a lucky question. Then you still have to love God in the ordinary."
		}],
		miracles: [{
			title: "Levitation",
			text: "Scores of witnesses, including nobles and prelates, swore to flights during Mass and at the names of Jesus and Mary."
		}],
		pathToSainthood: "Canonized 1767. Patron of aviators and of anyone walking into a test in a cold sweat.",
		prayer: "St. Joseph of Cupertino, pray for every mind that feels too slow."
	})
], ...EXTRA_SAINTS];
var PATRONAGE_CHIPS = [
	"lost things",
	"children",
	"mothers",
	"fathers",
	"grandparents",
	"travelers",
	"the sick",
	"cancer",
	"animals",
	"students",
	"impossible causes",
	"the poor",
	"workers",
	"youth",
	"mental illness",
	"immigrants",
	"musicians",
	"soldiers",
	"the dying",
	"marriage",
	"First Communion",
	"teachers",
	"nurses",
	"lawyers",
	"firefighters",
	"expectant mothers",
	"Ireland"
];
var TOPIC_CHIPS = [
	"Mary",
	"family",
	"martyrs",
	"conversion",
	"missions",
	"Eucharist",
	"prayer",
	"the poor",
	"children",
	"Doctors",
	"America",
	"courage"
];
function saintBySlug(slug) {
	return SAINTS.find((s) => s.slug === slug);
}
function searchSaints(q) {
	const n = q.trim().toLowerCase();
	if (!n) return SAINTS;
	return SAINTS.filter((s) => {
		return [
			s.name,
			s.shortName,
			s.title,
			s.summary,
			s.kidLine,
			s.life,
			s.pathToSainthood,
			s.prayer,
			...s.patronages,
			...s.topics,
			...s.symbols,
			...s.stories.map((x) => `${x.title} ${x.text}`),
			...s.miracles.map((x) => `${x.title} ${x.text}`)
		].join(" ").toLowerCase().includes(n);
	});
}
function saintImage(s) {
	return s.image ?? "/images/chapel.jpg";
}
function relatedSaints(s, n = 3) {
	return SAINTS.filter((x) => x.slug !== s.slug).map((x) => {
		const patron = x.patronages.filter((p) => s.patronages.includes(p)).length;
		const topic = x.topics.filter((t) => s.topics.includes(t)).length;
		return {
			x,
			score: patron * 2 + topic
		};
	}).filter((r) => r.score > 0).sort((a, b) => b.score - a.score).slice(0, n).map((r) => r.x);
}
var MONTHS = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];
function formatFeast(feast) {
	return `${MONTHS[feast.month - 1]} ${feast.day}`;
}
function liturgicalSeason(date = /* @__PURE__ */ new Date()) {
	const m = date.getMonth() + 1;
	const d = date.getDate();
	if (m === 12 && d >= 17) return "Advent";
	if (m === 12 || m === 1 && d <= 13) return "Christmas";
	if (m === 2 || m === 3) return "Lent approaching";
	if (m === 4) return "Eastertide";
	return "Ordinary Time";
}
function todaysSaints(date = /* @__PURE__ */ new Date()) {
	const m = date.getMonth() + 1;
	const d = date.getDate();
	return SAINTS.filter((s) => s.feast.month === m && s.feast.day === d);
}
function nearestSaints(date = /* @__PURE__ */ new Date(), n = 3) {
	const today = todaysSaints(date);
	if (today.length) return today.slice(0, n);
	const key = (s) => s.feast.month * 32 + s.feast.day;
	const now = (date.getMonth() + 1) * 32 + date.getDate();
	return [...SAINTS].sort((a, b) => {
		return (key(a) - now + 400) % 400 - (key(b) - now + 400) % 400;
	}).slice(0, n);
}
function mysterySetForDay(date = /* @__PURE__ */ new Date()) {
	const day = date.getDay();
	if (day === 0 || day === 3) return "glorious";
	if (day === 1 || day === 6) return "joyful";
	if (day === 2 || day === 5) return "sorrowful";
	return "luminous";
}
var MYSTERY_LABEL = {
	joyful: "Joyful Mysteries",
	sorrowful: "Sorrowful Mysteries",
	glorious: "Glorious Mysteries",
	luminous: "Luminous Mysteries"
};
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-BoTQ9X8c.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var useAveStore = create()(persist((set, get) => ({
	onboardingDone: false,
	tracks: [],
	planStarted: null,
	heardStories: [],
	favoriteSaints: [],
	beadId: "crucifix",
	kidsDecade: true,
	completeOnboarding: (tracks) => set({
		onboardingDone: true,
		tracks,
		planStarted: (/* @__PURE__ */ new Date()).toISOString()
	}),
	skipOnboarding: () => set({
		onboardingDone: true,
		tracks: [
			"gospel",
			"bedtime",
			"decade"
		]
	}),
	markStory: (id) => {
		const heard = get().heardStories;
		if (heard.includes(id)) return;
		set({ heardStories: [...heard, id] });
	},
	toggleFavorite: (slug) => {
		const fav = get().favoriteSaints;
		set({ favoriteSaints: fav.includes(slug) ? fav.filter((s) => s !== slug) : [...fav, slug] });
	},
	setBead: (id) => set({ beadId: id }),
	setKidsDecade: (v) => set({ kidsDecade: v })
}), { name: "ave-family" }));
var TRACK_META = {
	gospel: {
		label: "Animated Gospel stories",
		hint: "Joyful Mysteries, sized for a toddler"
	},
	decade: {
		label: "Pray a decade together",
		hint: "Slow beads, mystery picture"
	},
	saints: {
		label: "Saints",
		hint: "A story tonight, the full life when you want it"
	},
	why: {
		label: "Why we do what we do",
		hint: "Mary, Mass, the lamp, the Cross"
	},
	mass: {
		label: "Get ready for Sunday Mass",
		hint: "Gospel in kid English, what to watch for"
	},
	bedtime: {
		label: "Bedtime prayer",
		hint: "About nine quiet minutes"
	}
};
var PRAYER_TEXT = {
	"sign-of-cross": `In the name of the Father, and of the Son, and of the Holy Spirit. Amen.`,
	"apostles-creed": `I believe in God, the Father almighty, Creator of heaven and earth, and in Jesus Christ, his only Son, our Lord, who was conceived by the Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate, was crucified, died and was buried; he descended into hell; on the third day he rose again from the dead; he ascended into heaven, and is seated at the right hand of God the Father almighty; from there he will come to judge the living and the dead. I believe in the Holy Spirit, the holy catholic Church, the communion of saints, the forgiveness of sins, the resurrection of the body, and life everlasting. Amen.`,
	"our-father": `Our Father, who art in heaven, hallowed be thy name; thy kingdom come; thy will be done on earth as it is in heaven. Give us this day our daily bread, and forgive us our trespasses, as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.`,
	"hail-mary": `Hail Mary, full of grace, the Lord is with thee; blessed art thou among women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.`,
	"glory-be": `Glory be to the Father, and to the Son, and to the Holy Spirit, as it was in the beginning, is now, and ever shall be, world without end. Amen.`,
	"fatima": `O my Jesus, forgive us our sins, save us from the fires of hell, lead all souls to heaven, especially those in most need of thy mercy.`,
	"hail-holy-queen": `Hail, holy Queen, mother of mercy, our life, our sweetness, and our hope. To thee do we cry, poor banished children of Eve. To thee do we send up our sighs, mourning and weeping in this valley of tears. Turn then, most gracious advocate, thine eyes of mercy toward us, and after this our exile, show unto us the blessed fruit of thy womb, Jesus. O clement, O loving, O sweet Virgin Mary. Pray for us, O holy Mother of God. That we may be made worthy of the promises of Christ.`,
	"closing": `O God, whose only-begotten Son, by his life, death, and resurrection, has purchased for us the rewards of eternal life, grant, we beseech thee, that meditating upon these mysteries of the most holy Rosary of the Blessed Virgin Mary, we may imitate what they contain and obtain what they promise, through the same Christ our Lord. Amen.`
};
var PRAYER_TITLE = {
	"sign-of-cross": `Sign of the Cross`,
	"apostles-creed": `The Apostles' Creed`,
	"our-father": `Our Father`,
	"hail-mary": `Hail Mary`,
	"glory-be": `Glory Be`,
	"fatima": `Fatima Prayer`,
	"hail-holy-queen": `Hail, Holy Queen`,
	"closing": `Closing Prayer`
};
var MYSTERY_SETS = [
	{
		id: "joyful",
		label: "Joyful",
		latin: "Mysteria Gaudiosa",
		days: "Monday · Saturday",
		about: `The beginning of the story: Mary's yes, the birth of Jesus, and his childhood.`
	},
	{
		id: "sorrowful",
		label: "Sorrowful",
		latin: "Mysteria Dolorosa",
		days: "Tuesday · Friday",
		about: `His Passion — from the garden to the Cross. For suffering, mercy, and courage.`
	},
	{
		id: "glorious",
		label: "Glorious",
		latin: "Mysteria Gloriosa",
		days: "Wednesday · Sunday",
		about: `The Resurrection through Mary's crowning. For hope, heaven, and the Spirit.`
	},
	{
		id: "luminous",
		label: "Luminous",
		latin: "Mysteria Luminosa",
		days: "Thursday",
		about: `His public life — baptism to the Eucharist. For walking with him now.`
	}
];
var MYSTERIES = [
	{
		id: "joyful-1",
		set: "joyful",
		index: 1,
		title: `The Annunciation`,
		fruit: `Humility`,
		verse: `Behold, I am the handmaid of the Lord. Let it be to me according to your word.`,
		verseRef: `Luke 1:38`,
		meditation: `The angel does not ask Mary to understand the whole road. He asks for her yes. She gives it, and the Word takes flesh in hiddenness. Ask for a heart that can say yes before it sees.`,
		announce: `The first Joyful Mystery: the Annunciation. The angel Gabriel greets Mary, and she gives her yes to God.`
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
		announce: `The second Joyful Mystery: the Visitation. Mary goes in haste to Elizabeth, carrying Christ to another.`
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
		announce: `The third Joyful Mystery: the Nativity. In Bethlehem, the Word is made flesh and laid in a manger.`
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
		announce: `The fourth Joyful Mystery: the Presentation. Mary and Joseph offer the child Jesus in the Temple.`
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
		announce: `The fifth Joyful Mystery: the Finding in the Temple. After three days, they find Jesus among the teachers.`
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
		announce: `The first Sorrowful Mystery: the Agony in the Garden. Jesus prays, and his sweat becomes like blood.`
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
		announce: `The second Sorrowful Mystery: the Scourging at the Pillar. He is wounded for our transgressions.`
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
		announce: `The third Sorrowful Mystery: the Crowning with Thorns. The King of kings is mocked with a crown of pain.`
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
		announce: `The fourth Sorrowful Mystery: the Carrying of the Cross. He takes up the wood and walks toward Calvary.`
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
		announce: `The fifth Sorrowful Mystery: the Crucifixion. Jesus gives his life, and the veil of the Temple is torn.`
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
		announce: `The first Glorious Mystery: the Resurrection. He is not here. He is risen, as he said.`
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
		announce: `The second Glorious Mystery: the Ascension. The Lord is taken up, and a cloud hides him from their sight.`
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
		announce: `The third Glorious Mystery: the Descent of the Holy Spirit. Tongues of fire rest on the apostles, and they are sent.`
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
		announce: `The fourth Glorious Mystery: the Assumption. Mary is taken body and soul into the glory of heaven.`
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
		announce: `The fifth Glorious Mystery: the Coronation. The Mother of God is crowned Queen of heaven and earth.`
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
		announce: `The first Luminous Mystery: the Baptism in the Jordan. A voice from heaven: this is my beloved Son.`
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
		announce: `The second Luminous Mystery: the Wedding at Cana. Do whatever he tells you, and water becomes wine.`
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
		announce: `The third Luminous Mystery: the Proclamation of the Kingdom. Repent, and believe in the Gospel.`
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
		announce: `The fourth Luminous Mystery: the Transfiguration. His face shines like the sun, and the disciples see his glory.`
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
		announce: `The fifth Luminous Mystery: the Institution of the Eucharist. This is my body, given for you. Do this in memory of me.`
	}
];
var VOICES = [{
	id: "celeste",
	name: "Celeste",
	blurb: "Soft, light, angelic",
	detail: "A gentle female voice, quiet and unhurried."
}, {
	id: "orion",
	name: "Orion",
	blurb: "Warm, cinematic",
	detail: "A close, prayerful match to Jonathan Roumie's cadence."
}];
function mysteriesFor(set) {
	return MYSTERIES.filter((m) => m.set === set);
}
function mysterySetMeta(id) {
	return MYSTERY_SETS.find((s) => s.id === id);
}
function ordinal(n) {
	return [
		"First",
		"Second",
		"Third",
		"Fourth",
		"Fifth"
	][n - 1] ?? String(n);
}
function clipUrl(voice, clipId) {
	return `/audio/${voice}/${clipId}.mp3`;
}
function timestampsUrl(voice, clipId) {
	return `/audio/${voice}/${clipId}.timestamps.json`;
}
var seq = 0;
function uid(prefix) {
	seq += 1;
	return `${prefix}-${seq}`;
}
function prayerStep(prayerId, beadId, extra = {}) {
	return {
		id: uid(prayerId),
		prayerId,
		clipId: prayerId,
		title: PRAYER_TITLE[prayerId],
		text: PRAYER_TEXT[prayerId],
		beadId,
		...extra
	};
}
function mysteryStep(mystery, beadId, awaitContinue) {
	return {
		id: uid(`mystery-${mystery.id}`),
		prayerId: "mystery",
		clipId: mystery.id,
		title: mystery.title,
		text: mystery.announce,
		beadId,
		subtitle: `${ordinal(mystery.index)} ${mystery.set[0].toUpperCase()}${mystery.set.slice(1)} Mystery`,
		decade: mystery.index,
		mystery,
		awaitContinue
	};
}
function opening(includeFatima) {
	const steps = [
		prayerStep("sign-of-cross", "crucifix"),
		prayerStep("apostles-creed", "crucifix"),
		prayerStep("our-father", "tail-of"),
		prayerStep("hail-mary", "tail-hm-1", { subtitle: "For an increase in faith" }),
		prayerStep("hail-mary", "tail-hm-2", { subtitle: "For an increase in hope" }),
		prayerStep("hail-mary", "tail-hm-3", { subtitle: "For an increase in charity" }),
		prayerStep("glory-be", "tail-glory")
	];
	if (includeFatima) steps.push(prayerStep("fatima", "tail-glory"));
	return steps;
}
function decadeSteps(mystery, includeFatima, learn) {
	const ofBead = mystery.index === 1 ? "medal" : `d${mystery.index}-of`;
	const steps = [mysteryStep(mystery, ofBead, learn), prayerStep("our-father", ofBead, {
		decade: mystery.index,
		mystery
	})];
	for (let i = 1; i <= 10; i++) steps.push(prayerStep("hail-mary", `d${mystery.index}-hm-${i}`, {
		decade: mystery.index,
		mystery,
		subtitle: `${i} of 10`
	}));
	const last = `d${mystery.index}-hm-10`;
	steps.push(prayerStep("glory-be", last, {
		decade: mystery.index,
		mystery
	}));
	if (includeFatima) steps.push(prayerStep("fatima", last, {
		decade: mystery.index,
		mystery
	}));
	return steps;
}
function closing() {
	return [
		prayerStep("hail-holy-queen", "medal"),
		prayerStep("closing", "medal"),
		prayerStep("sign-of-cross", "crucifix")
	];
}
function buildRosary(opts) {
	seq = 0;
	const all = mysteriesFor(opts.set);
	const selected = opts.kind === "decade" ? [all[(opts.decadeIndex ?? 1) - 1] ?? all[0]] : all;
	const learn = opts.kind === "learn";
	return [
		...opening(opts.includeFatima),
		...selected.flatMap((m) => decadeSteps(m, opts.includeFatima, learn)),
		...closing()
	];
}
var player = null;
var preview = null;
var previewEnded = null;
var warmer = null;
function prep(el) {
	el.preload = "auto";
	el.setAttribute("playsinline", "true");
}
function getPlayer() {
	if (typeof window === "undefined") return null;
	if (!player) {
		player = new Audio();
		prep(player);
	}
	return player;
}
function getWarmer() {
	if (typeof window === "undefined") return null;
	if (!warmer) {
		warmer = new Audio();
		prep(warmer);
	}
	return warmer;
}
function playClip(src, rate) {
	stopPreview();
	const el = getPlayer();
	if (!el) return Promise.resolve();
	const abs = new URL(src, window.location.href).href;
	if (el.src !== abs) el.src = src;
	el.playbackRate = rate;
	try {
		el.currentTime = 0;
	} catch {}
	return el.play();
}
function pauseClip() {
	getPlayer()?.pause();
}
function warmupClip(src) {
	const el = getWarmer();
	if (!el) return;
	const abs = new URL(src, window.location.href).href;
	if (el.src !== abs) el.src = src;
}
function playPreview(src, onEnd) {
	if (typeof window === "undefined") return;
	stopPreview();
	getPlayer()?.pause();
	preview = new Audio(src);
	prep(preview);
	previewEnded = () => {
		onEnd?.();
		stopPreview();
	};
	preview.addEventListener("ended", previewEnded);
	preview.play().catch(() => {
		onEnd?.();
		stopPreview();
	});
}
function stopPreview() {
	if (preview && previewEnded) preview.removeEventListener("ended", previewEnded);
	preview?.pause();
	preview = null;
	previewEnded = null;
}
function wordsFromTimestamps(file) {
	const chars = Array.isArray(file.graph_chars) ? file.graph_chars : file.graph_chars.split("");
	const times = file.graph_times;
	const out = [];
	let word = "";
	let start = 0;
	let end = 0;
	let open = false;
	for (let i = 0; i < chars.length; i++) {
		const ch = chars[i] ?? "";
		const t = times[i] ?? times[times.length - 1] ?? [0, 0];
		if (/\s/.test(ch)) {
			if (word) {
				out.push({
					word,
					start,
					end
				});
				word = "";
				open = false;
			}
			continue;
		}
		if (!open) {
			start = t[0];
			open = true;
		}
		word += ch;
		end = t[1];
	}
	if (word) out.push({
		word,
		start,
		end
	});
	return out;
}
function fallbackTimings(text, duration) {
	const words = text.trim().split(/\s+/).filter(Boolean);
	if (words.length === 0) return [];
	const weights = words.map((w) => Math.max(2, w.replace(/[^a-zA-Z]/g, "").length) + (/[.!?]$/.test(w) ? 4 : /[,;:]$/.test(w) ? 2 : 0));
	const total = weights.reduce((a, b) => a + b, 0);
	let t = .12;
	const span = Math.max(.4, duration - .35);
	return words.map((word, i) => {
		const d = weights[i] / total * span;
		const start = t;
		const end = t + d;
		t = end;
		return {
			word,
			start,
			end
		};
	});
}
function wordAt(timings, t) {
	if (timings.length === 0) return 0;
	const last = timings.length - 1;
	if (t <= timings[0].start) return 0;
	if (t >= timings[last].end) return last;
	let lo = 0;
	let hi = last;
	while (lo <= hi) {
		const mid = lo + hi >> 1;
		const w = timings[mid];
		if (t < w.start) hi = mid - 1;
		else if (t > w.end) lo = mid + 1;
		else return mid;
	}
	return Math.max(0, Math.min(last, lo));
}
var cache = /* @__PURE__ */ new Map();
async function loadTimings(voice, clipId, text) {
	const key = `${voice}:${clipId}`;
	const hit = cache.get(key);
	if (hit) return hit;
	try {
		const res = await fetch(timestampsUrl(voice, clipId));
		if (!res.ok) throw new Error("no timestamps");
		const out = { timings: wordsFromTimestamps(await res.json()) };
		cache.set(key, out);
		return out;
	} catch {
		const out = { timings: fallbackTimings(text, 8) };
		cache.set(key, out);
		return out;
	}
}
var usePrayerStore = create()(persist((set, get) => ({
	voice: "celeste",
	followMode: "listen",
	includeFatima: true,
	playbackRate: 1,
	showWords: false,
	screen: "home",
	kind: "full",
	mysterySet: mysterySetForDay(),
	decadeIndex: 1,
	steps: [],
	stepIndex: 0,
	playing: false,
	wordIndex: 0,
	completedCount: 0,
	setVoice: (voice) => set({ voice }),
	setFollowMode: (followMode) => set({ followMode }),
	setIncludeFatima: (includeFatima) => set({ includeFatima }),
	setPlaybackRate: (playbackRate) => set({ playbackRate }),
	setShowWords: (showWords) => set({ showWords }),
	setMysterySet: (mysterySet) => set({ mysterySet }),
	setDecadeIndex: (decadeIndex) => set({ decadeIndex }),
	start: (kind, decadeIndex) => {
		stopPreview();
		const state = get();
		const idx = decadeIndex ?? state.decadeIndex;
		const steps = buildRosary({
			set: state.mysterySet,
			kind,
			decadeIndex: idx,
			includeFatima: state.includeFatima
		});
		set({
			kind,
			decadeIndex: idx,
			steps,
			stepIndex: 0,
			wordIndex: 0,
			playing: true,
			showWords: state.followMode === "read" || state.showWords || kind === "learn",
			screen: "pray"
		});
		if (state.followMode === "listen" && steps[0]) playClip(clipUrl(state.voice, steps[0].clipId), state.playbackRate).catch(() => get().setPlaying(false));
	},
	next: () => {
		const { stepIndex, steps, completedCount } = get();
		if (stepIndex >= steps.length - 1) {
			set({
				screen: "complete",
				playing: false,
				completedCount: completedCount + 1
			});
			return;
		}
		set({
			stepIndex: stepIndex + 1,
			wordIndex: 0
		});
	},
	prev: () => {
		const { stepIndex } = get();
		if (stepIndex <= 0) return;
		set({
			stepIndex: stepIndex - 1,
			wordIndex: 0
		});
	},
	jumpToBead: (beadId) => {
		const { steps, stepIndex } = get();
		const ahead = steps.findIndex((s, i) => i >= stepIndex && s.beadId === beadId);
		const any = steps.findIndex((s) => s.beadId === beadId);
		const i = ahead >= 0 ? ahead : any;
		if (i >= 0) set({
			stepIndex: i,
			wordIndex: 0
		});
	},
	setPlaying: (playing) => set({ playing }),
	setWordIndex: (wordIndex) => set({ wordIndex }),
	goHome: () => {
		pauseClip();
		stopPreview();
		set({
			screen: "home",
			playing: false,
			steps: [],
			stepIndex: 0
		});
	}
}), {
	name: "ave-rosary",
	skipHydration: true,
	partialize: (s) => ({
		voice: s.voice,
		followMode: s.followMode,
		includeFatima: s.includeFatima,
		playbackRate: s.playbackRate,
		showWords: s.showWords,
		mysterySet: s.mysterySet,
		completedCount: s.completedCount
	})
}));
var ORDER = [
	"gospel",
	"decade",
	"saints",
	"why",
	"mass",
	"bedtime"
];
function Onboarding() {
	const complete = useAveStore((s) => s.completeOnboarding);
	const skip = useAveStore((s) => s.skipOnboarding);
	const [picked, setPicked] = (0, import_react.useState)([
		"gospel",
		"bedtime",
		"decade"
	]);
	function toggle(t) {
		setPicked((p) => p.includes(t) ? p.filter((x) => x !== t) : [...p, t]);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto min-h-dvh max-w-lg bg-bg px-5 pb-12 pt-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs tracking-[0.2em] text-gold uppercase",
				children: "Ave"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display mt-3 text-4xl leading-tight text-fg",
				children: "What do you want to pass on this week?"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-sm text-sm leading-relaxed text-muted",
				children: "Your son is little. We will keep the pictures big and the words few — and keep the real teaching for you."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 text-xs text-gold",
				children: [picked.length, " chosen"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 space-y-2",
				children: ORDER.map((t) => {
					const on = picked.includes(t);
					const meta = TRACK_META[t];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => toggle(t),
						className: `flex w-full items-center justify-between rounded-2xl border px-4 py-4 text-left transition ${on ? "border-gold bg-accent/10" : "border-border bg-surface"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-[15px] text-fg",
							children: meta.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-0.5 block text-xs text-muted",
							children: meta.hint
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `flex size-7 items-center justify-center rounded-full border ${on ? "border-gold bg-gold text-accent-fg" : "border-border text-transparent"}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" })
						})]
					}) }, t);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => complete(picked.length ? picked : ["gospel", "bedtime"]),
				className: "mt-8 w-full rounded-full bg-gold py-4 text-center text-sm font-semibold tracking-wide text-accent-fg",
				children: "Begin this week"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: skip,
				className: "mt-3 w-full py-3 text-sm text-muted",
				children: "Skip for now"
			})
		]
	});
}
var TABS = [
	{
		to: "/",
		label: "Today",
		icon: House
	},
	{
		to: "/pray",
		label: "Pray",
		icon: Sparkles
	},
	{
		to: "/stories",
		label: "Stories",
		icon: BookOpen
	},
	{
		to: "/saints",
		label: "Saints",
		icon: BookHeart
	},
	{
		to: "/teach",
		label: "Teach",
		icon: Church
	}
];
function Shell({ children }) {
	const path = useRouterState({ select: (s) => s.location.pathname });
	const done = useAveStore((s) => s.onboardingDone);
	const prayerScreen = usePrayerStore((s) => s.screen);
	const praying = path.startsWith("/pray") && prayerScreen !== "home";
	if (!done) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Onboarding, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex min-h-dvh max-w-lg flex-col bg-bg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
			className: praying ? "flex-1" : "flex-1 pb-24",
			children
		}), praying ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			className: "fixed inset-x-0 bottom-0 z-20 mx-auto max-w-lg border-t border-border bg-bg/90 backdrop-blur-md",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid grid-cols-5 px-1 py-2",
				children: TABS.map((t) => {
					const on = t.to === "/" ? path === "/" : path.startsWith(t.to);
					const Icon = t.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: t.to,
						className: `flex flex-col items-center gap-1 rounded-xl px-1 py-1 text-[11px] ${on ? "text-accent" : "text-muted"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							className: "size-5",
							strokeWidth: on ? 2.2 : 1.7
						}), t.label]
					}) }, t.to);
				})
			})
		})]
	});
}
var styles_default = "/assets/styles-DnkJAQNV.css";
var APP_NAME = "Ave";
var Route$11 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "theme-color",
				content: "#0b0a0c"
			},
			{
				name: "description",
				content: "Pray the Rosary bead by bead, read Gospel stories with your child, and search the saints — a Catholic home for a father and son."
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500&family=Figtree:wght@400;500;600&display=swap"
			}
		]
	}),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "bg-bg text-fg",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	})
});
var $$splitComponentImporter$10 = () => import("./routes-CZStc4vk.mjs");
var Route$10 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$10, "component") });
var $$splitComponentImporter$9 = () => import("./bedtime-CWQX7Un1.mjs");
var Route$9 = createFileRoute("/bedtime")({ component: lazyRouteComponent($$splitComponentImporter$9, "component") });
var $$splitComponentImporter$8 = () => import("./church-CQsdsjHY.mjs");
var Route$8 = createFileRoute("/church")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("./mass-SlUQSQwT.mjs");
var Route$7 = createFileRoute("/mass")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./pray-Q1W81OGR.mjs");
var Route$6 = createFileRoute("/pray")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./saints-TeNCN8nv.mjs");
var Route$5 = createFileRoute("/saints")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./stories-CIpbpl3r.mjs");
var Route$4 = createFileRoute("/stories")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./teach-DnmjxIbE.mjs");
var Route$3 = createFileRoute("/teach")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./saints._slug-DcKeixke.mjs");
var Route$2 = createFileRoute("/saints/$slug")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./stories._id-DL2L6Aa1.mjs");
var Route$1 = createFileRoute("/stories/$id")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./teach._id-CT9Jt548.mjs");
var Route = createFileRoute("/teach/$id")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var IndexRoute = Route$10.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$11
});
var BedtimeRoute = Route$9.update({
	id: "/bedtime",
	path: "/bedtime",
	getParentRoute: () => Route$11
});
var ChurchRoute = Route$8.update({
	id: "/church",
	path: "/church",
	getParentRoute: () => Route$11
});
var MassRoute = Route$7.update({
	id: "/mass",
	path: "/mass",
	getParentRoute: () => Route$11
});
var PrayRoute = Route$6.update({
	id: "/pray",
	path: "/pray",
	getParentRoute: () => Route$11
});
var SaintsRoute = Route$5.update({
	id: "/saints",
	path: "/saints",
	getParentRoute: () => Route$11
});
var StoriesRoute = Route$4.update({
	id: "/stories",
	path: "/stories",
	getParentRoute: () => Route$11
});
var TeachRoute = Route$3.update({
	id: "/teach",
	path: "/teach",
	getParentRoute: () => Route$11
});
var SaintsSlugRoute = Route$2.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => SaintsRoute
});
var StoriesIdRoute = Route$1.update({
	id: "/$id",
	path: "/$id",
	getParentRoute: () => StoriesRoute
});
var TeachIdRoute = Route.update({
	id: "/$id",
	path: "/$id",
	getParentRoute: () => TeachRoute
});
var SaintsRouteChildren = { SaintsSlugRoute };
var SaintsRouteWithChildren = SaintsRoute._addFileChildren(SaintsRouteChildren);
var StoriesRouteChildren = { StoriesIdRoute };
var StoriesRouteWithChildren = StoriesRoute._addFileChildren(StoriesRouteChildren);
var TeachRouteChildren = { TeachIdRoute };
var rootRouteChildren = {
	IndexRoute,
	BedtimeRoute,
	ChurchRoute,
	MassRoute,
	PrayRoute,
	SaintsRoute: SaintsRouteWithChildren,
	StoriesRoute: StoriesRouteWithChildren,
	TeachRoute: TeachRoute._addFileChildren(TeachRouteChildren)
};
var routeTree = Route$11._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { saintBySlug as A, SAINTS as C, mysterySetForDay as D, liturgicalSeason as E, searchSaints as M, nearestSaints as O, PATRONAGE_CHIPS as S, formatFeast as T, mysteriesFor as _, usePrayerStore as a, useAveStore as b, pauseClip as c, stopPreview as d, warmupClip as f, clipUrl as g, VOICES as h, Route$2 as i, saintImage as j, relatedSaints as k, playClip as l, MYSTERY_SETS as m, Route as n, getPlayer as o, wordAt as p, Route$1 as r, loadTimings as s, router_exports as t, playPreview as u, mysterySetMeta as v, TOPIC_CHIPS as w, MYSTERY_LABEL as x, TRACK_META as y };
