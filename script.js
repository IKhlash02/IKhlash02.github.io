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

  const title = document.createElement("h4");
  title.textContent = project.title;

  const description = document.createElement("p");
  description.textContent = project.description;

  const techUse = document.createElement("p");
  const strong = document.createElement("strong");

  strong.textContent = "Tech: ";

  techUse.appendChild(strong);
  techUse.append(project.techUsed.join(", "));

  cardItem.appendChild(img);
  cardItem.appendChild(title);
  cardItem.appendChild(description);
  cardItem.appendChild(techUse);

  projectContainer.appendChild(cardItem);
});
