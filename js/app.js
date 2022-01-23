const tema = document.querySelector("#cambio");
const localConfig = localStorage.getItem("modo");

if (localConfig === "light") {
  document.body.classList.toggle("modo_claro");
} else if (localConfig === "dark") {
  document.body.classList.toggle("modo_oscuro");
}

tema.addEventListener("click", () => {
  let cambio;

  document.body.classList.toggle("modo_oscuro");
  cambio = document.body.classList.contains("modo_oscuro") ? "dark" : "light";
  document.body.classList.toggle("modo_claro");

  localStorage.setItem("modo", cambio);
});
