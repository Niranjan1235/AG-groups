// ═══════════════════════════════════════
// AURENZA GROUP — SHARED JS
// ═══════════════════════════════════════

// Nav scroll effect
window.addEventListener('scroll', () => {
  const nav = document.getElementById('nav');
  if (nav) nav.classList.toggle('scrolled', scrollY > 80);
  revealOnScroll();
});

// Hamburger menu
function toggleMenu() {
  const ham = document.getElementById('ham');
  const mob = document.getElementById('mob-menu');
  if (ham) ham.classList.toggle('open');
  if (mob) mob.classList.toggle('open');
}

// Scroll reveal
function revealOnScroll() {
  document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight * 0.88) {
      el.classList.add('in');
    }
  });
}

// Animate progress bars
function animateProgressBars() {
  document.querySelectorAll('.cpb-prog-fill[data-width]').forEach(bar => {
    const w = bar.dataset.width;
    bar.style.width = '0';
    requestAnimationFrame(() => requestAnimationFrame(() => { bar.style.width = w; }));
  });
}

// Init on load
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    revealOnScroll();
    animateProgressBars();
  }, 200);
});
