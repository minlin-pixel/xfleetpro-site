const header = document.querySelector(".site-header");
const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");
const year = document.getElementById("year");
const contactForm = document.getElementById("contactForm");

function setHeaderElevation() {
  if (!header) return;
  header.dataset.elevate = window.scrollY > 6 ? "true" : "false";
}

function setMobileNav(open) {
  if (!menuBtn || !mobileNav) return;
  menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
  menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  mobileNav.hidden = !open;
}

setHeaderElevation();
window.addEventListener("scroll", setHeaderElevation, { passive: true });

if (year) year.textContent = String(new Date().getFullYear());

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    const open = menuBtn.getAttribute("aria-expanded") !== "true";
    setMobileNav(open);
  });
}

if (mobileNav) {
  mobileNav.addEventListener("click", (e) => {
    const t = e.target;
    if (!(t instanceof HTMLElement)) return;
    if (t.tagName.toLowerCase() === "a") setMobileNav(false);
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") setMobileNav(false);
});

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const fleetSize = String(formData.get("fleetSize") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const subject = encodeURIComponent("xFleetPro — Geotab assessment request");
    const body = encodeURIComponent(
      [`Name: ${name}`, `Email: ${email}`, `Fleet size: ${fleetSize}`, "", message].join("\n")
    );

    window.location.href = `mailto:hello@xfleetpro.com?subject=${subject}&body=${body}`;
  });
}

