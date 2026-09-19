import { v as Link, z as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Moon, i as Sparkles, y as BookOpen } from "../_libs/lucide-react.mjs";
import { D as mysterySetForDay, E as liturgicalSeason, O as nearestSaints, T as formatFeast, b as useAveStore, x as MYSTERY_LABEL, y as TRACK_META } from "./router-BoTQ9X8c.mjs";
import { t as STORIES } from "./stories-Bfdu9Wvk.mjs";
import { t as WHYS } from "./whys-DE6STnUV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CZStc4vk.js
var import_jsx_runtime = require_jsx_runtime();
var WEEKDAYS = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
function familyWeek(tracks, from = /* @__PURE__ */ new Date()) {
	const start = startOfWeek(from);
	const rotation = tracks.length ? tracks : [
		"gospel",
		"decade",
		"bedtime"
	];
	return WEEKDAYS.map((weekday, i) => {
		const d = addDays(start, i);
		const dateLabel = d.toLocaleDateString(void 0, {
			month: "short",
			day: "numeric"
		});
		const today = sameDay(d, from);
		const card = cardFor(i === 0 && rotation.includes("mass") ? "mass" : rotation[i % rotation.length], i, d);
		return {
			weekday: today ? "Today" : weekday,
			dateLabel,
			...card
		};
	});
}
function cardFor(track, i, d) {
	if (track === "gospel") {
		const stories = STORIES.filter((s) => s.kind === "mystery" || s.kind === "gospel");
		const s = stories[i % stories.length];
		return {
			title: s.kidTitle,
			hint: "A story for him",
			to: "/stories/$id",
			params: { id: s.id }
		};
	}
	if (track === "decade") return {
		title: "A decade together",
		hint: "Beads, one mystery",
		to: "/pray"
	};
	if (track === "saints") {
		const saint = nearestSaints(d, 1)[0];
		return {
			title: saint ? saint.shortName : "A saint",
			hint: "From the book",
			to: saint ? "/saints/$slug" : "/saints",
			params: saint ? { slug: saint.slug } : void 0
		};
	}
	if (track === "why") {
		const w = WHYS[i % WHYS.length];
		return {
			title: w.kidTitle,
			hint: "Why we do this",
			to: "/teach/$id",
			params: { id: w.id }
		};
	}
	if (track === "mass") return {
		title: "Sunday Mass",
		hint: "Gospel in kid English",
		to: "/mass"
	};
	return {
		title: "Bedtime prayer",
		hint: "Nine quiet minutes",
		to: "/bedtime"
	};
}
function startOfWeek(from) {
	const d = new Date(from);
	d.setHours(12, 0, 0, 0);
	d.setDate(d.getDate() - d.getDay());
	return d;
}
function addDays(d, n) {
	const x = new Date(d);
	x.setDate(x.getDate() + n);
	return x;
}
function sameDay(a, b) {
	return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}
function Home() {
	const saints = nearestSaints();
	const set = mysterySetForDay();
	const tracks = useAveStore((s) => s.tracks);
	const heard = useAveStore((s) => s.heardStories);
	const tonight = STORIES.find((s) => !heard.includes(s.id)) ?? STORIES[0];
	const season = liturgicalSeason();
	const saint = saints[0];
	const week = familyWeek(tracks);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-72 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/chapel.jpg",
				alt: "",
				className: "absolute inset-0 size-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-bg/20" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute bottom-6 left-5 right-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.25em] text-gold uppercase",
						children: season
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display mt-1 text-5xl text-fg",
						children: "Ave"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 max-w-xs text-sm text-accent/90",
						children: [MYSTERY_LABEL[set], " today. A story tonight. The saints whenever you need them."]
					})
				]
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4 px-5 pt-5 pb-6",
		children: [
			saint && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/saints/$slug",
				params: { slug: saint.slug },
				className: "block rounded-3xl border border-border bg-surface p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] tracking-[0.18em] text-gold uppercase",
						children: "Saint of the day"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display mt-1 text-2xl text-fg",
						children: saint.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-muted",
						children: formatFeast(saint.feast)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-accent",
						children: saint.kidLine
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/stories/$id",
				params: { id: tonight.id },
				className: "block overflow-hidden rounded-3xl border border-border",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: tonight.image,
					alt: "",
					className: "h-40 w-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-surface p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] tracking-[0.18em] text-gold uppercase",
							children: "Tonight’s story"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display mt-1 text-2xl text-fg",
							children: tonight.kidTitle
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: tonight.kid[0]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/pray",
						className: "rounded-3xl bg-surface-2 p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-5 text-gold" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 font-display text-xl text-fg",
								children: "Pray"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted",
								children: "Listen or read along"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/bedtime",
						className: "rounded-3xl bg-surface-2 p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "size-5 text-gold" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 font-display text-xl text-fg",
								children: "Bedtime"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted",
								children: "Nine quiet minutes"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/mass",
						className: "rounded-3xl bg-surface-2 p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "size-5 text-gold" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 font-display text-xl text-fg",
								children: "Sunday"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted",
								children: "Mass prep"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/church",
						className: "rounded-3xl bg-surface-2 p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-xl text-fg",
							children: "Church"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-muted",
							children: "Tap the nave"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] tracking-[0.18em] text-gold uppercase",
					children: "This week"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-2",
					children: week.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DayLink, { d }) }, d.dateLabel))
				}),
				tracks.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-[11px] text-muted",
					children: ["Chosen: ", tracks.map((t) => TRACK_META[t].label).join(" · ")]
				})
			] })
		]
	})] });
}
function DayLink({ d }) {
	const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "text-[10px] tracking-[0.14em] text-gold uppercase",
			children: [
				d.weekday,
				" · ",
				d.dateLabel
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-lg text-fg",
			children: d.title
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs text-muted",
			children: d.hint
		})
	] });
	const cls = "block rounded-2xl bg-surface px-4 py-3";
	if (d.to === "/stories/$id" && d.params?.id) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/stories/$id",
		params: { id: d.params.id },
		className: cls,
		children: inner
	});
	if (d.to === "/saints/$slug" && d.params?.slug) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/saints/$slug",
		params: { slug: d.params.slug },
		className: cls,
		children: inner
	});
	if (d.to === "/teach/$id" && d.params?.id) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/teach/$id",
		params: { id: d.params.id },
		className: cls,
		children: inner
	});
	if (d.to === "/mass") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/mass",
		className: cls,
		children: inner
	});
	if (d.to === "/bedtime") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/bedtime",
		className: cls,
		children: inner
	});
	if (d.to === "/church") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/church",
		className: cls,
		children: inner
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/pray",
		className: cls,
		children: inner
	});
}
//#endregion
export { Home as component };
