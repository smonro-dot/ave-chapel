import { i as __toESM } from "../_runtime.mjs";
import { R as require_react, v as Link, z as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as ReadAloud } from "./read-aloud-CVgAjy8m.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/bedtime-CWQX7Un1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var BEDTIME_STEPS = [
	{
		id: "quiet",
		title: "Quiet",
		kid: "We make our bodies still. God is here.",
		prayer: "Let us be still, and know that He is God.",
		image: "/images/night.jpg"
	},
	{
		id: "thanks",
		title: "Thank you",
		kid: "What was one good thing today?",
		prayer: "Thank you, God, for this day, for this family, and for Jesus."
	},
	{
		id: "sorry",
		title: "Sorry",
		kid: "Did we snatch, shout, or not share? We can say sorry.",
		prayer: "Jesus, we are sorry. Please forgive us, and help us love better tomorrow."
	},
	{
		id: "angel",
		title: "Guardian Angel",
		kid: "An angel stays with us while we sleep.",
		prayer: "Angel of God, my guardian dear, to whom God’s love commits me here, ever this night be at my side, to light and guard, to rule and guide. Amen.",
		image: "/images/guardian-angel.jpg"
	},
	{
		id: "blessing",
		title: "Blessing",
		kid: "Dad traces a little cross on your forehead.",
		prayer: "May the Lord bless you and keep you. May He make His face shine upon you. Sleep in peace."
	}
];
function Bedtime() {
	const [step, setStep] = (0, import_react.useState)(0);
	const current = BEDTIME_STEPS[step];
	const last = step === BEDTIME_STEPS.length - 1;
	const image = current.image ?? "/images/night.jpg";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-72",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: image,
				alt: "",
				className: "absolute inset-0 size-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-bg/20" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute bottom-5 left-5 right-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-[11px] tracking-[0.18em] text-gold uppercase",
					children: [
						step + 1,
						" of ",
						BEDTIME_STEPS.length
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display mt-1 text-4xl text-fg",
					children: current.title
				})]
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-5 pb-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 flex gap-1",
				children: BEDTIME_STEPS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": s.title,
					onClick: () => setStep(i),
					className: `h-1.5 flex-1 rounded-full ${i <= step ? "bg-gold" : "bg-border"}`
				}, s.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-lg leading-relaxed text-accent",
				children: current.kid
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 rounded-3xl border border-border bg-surface p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] tracking-[0.16em] text-gold uppercase",
						children: "Pray"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-fg",
						children: current.prayer
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReadAloud, { text: current.prayer })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex gap-3",
				children: [step > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setStep((s) => s - 1),
					className: "flex-1 rounded-full border border-border py-3 text-sm text-accent",
					children: "Back"
				}), last ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "flex flex-1 items-center justify-center rounded-full bg-gold py-3 text-sm font-semibold text-accent-fg",
					children: "Amen"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setStep((s) => s + 1),
					className: "flex-1 rounded-full bg-gold py-3 text-sm font-semibold text-accent-fg",
					children: "Next"
				})]
			})
		]
	})] });
}
//#endregion
export { Bedtime as component };
