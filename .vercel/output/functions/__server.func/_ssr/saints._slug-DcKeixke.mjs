import { i as __toESM } from "../_runtime.mjs";
import { R as require_react, v as Link, z as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { u as Heart } from "../_libs/lucide-react.mjs";
import { t as ReadAloud } from "./read-aloud-CVgAjy8m.mjs";
import { t as VoiceToggle } from "./voice-toggle-CqoiXYh4.mjs";
import { A as saintBySlug, T as formatFeast, b as useAveStore, i as Route$2, j as saintImage, k as relatedSaints } from "./router-BoTQ9X8c.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/saints._slug-DcKeixke.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SaintPage() {
	const { slug } = Route$2.useParams();
	const saint = saintBySlug(slug);
	const [tab, setTab] = (0, import_react.useState)("little");
	const [dadPart, setDadPart] = (0, import_react.useState)("life");
	const fav = useAveStore((s) => s.favoriteSaints);
	const toggle = useAveStore((s) => s.toggleFavorite);
	if (!saint) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-accent",
			children: "That name is not in the book yet."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/saints",
			className: "mt-3 inline-block text-gold",
			children: "Back to the saints"
		})]
	});
	const related = relatedSaints(saint);
	const kept = fav.includes(saint.slug);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-72",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: saintImage(saint),
				alt: "",
				className: "absolute inset-0 size-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/saints",
				className: "absolute left-4 top-4 rounded-full bg-bg/70 px-3 py-1.5 text-xs text-accent",
				children: "Book"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => toggle(saint.slug),
				className: "absolute right-4 top-4 flex size-10 items-center justify-center rounded-full bg-bg/70",
				"aria-label": kept ? "Remove from kept close" : "Keep close",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: `size-4 ${kept ? "fill-gold text-gold" : "text-accent"}` })
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-5 pb-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] tracking-[0.18em] text-gold uppercase",
				children: formatFeast(saint.feast)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display mt-1 text-4xl text-fg",
				children: saint.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: saint.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 flex flex-wrap gap-1.5",
				children: saint.patronages.slice(0, 6).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/saints",
					className: "rounded-full border border-border px-2.5 py-1 text-[10px] text-rose",
					children: p
				}, p))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VoiceToggle, {
					tab,
					onChange: setTab
				})
			}),
			tab === "little" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg leading-relaxed text-accent",
						children: saint.kidLine
					}),
					saint.stories[0] && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-base leading-relaxed text-accent",
						children: [
							saint.stories[0].title,
							": ",
							shorten(saint.stories[0].text)
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReadAloud, {
						text: `${saint.kidLine} ${saint.stories[0]?.text ?? ""}`,
						label: "Read to him"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-surface p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] tracking-[0.16em] text-gold uppercase",
							children: "A little prayer"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-fg",
							children: saint.prayer
						})]
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-1 overflow-x-auto pb-1",
						children: [
							["life", "Life"],
							["stories", "Stories"],
							["miracles", "Miracles"],
							["path", "How named"]
						].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setDadPart(id),
							className: `shrink-0 rounded-full px-3 py-1.5 text-xs ${dadPart === id ? "bg-gold text-accent-fg" : "bg-surface text-muted"}`,
							children: label
						}, id))
					}),
					dadPart === "life" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 space-y-3 text-sm leading-relaxed text-accent",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: saint.summary }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: saint.life }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted",
								children: [
									saint.born,
									" — ",
									saint.died
								]
							})
						]
					}),
					dadPart === "stories" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-4",
						children: saint.stories.map((st) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-2xl bg-surface p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] tracking-[0.16em] text-gold uppercase",
								children: st.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-accent",
								children: st.text
							})]
						}, st.title))
					}),
					dadPart === "miracles" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-4",
						children: saint.miracles.map((st) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-2xl bg-surface p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] tracking-[0.16em] text-gold uppercase",
								children: st.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-accent",
								children: st.text
							})]
						}, st.title))
					}),
					dadPart === "path" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 space-y-3 text-sm leading-relaxed text-accent",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: saint.pathToSainthood }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted",
								children: ["Canonized / cultus: ", saint.canonized]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-border p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] tracking-[0.16em] text-gold uppercase",
									children: "Ask with him"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-fg",
									children: saint.prayer
								})]
							})
						]
					})
				]
			}),
			related.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] tracking-[0.16em] text-gold uppercase",
					children: "Nearby in the book"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-2 space-y-2",
					children: related.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/saints/$slug",
						params: { slug: r.slug },
						className: "block text-sm text-accent",
						children: [
							r.shortName,
							" — ",
							r.patronages[0]
						]
					}) }, r.slug))
				})]
			})
		]
	})] });
}
function shorten(text) {
	const cut = text.split(". ").slice(0, 2).join(". ");
	return cut.endsWith(".") ? cut : `${cut}.`;
}
//#endregion
export { SaintPage as component };
