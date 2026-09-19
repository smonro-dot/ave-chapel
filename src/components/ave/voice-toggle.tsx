export function VoiceToggle({
  tab,
  onChange,
}: {
  tab: "little" | "dad";
  onChange: (t: "little" | "dad") => void;
}) {
  return (
    <div className="flex gap-2">
      <button
        type="button"
        onClick={() => onChange("little")}
        className={`rounded-full px-3 py-1.5 text-xs ${
          tab === "little" ? "bg-gold text-accent-fg" : "bg-surface text-muted"
        }`}
      >
        For him
      </button>
      <button
        type="button"
        onClick={() => onChange("dad")}
        className={`rounded-full px-3 py-1.5 text-xs ${tab === "dad" ? "bg-gold text-accent-fg" : "bg-surface text-muted"}`}
      >
        Dad card
      </button>
    </div>
  );
}
