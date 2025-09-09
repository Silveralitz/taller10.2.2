const KEY = "datoLS";

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("inputText");
  const btn = document.getElementById("buttonText");

  const previo = localStorage.getItem(KEY);
  if (previo !== null) input.value = previo;

  const guardar = () => {
    const valor = input.value.trim();
    if (!valor) return;            
    localStorage.setItem(KEY, valor); 
  };

  btn.addEventListener("click", guardar);

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      guardar();
    }
  });
});
