const ids = ["days", "hours", "minutes", "seconds"];

ids.forEach((id) => {
  const el = document.getElementById(id);

  // 🔒 SAFETY CHECK
  if (!el) {
    console.warn(`flip.js: Element #${id} not found`);
    return;
  }

  const observer = new MutationObserver(() => {
    el.classList.add("updated");
    setTimeout(() => el.classList.remove("updated"), 250);
  });

  observer.observe(el, {
    childList: true,
    characterData: true,
    subtree: true
  });
});
