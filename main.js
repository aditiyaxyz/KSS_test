// Sticky Shrinking Header
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 60) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Reveal on Scroll
function revealOnScroll() {
  document.querySelectorAll('.reveal-on-scroll').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);

// Smooth Scroll for Nav Links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId.length > 1) {
      e.preventDefault();
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        window.scrollTo({
          top: targetEl.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    }
  });
});

// Hamburger Mobile Menu
const navLinks = document.querySelector('.nav-links');
const hamburger = document.createElement('div');
hamburger.className = 'hamburger';
hamburger.innerHTML = '<span></span><span></span><span></span>';
document.querySelector('nav').appendChild(hamburger);

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
});
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    navLinks.classList.remove('active');
    hamburger.classList.remove('active');
  }
});

// CTA Ripple Effect
document.querySelectorAll('.cta-button').forEach(btn => {
  btn.addEventListener('click', function(e) {
    let ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.left = (e.clientX - btn.getBoundingClientRect().left) + 'px';
    ripple.style.top = (e.clientY - btn.getBoundingClientRect().top) + 'px';
    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
});

// Theme Toggle
const themeToggle = document.createElement('button');
themeToggle.textContent = '🌙';
themeToggle.className = 'theme-toggle';
document.body.appendChild(themeToggle);

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  themeToggle.textContent = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
});

// Optional: Add CSS for theme and hamburger, ripple effect, reveal-on-scroll
