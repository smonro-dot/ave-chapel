import { z as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Volume2 } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/read-aloud-CVgAjy8m.js
var import_jsx_runtime = require_jsx_runtime();
function speak(text) {
	if (typeof window === "undefined" || !window.speechSynthesis) return;
	window.speechSynthesis.cancel();
	const u = new SpeechSynthesisUtterance(text);
	u.rate = .88;
	u.pitch = 1;
	const gentle = window.speechSynthesis.getVoices().find((v) => /en-(US|GB)/.test(v.lang) && /female|samantha|victoria|google/i.test(v.name));
	if (gentle) u.voice = gentle;
	window.speechSynthesis.speak(u);
}
function ReadAloud({ text, label = "Read aloud" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: () => speak(text),
		className: "inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-2 text-xs text-accent",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-3.5" }), label]
	});
}
//#endregion
export { ReadAloud as t };
