const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");

navToggle.addEventListener("click", () => {
  const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!isExpanded));
  navToggle.setAttribute("aria-label", isExpanded ? "Abrir menu" : "Fechar menu");
  mainNav.classList.toggle("is-open", !isExpanded);
});

mainNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Abrir menu");
    mainNav.classList.remove("is-open");
  }
});

document.querySelectorAll(".filter-button").forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.dataset.filter;
    document.querySelectorAll(".filter-button").forEach((filter) => {
      const active = filter === button;
      filter.classList.toggle("is-active", active);
      filter.setAttribute("aria-pressed", String(active));
    });
    document.querySelectorAll(".dish-card").forEach((card) => {
      const categories = card.dataset.category.split(" ");
      card.hidden = category !== "Todos" && !categories.includes(category);
    });
  });
});

const toast = document.querySelector("#toast");
let toastTimeout;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimeout);
  toastTimeout = window.setTimeout(() => toast.classList.remove("is-visible"), 4500);
}

document.querySelector("#reservation-form").addEventListener("submit", (event) => {
  event.preventDefault();
  if (!event.currentTarget.reportValidity()) return;

  const name = document.querySelector("#guest-name").value.trim();
  const feedback = document.querySelector("#form-feedback");
  feedback.textContent = `Obrigado, ${name}! Esta demonstração não envia nem confirma reservas. Configure os canais reais para ativar o atendimento.`;
  event.currentTarget.reset();
});

document.querySelectorAll(".contact-button").forEach((button) => {
  button.addEventListener("click", () => {
    showToast(`${button.dataset.channel} demonstrativo: adicione o contato oficial do restaurante para ativar este canal.`);
  });
});

const lightbox = document.querySelector("#lightbox");
const lightboxImage = lightbox.querySelector("img");
let lastFocusedElement;

function closeLightbox() {
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImage.src = "";
  if (lastFocusedElement) lastFocusedElement.focus();
}

document.querySelectorAll(".gallery-item").forEach((item) => {
  item.addEventListener("click", () => {
    lastFocusedElement = item;
    lightboxImage.src = item.dataset.full;
    lightboxImage.alt = item.querySelector("img").alt;
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    lightbox.querySelector(".lightbox-close").focus();
  });
});

lightbox.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox.classList.contains("is-open")) closeLightbox();
});

const reservationDate = document.querySelector("#guest-date");
const today = new Date();
const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
  .toISOString()
  .slice(0, 10);
reservationDate.min = localToday;
