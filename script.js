// highlight the nav link for whichever section is on screen
const links = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("main section");

function setActive() {
  let current = "home";
  const y = window.scrollY + 120;

  sections.forEach(function (s) {
    if (s.offsetTop <= y) current = s.id;
  });

  // bottom of the page counts as contact
  if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) {
    current = "contact";
  }

  links.forEach(function (a) {
    a.classList.toggle("active", a.getAttribute("href") === "#" + current);
  });
}

window.addEventListener("scroll", setActive);
setActive();
