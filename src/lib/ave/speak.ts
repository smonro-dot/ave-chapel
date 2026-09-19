let current: HTMLAudioElement | null = null;

export function stopNarration() {
  if (!current) return;
  current.pause();
  current.removeAttribute("src");
  current = null;
}

export function playNarration(src: string) {
  stopNarration();
  const el = new Audio(src);
  el.preload = "auto";
  el.setAttribute("playsinline", "true");
  current = el;
  const clear = () => {
    if (current === el) current = null;
  };
  el.addEventListener("ended", clear);
  el.addEventListener("pause", () => {
    if (el.ended) clear();
  });
  void el.play().catch(() => {
    if (current === el) current = null;
  });
  return el;
}
