/* ==========================================================================
   Portfolio — Arnaud Champierre de Villeneuve
   Vanilla JS : nav scroll-spy, menu mobile, reveal-on-scroll, newsletter.
   ========================================================================== */

// URL du webhook "Custom webhook" du scénario Make.com (newsletter investissement)
const NEWSLETTER_WEBHOOK_URL = 'https://hook.eu1.make.com/3t43y46y86bt47hdfhyku8kq5pga3ov4';

document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) lucide.createIcons();

  initMobileMenu();
  initScrollSpy();
  initRevealOnScroll();
  initNewsletterForm();
});

/* --------------------------------------------------------------------
   Menu mobile
   -------------------------------------------------------------------- */
function initMobileMenu() {
  const toggle = document.getElementById('menuToggle');
  const close = document.getElementById('menuClose');
  const menu = document.getElementById('mobileMenu');
  if (!toggle || !menu) return;

  const openMenu = () => {
    menu.classList.remove('hidden');
    menu.classList.add('flex');
    document.body.style.overflow = 'hidden';
  };
  const closeMenu = () => {
    menu.classList.add('hidden');
    menu.classList.remove('flex');
    document.body.style.overflow = '';
  };

  toggle.addEventListener('click', openMenu);
  close.addEventListener('click', closeMenu);
  menu.querySelectorAll('[data-nav-mobile]').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });
}

/* --------------------------------------------------------------------
   Scroll-spy : met en surbrillance le lien de nav actif
   -------------------------------------------------------------------- */
function initScrollSpy() {
  const sections = document.querySelectorAll('main section[id], footer[id]');
  const navLinks = document.querySelectorAll('[data-nav]');
  if (!sections.length || !navLinks.length) return;

  const setActive = (id) => {
    navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    },
    { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
}

/* --------------------------------------------------------------------
   Reveal on scroll
   -------------------------------------------------------------------- */
function initRevealOnScroll() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('is-visible'), i * 40);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
  );

  items.forEach((item) => observer.observe(item));
}

/* --------------------------------------------------------------------
   Newsletter (Make.com webhook)
   -------------------------------------------------------------------- */
function initNewsletterForm() {
  const form = document.getElementById('newsletterForm');
  const msg = document.getElementById('newsletterMsg');
  if (!form || !msg) return;

  const setMessage = (text, tone) => {
    msg.textContent = text;
    msg.classList.remove('hidden', 'text-accent', 'text-red-400', 'text-zinc-500');
    msg.classList.add(tone === 'success' ? 'text-accent' : tone === 'error' ? 'text-red-400' : 'text-zinc-500');
  };

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (form.company.value.trim()) return; // honeypot rempli -> probable bot, on ignore silencieusement

    const email = form.email.value.trim();
    if (!email) return;

    // Validation basique du format (le formulaire a novalidate -> pas de contrôle natif)
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage('Adresse email invalide.', 'error');
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    setMessage('Envoi en cours…', 'pending');

    try {
      const response = await fetch(NEWSLETTER_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'subscribe', email, source: 'portfolio', page: window.location.href }),
      });

      if (!response.ok) throw new Error(`Webhook a répondu ${response.status}`);

      form.reset();
      setMessage('Merci ! Votre inscription est confirmée.', 'success');
    } catch (err) {
      setMessage('Une erreur est survenue, réessayez plus tard.', 'error');
    } finally {
      submitBtn.disabled = false;
    }
  });
}
