const PATH = window.location.pathname.replace(/\/$/, "") || "/";
const PAGE =
  PATH.endsWith("company.html") || PATH.endsWith("/company")
    ? "company"
    : PATH.endsWith("about.html") || PATH.endsWith("/about")
      ? "about"
      : PATH.endsWith("contact.html") || PATH.endsWith("/contact")
        ? "contact"
        : "home";

const NAV = [
  { href: "./index.html", id: "home", label: "Home" },
  { href: "./company.html", id: "company", label: "Company" },
  { href: "./about.html", id: "about", label: "About" },
  { href: "./contact.html", id: "contact", label: "Contact" },
];

function navLinks(className) {
  return NAV.map((item) => {
    const current = item.id === PAGE ? ' aria-current="page"' : "";
    const cta = item.id === "contact" ? ` ${className}-cta` : "";
    return `<a class="${className}${cta}" href="${item.href}"${current}>${item.label}</a>`;
  }).join("");
}

function renderChrome() {
  const header = document.getElementById("site-header");
  const footer = document.getElementById("site-footer");

  if (header) {
    header.innerHTML = `
      <div class="container header-row">
        <a class="brand" href="./index.html" aria-label="X Fleet Pro home">
          <img class="brand-mark" src="./assets/logo-mark.svg" alt="" width="36" height="36" />
          <span class="brand-name">X FLEET <em>PRO</em></span>
        </a>
        <nav class="nav" aria-label="Primary">${navLinks("nav-link")}</nav>
        <button class="menu-btn" type="button" id="menuBtn" aria-label="Open menu" aria-controls="mobileNav" aria-expanded="false">
          <span></span>
        </button>
      </div>
      <div class="mobile-nav" id="mobileNav" hidden>
        <div class="container">${navLinks("mobile-link")}</div>
      </div>
    `;
  }

  if (footer) {
    footer.innerHTML = `
      <div class="container footer-row">
        <div>
          <a class="brand" href="./index.html" aria-label="X Fleet Pro home">
            <img class="brand-mark" src="./assets/logo-mark.svg" alt="" width="32" height="32" />
            <span class="brand-name">X FLEET <em>PRO</em></span>
          </a>
          <p class="footer-text">Geotab-focused fleet services for operators who need clear data and reliable workflows.</p>
        </div>
        <div class="footer-links">
          <a href="./company.html">Company</a>
          <a href="./about.html">About</a>
          <a href="./contact.html">Contact</a>
          <a href="mailto:min-lin@hotmail.com">min-lin@hotmail.com</a>
        </div>
      </div>
      <div class="container footer-meta">
        <span>© ${new Date().getFullYear()} X Fleet Pro</span>
        <span>Geotab is a trademark of its respective owner.</span>
      </div>
    `;
  }
}

function wireInteractions() {
  const menuBtn = document.getElementById("menuBtn");
  const mobileNav = document.getElementById("mobileNav");

  function setOpen(open) {
    if (!menuBtn || !mobileNav) return;
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    mobileNav.hidden = !open;
  }

  menuBtn?.addEventListener("click", () => {
    setOpen(menuBtn.getAttribute("aria-expanded") !== "true");
  });

  mobileNav?.addEventListener("click", (e) => {
    if (e.target instanceof HTMLAnchorElement) setOpen(false);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setOpen(false);
  });

  const form = document.getElementById("contactForm");
  const note = document.getElementById("contactNote");
  const submitBtn = document.getElementById("contactSubmit");

  form?.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (form._honey?.value) return;

    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      fleetSize: String(data.get("fleetSize") || "").trim(),
      message: String(data.get("message") || "").trim(),
      _subject: String(data.get("_subject") || "X Fleet Pro — website inquiry"),
    };

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Sending…";
    }
    if (note) {
      note.textContent = "Sending your message…";
      note.classList.remove("note-ok", "note-error");
    }

    try {
      const res = await fetch("https://formsubmit.co/ajax/min-lin@hotmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Request failed");

      form.reset();
      if (note) {
        note.textContent = "Message sent. We’ll get back to you soon.";
        note.classList.add("note-ok");
      }
    } catch {
      if (note) {
        note.textContent = "Couldn’t send right now. Email min-lin@hotmail.com instead.";
        note.classList.add("note-error");
      }
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = "Send";
      }
    }
  });
}

renderChrome();
wireInteractions();
