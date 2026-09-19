import { z as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/voice-toggle-CqoiXYh4.js
var import_jsx_runtime = require_jsx_runtime();
function VoiceToggle({ tab, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: () => onChange("little"),
			className: `rounded-full px-3 py-1.5 text-xs ${tab === "little" ? "bg-gold text-accent-fg" : "bg-surface text-muted"}`,
			children: "For him"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: () => onChange("dad"),
			className: `rounded-full px-3 py-1.5 text-xs ${tab === "dad" ? "bg-gold text-accent-fg" : "bg-surface text-muted"}`,
			children: "Dad card"
		})]
	});
}
//#endregion
export { VoiceToggle as t };
