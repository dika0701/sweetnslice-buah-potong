// =====================================================
// SWEET n SLICE - Buah Potong Segar
// PRO EDITION - Ultra Smooth
// =====================================================

// 1. SPLASH
window.addEventListener('load', () => {
  const splash = document.getElementById('splash');
  setTimeout(() => {
    splash.classList.add('hide');
    animateCounter();
  }, 1800);
});

// 2. NAV
const nav = document.getElementById('navbar');
const toggle = document.getElementById('navToggle');
const menu = document.getElementById('navMenu');
const links = menu.querySelectorAll('a');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active');
  menu.classList.toggle('open');
  document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
});

links.forEach(l => {
  l.addEventListener('click', () => {
    toggle.classList.remove('active');
    menu.classList.remove('open');
    document.body.style.overflow = '';
  });
});

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 80);

  // Active link
  let current = '';
  document.querySelectorAll('section[id]').forEach(s => {
    if (window.scrollY >= s.offsetTop - 150) current = s.id;
  });
  links.forEach(l => {
    l.classList.toggle('active', l.getAttribute('href') === '#' + current);
  });

  // Back to top
  const btn = document.getElementById('backTop');
  btn.classList.toggle('show', window.scrollY > 500);
});

// 3. BACK TO TOP
document.getElementById('backTop').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// 4. HERO IMAGE CLICK
const heroImgs = ['buahpotong.jpg', 'semangka.jpg', 'mangga.jpg', 'nanas.jpg', 'melon.jpg', 'strawberry.jpg', 'pepaya.jpg'];
let idx = 0;
const heroImg = document.getElementById('heroImg');

heroImg.addEventListener('click', () => {
  idx = (idx + 1) % heroImgs.length;
  heroImg.style.transform = 'scale(0.4) rotate(180deg)';
  heroImg.style.opacity = '0';
  setTimeout(() => {
    heroImg.src = heroImgs[idx];
    heroImg.style.transform = 'scale(1) rotate(0deg)';
    heroImg.style.opacity = '1';
  }, 350);
  setTimeout(() => {
    heroImg.style.transform = '';
    heroImg.style.opacity = '';
  }, 700);
});

// 5. COUNTER
function animateCounter() {
  const el = document.querySelector('.stat-num');
  if (!el) return;
  const target = parseInt(el.getAttribute('data-target'));
  let count = 0;
  const step = Math.ceil(target / 40);

  const obs = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      const timer = setInterval(() => {
        count += step;
        if (count >= target) {
          el.textContent = target + '%';
          clearInterval(timer);
        } else el.textContent = count;
      }, 30);
      obs.unobserve(el);
    }
  }, { threshold: 0.5 });
  obs.observe(el);
}

// 6. SMOOTH SCROLL FOR MOBILE
if ('ontouchstart' in window) {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const t = document.querySelector(a.getAttribute('href'));
      if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

console.log('%c🍉 Sweet n Slice PRO', 'font-size:22px;font-weight:900;color:#3b82f6;');
console.log('%c🚀 Level Pro — Siap Deploy!', 'font-size:14px;color:#64748b;');