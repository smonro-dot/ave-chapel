import { d as useRouterState, m as Outlet, v as Link, z as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { b as useAveStore } from "./router-BoTQ9X8c.mjs";
import { t as STORIES } from "./stories-Bfdu9Wvk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/stories-CIpbpl3r.js
var import_jsx_runtime = require_jsx_runtime();
function Stories() {
	const path = useRouterState({ select: (s) => s.location.pathname });
	const heard = useAveStore((s) => s.heardStories);
	if (path !== "/stories") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-5 pt-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] tracking-[0.18em] text-gold uppercase",
				children: "For little ears"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display mt-1 text-4xl text-fg",
				children: "Stories"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-sm text-sm text-muted",
				children: "Sixty seconds, a picture, then a card for you. Joyful Mysteries first — they are the right size for two."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 space-y-4",
				children: STORIES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/stories/$id",
					params: { id: s.id },
					className: "flex gap-4 overflow-hidden rounded-3xl bg-surface",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: s.image,
						alt: "",
						className: "h-28 w-24 shrink-0 object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "py-3 pr-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] tracking-[0.16em] text-gold uppercase",
								children: s.kind
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-xl text-fg",
								children: s.kidTitle
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 line-clamp-2 text-xs text-muted",
								children: s.kid[0]
							}),
							heard.includes(s.id) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-[10px] text-gold",
								children: "Heard"
							})
						]
					})]
				}) }, s.id))
			})
		]
	});
}
//#endregion
export { Stories as component };
