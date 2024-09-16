(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
      const loadingContainer = document.querySelector(".loader");
      if (loadingContainer) {
        loadingContainer.style.animation = "fadeOut 1s forwards";
        loadingContainer.addEventListener("animationend", function () {
          loadingContainer.style.display = "none";
        });
      }

      if (typeof ScrollReveal !== "undefined") {
        ScrollReveal({
          distance: "80px",
          duration: 2000,
          delay: 200,
        });

        ScrollReveal().reveal("#home-content, .heading", { origin: "top" });
        ScrollReveal().reveal(
          "#home-image, .my-skills, .portfolio-box, #contact form",
          { origin: "bottom" }
        );
        ScrollReveal().reveal("#home-content h1, #about-image", {
          origin: "left",
        });
        ScrollReveal().reveal("#home-content p, #about-content", {
          origin: "right",
        });
      }
    }, 2000);
  });

  // Navbar toggle
  const menuIcon = document.querySelector(".bx-menu");
  const navbar = document.querySelector(".navbar");
  if (menuIcon && navbar) {
    menuIcon.addEventListener("click", () => {
      menuIcon.classList.toggle("bx-x");
      navbar.classList.toggle("active");
    });

    window.addEventListener("click", (event) => {
      if (
        navbar.classList.contains("active") &&
        !navbar.contains(event.target) &&
        !menuIcon.contains(event.target)
      ) {
        menuIcon.classList.remove("bx-x");
        navbar.classList.remove("active");
      }
    });
  }

  // Scroll section active link
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("header div a");

  window.addEventListener("scroll", () => {
    sections.forEach((sec) => {
      const top = window.scrollY;
      const offset = sec.offsetTop - 150;
      const height = sec.offsetHeight;
      const id = sec.getAttribute("id");

      if (top >= offset && top < offset + height) {
        navLinks.forEach((links) => {
          links.classList.remove("active");
          const activeLink = document.querySelector(
            "header div a[href*=" + id + "]"
          );
          if (activeLink) {
            activeLink.classList.add("active");
          }
        });
      }
    });

    // Sticky navbar
    const header = document.querySelector("header");
    if (header) {
      header.classList.toggle("sticky", window.scrollY > 100);
    }

    // Toggle icon and navbar
    if (menuIcon) {
      menuIcon.classList.remove("bx-x");
    }
    if (navbar) {
      navbar.classList.remove("active");
    }
  });

  // Typed Text
  if (typeof Typed !== "undefined") {
    const typed = new Typed(".multiple-text", {
      strings: ["Software Engineer", "Graphic Designer", "Saxophonist"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });
  }

  // Light/Dark Mode
  const lightMode = document.querySelector(".bx-sun");
  const elementsToToggle = [
    document.querySelector("body"),
    document.querySelector(".about"),
    document.querySelector(".portfolio"),
    ...document.querySelectorAll(".input-area"),
    ...document.querySelectorAll(".btn"),
    document.querySelector(".top-header"),
    document.querySelector(".logo-icon"),
    document.querySelector(".navbar"),
    ...document.querySelectorAll(".navbar-item"),
    document.querySelector(".footer"),
  ];

  if (lightMode) {
    lightMode.addEventListener("click", () => {
      elementsToToggle.forEach(
        (el) => el && el.classList.toggle("light-mode-2")
      );
      lightMode.classList.toggle("bxs-moon");

      // logo mode
      const logoLight = document.querySelector(".logo-icon");
      if (logoLight) {
        if (lightMode.classList.contains("bxs-moon")) {
          logoLight.style.background = "url('images/logo-dark.png')";
        } else {
          logoLight.style.background = "url('images/logo.png')";
        }
        logoLight.style.backgroundSize = "contain";
      }
    });
  }

  // ReadMore Button for about
  const toggleReadMore = document.getElementById("readMoreBtn");
  const moreText = document.getElementById("moreText");

  if (toggleReadMore && moreText) {
    toggleReadMore.addEventListener("click", () => {
      if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        toggleReadMore.innerHTML = "Read Less";
      } else {
        moreText.style.display = "none";
        toggleReadMore.innerHTML = "Read More";
      }
    });
  }
})();

// // elevation pitch modal
// const modalBtn = document.querySelector('.elevator-btn');
// const modalPop = document.querySelector('.elevation-modal');
// const modalClose = document.querySelector('.modal-exit');

// // elevator video stop
// const iframe = document.querySelector('#elevator-video');
// const url = iframe.src;

// modalBtn.onclick = () => {
//     iframe.src = url;
//     modalPop.style.display = 'block';
//     modalPop.style.transition = '3s ease';
// }

// modalClose.onclick = () => {
//     modalPop.style.display = 'none';
//     iframe.src = '';
// }
