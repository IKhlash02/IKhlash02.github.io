// Highlight nav link saat section aktif
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");

  let current = "none";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 50;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

function toggleMenu() {
  var x = document.getElementById("nav");
  if (x.style.display == "") {
    x.style.display = "none";
  } else {
    x.style.display = "";
  }
}

const projectContainer = document.getElementById("project-container");

projects.forEach((project) => {
  const cardItem = document.createElement("div");
  cardItem.classList.add("card-item");

  const img = document.createElement("img");
  img.src = project.imageUrl;
  img.alt = "project";
  img.classList.add("project-img");

  const title = document.createElement("h4");
  title.textContent = project.title;

  const description = document.createElement("p");
  description.textContent = project.description;

  // const techUse = document.createElement("p");
  // const strong = document.createElement("strong");

  // strong.textContent = "Tech: ";

  // techUse.appendChild(strong);
  // techUse.append(project.techUsed.join(", "));

  const linkContainer = document.createElement("div");
  linkContainer.classList.add("project-links");

  if (project.github) {
    const githubLink = document.createElement("a");
    githubLink.href = project.github;
    githubLink.target = "_blank";

    const containerIcon = document.createElement("div");
    containerIcon.classList.add("container-icon");

    const githubIcon = document.createElement("img");
    githubIcon.src =
      "https://cdn.jsdelivr.net/npm/simple-icons/icons/github.svg";
    githubIcon.alt = "GitHub";
    githubIcon.classList.add("social-icon");

    const text = document.createElement("p");
    text.textContent = "Source Code";

    containerIcon.appendChild(githubIcon);
    containerIcon.appendChild(text);
    githubLink.appendChild(containerIcon);
    linkContainer.appendChild(githubLink);
  }

  if (project.playstore) {
    const playstoreLink = document.createElement("a");
    playstoreLink.href = project.playstore;
    playstoreLink.target = "_blank";

    const containerIcon = document.createElement("div");
    containerIcon.classList.add("container-icon");

    const playstoreIcon = document.createElement("img");
    playstoreIcon.src =
      "https://cdn.jsdelivr.net/npm/simple-icons/icons/googleplay.svg";
    playstoreIcon.alt = "Play Store";
    playstoreIcon.classList.add("social-icon");

    const text = document.createElement("p");
    text.textContent = "Play Store";

    containerIcon.appendChild(playstoreIcon);
    containerIcon.appendChild(text);
    playstoreLink.appendChild(containerIcon);
    linkContainer.appendChild(playstoreLink);
  }

  if (project.drive) {
    const driveLink = document.createElement("a");
    driveLink.href = project.drive;
    driveLink.target = "_blank";

    const driveIcon = document.createElement("img");
    driveIcon.src =
      "https://cdn.jsdelivr.net/npm/simple-icons/icons/googledrive.svg";
    driveIcon.alt = "Drive";
    driveIcon.classList.add("social-icon");

    driveLink.appendChild(driveIcon);
    linkContainer.appendChild(driveLink);
  }

  cardItem.appendChild(img);
  cardItem.appendChild(title);
  cardItem.appendChild(description);
  // cardItem.appendChild(techUse);
  cardItem.appendChild(linkContainer);

  projectContainer.appendChild(cardItem);
});
