document.getElementById("font-switcher").addEventListener("change", (event) => {
  document.body.style.fontFamily = event.target.dataset.family;
  document.body.style.fontSize = event.target.dataset.size;
  document.body.style.lineHeight = event.target.dataset.leading;
});
