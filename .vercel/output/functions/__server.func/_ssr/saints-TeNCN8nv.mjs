import { i as __toESM } from "../_runtime.mjs";
import { R as require_react, d as useRouterState, m as Outlet, v as Link, z as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Search, u as Heart } from "../_libs/lucide-react.mjs";
import { C as SAINTS, M as searchSaints, S as PATRONAGE_CHIPS, T as formatFeast, b as useAveStore, j as saintImage, w as TOPIC_CHIPS } from "./router-BoTQ9X8c.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/saints-TeNCN8nv.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SaintsBook() {
	const path = useRouterState({ select: (s) => s.location.pathname });
	const [q, setQ] = (0, import_react.useState)("");
	const [patron, setPatron] = (0, import_react.useState)(null);
	const [topic, setTopic] = (0, import_react.useState)(null);
	const fav = useAveStore((s) => s.favoriteSaints);
	const list = (0, import_react.useMemo)(() => {
		let rows = q.trim() ? searchSaints(q) : SAINTS;
		if (patron) {
			const n = patron.toLowerCase();
			rows = rows.filter((s) => s.patronages.some((x) => x.toLowerCase().includes(n)));
		}
		if (topic) {
			const n = topic.toLowerCase();
			rows = rows.filter((s) => s.topics.some((x) => x.toLowerCase().includes(n)));
		}
		return rows;
	}, [
		q,
		patron,
		topic
	]);
	if (path !== "/saints") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {});
	const favorites = SAINTS.filter((s) => fav.includes(s.slug));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-5 pt-10 pb-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] tracking-[0.18em] text-gold uppercase",
				children: "The book"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display mt-1 text-4xl text-fg",
				children: "Saints"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-sm text-sm leading-relaxed text-muted",
				children: "Search by name, what they watch over, or a topic. Read the little line to him; open the life, the stories, the miracles, and how the Church named them when you want the rest."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-xs text-gold",
				children: [SAINTS.length, " lives in the book"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mt-5 flex items-center gap-2 rounded-2xl border border-border bg-surface px-3 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4 shrink-0 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: q,
					onChange: (e) => setQ(e.target.value),
					placeholder: "lost keys, cancer, Ireland, Thérèse…",
					className: "w-full bg-transparent text-sm text-fg outline-none placeholder:text-muted",
					type: "search",
					autoCapitalize: "off"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 text-[11px] tracking-[0.16em] text-gold uppercase",
				children: "Patron of"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChipRow, {
				items: [...PATRONAGE_CHIPS],
				active: patron,
				onPick: (v) => {
					setPatron(v === patron ? null : v);
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-[11px] tracking-[0.16em] text-gold uppercase",
				children: "Topic"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChipRow, {
				items: [...TOPIC_CHIPS],
				active: topic,
				onPick: (v) => {
					setTopic(v === topic ? null : v);
				}
			}),
			favorites.length > 0 && !q && !patron && !topic && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] tracking-[0.16em] text-gold uppercase",
					children: "Kept close"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-2 flex gap-2 overflow-x-auto pb-1",
					children: favorites.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/saints/$slug",
						params: { slug: s.slug },
						className: "flex w-36 flex-col overflow-hidden rounded-2xl bg-surface",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: saintImage(s),
							alt: "",
							className: "h-20 w-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "px-3 py-2 font-display text-sm text-fg",
							children: s.shortName
						})]
					}) }, s.slug))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-6 text-xs text-muted",
				children: [
					list.length,
					" ",
					list.length === 1 ? "saint" : "saints",
					patron ? ` · ${patron}` : "",
					topic ? ` · ${topic}` : ""
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 space-y-3",
				children: list.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/saints/$slug",
					params: { slug: s.slug },
					className: "flex gap-4 overflow-hidden rounded-3xl bg-surface",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: saintImage(s),
						alt: "",
						className: "h-28 w-24 shrink-0 object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "py-3 pr-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-xl text-fg",
									children: s.shortName
								}), fav.includes(s.slug) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "size-3 fill-gold text-gold" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] text-gold",
								children: formatFeast(s.feast)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 line-clamp-2 text-xs leading-relaxed text-muted",
								children: s.kidLine
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 line-clamp-1 text-[10px] text-rose",
								children: s.patronages.slice(0, 3).join(" · ")
							})
						]
					})]
				}) }, s.slug))
			}),
			list.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 text-sm text-muted",
				children: "No one by that search. Try a patronage chip, or a first name."
			})
		]
	});
}
function ChipRow({ items, active, onPick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-2 flex gap-2 overflow-x-auto pb-1",
		children: items.map((item) => {
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => onPick(item),
				className: `shrink-0 rounded-full px-3 py-1.5 text-xs ${item === active ? "bg-gold text-accent-fg" : "border border-border bg-surface text-accent"}`,
				children: item
			}, item);
		})
	});
}
//#endregion
export { SaintsBook as component };
