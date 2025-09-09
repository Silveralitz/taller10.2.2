const KEY = "datoLS";

document.addEventListener("DOMContentLoaded", () => {
  const destino = document.getElementById("data");
  const valor = localStorage.getItem(KEY);
  destino.textContent = valor ?? "(sin datos)";
});

