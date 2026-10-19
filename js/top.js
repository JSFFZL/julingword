const backTopBtn = document.getElementById("backTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backTopBtn.style.display = "block";
  } else {
    backTopBtn.style.display = "none";
  }
});
backTopBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
