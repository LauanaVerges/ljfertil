// ========================================
// Terra Nossa Fertilizantes
// Script Principal
// ========================================

document.addEventListener("DOMContentLoaded", () => {
  // ========================================
  // Navbar ao rolar
  // ========================================

  const navbar = document.querySelector(".navbar-custom");

  function navbarScroll() {
    if (window.scrollY > 40) {
      navbar.classList.add("navbar-scroll");
    } else {
      navbar.classList.remove("navbar-scroll");
    }
  }

  navbarScroll();

  window.addEventListener("scroll", navbarScroll);

  // ========================================
  // Rolagem Suave
  // ========================================

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (e) {
      const destino = document.querySelector(this.getAttribute("href"));

      if (!destino) return;

      e.preventDefault();

      const topo = destino.offsetTop - 90;

      window.scrollTo({
        top: topo,

        behavior: "smooth",
      });
    });
  });

  // ========================================
  // Fecha menu mobile
  // ========================================

  const navLinks = document.querySelectorAll(".nav-link");

  const menu = document.querySelector(".navbar-collapse");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (menu.classList.contains("show")) {
        new bootstrap.Collapse(menu).hide();
      }
    });
  });

  // ========================================
  // Menu ativo conforme a seção
  // ========================================

  const sections = document.querySelectorAll("section");

  function activeMenu() {
    let current = "";

    sections.forEach((section) => {
      const top = section.offsetTop - 150;

      const height = section.offsetHeight;

      if (pageYOffset >= top) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");

      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  }

  activeMenu();

  window.addEventListener("scroll", activeMenu);

  // ========================================
  // Reveal Animation
  // ========================================

  const revealElements = document.querySelectorAll(
    ".product-card, .feature-box, .seller-box, .delivery-wrapper, .contact-card, .about-section img",
  );

  const reveal = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          reveal.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    },
  );

  revealElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    el.style.transition = ".8s ease";

    reveal.observe(el);
  });

  // ========================================
  // Parallax Hero
  // ========================================

  const hero = document.querySelector(".hero-section");

  window.addEventListener("scroll", () => {
    const y = window.scrollY;

    hero.style.backgroundPosition = `center ${y * 0.35}px`;
  });
});
