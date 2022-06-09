let tl = gsap.timeline();

tl.fromTo(
  ".hero-header",
  {
    y: 50,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    delay: 0.5,
    duration: 1.5,
  }
);
tl.addLabel("btns", "<")
  .fromTo(
    ".btn1",
    {
      opacity: 0,
    },
    {
      opacity: 1,
    }
  )
  .fromTo(
    ".btn2",
    {
      opacity: 0,
    },
    {
      opacity: 1,
    }
  )
  .fromTo(
    ".nav-container",
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 1.5,
    }
  );

document.querySelector(".nav-ul").addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");

    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

document.querySelector(".hero-content").addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");

    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
});
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});
