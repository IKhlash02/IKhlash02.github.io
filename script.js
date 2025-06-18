document.addEventListener("DOMContentLoaded", function () {
  // --- AOS Initialization ---
  AOS.init({ duration: 800, once: true, offset: 50 });

  // --- Mobile Menu Toggle ---
  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav");
  const navLinks = document.querySelectorAll(".nav-link");

  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
    // Toggle hamburger icon
    const icon = menuToggle.querySelector("i");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-times");
  });

  // Close menu when a link is clicked
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (nav.classList.contains("active")) {
        nav.classList.remove("active");
        menuToggle.querySelector("i").classList.remove("fa-times");
        menuToggle.querySelector("i").classList.add("fa-bars");
      }
    });
  });

  // --- Active Nav Link Highlighting on Scroll ---
  const sections = document.querySelectorAll("main section");

  function updateActiveNav() {
    let currentSectionId = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= sectionTop - 150) {
        // Adjusted offset
        currentSectionId = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSectionId}`) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", updateActiveNav);
  window.addEventListener("load", updateActiveNav); // Set active link on page load

  // --- Dynamically Create Project Cards ---
  const projectContainer = document.getElementById("project-container");

  projects.forEach((project, index) => {
    const cardItem = document.createElement("div");
    cardItem.classList.add("card-item");
    cardItem.setAttribute("data-aos", "fade-up");
    cardItem.setAttribute("data-aos-delay", (index % 2) * 100); // Stagger animation

    // Image
    const img = document.createElement("img");
    img.src = project.imageUrl;
    img.alt = project.title;
    img.classList.add("project-img");

    // Card Content Wrapper
    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");

    // Title
    const title = document.createElement("h4");
    title.textContent = project.title;

    // Description
    const description = document.createElement("p");
    description.textContent = project.description;

    // Tech Tags
    const techTags = document.createElement("div");
    techTags.classList.add("tech-tags");
    project.techUsed.forEach((tech) => {
      const tag = document.createElement("span");
      tag.classList.add("tech-tag");
      tag.textContent = tech;
      techTags.appendChild(tag);
    });

    // Links
    const linkContainer = document.createElement("div");
    linkContainer.classList.add("project-links");

    if (project.github) {
      linkContainer.innerHTML += `
        <a href="${project.github}" target="_blank">
          <i class="fab fa-github"></i> Source Code
        </a>`;
    }
    if (project.playstore) {
      linkContainer.innerHTML += `
        <a href="${project.playstore}" target="_blank">
          <i class="fab fa-google-play"></i> Play Store
        </a>`;
    }
    if (project.drive) {
      linkContainer.innerHTML += `
        <a href="${project.drive}" target="_blank">
          <i class="fab fa-google-drive"></i> Details
        </a>`;
    }

    // Append everything
    cardContent.appendChild(title);
    cardContent.appendChild(description);
    cardContent.appendChild(techTags);
    cardContent.appendChild(linkContainer);

    cardItem.appendChild(img);
    cardItem.appendChild(cardContent);

    projectContainer.appendChild(cardItem);
  });
});
