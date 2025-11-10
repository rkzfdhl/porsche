const video = document.getElementById("banner-video");
const btn = document.getElementById("play-btn");

btn.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    btn.textContent = "||";
  } else {
    video.pause();
    btn.textContent = "▶︎";
  }
});

document.addEventListener("scroll", () => {
  const section = document.getElementById("performancetech");
  const sectionTop = section.getBoundingClientRect().top;
  const sectionBottom = section.getBoundingClientRect().bottom;
  const windowHeight = window.innerHeight;

  // Jika bagian tengah section berada di dalam viewport
  if (sectionTop < windowHeight / 2 && sectionBottom > windowHeight / 2) {
    document.body.classList.add("dark-bg");
  } else {
    document.body.classList.remove("dark-bg");
  }
});

// Scroll hover effects using Intersection Observer
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Observe elements for scroll animations
document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(el => {
  observer.observe(el);
});

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar ul');

if (hamburger && navbar) {
  hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
    hamburger.classList.toggle('active');
  });
}
