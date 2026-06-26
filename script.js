const nav = document.querySelector('.site-header');

function updateHeaderShadow() {
  if (!nav) return;
  nav.classList.toggle('is-scrolled', window.scrollY > 8);
}

updateHeaderShadow();
window.addEventListener('scroll', updateHeaderShadow, { passive: true });
