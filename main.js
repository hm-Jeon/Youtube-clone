const moreBtn = document.querySelector("section.info .titleAndButton .moreBtn");
const title = document.querySelector("section.info .titleAndButton .title");

moreBtn.addEventListener("click", () => {
  moreBtn.classList.toggle("clicked");
  title.classList.toggle("clamp");
});
