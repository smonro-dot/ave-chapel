import { i as __toESM } from "../_runtime.mjs";
import { R as require_react, v as Link, z as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as ReadAloud } from "./read-aloud-CVgAjy8m.mjs";
import { t as VoiceToggle } from "./voice-toggle-CqoiXYh4.mjs";
import { b as useAveStore, r as Route$1 } from "./router-BoTQ9X8c.mjs";
import { n as storyById } from "./stories-Bfdu9Wvk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/stories._id-DL2L6Aa1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function StoryPage() {
	const { id } = Route$1.useParams();
	const story = storyById(id);
	const mark = useAveStore((s) => s.markStory);
	const [tab, setTab] = (0, import_react.useState)("little");
	(0, import_react.useEffect)(() => {
		if (story) mark(story.id);
	}, [story, mark]);
	if (!story) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "That story isn’t here." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/stories",
			className: "text-gold",
			children: "Back"
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		children: [story.video ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
			src: story.video,
			poster: story.image,
			autoPlay: true,
			muted: true,
			loop: true,
			playsInline: true,
			className: "h-[52vh] w-full object-cover"
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: story.image,
			alt: "",
			className: "h-[52vh] w-full object-cover"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-bg" })]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-5 pb-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] tracking-[0.18em] text-gold uppercase",
				children: story.scripture ?? story.kind
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display mt-1 text-4xl text-fg",
				children: story.kidTitle
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
				children: [story.kid.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-lg leading-relaxed text-accent",
					children: line
				}, line)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReadAloud, {
					text: story.kid.join(" "),
					label: "Read to him"
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 space-y-4 text-sm leading-relaxed",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] tracking-[0.16em] text-gold uppercase",
						children: "What happened"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-accent",
						children: story.dad.happened
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] tracking-[0.16em] text-gold uppercase",
						children: "Why Catholics remember this"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-accent",
						children: story.dad.why
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-surface p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] tracking-[0.16em] text-gold uppercase",
							children: "Ask in the car"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-fg",
							children: story.dad.ask
						})]
					}),
					story.saintSlug && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/saints/$slug",
						params: { slug: story.saintSlug },
						className: "inline-block text-sm text-gold",
						children: "Open in the saints book →"
					})
				]
			})
		]
	})] });
}
//#endregion
export { StoryPage as component };
