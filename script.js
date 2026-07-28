const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const navLinks = document.querySelectorAll(".nav a");

menuToggle.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open);
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

const sections = [...document.querySelectorAll("header[id], section[id], footer[id]")];
window.addEventListener("scroll", () => {
  const y = window.scrollY + 140;
  let current = "inicio";
  sections.forEach(section => {
    if (section.offsetTop <= y) current = section.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
