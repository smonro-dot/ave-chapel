import { i as __toESM } from "../_runtime.mjs";
import { R as require_react, v as Link, z as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as ReadAloud } from "./read-aloud-CVgAjy8m.mjs";
import { t as VoiceToggle } from "./voice-toggle-CqoiXYh4.mjs";
import { n as Route } from "./router-BoTQ9X8c.mjs";
import { n as whyById } from "./whys-DE6STnUV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/teach._id-CT9Jt548.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function WhyPage() {
	const { id } = Route.useParams();
	const page = whyById(id);
	const [tab, setTab] = (0, import_react.useState)("little");
	if (!page) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "That page isn’t here." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/teach",
			className: "text-gold",
			children: "Back"
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [page.image && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-56",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: page.image,
			alt: "",
			className: "absolute inset-0 size-full object-cover"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-bg" })]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `px-5 pb-10 ${page.image ? "" : "pt-10"}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/teach",
				className: "text-xs text-gold",
				children: "Teach"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-[11px] tracking-[0.18em] text-gold uppercase",
				children: page.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display mt-1 text-4xl text-fg",
				children: page.kidTitle
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VoiceToggle, {
					tab,
					onChange: setTab
				})
			}),
			tab === "little" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-lg leading-relaxed text-accent",
					children: page.kid
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReadAloud, {
					text: page.kid,
					label: "Read to him"
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-5 space-y-4",
				children: page.forYou.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "text-sm leading-relaxed text-accent",
					children: p
				}, p))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 rounded-3xl border border-border bg-surface p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] tracking-[0.16em] text-gold uppercase",
					children: "Try tonight"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-relaxed text-fg",
					children: page.tryTonight
				})]
			})
		]
	})] });
}
//#endregion
export { WhyPage as component };
