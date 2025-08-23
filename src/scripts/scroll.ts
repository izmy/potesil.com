document.addEventListener("click", (e: MouseEvent) => {
  const target = e.target;

  if (!(target instanceof Element)) return; // zúžení na Element
  const link = target.closest<HTMLAnchorElement>(
    'a[href^="#"]:not([href="#"])'
  );
  if (!link) return;

  const hash = link.getAttribute("href")!;
  const el = document.querySelector<HTMLElement>(hash);
  if (!el) return;

  e.preventDefault();
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  history.replaceState(null, "", hash);
});
