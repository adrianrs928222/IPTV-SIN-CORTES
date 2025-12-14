// AÑO AUTOMÁTICO
document.getElementById("year").textContent = new Date().getFullYear();

// MENÚ MÓVIL
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

navToggle?.addEventListener("click", () => {
  navMenu.style.display =
    navMenu.style.display === "block" ? "none" : "block";
});

// BOTÓN PLAN -> WHATSAPP DIRECTO
document.querySelectorAll("[data-plan]").forEach(button => {
  button.addEventListener("click", () => {
    const plan = button.dataset.plan;
    const duracion = button.dataset.duracion;
    const precio = button.dataset.precio;

    const phone = "34642425345"; // TU NÚMERO
    const message =
      `Hola, quiero contratar el ${plan}.\nDuración: ${duracion}\nPrecio: ${precio}`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  });
});