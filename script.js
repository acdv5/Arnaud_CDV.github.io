/* ==========================================================================
   Portfolio - Arnaud Champierre de Villeneuve
   Vanilla JS : i18n FR/EN, nav scroll-spy, menu mobile, reveal, newsletter.
   ========================================================================== */

// URL du webhook "Custom webhook" du scénario Make.com (newsletter investissement)
const NEWSLETTER_WEBHOOK_URL = 'https://hook.eu1.make.com/3t43y46y86bt47hdfhyku8kq5pga3ov4';

/* --------------------------------------------------------------------
   i18n - le FR est le contenu par défaut du HTML (snapshoté au chargement),
   l'EN provient du dictionnaire ci-dessous.
   -------------------------------------------------------------------- */
const I18N_EN = {
  // Navigation
  'nav.profil': '01 · PROFILE',
  'nav.experience': '02 · EXPERIENCE',
  'nav.formation': '03 · EDUCATION',
  'nav.competences': '04 · SKILLS',
  'nav.projets': '05 · PROJECTS',
  'nav.passions': '06 · INTERESTS',
  'nav.contact': '07 · CONTACT',
  'status': 'STATUS: AVAILABLE',
  'aria.openMenu': 'Open menu',
  'aria.closeMenu': 'Close menu',

  // Hero
  'hero.eyebrow': 'OPERATIONAL PROFILE // CYBERSECURITY &amp; DATA',
  'hero.intro': 'Final-year MSc student in Cybersecurity &amp; Management. I am looking for a <span class="text-zinc-100 font-medium">VIE</span> or a <span class="text-zinc-100 font-medium">permanent role (CDI)</span> to industrialize processes in security, artificial intelligence or data processing (KPIs).',
  'badge.seeking': 'SEEKING VIE / CDI',
  'badge.security': 'SECURITY',
  'badge.ai': 'ARTIFICIAL INTELLIGENCE',
  'btn.contact': 'GET IN TOUCH',

  // Profil
  'eyebrow.profil': '01 // PROFILE',
  'title.profil': 'Summary',
  'profil.p1': 'Currently in the final year of an <span class="text-zinc-100">MSc in Cybersecurity &amp; Management</span> at EFREI, I have spent over two years within the IT Security Audit team at <span class="text-zinc-100">Crédit Agricole CIB</span>, where I coordinate pentest audits, analyze vulnerabilities and automate cyber threat intelligence (CTI) watch tasks.',
  'profil.p2': 'My background combines technical cybersecurity expertise (GRC, pentest, forensics) with a strong appetite for <span class="text-zinc-100">data</span> and <span class="text-zinc-100">process automation</span> with Power BI, n8n, Make, Python/Bash scripts and generative AI. I am now looking for a VIE or permanent (CDI) position to put this dual skill set at the service of industrializing business processes.',

  // Expérience
  'eyebrow.experience': '02 // EXPERIENCE',
  'title.experience': 'Professional experience',
  'exp.cacib.role': 'Apprenticeship in IT Security Audit',
  'exp.cacib.li1': 'Coordination and preparation of pentest audits',
  'exp.cacib.li2': 'Review of pentest audit reports',
  'exp.cacib.li3': 'Cyber vulnerability analysis',
  'exp.cacib.li4': 'Task automation (Python &amp; Bash)',
  'exp.cacib.li5': 'Automated CTI watch (Ollama, FreshRSS, Docker)',
  'exp.cacib.li6': 'KPIs &amp; reporting: Power BI, Power Query',
  'exp.cacib.li7': 'Project management',
  'exp.cacib.li8': 'International coordination across Asia / USA / Europe',
  'exp.natixis.role': 'Internship &amp; Apprenticeship as Assistant Product Owner',
  'exp.natixis.sub': 'Natixis Wealth Management, Digital Life Insurance',
  'exp.natixis.li1': 'Analysis of anomalies, bugs and logs',
  'exp.natixis.li2': 'IT project management',
  'exp.natixis.li3': 'Providing technical solutions',
  'exp.natixis.li4': 'IT testing',
  'exp.natixis.li5': 'Requirements gathering (evolutive / corrective maintenance)',
  'exp.natixis.li6': 'Follow-up of updates and patches',
  'exp.natixis.li7': 'Developer / business liaison',
  'tag.projectmgmt': 'PROJECT MGMT',
  'tag.lifeinsurance': 'LIFE INSURANCE',
  'exp.inwebo.role': 'Developer internship',
  'date.inwebo': 'July 2021',
  'exp.inwebo.li1': 'Development of a client enrichment and deletion program on ZOHO CRM',
  'exp.inwebo.li2': 'C++ development',

  // Formation
  'eyebrow.formation': '03 // EDUCATION',
  'title.formation': 'Degrees &amp; Certifications',
  'label.degrees': 'DEGREES',
  'deg.master': 'MSc Cybersecurity &amp; Management',
  'deg.bachelor': 'BSc Cybersecurity &amp; Networks',
  'deg.bac': 'Scientific Baccalaureate',
  'cert.obtained': 'OBTAINED',
  'cert.pending': 'IN PROGRESS',
  'label.additional': 'ADDITIONAL TRAINING',
  'add.blockchain.sub': 'Smart contracts, Remix / VS Code - EFREI',
  'add.osint.sub': 'Professional training - Orsys',
  'add.pmt.title': 'Military training - French Army',
  'add.pmt.sub': 'Land military period, Suippes',

  // Compétences
  'eyebrow.competences': '04 // SKILLS',
  'grc.title': 'GOVERNANCE, RISK &amp; COMPLIANCE',
  'grc.reg': 'REGULATIONS',
  'grc.frameworks': 'FRAMEWORKS &amp; STANDARDS',
  'grc.method': 'METHODOLOGY',
  'tag.auditit': 'IT AUDIT',
  'cyber.title': 'CYBERSECURITY &amp; TOOLS',
  'tag.vuln': 'VULN. MGMT',
  'data.title': 'DATA &amp; AUTOMATION',
  'tag.teamwork': 'TEAMWORK',
  'tag.banking': 'BANKING ENV. ADAPTATION',
  'tag.listening': 'LISTENING',
  'languages.title': 'LANGUAGES',
  'lang.fr': 'FRENCH',
  'lang.native': 'NATIVE',
  'lang.en': 'ENGLISH',
  'lang.prof': 'PROFESSIONAL - TOEIC B2',

  // Projets
  'eyebrow.projets': '05 // PROJECTS',
  'title.projets': 'Projects &amp; Extracurricular',
  'proj.efrei.title': 'EFREI TIR - Sponsorship Lead',
  'label.assoc': 'Student association',
  'proj.efrei.desc': 'Organization of large-scale events (airsoft, etc.), team management, logistics, safety briefings, outreach to companies.',
  'proj.ece.title': 'ECE Shooting Club - VP Events',
  'proj.ece.desc': 'Association management, organization of large-scale events (airsoft, etc.), team management, logistics, safety briefings.',
  'proj.news.title': 'Automated Investment Newsletter',
  'label.personal': 'Personal project',
  'proj.news.desc': 'An automated stock-market newsletter built with Make.com. Market and financial-article analysis powered by Gemini AI.',
  'proj.job.title': 'Job-Search Automation',
  'proj.job.desc': 'Automation of the job-search process using n8n and Gemini AI.',

  // Passions
  'eyebrow.passions': '06 // INTERESTS',
  'title.passions': 'Interests',
  'pas.running': 'RUNNING',
  'pas.running.sub': 'Marathon / Half',
  'pas.drawing': 'DRAWING',
  'pas.watch': 'TECH WATCH',
  'pas.boxing': 'BOXING',

  // Contact
  'eyebrow.contact': '07 // CONTACT',
  'title.contact': "Let's get in touch",
  'contact.desc': 'Open to any VIE or permanent (CDI) opportunity around cybersecurity, AI or data automation. Feel free to reach out.',
  'news.title': 'INVESTMENT NEWSLETTER',
  'news.desc': 'Get stock-market investment tips at the start of each month | market analysis &amp; opportunities.',
  'news.label': 'Email address',
  'news.placeholder': 'your.email@example.com',
  'news.submit': 'SUBSCRIBE',
};

const MESSAGES = {
  fr: {
    sending: 'Envoi en cours…',
    invalid: 'Adresse email invalide.',
    success: 'Merci ! Votre inscription est confirmée.',
    error: 'Une erreur est survenue, réessayez plus tard.',
  },
  en: {
    sending: 'Sending…',
    invalid: 'Invalid email address.',
    success: 'Thank you! Your subscription is confirmed.',
    error: 'An error occurred, please try again later.',
  },
};

let currentLang = 'fr';

document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) lucide.createIcons();

  initI18n();
  initMobileMenu();
  initScrollSpy();
  initRevealOnScroll();
  initNewsletterForm();
});

/* --------------------------------------------------------------------
   i18n
   -------------------------------------------------------------------- */
function getStoredLang() {
  try { return localStorage.getItem('lang'); } catch (e) { return null; }
}
function storeLang(lang) {
  try { localStorage.setItem('lang', lang); } catch (e) { /* no-op */ }
}

function applyLang(lang) {
  currentLang = lang === 'en' ? 'en' : 'fr';
  document.documentElement.lang = currentLang;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (currentLang === 'en') {
      if (I18N_EN[key] !== undefined) el.innerHTML = I18N_EN[key];
    } else if (el.dataset.fr !== undefined) {
      el.innerHTML = el.dataset.fr;
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (currentLang === 'en') {
      if (I18N_EN[key] !== undefined) el.placeholder = I18N_EN[key];
    } else if (el.dataset.frPlaceholder !== undefined) {
      el.placeholder = el.dataset.frPlaceholder;
    }
  });

  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    const key = el.getAttribute('data-i18n-aria');
    if (currentLang === 'en') {
      if (I18N_EN[key] !== undefined) el.setAttribute('aria-label', I18N_EN[key]);
    } else if (el.dataset.frAria !== undefined) {
      el.setAttribute('aria-label', el.dataset.frAria);
    }
  });

  document.querySelectorAll('[data-lang]').forEach((btn) => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === currentLang);
  });

  storeLang(currentLang);
}

function initI18n() {
  // Snapshot du contenu français (défaut du DOM)
  document.querySelectorAll('[data-i18n]').forEach((el) => { el.dataset.fr = el.innerHTML; });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => { el.dataset.frPlaceholder = el.placeholder; });
  document.querySelectorAll('[data-i18n-aria]').forEach((el) => { el.dataset.frAria = el.getAttribute('aria-label') || ''; });

  document.querySelectorAll('[data-lang]').forEach((btn) => {
    btn.addEventListener('click', () => applyLang(btn.getAttribute('data-lang')));
  });

  const stored = getStoredLang();
  const initial = stored || ((navigator.language || '').toLowerCase().startsWith('en') ? 'en' : 'fr');
  applyLang(initial);
}

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

  const t = () => MESSAGES[currentLang] || MESSAGES.fr;

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
      setMessage(t().invalid, 'error');
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    setMessage(t().sending, 'pending');

    try {
      const response = await fetch(NEWSLETTER_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'subscribe', email, source: 'portfolio', page: window.location.href }),
      });

      if (!response.ok) throw new Error(`Webhook a répondu ${response.status}`);

      form.reset();
      setMessage(t().success, 'success');
    } catch (err) {
      setMessage(t().error, 'error');
    } finally {
      submitBtn.disabled = false;
    }
  });
}
