// Año dinámico
document.getElementById("year").textContent = new Date().getFullYear();

// Menú móvil
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

navToggle?.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

// Cerrar menú al hacer click en un link
navMenu?.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    navMenu.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// Botón volver arriba
const toTop = document.getElementById("toTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 450) toTop.classList.add("show");
  else toTop.classList.remove("show");
});

toTop?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Elegir plan -> autocompletar select del formulario
document.querySelectorAll("[data-plan]").forEach(btn => {
  btn.addEventListener("click", () => {
    const plan = btn.getAttribute("data-plan") || "No especificado";
    const select = document.getElementById("planSelect");
    if (select) select.value = plan;
  });
});

// Formulario -> enviar mensaje armado a WhatsApp
const contactForm = document.getElementById("contactForm");

contactForm?.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(contactForm);
  const name = String(formData.get("name") || "").trim();
  const plan = String(formData.get("plan") || "No especificado").trim();
  const message = String(formData.get("message") || "").trim();

  if (!name || !message) {
    alert("Por favor completa tu nombre y el mensaje.");
    return;
  }

  const phone = "34642425345"; // tu número
  const text = `Hola, soy ${name}. Me interesa el plan: ${plan}. Mensaje: ${message}`;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

  window.open(url, "_blank", "noopener,noreferrer");
});