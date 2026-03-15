/* =============================================
   TEACHER PALOMA — main.js
   ============================================= */

/* ----- Menu mobile hambúrguer ----- */
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });

    /* Fecha menu ao clicar em um link */
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
        });
    });
}

/* ----- Navbar sombra ao rolar ----- */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        navbar.style.boxShadow = '0 2px 16px rgba(0,0,0,0.07)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

/* ----- Animação de entrada ao rolar (Intersection Observer) ----- */
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 }
);

document.querySelectorAll(
    '.testimonial-card, .pricing-card, .highlight, .about-text p'
).forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

/* ----- Adiciona CSS de animação dinamicamente ----- */
const style = document.createElement('style');
style.textContent = `
  .fade-in {
    opacity: 0;
    transform: translateY(18px);
    transition: opacity 0.55s ease, transform 0.55s ease;
  }
  .fade-in.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(style);