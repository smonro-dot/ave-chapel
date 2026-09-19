import { i as __toESM } from "../_runtime.mjs";
import { R as require_react, v as Link, z as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as ReadAloud } from "./read-aloud-CVgAjy8m.mjs";
import { t as VoiceToggle } from "./voice-toggle-CqoiXYh4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/church-CQsdsjHY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CHURCH_SPOTS = [
	{
		id: "font",
		label: "Baptismal font",
		kid: "This is where we were (or will be) washed as God’s child.",
		why: "Baptism is the door of the Church. Water, oil, white garment, candle — we are claimed for the Trinity.",
		doThis: "Dip your fingers and make a Sign of the Cross, remembering your own baptism.",
		x: 14,
		y: 62,
		image: "/images/font.jpg"
	},
	{
		id: "pews",
		label: "Pews",
		kid: "We sit here as a family. Quiet bodies help quiet hearts.",
		why: "The nave is the ship of the Church. Sitting is for listening to the Word; it is not the main posture of worship.",
		doThis: "Practice sitting still for one minute, hands in a lap.",
		x: 48,
		y: 78
	},
	{
		id: "stations",
		label: "Stations of the Cross",
		kid: "Fourteen pictures of Jesus on the day He died for us.",
		why: "The Via Crucis lets the faithful walk Calvary. In Lent we pray them; all year they teach what love costs.",
		doThis: "On a visit, stop at one station and say: “Jesus, I love you.”",
		x: 8,
		y: 38
	},
	{
		id: "mary",
		label: "Mary’s place",
		kid: "A statue of Jesus’ mother. We can say hello and ask her to pray.",
		why: "Side altars and shrines are not competing gods. They are family portraits in the Father’s house.",
		doThis: "A small bow, and one Hail Mary if he will stand for it.",
		x: 84,
		y: 48
	},
	{
		id: "altar",
		label: "Altar",
		kid: "The table of the Last Supper and the place of Jesus’ sacrifice.",
		why: "The altar is both table and Calvary. We bow to it because of the sacrifice offered there.",
		doThis: "A profound bow toward the altar if the tabernacle is elsewhere.",
		x: 50,
		y: 42
	},
	{
		id: "crucifix",
		label: "Crucifix",
		kid: "Jesus on the Cross. He loves us this much.",
		why: "A crucifix — not an empty cross — keeps the cost of redemption in view. The Mass is this sacrifice made present.",
		doThis: "Look, and whisper “thank you, Jesus.”",
		x: 50,
		y: 18
	},
	{
		id: "tabernacle",
		label: "Tabernacle",
		kid: "Jesus is home here. See the little red lamp?",
		why: "Reserved Eucharist. Genuflect when the lamp is lit. This is the most important spot in the building.",
		doThis: "Find the lamp. Genuflect on the right knee.",
		x: 58,
		y: 32,
		image: "/images/tabernacle.jpg"
	}
];
function ChurchWalk() {
	const [id, setId] = (0, import_react.useState)("tabernacle");
	const [tab, setTab] = (0, import_react.useState)("little");
	const spot = CHURCH_SPOTS.find((s) => s.id === id) ?? CHURCH_SPOTS[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pb-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-5 pt-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/teach",
						className: "text-xs text-gold",
						children: "Teach"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display mt-1 text-4xl text-fg",
						children: "Inside the church"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: "Tap a gold mark. Whisper the little line. Keep the rest for you."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-5 mt-5 overflow-hidden rounded-3xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/church.jpg",
					alt: "Nave of a church",
					className: "h-80 w-full object-cover"
				}), CHURCH_SPOTS.map((s) => {
					const on = s.id === id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": s.label,
						onClick: () => setId(s.id),
						className: `absolute size-11 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 ${on ? "border-gold bg-gold" : "border-gold/80 bg-gold/35"}`,
						style: {
							left: `${s.x}%`,
							top: `${s.y}%`
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sr-only",
							children: s.label
						})
					}, s.id);
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-5 pt-5",
				children: [
					spot.image && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: spot.image,
						alt: "",
						className: "mb-4 h-36 w-full rounded-2xl object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] tracking-[0.18em] text-gold uppercase",
						children: "This place"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display mt-1 text-3xl text-fg",
						children: spot.label
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VoiceToggle, {
							tab,
							onChange: setTab
						})
					}),
					tab === "little" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 space-y-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lg leading-relaxed text-accent",
							children: spot.kid
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReadAloud, {
							text: spot.kid,
							label: "Read to him"
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm leading-relaxed text-accent",
						children: spot.why
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 rounded-2xl border border-border bg-surface p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] tracking-[0.16em] text-gold uppercase",
							children: "Do this"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-fg",
							children: spot.doThis
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 flex flex-wrap gap-2",
						children: CHURCH_SPOTS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setId(s.id),
							className: `rounded-full px-3 py-1.5 text-xs ${s.id === id ? "bg-gold text-accent-fg" : "bg-surface text-muted"}`,
							children: s.label
						}) }, s.id))
					})
				]
			})
		]
	});
}
//#endregion
export { ChurchWalk as component };
