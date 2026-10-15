// ====== CONFIGURACIÓN ======
const WHATSAPP_NUMBER = "5493512144611"; // código país + área + número, sin + ni espacios
const DEFAULT_MESSAGE = "Hola! Vi la página de Dulce Membrillo y quiero hacer una consulta.";
// ===========================

// Links de WhatsApp (cada botón con data-item arma su propio mensaje)
document.querySelectorAll(".js-wa").forEach((link) => {
  const item = link.dataset.item;
  const text = item
    ? `Hola! Quiero consultar por ${item}.`
    : DEFAULT_MESSAGE;
  link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  link.target = "_blank";
  link.rel = "noopener";
});

// Menú móvil
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
menuBtn.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open);
});
menu.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    menu.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  })
);

// Animación al hacer scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// Año del footer
document.getElementById("year").textContent = new Date().getFullYear();
