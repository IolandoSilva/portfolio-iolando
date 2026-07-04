window.addEventListener("scroll", function () {
  const cabecalho = document.querySelector(".cabecalho");

  if (window.scrollY > 80) {
    cabecalho.classList.add("scroll");
  } else {
    cabecalho.classList.remove("scroll");
  }
});