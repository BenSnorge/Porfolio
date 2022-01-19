const openn = document.getElementById("open");
const close = document.getElementById("close");
const submitBtn = document.getElementById("submit-btn");

openn.addEventListener("click", () => modal.classList.add("show-modal"));

close.addEventListener("click", () => modal.classList.remove("show-modal"));

submitBtn.addEventListener("click", () => modal.classList.remove("show-modal"));

window.addEventListener("click", (e) =>
  e.target == modal ? modal.classList.remove("show-modal") : false
);
