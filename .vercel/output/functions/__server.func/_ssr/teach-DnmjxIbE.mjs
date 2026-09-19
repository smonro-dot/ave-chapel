import { d as useRouterState, m as Outlet, v as Link, z as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Moon, p as Church, y as BookOpen } from "../_libs/lucide-react.mjs";
import { t as WHYS } from "./whys-DE6STnUV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/teach-DnmjxIbE.js
var import_jsx_runtime = require_jsx_runtime();
function Teach() {
	if (useRouterState({ select: (s) => s.location.pathname }) !== "/teach") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-5 pt-10 pb-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] tracking-[0.18em] text-gold uppercase",
				children: "Pass it on"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display mt-1 text-4xl text-fg",
				children: "Teach"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-sm text-sm leading-relaxed text-muted",
				children: "Why we kneel, why the lamp, why Mary. Short enough for a toddler’s ear; true enough for you."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid grid-cols-3 gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/church",
						className: "rounded-2xl bg-surface-2 p-3 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Church, { className: "mx-auto size-5 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-[11px] text-accent",
							children: "Church"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/mass",
						className: "rounded-2xl bg-surface-2 p-3 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "mx-auto size-5 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-[11px] text-accent",
							children: "Sunday"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/bedtime",
						className: "rounded-2xl bg-surface-2 p-3 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "mx-auto size-5 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-[11px] text-accent",
							children: "Bedtime"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 space-y-3",
				children: WHYS.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/teach/$id",
					params: { id: w.id },
					className: "block overflow-hidden rounded-3xl bg-surface",
					children: [w.image && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: w.image,
						alt: "",
						className: "h-28 w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] tracking-[0.16em] text-gold uppercase",
								children: "Why we…"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl text-fg",
								children: w.kidTitle
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm leading-relaxed text-muted",
								children: w.kid
							})
						]
					})]
				}) }, w.id))
			})
		]
	});
}
//#endregion
export { Teach as component };
