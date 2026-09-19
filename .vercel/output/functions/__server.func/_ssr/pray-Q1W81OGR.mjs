import { i as __toESM } from "../_runtime.mjs";
import { R as require_react, z as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as Captions, d as Headphones, f as CircleHelp, h as ChevronLeft, m as ChevronRight, o as Play, s as Pause, t as X, v as CaptionsOff } from "../_libs/lucide-react.mjs";
import { D as mysterySetForDay, _ as mysteriesFor, a as usePrayerStore, c as pauseClip, d as stopPreview, f as warmupClip, g as clipUrl, h as VOICES, l as playClip, m as MYSTERY_SETS, o as getPlayer, p as wordAt, s as loadTimings, u as playPreview, v as mysterySetMeta } from "./router-BoTQ9X8c.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pray-Q1W81OGR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CX = 200;
var CY = 172;
var RX = 142;
var RY = 154;
function round(n) {
	return Math.round(n * 100) / 100;
}
function bead(id, kind, x, y, extra = {}) {
	const r = kind === "small" ? 6.2 : kind === "large" ? 8.8 : kind === "medal" ? 22 : 26;
	return {
		id,
		kind,
		x: round(x),
		y: round(y),
		r,
		...extra
	};
}
function buildBeads() {
	const beads = [];
	beads.push(bead("medal", "medal", CX, 326));
	const loop = [];
	for (let d = 1; d <= 5; d++) {
		if (d !== 1) loop.push({
			id: `d${d}-of`,
			kind: "large",
			decade: d
		});
		for (let i = 1; i <= 10; i++) loop.push({
			id: `d${d}-hm-${i}`,
			kind: "small",
			decade: d,
			hailIndex: i
		});
	}
	const inset = .34;
	const span = Math.PI * 2 - inset * 2;
	for (let i = 0; i < loop.length; i++) {
		const ang = Math.PI / 2 + inset + i / (loop.length - 1) * span;
		const item = loop[i];
		beads.push(bead(item.id, item.kind, CX + RX * Math.cos(ang), CY + RY * Math.sin(ang), {
			decade: item.decade,
			hailIndex: item.hailIndex
		}));
	}
	beads.push(bead("tail-glory", "large", CX, 362));
	beads.push(bead("tail-hm-1", "small", CX, 380));
	beads.push(bead("tail-hm-2", "small", CX, 396));
	beads.push(bead("tail-hm-3", "small", CX, 412));
	beads.push(bead("tail-of", "large", CX, 434));
	beads.push(bead("crucifix", "crucifix", CX, 488));
	return beads;
}
var HANGING_BEADS = buildBeads();
var BEAD_BY_ID = Object.fromEntries(HANGING_BEADS.map((b) => [b.id, b]));
function linksBetween(a, b) {
	const dx = b.x - a.x;
	const dy = b.y - a.y;
	const n = Math.hypot(dx, dy) > 22 ? 2 : 1;
	const rot = Math.atan2(dy, dx) * 180 / Math.PI;
	const out = [];
	for (let i = 1; i <= n; i++) {
		const t = i / (n + 1);
		out.push({
			x: round(a.x + dx * t),
			y: round(a.y + dy * t),
			rot
		});
	}
	return out;
}
function loopChainPath() {
	const ring = HANGING_BEADS.filter((b) => b.id.startsWith("d") || b.id === "medal").map((b) => ({
		b,
		ang: Math.atan2(b.y - CY, b.x - CX)
	})).sort((a, b) => a.ang - b.ang);
	const medalAt = ring.findIndex((x) => x.b.id === "medal");
	return `${(medalAt >= 0 ? [...ring.slice(medalAt), ...ring.slice(0, medalAt)] : ring).map((x, i) => `${i === 0 ? "M" : "L"} ${x.b.x.toFixed(2)} ${x.b.y.toFixed(2)}`).join(" ")} Z`;
}
function tailChainPath() {
	return [
		"medal",
		"tail-glory",
		"tail-hm-1",
		"tail-hm-2",
		"tail-hm-3",
		"tail-of",
		"crucifix"
	].map((id, i) => {
		const b = BEAD_BY_ID[id];
		return `${i === 0 ? "M" : "L"} ${b.x.toFixed(2)} ${b.y.toFixed(2)}`;
	}).join(" ");
}
function chainLinks() {
	const ring = HANGING_BEADS.filter((b) => b.id.startsWith("d") || b.id === "medal").map((b) => ({
		b,
		ang: Math.atan2(b.y - CY, b.x - CX)
	})).sort((a, b) => a.ang - b.ang);
	const links = [];
	for (let i = 0; i < ring.length; i++) links.push(...linksBetween(ring[i].b, ring[(i + 1) % ring.length].b));
	const tail = [
		"medal",
		"tail-glory",
		"tail-hm-1",
		"tail-hm-2",
		"tail-hm-3",
		"tail-of",
		"crucifix"
	];
	for (let i = 0; i < tail.length - 1; i++) links.push(...linksBetween(BEAD_BY_ID[tail[i]], BEAD_BY_ID[tail[i + 1]]));
	return links;
}
var CHAIN_LINKS = chainLinks();
function beadImage(bead, set) {
	if (bead.kind === "large") return "/images/bead-gold.png";
	if (set === "sorrowful") return "/images/bead-garnet.png";
	if (set === "luminous") return "/images/bead-amber.png";
	return "/images/bead-pearl.png";
}
var LOOP_PATH = loopChainPath();
var TAIL_PATH = tailChainPath();
function cx(...parts) {
	return parts.filter(Boolean).join(" ");
}
function BeadMark({ bead, state, mysterySet, prominent, onClick }) {
	const clickable = !!onClick;
	const active = state === "active";
	const motion = active ? prominent ? "animate-bead-pray" : "animate-bead-live" : "bead-rest";
	const glow = active ? "url(#bead-glow-hot)" : state === "done" ? "url(#bead-glow-soft)" : void 0;
	const n = (v) => v.toFixed(2);
	if (bead.kind === "crucifix") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		transform: `translate(${n(bead.x)} ${n(bead.y)})`,
		onClick,
		className: clickable ? "cursor-pointer" : void 0,
		children: [
			active ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "0",
				cy: "8",
				rx: "28",
				ry: "44",
				fill: "var(--color-glow-hot)",
				opacity: "0.28",
				className: "origin-center animate-bead-pulse"
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
				className: motion,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("image", {
					href: "/images/crucifix.png",
					x: n(-24),
					y: n(-39),
					width: 48,
					height: 86,
					preserveAspectRatio: "xMidYMid meet",
					style: {
						filter: glow,
						opacity: state === "idle" ? .9 : 1
					}
				})
			}),
			clickable ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "-28",
				y: "-52",
				width: "56",
				height: "108",
				fill: "transparent"
			}) : null
		]
	});
	if (bead.kind === "medal") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		transform: `translate(${n(bead.x)} ${n(bead.y)})`,
		onClick,
		className: clickable ? "cursor-pointer" : void 0,
		children: [
			active ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				r: "36",
				fill: "var(--color-glow-hot)",
				opacity: "0.28",
				className: "animate-bead-pulse"
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
				className: motion,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("image", {
					href: "/images/medal.png",
					x: n(-22),
					y: n(-23.76),
					width: n(44),
					height: n(47.52),
					preserveAspectRatio: "xMidYMid meet",
					style: {
						filter: glow,
						opacity: state === "idle" ? .92 : 1
					}
				})
			}),
			clickable ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				r: "28",
				fill: "transparent"
			}) : null
		]
	});
	const size = bead.r * 2;
	const href = beadImage(bead, mysterySet);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		transform: `translate(${n(bead.x)} ${n(bead.y)})`,
		onClick,
		className: clickable ? "cursor-pointer" : void 0,
		children: [
			active ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				r: n(bead.r * 2.15),
				fill: "var(--color-glow-hot)",
				opacity: "0.32",
				className: "animate-bead-pulse"
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				className: motion,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						r: n(bead.r + .55),
						fill: "var(--color-bg)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("image", {
						href,
						x: n(-size / 2),
						y: n(-size / 2),
						width: n(size),
						height: n(size),
						preserveAspectRatio: "xMidYMid slice",
						clipPath: "url(#round-bead)",
						style: {
							filter: glow,
							opacity: state === "idle" ? .92 : 1
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						r: n(bead.r),
						fill: "none",
						stroke: active ? "var(--color-glow-hot)" : "var(--color-accent)",
						strokeWidth: active ? "1.15" : "0.55",
						opacity: active ? .95 : .55
					})
				]
			}),
			clickable ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				r: n(Math.max(14, bead.r + 8)),
				fill: "transparent"
			}) : null
		]
	});
}
function RosaryHanging({ activeBeadId, completedBeadIds, mysterySet, onBeadClick, alignTop = false, prominent = false, className }) {
	const done = completedBeadIds ?? /* @__PURE__ */ new Set();
	const ordered = [...HANGING_BEADS].sort((a, b) => a.id === activeBeadId ? 1 : b.id === activeBeadId ? -1 : 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 400 560",
		preserveAspectRatio: alignTop ? "xMidYMin meet" : "xMidYMid meet",
		className: cx("block h-full w-full select-none", !prominent && "animate-rosary-sway", className),
		role: "img",
		"aria-label": "Rosary",
		overflow: "visible",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
				id: "chain-metal",
				x1: "0",
				y1: "0",
				x2: "1",
				y2: "1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "0%",
						stopColor: "var(--color-chain-light)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "45%",
						stopColor: "var(--color-gold)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "100%",
						stopColor: "var(--color-chain-dark)"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("clipPath", {
				id: "round-bead",
				clipPathUnits: "objectBoundingBox",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "0.5",
					cy: "0.5",
					r: "0.5"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("filter", {
				id: "bead-glow-hot",
				x: "-160%",
				y: "-160%",
				width: "420%",
				height: "420%",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("feGaussianBlur", {
						stdDeviation: "5.4",
						result: "blur"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("feColorMatrix", {
						in: "blur",
						type: "matrix",
						values: "1 0 0 0 0.16\n                    0 0.86 0 0 0.08\n                    0 0 0.4 0 0\n                    0 0 0 1 0",
						result: "warm"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("feMerge", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("feMergeNode", { in: "warm" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feMergeNode", { in: "SourceGraphic" })] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("filter", {
				id: "bead-glow-soft",
				x: "-70%",
				y: "-70%",
				width: "240%",
				height: "240%",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("feGaussianBlur", {
					stdDeviation: "1.6",
					result: "blur"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("feMerge", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("feMergeNode", { in: "blur" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feMergeNode", { in: "SourceGraphic" })] })]
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: LOOP_PATH,
				fill: "none",
				stroke: "url(#chain-metal)",
				strokeWidth: "1.35",
				strokeOpacity: "0.8"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: TAIL_PATH,
				fill: "none",
				stroke: "url(#chain-metal)",
				strokeWidth: "1.35",
				strokeOpacity: "0.8"
			}),
			CHAIN_LINKS.map((link, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: link.x.toFixed(2),
				cy: link.y.toFixed(2),
				rx: "2.8",
				ry: "1.15",
				transform: `rotate(${link.rot.toFixed(1)} ${link.x.toFixed(2)} ${link.y.toFixed(2)})`,
				fill: "none",
				stroke: "var(--color-chain-light)",
				strokeWidth: "0.65",
				opacity: "0.7"
			}, `link-${i}`)),
			ordered.map((bead) => {
				const state = bead.id === activeBeadId ? "active" : done.has(bead.id) ? "done" : "idle";
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BeadMark, {
					bead,
					state,
					mysterySet,
					prominent,
					onClick: onBeadClick ? () => onBeadClick(bead.id) : void 0
				}, bead.id);
			})
		] })]
	});
}
function Karaoke({ timings, wordIndex, className }) {
	const active = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = active.current;
		if (!el) return;
		const box = el.closest("[data-karaoke]");
		if (!box) {
			el.scrollIntoView({
				block: "center",
				behavior: "smooth",
				inline: "nearest"
			});
			return;
		}
		const a = el.getBoundingClientRect();
		const b = box.getBoundingClientRect();
		if (a.top < b.top + 12 || a.bottom > b.bottom - 12) el.scrollIntoView({
			block: "center",
			behavior: "smooth",
			inline: "nearest"
		});
	}, [wordIndex]);
	if (timings.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: cx("font-display text-pretty text-2xl leading-snug text-muted sm:text-3xl", className),
		children: timings.map((w, i) => {
			const on = i === wordIndex;
			const past = i < wordIndex;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				ref: on ? active : void 0,
				className: cx("transition-colors duration-150", on && "text-word-lit", past && "text-fg/60", !on && !past && "text-subtle"),
				children: w.word
			}), i < timings.length - 1 ? " " : ""] }, `${w.start}-${i}`);
		})
	});
}
function useEngine() {
	const voice = usePrayerStore((s) => s.voice);
	const followMode = usePrayerStore((s) => s.followMode);
	const playbackRate = usePrayerStore((s) => s.playbackRate);
	const screen = usePrayerStore((s) => s.screen);
	const stepIndex = usePrayerStore((s) => s.stepIndex);
	const steps = usePrayerStore((s) => s.steps);
	const playing = usePrayerStore((s) => s.playing);
	const setPlaying = usePrayerStore((s) => s.setPlaying);
	const setWordIndex = usePrayerStore((s) => s.setWordIndex);
	const step = steps[stepIndex];
	const stepId = step?.id;
	const [timings, setTimings] = (0, import_react.useState)([]);
	const [waiting, setWaiting] = (0, import_react.useState)(false);
	const [ready, setReady] = (0, import_react.useState)(false);
	const ended = (0, import_react.useRef)(false);
	const lastId = (0, import_react.useRef)(void 0);
	(0, import_react.useEffect)(() => {
		const el = getPlayer();
		if (el) el.playbackRate = playbackRate;
	}, [playbackRate]);
	(0, import_react.useEffect)(() => {
		if (screen !== "pray" || !step) {
			pauseClip();
			setTimings([]);
			setReady(false);
			return;
		}
		let cancel = false;
		ended.current = false;
		setWaiting(false);
		setReady(false);
		setWordIndex(0);
		const listen = followMode === "listen";
		const changed = lastId.current !== stepId;
		lastId.current = stepId;
		if (listen && changed) playClip(clipUrl(voice, step.clipId), usePrayerStore.getState().playbackRate).catch(() => {
			if (!cancel) setPlaying(false);
		});
		else if (!listen) pauseClip();
		const next = steps[stepIndex + 1];
		if (listen && next && next.clipId !== step.clipId) warmupClip(clipUrl(voice, next.clipId));
		(async () => {
			const loaded = await loadTimings(voice, step.clipId, step.text);
			if (!cancel) {
				setTimings(loaded.timings);
				setReady(true);
			}
		})();
		return () => {
			cancel = true;
		};
	}, [
		screen,
		stepId,
		voice,
		followMode,
		setPlaying,
		setWordIndex,
		stepIndex,
		steps,
		step
	]);
	(0, import_react.useEffect)(() => {
		const el = getPlayer();
		if (followMode === "listen" && el) {
			if (playing) el.play().catch(() => setPlaying(false));
			else el.pause();
		}
	}, [
		playing,
		followMode,
		setPlaying
	]);
	(0, import_react.useEffect)(() => {
		const el = getPlayer();
		if (followMode !== "listen" || !el || screen !== "pray") return;
		const onEnded = () => {
			if (ended.current) return;
			ended.current = true;
			const cur = usePrayerStore.getState();
			if (cur.steps[cur.stepIndex]?.awaitContinue) {
				setWaiting(true);
				cur.setPlaying(false);
			} else cur.next();
		};
		el.addEventListener("ended", onEnded);
		return () => el.removeEventListener("ended", onEnded);
	}, [
		followMode,
		screen,
		stepId
	]);
	(0, import_react.useEffect)(() => {
		if (screen !== "pray" || !ready || timings.length === 0) return;
		let raf = 0;
		const el = getPlayer();
		let origin = performance.now();
		if (followMode === "listen" && el) origin = performance.now() - el.currentTime * 1e3;
		let pausedAt = 0;
		const tick = () => {
			const st = usePrayerStore.getState();
			if (st.screen !== "pray") return;
			if (!st.playing) {
				pausedAt = performance.now();
				raf = requestAnimationFrame(tick);
				return;
			}
			if (pausedAt) {
				origin += performance.now() - pausedAt;
				pausedAt = 0;
			}
			const rate = st.playbackRate || 1;
			const t = followMode === "listen" && el && !el.paused ? el.currentTime : (performance.now() - origin) / 1e3 * rate;
			const idx = wordAt(timings, t);
			if (idx !== st.wordIndex) st.setWordIndex(idx);
			const last = timings[timings.length - 1];
			if (followMode === "read" && !ended.current && last && t >= last.end + .35) {
				ended.current = true;
				if (st.steps[st.stepIndex]?.awaitContinue) {
					setWaiting(true);
					st.setPlaying(false);
				} else st.next();
				return;
			}
			raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, [
		screen,
		ready,
		timings,
		followMode,
		stepId
	]);
	return {
		timings,
		waiting,
		continueLearn: () => {
			setWaiting(false);
			usePrayerStore.getState().next();
		}
	};
}
function Controls({ waiting, playing, stepIndex, onPrev, onNext, onContinue, onTogglePlay }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-center gap-3 px-3 pb-2.5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onPrev,
				disabled: stepIndex === 0,
				"aria-label": "Previous prayer",
				className: "flex size-11 items-center justify-center rounded-full text-fg disabled:opacity-30",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-5" })
			}),
			waiting ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onContinue,
				className: "min-w-36 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-fg",
				children: "Continue"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onTogglePlay,
				"aria-label": playing ? "Pause" : "Play",
				className: "flex size-14 items-center justify-center rounded-full bg-accent text-accent-fg",
				children: playing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "ml-0.5 size-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onNext,
				"aria-label": "Next prayer",
				className: "flex size-11 items-center justify-center rounded-full text-fg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-5" })
			})
		]
	});
}
function PraySession() {
	const steps = usePrayerStore((s) => s.steps);
	const stepIndex = usePrayerStore((s) => s.stepIndex);
	const wordIndex = usePrayerStore((s) => s.wordIndex);
	const playing = usePrayerStore((s) => s.playing);
	const setPlaying = usePrayerStore((s) => s.setPlaying);
	const next = usePrayerStore((s) => s.next);
	const prev = usePrayerStore((s) => s.prev);
	const jumpToBead = usePrayerStore((s) => s.jumpToBead);
	const goHome = usePrayerStore((s) => s.goHome);
	const mysterySet = usePrayerStore((s) => s.mysterySet);
	const kind = usePrayerStore((s) => s.kind);
	const playbackRate = usePrayerStore((s) => s.playbackRate);
	const setPlaybackRate = usePrayerStore((s) => s.setPlaybackRate);
	const showWords = usePrayerStore((s) => s.showWords);
	const setShowWords = usePrayerStore((s) => s.setShowWords);
	const { timings, waiting, continueLearn } = useEngine();
	const step = steps[stepIndex];
	const done = new Set(steps.slice(0, stepIndex).map((s) => s.beadId));
	const progress = steps.length ? (stepIndex + 1) / steps.length : 0;
	const decadeMax = kind === "decade" ? 1 : 5;
	const where = step?.decade ? `Decade ${step.decade} of ${decadeMax}` : "Opening";
	const mystery = step?.mystery;
	const panel = showWords || waiting;
	const compactPlay = playing && !panel;
	const toggle = () => {
		const el = getPlayer();
		if (playing) {
			el?.pause();
			setPlaying(false);
		} else {
			el?.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
			setPlaying(true);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-dvh overflow-hidden bg-bg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 rosary-session",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RosaryHanging, {
						alignTop: true,
						prominent: true,
						mysterySet,
						activeBeadId: step?.beadId,
						completedBeadIds: done,
						onBeadClick: jumpToBead
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-x-0 top-0 z-20 h-0.5 bg-fg/10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-full bg-accent transition-[width] duration-200",
					style: { width: `${progress * 100}%` }
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "absolute inset-x-0 top-0 z-20 flex items-center gap-1 px-2 pt-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: goHome,
						"aria-label": "Close",
						className: "flex size-11 items-center justify-center rounded-full text-fg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-xs uppercase tracking-[0.16em] text-subtle",
							children: mysterySetMeta(mysterySet).label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "truncate text-sm text-fg",
							children: [step?.title, step?.subtitle ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted",
								children: ` · ${step.subtitle}`
							}) : null]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setShowWords(!showWords),
						className: cx("flex size-11 items-center justify-center rounded-full", showWords ? "text-fg" : "text-muted"),
						"aria-label": showWords ? "Hide prayer words" : "Show prayer words",
						"aria-pressed": showWords,
						children: showWords ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Captions, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaptionsOff, { className: "size-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setPlaybackRate(playbackRate === 1 ? .9 : playbackRate === .9 ? 1.1 : 1),
						className: "h-11 min-w-11 rounded-full px-2 text-xs tabular-nums text-muted",
						"aria-label": "Playback speed",
						children: [playbackRate.toFixed(1), "x"]
					})
				]
			}),
			panel ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-x-0 bottom-0 z-20 px-3 pb-[max(0.6rem,env(safe-area-inset-bottom))]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full overflow-hidden rounded-3xl bg-surface/80 shadow-[0_0_0_1px_rgba(243,236,224,0.08)] backdrop-blur-md",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "px-4 pt-3 pb-1.5",
						children: waiting && mystery ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-h-36 overflow-y-auto",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-xl text-fg",
									children: mystery.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs uppercase tracking-wider text-muted",
									children: `Fruit · ${mystery.fruit}`
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
									className: "mt-3 text-sm leading-relaxed text-fg/80",
									children: [mystery.verse, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("cite", {
										className: "mt-1 block text-xs text-subtle not-italic",
										children: mystery.verseRef
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-muted",
									children: mystery.meditation
								})
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							"data-karaoke": true,
							className: "max-h-24 overflow-y-auto pr-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Karaoke, {
								timings,
								wordIndex,
								className: "text-lg sm:text-xl"
							})
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Controls, {
						waiting,
						playing,
						stepIndex,
						onPrev: prev,
						onNext: next,
						onContinue: continueLearn,
						onTogglePlay: toggle
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-center text-xs tabular-nums text-subtle",
					children: [
						where,
						" · ",
						stepIndex + 1,
						" / ",
						steps.length
					]
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-x-0 bottom-0 z-20 flex flex-col items-center gap-2 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]",
				children: [compactPlay ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs tabular-nums text-subtle",
					children: [
						where,
						" · ",
						stepIndex + 1,
						" / ",
						steps.length
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 rounded-full bg-surface px-2 py-1.5 shadow-[0_0_0_1px_rgba(243,236,224,0.12)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: prev,
							disabled: stepIndex === 0,
							"aria-label": "Previous prayer",
							className: "flex size-11 items-center justify-center rounded-full text-fg disabled:opacity-30",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: toggle,
							"aria-label": playing ? "Pause" : "Play",
							className: "flex size-12 items-center justify-center rounded-full bg-accent text-accent-fg",
							children: playing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "ml-0.5 size-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: next,
							"aria-label": "Next prayer",
							className: "flex size-11 items-center justify-center rounded-full text-fg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-5" })
						})
					]
				})]
			})
		]
	});
}
function PrayComplete() {
	const mysterySet = usePrayerStore((s) => s.mysterySet);
	const kind = usePrayerStore((s) => s.kind);
	const start = usePrayerStore((s) => s.start);
	const goHome = usePrayerStore((s) => s.goHome);
	const completedCount = usePrayerStore((s) => s.completedCount);
	const meta = mysterySetMeta(mysterySet);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex min-h-dvh flex-col items-center justify-center px-6 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RosaryHanging, {
			mysterySet,
			completedBeadIds: /* @__PURE__ */ new Set(["medal"]),
			className: "pointer-events-none absolute inset-0 opacity-40"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative z-10 max-w-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.18em] text-gold",
					children: "Amen"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display mt-2 text-4xl text-fg",
					children: "It is finished."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-sm text-muted",
					children: [
						"You prayed the ",
						meta.label,
						" Mysteries",
						kind === "decade" ? " — one decade" : kind === "learn" ? ", and sat with them" : "",
						"."
					]
				}),
				completedCount > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-xs tabular-nums text-subtle",
					children: [completedCount, " rosaries completed on this device"]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 grid w-full gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => start(kind),
						className: "rounded-full bg-accent py-3 text-sm font-medium text-accent-fg",
						children: "Pray again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: goHome,
						className: "rounded-full border border-border py-3 text-sm text-fg",
						children: "Return home"
					})]
				})
			]
		})]
	});
}
function HowItWorks({ onClose }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "absolute inset-0 z-30 overflow-y-auto bg-bg/92 px-4 py-5 backdrop-blur-md",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-lg pb-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "mb-5 flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.18em] text-gold",
					children: "How it works"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display mt-1 text-3xl text-fg",
					children: "A rosary you can follow"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onClose,
					className: "rounded-full border border-border px-3 py-1.5 text-xs text-accent",
					children: "Close"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
				className: "space-y-4 text-sm leading-relaxed text-accent",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gold",
						children: "1."
					}), " Choose today’s mysteries, or another set. Saturday is Joyful."] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gold",
						children: "2."
					}), " Listen with Celeste or Orion, or read along in silence. Each bead lights as you pray."] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gold",
						children: "3."
					}), " Five decades is the full rosary. One decade is a single mystery — enough for a two-year-old beside you."] })
				]
			})]
		})
	});
}
function ModeToggle({ value, onChange, options }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-2 gap-1 rounded-full bg-surface-2 p-1",
		children: options.map((opt) => {
			const Icon = opt.icon;
			const on = value === opt.id;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => onChange(opt.id),
				className: cx("flex h-10 items-center justify-center gap-1.5 rounded-full text-sm transition-colors", on ? "bg-accent text-accent-fg" : "text-muted hover:text-fg"),
				children: [Icon ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-3.5" }) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: opt.label })]
			}, opt.id);
		})
	});
}
function PrayHome() {
	const mysterySet = usePrayerStore((s) => s.mysterySet);
	const setMysterySet = usePrayerStore((s) => s.setMysterySet);
	const followMode = usePrayerStore((s) => s.followMode);
	const setFollowMode = usePrayerStore((s) => s.setFollowMode);
	const voice = usePrayerStore((s) => s.voice);
	const setVoice = usePrayerStore((s) => s.setVoice);
	const includeFatima = usePrayerStore((s) => s.includeFatima);
	const setIncludeFatima = usePrayerStore((s) => s.setIncludeFatima);
	const start = usePrayerStore((s) => s.start);
	const [help, setHelp] = (0, import_react.useState)(false);
	const [pickDecade, setPickDecade] = (0, import_react.useState)(false);
	const [previewId, setPreviewId] = (0, import_react.useState)(null);
	const today = mysterySetForDay();
	const meta = MYSTERY_SETS.find((s) => s.id === mysterySet);
	const decades = mysteriesFor(mysterySet);
	const weekday = (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", { weekday: "long" });
	(0, import_react.useEffect)(() => () => stopPreview(), []);
	function preview(id) {
		if (previewId === id) {
			stopPreview();
			setPreviewId(null);
			return;
		}
		setPreviewId(id);
		playPreview(clipUrl(id, "hail-mary"), () => setPreviewId(null));
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex h-[calc(100dvh-5.5rem)] flex-col overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "relative z-10 flex shrink-0 items-end justify-between px-5 pt-5 pb-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-3xl font-semibold tracking-[0.18em] text-fg",
					children: "AVE"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-xs tracking-wide text-muted",
					children: "Listen or read. Each bead lights as you pray."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-right text-xs text-muted",
						children: [weekday, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "mt-0.5 block text-fg/80",
							children: [MYSTERY_SETS.find((s) => s.id === today)?.label, " today"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setHelp(true),
						className: "flex size-9 items-center justify-center rounded-full text-fg hover:bg-fg/10",
						"aria-label": "How the rosary works",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleHelp, { className: "size-5" })
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mx-auto min-h-0 w-full max-w-lg flex-1 overflow-hidden px-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RosaryHanging, { mysterySet })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto w-full max-w-lg shrink-0 overflow-y-auto px-4 pb-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-1 overflow-x-auto pb-2",
						children: MYSTERY_SETS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => {
								setMysterySet(s.id);
								setPickDecade(false);
							},
							className: cx("h-9 shrink-0 rounded-full px-3.5 text-sm transition-colors", mysterySet === s.id ? "bg-accent text-accent-fg" : "text-muted hover:text-fg"),
							children: [s.label, s.id === today ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-1.5 text-xs uppercase tracking-wider opacity-70",
								children: "Today"
							}) : null]
						}, s.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-display text-lg text-fg",
						children: [meta.label, " Mysteries"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-3 text-xs tracking-wide text-subtle",
						children: meta.latin
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModeToggle, {
						value: followMode,
						onChange: (id) => setFollowMode(id),
						options: [{
							id: "listen",
							label: "Listen",
							icon: Headphones
						}, {
							id: "read",
							label: "Read along",
							icon: Captions
						}]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1.5 px-1 text-xs text-subtle",
						children: followMode === "listen" ? "Voice and beads only. Turn words on later if you want them." : "Silent, scrolling words so you can read as you pray."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 grid grid-cols-2 gap-1.5",
						children: VOICES.map((v) => {
							const on = voice === v.id;
							const previewing = previewId === v.id;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: cx("flex items-start gap-1 rounded-2xl p-1 transition-colors", on ? "bg-accent text-accent-fg" : "bg-surface-2 text-muted"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setVoice(v.id),
									className: cx("min-h-11 flex-1 rounded-xl px-2 py-1.5 text-left", !on && "hover:text-fg"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-sm font-medium",
										children: v.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: cx("mt-0.5 block text-xs", on ? "opacity-70" : "text-subtle"),
										children: v.blurb
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									"aria-label": previewing ? `Stop ${v.name} preview` : `Preview ${v.name}`,
									onClick: () => preview(v.id),
									className: cx("mt-1 flex size-8 shrink-0 items-center justify-center rounded-full", on ? "bg-accent-fg/10" : "bg-fg/10"),
									children: previewing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "size-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-3.5" })
								})]
							}, v.id);
						})
					}),
					pickDecade ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 grid gap-1.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "px-1 text-xs leading-relaxed text-subtle",
								children: "One decade: Our Father, ten Hail Marys, Glory Be. About five minutes."
							}),
							decades.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => start("decade", m.index),
								className: "flex min-h-11 items-center justify-between gap-3 rounded-2xl bg-surface-2 px-4 text-left hover:bg-fg/10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-sm text-fg",
									children: [
										m.index,
										". ",
										m.title
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "shrink-0 text-xs text-subtle",
									children: m.fruit
								})]
							}, m.id)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setPickDecade(false),
								className: "mt-1 text-xs text-gold",
								children: "Back"
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 grid gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => start("full"),
								className: "flex w-full items-center justify-center gap-2 rounded-full bg-accent py-3.5 text-sm font-medium text-accent-fg",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "ml-0.5 size-4" }), "Pray five decades"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setPickDecade(true),
									className: "rounded-full border border-border py-3 text-sm text-fg",
									children: "One decade"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => start("learn"),
									className: "rounded-full border border-border py-3 text-sm text-fg",
									children: "Learn as you go"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => {
									usePrayerStore.setState({
										showWords: true,
										playbackRate: .9
									});
									start("decade", 1);
								},
								className: "rounded-full bg-surface-2 py-3 text-sm text-fg",
								children: "Kids’ decade"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "px-1 text-xs leading-relaxed text-subtle",
								children: "Five decades is the full rosary (~20 min). One decade is a single mystery (~5 min). Kids’ decade is slow, with the words on."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "mt-2 flex min-h-10 cursor-pointer items-center justify-between gap-3 text-sm text-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Include the Fatima prayer" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "checkbox",
							checked: includeFatima,
							onChange: (e) => setIncludeFatima(e.target.checked),
							className: "size-4 accent-accent",
							suppressHydrationWarning: true
						})]
					})
				]
			}),
			help ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HowItWorks, { onClose: () => setHelp(false) }) : null
		]
	});
}
function Pray() {
	const screen = usePrayerStore((s) => s.screen);
	(0, import_react.useEffect)(() => {
		usePrayerStore.persist.rehydrate();
		return () => {
			pauseClip();
			stopPreview();
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-dvh overflow-x-hidden bg-bg text-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pointer-events-none fixed inset-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/chapel.jpg",
				alt: "",
				className: "h-full w-full object-cover opacity-45"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-bg/75 via-bg/45 to-bg" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative",
			children: [
				screen === "home" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrayHome, {}) : null,
				screen === "pray" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "fixed inset-0 z-40",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PraySession, {})
				}) : null,
				screen === "complete" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "fixed inset-0 z-40 bg-bg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrayComplete, {})
				}) : null
			]
		})]
	});
}
//#endregion
export { Pray as component };
