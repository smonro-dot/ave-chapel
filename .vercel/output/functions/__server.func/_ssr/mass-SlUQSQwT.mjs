import { i as __toESM } from "../_runtime.mjs";
import { R as require_react, v as Link, z as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as ReadAloud } from "./read-aloud-CVgAjy8m.mjs";
import { t as VoiceToggle } from "./voice-toggle-CqoiXYh4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/mass-SlUQSQwT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var FALLBACK = {
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
		"God is generous. He does not love us because we clocked in first."
	],
	watchFor: "When the priest says “The Lord be with you,” answer “And with your spirit.”",
	afterDonuts: "Was anyone in the story treated more kindly than they “earned”? Who is God like in that story?"
};
var KID_GOSPELS = {
	"matthew 20": {
		gospelTitle: "The workers in the vineyard",
		kidGospel: [
			"A man hired workers. Some came early, some late. He paid them all the same.",
			"The early workers grumbled. The man said: I am not cheating you. I am being kind.",
			"God’s love is not a prize for being first in line."
		],
		watchFor: "Listen for “the last will be first.” Fold your hands when the Gospel book is raised.",
		afterDonuts: "When is it hard to be happy that God is generous to someone else?"
	},
	"luke 15": {
		gospelTitle: "The lost sheep (or the lost son)",
		kidGospel: [
			"Someone was lost. The father — or the shepherd — went looking.",
			"When they were found, there was a party.",
			"God looks for us. Heaven is happy when we come home."
		],
		watchFor: "A story about being lost and found. Watch the priest’s hands at the consecration — Jesus is found among us.",
		afterDonuts: "Who looks for you when you hide? Who looks for people who feel far from God?"
	},
	"luke 16": {
		gospelTitle: "The rich man and Lazarus",
		kidGospel: [
			"A rich man had many things. A poor man named Lazarus sat at the gate.",
			"When they died, Lazarus was held close. The rich man was far away.",
			"Jesus wants us to notice people who need us now."
		],
		watchFor: "Listen for a name: Lazarus. After church we will talk about noticing.",
		afterDonuts: "Who sits at a gate that we walk past?"
	},
	"matthew 16": {
		gospelTitle: "Peter the rock",
		kidGospel: [
			"Jesus asked, “Who do you say that I am?”",
			"Peter said, “You are the Christ.”",
			"Jesus made Peter the first pope, a rock for the Church."
		],
		watchFor: "When we say the Creed, we answer Jesus’ question too.",
		afterDonuts: "Who is Jesus? What words would you use?"
	},
	"john 6": {
		gospelTitle: "The bread of life",
		kidGospel: [
			"Jesus said, “I am the bread of life.”",
			"He wants to feed us with Himself.",
			"That is why we are quiet at Communion."
		],
		watchFor: "The Host. Whisper: “Jesus, I love you.”",
		afterDonuts: "Why is this bread different from the donut?"
	},
	"luke 1": {
		gospelTitle: "Mary says yes",
		kidGospel: [
			"An angel asked Mary to be Jesus’ mother.",
			"Mary said yes.",
			"God waited for her yes. He waits for ours too."
		],
		watchFor: "A Hail Mary in the prayers of the faithful, or a statue of Mary.",
		afterDonuts: "When is it hard to say yes?"
	}
};
async function loadSundayMass() {
	const d = nextSunday();
	const y = d.getFullYear();
	const md = `${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
	try {
		const res = await fetch(`https://cpbjr.github.io/catholic-readings-api/readings/${y}/${md}.json`);
		if (!res.ok) return {
			...FALLBACK,
			dateLabel: label(d)
		};
		const json = await res.json();
		const g = json.readings?.gospel ?? FALLBACK.gospel;
		const extra = matchKid(g);
		return {
			dateLabel: label(d),
			season: json.season ?? FALLBACK.season,
			firstReading: json.readings?.firstReading ?? FALLBACK.firstReading,
			psalm: json.readings?.psalm ?? FALLBACK.psalm,
			secondReading: json.readings?.secondReading,
			gospel: g,
			...extra
		};
	} catch {
		return {
			...FALLBACK,
			dateLabel: label(d)
		};
	}
}
function matchKid(gospel) {
	const n = gospel.toLowerCase();
	for (const [k, v] of Object.entries(KID_GOSPELS)) if (n.includes(k)) return v;
	return {
		gospelTitle: "This Sunday’s Gospel",
		kidGospel: [
			"We will hear a story Jesus told, or something He did.",
			"Listen for one word you know: love, Father, bread, sheep, yes.",
			"After church we will talk about it over something sweet."
		],
		watchFor: "When everyone stands for the Gospel, we stand too. The book is Jesus speaking.",
		afterDonuts: "What one picture from Mass do you remember — a color, a sound, a word?"
	};
}
function nextSunday(from = /* @__PURE__ */ new Date()) {
	const d = new Date(from);
	const day = d.getDay();
	const add = day === 0 ? 0 : 7 - day;
	d.setDate(d.getDate() + add);
	return d;
}
function label(d) {
	return d.toLocaleDateString(void 0, {
		weekday: "long",
		month: "long",
		day: "numeric"
	});
}
var MASS_POSTURES = [
	{
		when: "Enter",
		do: "Find the red lamp. Genuflect on the right knee toward the tabernacle."
	},
	{
		when: "Opening",
		do: "Stand. Sign of the Cross. “And with your spirit.”"
	},
	{
		when: "Readings",
		do: "Sit. The first reading and the psalm. Whisper the response if you can."
	},
	{
		when: "Gospel",
		do: "Stand. Small cross on forehead, lips, and heart."
	},
	{
		when: "Homily / Creed",
		do: "Sit, then stand. We believe."
	},
	{
		when: "Preparation",
		do: "Sit. Watch the gifts of bread and wine."
	},
	{
		when: "Holy, holy",
		do: "Stand, then kneel after the “Holy, holy, holy.”"
	},
	{
		when: "Consecration",
		do: "Kneel. The bell. Jesus is here. A bow of the head at each elevation."
	},
	{
		when: "Our Father",
		do: "Stand. Hands open or together — house rule."
	},
	{
		when: "Communion",
		do: "If not receiving, a little cross on the chest. A quiet “Jesus, I love you.”"
	},
	{
		when: "Leave",
		do: "Genuflect. Holy water. We take Him with us."
	}
];
function MassPrepPage() {
	const [prep, setPrep] = (0, import_react.useState)(null);
	const [tab, setTab] = (0, import_react.useState)("little");
	(0, import_react.useEffect)(() => {
		let live = true;
		loadSundayMass().then((m) => {
			if (live) setPrep(m);
		});
		return () => {
			live = false;
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-5 pt-10 pb-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "text-xs text-gold",
				children: "Today"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-[11px] tracking-[0.18em] text-gold uppercase",
				children: "Sunday"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display mt-1 text-4xl text-fg",
				children: "Mass together"
			}),
			!prep ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-sm text-muted",
				children: "Fetching this Sunday’s readings…"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-sm text-muted",
					children: [prep.dateLabel, prep.season ? ` · ${prep.season}` : ""]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display mt-5 text-2xl text-fg",
					children: prep.gospelTitle
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-xs text-gold",
					children: prep.gospel
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VoiceToggle, {
						tab,
						onChange: setTab
					})
				}),
				tab === "little" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 space-y-3",
					children: [prep.kidGospel.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg leading-relaxed text-accent",
						children: line
					}, line)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReadAloud, {
						text: prep.kidGospel.join(" "),
						label: "Read to him"
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 space-y-3 text-sm leading-relaxed text-accent",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"First reading: ",
						prep.firstReading,
						". Psalm: ",
						prep.psalm,
						".",
						prep.secondReading ? ` Second: ${prep.secondReading}.` : "",
						" Gospel: ",
						prep.gospel,
						"."
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A two-year-old will not follow the lectionary. He can learn the postures, one word from the Gospel, and that this hour is not optional entertainment." })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 rounded-3xl border border-border bg-surface p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] tracking-[0.16em] text-gold uppercase",
						children: "Watch for"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-fg",
						children: prep.watchFor
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display mt-8 text-2xl text-fg",
					children: "What our bodies do"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-3 space-y-2",
					children: MASS_POSTURES.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-2xl bg-surface-2 px-4 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] tracking-[0.14em] text-gold uppercase",
							children: p.when
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-accent",
							children: p.do
						})]
					}, p.when))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 rounded-3xl bg-surface p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] tracking-[0.16em] text-gold uppercase",
						children: "After donuts"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-fg",
						children: prep.afterDonuts
					})]
				})
			] })
		]
	});
}
//#endregion
export { MassPrepPage as component };
