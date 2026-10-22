/* Mohammad Al-Tarifi — interactive portfolio
 * No animation libraries required. All scroll scenes work in modern browsers.
 */
(() => {
  'use strict';

  const $ = (selector, context = document) => context.querySelector(selector);
  const $$ = (selector, context = document) => Array.from(context.querySelectorAll(selector));
  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
  const mix = (start, end, t) => start + (end - start) * t;
  const smoothstep = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ------ Appearance: beige by default, original navy on DARK ------ */
  const themeToggle = $('#themeToggle');
  const themeMeta = $('meta[name="theme-color"]');
  let darkThemeEnabled = false;

  try {
    darkThemeEnabled = localStorage.getItem('portfolio-dark-theme') === 'true';
  } catch (_) {
    // The switch still works when localStorage is unavailable.
  }

  function applyTheme() {
    
    document.body.classList.toggle('theme-beige', !darkThemeEnabled);
    themeToggle.setAttribute('aria-pressed', String(darkThemeEnabled));
    themeToggle.setAttribute(
      'aria-label',
      darkThemeEnabled ? 'Disable dark theme' : 'Enable dark theme'
    );
    if (themeMeta) {
      themeMeta.setAttribute('content', darkThemeEnabled ? '#010736' : '#FCF1D0');
    }
  }

  applyTheme();

  themeToggle.addEventListener('click', () => {
    darkThemeEnabled = !darkThemeEnabled;
    applyTheme();
    themeToggle.setAttribute('aria-label', translated(darkThemeEnabled ? 'Disable dark theme' : 'Enable dark theme'));

    try {
      localStorage.setItem('portfolio-dark-theme', String(darkThemeEnabled));
    } catch (_) {
      // Keep the currently selected theme for this page.
    }
  });



  /* ------ Arabic / English: text-only localisation (layout and intro unchanged) ------ */
  const arabicCopy = Object.freeze({
    "Mohammad Al-Tarifi — Software Engineer & Creative Developer": "محمد الطريفي — مهندس برمجيات ومطوّر إبداعي",
    "Portfolio of Mohammad Al-Tarifi — Software Engineer building thoughtful web experiences, backend systems, and quality-driven applications.": "معرض أعمال محمد الطريفي، مهندس برمجيات يطوّر مواقع وتطبيقات ويب وأنظمة خلفية ويهتم بجودة البرمجيات.",
    "Skip to content": "الانتقال إلى المحتوى",
    "Home": "الرئيسية",
    "About": "عني",
    "Expertise": "المهارات",
    "Projects": "المشاريع",
    "Experience": "الخبرات",
    "Certifications": "الشهادات",
    "Contact": "تواصل",
    "DARK": "داكن",
    "LET'S TALK": "تواصل معي",
    "HI, I'M MOHAMMAD": "مرحبًا، أنا محمد",
     "Mohammad Al-Tarifi" :"محمد الطريفي",
    "SOFTWARE": "مهندس",
    "ENGINEER": "برمجيات",
    "& CREATOR.": "ومبدِع.",
    "I build": "أُطوّر",
    "websites and apps": "مواقع وتطبيقات الويب",
    ". I enjoy coding, solving problems, and making software easy to use.": "، وأستمتع بالبرمجة وحل المشكلات وجعل البرامج سهلة الاستخدام.",
    "VIEW PROJECTS": "عرض المشاريع",
    "ABOUT ME": "نبذة عني",
    "WEB DEVELOPMENT": "تطوير الويب",
    "SOFTWARE ENGINEERING": "هندسة البرمجيات",
    "MY WORKSPACE": "مساحة عملي",
    "+ / BUILDING IDEAS": "+ / نصنع الأفكار",
    "SCROLL DOWN": "مرّر للأسفل",
    "PORTFOLIO — 2026": "ملف أعمالي — 2026",
    "A little about me.": "تعرّف عليّ أكثر.",
    "I'm": "أنا",
    ", a Software Engineer from Jordan. I graduated from the World Islamic Sciences & Education University.": "، مهندس برمجيات من الأردن، وخريج جامعة العلوم الإسلامية العالمية.",
    "I create websites and apps, work with databases, and test software to make sure it works well. I enjoy learning new skills and working with teams.": "أطوّر مواقع وتطبيقات، وأتعامل مع قواعد البيانات، وأختبر البرمجيات للتأكد من جودتها. أحب تعلّم مهارات جديدة والعمل ضمن فريق.",
    "DOWNLOAD CV": "تحميل السيرة الذاتية",
    "VIEW GITHUB": "زيارة GitHub",
    "My": "",
    "Skills.": "مهاراتي.",
    "Projects.": "مشاريعي.",
    "Certificates.": "شهاداتي.",
    "Experience.": "خبراتي.",
    "TOOLS I USE TO BUILD": "الأدوات التي أستخدمها للتطوير",
    "AND TEST SOFTWARE.": "واختبار البرمجيات.",
    "Frontend": "الواجهات",
    "Development": "الأمامية",
    "Backend": "الأنظمة",
    "Engineering": "الخلفية",
    "Database": "قواعد",
    "Systems": "البيانات",
    "Quality": "ضمان",
    "Assurance": "الجودة",
    "I build easy-to-use websites that work on phones and computers.": "أطوّر مواقع سهلة الاستخدام تعمل على الهواتف وأجهزة الكمبيوتر.",
    "I write server code and build APIs for web apps.": "أكتب برمجيات الخادم وأطوّر واجهات برمجة التطبيقات (APIs).",
    "I store, manage, and organize data for apps.": "أنظّم البيانات وأخزّنها وأديرها لخدمة التطبيقات.",
    "I test software, find bugs, and help fix problems.": "أختبر البرمجيات، وأكتشف الأخطاء، وأساهم في حل المشكلات.",
    "SOME OF THE APPS": "بعض التطبيقات",
    "I HAVE WORKED ON.": "التي عملت عليها.",
    "GRADUATION PROJECT": "مشروع التخرّج",
    "FIELD TRAINING": "تدريب ميداني",
    "TEAM PROJECT": "مشروع جماعي",
    "IN DEVELOPMENT": "قيد التطوير",
    "A desktop health app with meal plans, calorie tools, and AI features.": "تطبيق صحي للحاسوب يقدّم خطط وجبات، وأدوات لحساب السعرات الحرارية، وميزات بالذكاء الاصطناعي.",
    "A web app I built during my training using ASP.NET.": "تطبيق ويب طوّرته خلال تدريبي باستخدام ASP.NET.",
    "A teacher dashboard to manage students, quizzes, attendance, and reports.": "لوحة تحكّم للمدرّس لإدارة الطلاب والاختبارات والحضور والتقارير.",
    "A tourism website about places, hotels, guides, and events in Jordan. In progress.": "منصة سياحية لاستكشاف الأماكن والفنادق والأدلّاء والفعاليات في الأردن، وما زالت قيد التطوير.",
    "HAVE A PROJECT IDEA?": "عندك فكرة مشروع؟",
    "CONTACT ME": "تواصل معي",
    "COURSES I COMPLETED.": "الدورات التي أكملتها.",
    "CLICK TO VIEW.": "اضغط لعرض الشهادة.",
    "Full Stack Development": "تطوير الويب الشامل",
    "Hussein Technical University — Namu Program": "جامعة الحسين التقنية — برنامج نمو",
    "Introduction to Artificial Intelligence": "مقدمة في الذكاء الاصطناعي",
    "Introduction to Cybersecurity": "مقدمة في الأمن السيبراني",
    "DEVELOPMENT": "التطوير",
    "ARTIFICIAL INTELLIGENCE": "الذكاء الاصطناعي",
    "CYBERSECURITY": "الأمن السيبراني",
    "WHERE I LEARNED": "أماكن تعلّمي",
    "AND WORKED.": "وعملي.",
    "I started with the basics and kept learning through real projects.": "بدأت بالأساسيات، وواصلت التعلّم من خلال مشاريع حقيقية.",
    "SEP 2026 — PRESENT": "سبتمبر 2026 — حتى الآن",
    "AUG 2026 — PRESENT": "أغسطس 2026 — حتى الآن",
    "MAR — JUN 2026": "مارس — يونيو 2026",
    "JUN — SEP 2025": "يونيو — سبتمبر 2025",
    "Orange Coding Academy": "أكاديمية أورنج للبرمجة",
    "Daleel Academy": "أكاديمية دليل",
    "The Hope International": "شركة الرجاء الدولية",
    "Hussein Technical University": "جامعة الحسين التقنية",
    "Web Development Trainee": "متدرّب تطوير ويب",
    "Learning web development with HTML, CSS, JavaScript, PHP, Laravel, and Git.": "أتعلّم تطوير الويب باستخدام HTML وCSS وJavaScript وPHP وLaravel وGit.",
    "Quality Assurance Trainee": "متدرّب ضمان جودة البرمجيات",
    "Testing apps, reporting bugs, and using PostgreSQL.": "أختبر التطبيقات، وأوثّق الأخطاء، وأستخدم PostgreSQL.",
    "ASP.NET Developer — Field Training": "مطوّر ASP.NET — تدريب ميداني",
    "Worked on Meet Grid using ASP.NET, C#, and Entity Framework.": "عملت على مشروع Meet Grid باستخدام ASP.NET وC# وEntity Framework.",
    "Full Stack Development — Namu Program": "تطوير ويب شامل — برنامج نمو",
    "Learned web development with React and MongoDB.": "تعلّمت تطوير الويب باستخدام React وMongoDB.",
    "HAVE AN": "عندك",
    "IDEA": "فكرة",
    "LET'S BUILD IT.": "خلّينا ننفّذها.",
    "Have a project or a question? Send me a message. I would love to talk.": "عندك مشروع أو سؤال؟ ابعتلي رسالة، ويسعدني نتواصل.",
    "EMAIL ME": "راسلني",
    "SEND A MESSAGE": "أرسل رسالة",
    "YOUR NAME": "اسمك",
    "EMAIL ADDRESS": "البريد الإلكتروني",
    "MESSAGE": "الرسالة",
    "OPEN EMAIL TO SEND": "فتح البريد للإرسال",
     "SEND MESSAGE": "إرسال الرسالة",
     "Your message will be sent directly to my inbox.": "سيتم إرسال رسالتك مباشرة إلى بريدي الإلكتروني.",
    "Opens your email app with a prefilled message. No data is stored here.": "يفتح تطبيق البريد برسالة مجهّزة مسبقًا. لا يتم تخزين أي بيانات هنا.",
    "DESIGNED & BUILT BY": "تصميم وتطوير",
    "BACK TO TOP": "العودة للأعلى",
    "MOHAMMAD AL-TARIFI — ALL RIGHTS RESERVED.": "محمد الطريفي — جميع الحقوق محفوظة.",
    "MADE WITH": "صُنع بحب",
    "& A LOT OF COFFEE.": "وكثير من القهوة.",
    "AMMAN, JORDAN ↗": "عمّان، الأردن ↗",
    "CERTIFICATE": "شهادة",
    "Certificate": "الشهادة",
    "← Previous": "← السابقة",
    "Next →": "التالية →",
    "Your name": "اسمك",
    "you@example.com": "you@example.com",
    "Tell me a little about your idea...": "احكيلي عن فكرتك...",
    "View Full Stack Development certificate": "عرض شهادة تطوير الويب الشامل",
    "View Introduction to Artificial Intelligence certificate": "عرض شهادة مقدمة في الذكاء الاصطناعي",
    "View Introduction to Cybersecurity certificate": "عرض شهادة مقدمة في الأمن السيبراني",
    "Close certificate": "إغلاق الشهادة",
    "Previous certificate": "الشهادة السابقة",
    "Next certificate": "الشهادة التالية",
    "Open navigation": "فتح القائمة",
    "Close navigation": "إغلاق القائمة",
    "Enable dark theme": "تفعيل الوضع الداكن",
    "Disable dark theme": "تعطيل الوضع الداكن",
    "Mohammad Al-Tarifi, home": "محمد الطريفي، الرئيسية",
    "Select website language": "اختيار لغة الموقع",
    "Portfolio opening animation": "الرسوم الافتتاحية للموقع",
    "I build frontends. I build backends. I test everything.": "أطوّر الواجهات الأمامية والخلفية، وأختبر كل شيء.",
    "View project": "عرض المشروع",
    "Please complete all fields.": "يرجى تعبئة جميع الحقول.",
    "Opening your email app — please send the prepared message there.": "سيتم فتح البريد الإلكتروني؛ يرجى إرسال الرسالة المجهّزة منه."
});
  const languageSwitch = $('#languageSwitch');
  const languageOptions = $$('[data-language]', languageSwitch);
  const englishTitle = document.title;
  const descriptionMeta = $('meta[name="description"]');
  const englishDescription = descriptionMeta?.content || '';
  const normalizeCopy = (value) => value.replace(/\s+/g, ' ').trim();
  const translationNodes = [];
  const translationAttrs = [];
  let currentLanguage = 'en';

  // Collect source text once so returning to English restores the exact original content.
  const textWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (textWalker.nextNode()) {
    const node = textWalker.currentNode;
    const parent = node.parentElement;
    if (!parent || parent.closest('.intro, .about-statement, .brand, .footer-brand, .tech-logo, script, style')) continue;
    const english = normalizeCopy(node.nodeValue);
    if (english && Object.prototype.hasOwnProperty.call(arabicCopy, english)) {
      translationNodes.push({ node, englishValue: node.nodeValue, arabic: arabicCopy[english] });
    }
  }

  // Translate accessibility and form attributes as well as visible text.
  $$('[aria-label], [placeholder], [alt], [data-cert-title], [title]').forEach(element => {
    for (const attribute of ['aria-label', 'placeholder', 'alt', 'data-cert-title', 'title']) {
      const english = element.getAttribute(attribute);
      if (english && Object.prototype.hasOwnProperty.call(arabicCopy, english)) {
        translationAttrs.push({ element, attribute, english, arabic: arabicCopy[english] });
      }
    }
  });

  function translated(value) {
    return currentLanguage === 'ar' ? (arabicCopy[value] ?? value) : value;
  }

  function applyLanguage(language) {
    currentLanguage = language === 'ar' ? 'ar' : 'en';
    document.documentElement.lang = currentLanguage;
    // Keep the original LTR page geometry; only Arabic text blocks read RTL.
    document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
    document.body.classList.toggle('lang-ar', currentLanguage === 'ar');

    translationNodes.forEach(({ node, englishValue, arabic }) => {
      if (!node.isConnected) return;
      if (currentLanguage === 'en') {
        node.nodeValue = englishValue;
      } else {
        const leading = englishValue.match(/^\s*/)[0];
        const trailing = englishValue.match(/\s*$/)[0];
        node.nodeValue = leading + arabic + trailing;
      }
    });
    translationAttrs.forEach(({ element, attribute, english, arabic }) => {
      element.setAttribute(attribute, currentLanguage === 'ar' ? arabic : english);
    });

    document.title = translated(englishTitle);
    if (descriptionMeta) descriptionMeta.content = translated(englishDescription);
    languageSwitch.classList.toggle('is-ar', currentLanguage === 'ar');
    languageSwitch.setAttribute('aria-label', translated('Select website language'));
    languageOptions.forEach(option => {
      const active = option.dataset.language === currentLanguage;
      option.classList.toggle('is-active', active);
      option.setAttribute('aria-pressed', String(active));
    });

    // Existing stateful controls should also use the selected language.
    const menuOpen = $('#menuButton').getAttribute('aria-expanded') === 'true';
    $('#menuButton').setAttribute('aria-label', translated(menuOpen ? 'Close navigation' : 'Open navigation'));
    themeToggle.setAttribute('aria-label', translated(darkThemeEnabled ? 'Disable dark theme' : 'Enable dark theme'));
    const dialog = $('#certificateDialog');
    if (dialog?.open) {
      const activeCard = $$('.cert-row[data-cert-image]')[activeCertificate];
      const title = activeCard?.getAttribute('data-cert-title');
      if (title) $('#certificateDialogTitle').textContent = translated(title);
    }
  }

  languageOptions.forEach(option => option.addEventListener('click', () => {
    if (option.dataset.language === currentLanguage) return;
    applyLanguage(option.dataset.language);
    try {
      localStorage.setItem('portfolio-language', currentLanguage);
    } catch (_) { /* Private browsing: the switch still works. */ }
  }));

  let initialLanguage = 'en';
  try { initialLanguage = localStorage.getItem('portfolio-language') || 'en'; } catch (_) {}
  applyLanguage(initialLanguage);

  /* ------ Opening — recreated from the reference reel -------------------------------
   * 0.0s  white ball drops, squashes, bounces (glow flash on every hit)
   * 0.8s  a bar drops in above the ball
   * 1.1s  letters of the NAME spin out of the ball and tumble into place
   * 2.35s letters swap one by one (left -> right) until it says PORTFOLIO
   * 3.45s title slides down; "Software Engineer" + Contact fade in
   * 3.9s  faint dust appears,  4.45s dust swarms into your portrait (head first, then body)
   * 6.75s everything lifts away and the site appears
   * Change NAME below to whatever word you want to morph from.
   * ------------------------------------------------------------------------------------ */
  const intro = $('#intro');
  const skip = $('#introSkip');
  const portraitStage = $('#introPortraitStage');
  const portraitCanvas = $('#portraitCanvas');
  const portraitImage = $('#introPortrait');
  const dustCanvas = $('#introDust');
  const ballEl = $('#introBall');
  const glowEl = $('#introGlow');
  const stemEl = $('#introStem');
  const introTitle = $('#introTitle');
  const contactLink = $('#introContact');

  const NAME = 'MOHAMMAD';
  const FINAL = 'PORTFOLIO';
  const introDuration = 7400;

  let introFinished = false;
  let introRaf = null;
  let introTimer = null;
  let startAt = 0;
  let portraitPainter = null;
  let portraitParticles = [];
  let portraitW = 0, portraitH = 0;
  let photoReady = false;
  let portraitT0 = 4450;          // when the swarm starts (ms)
  let dustPainter = null;
  let specks = [];
  let lastFrame = 0;

  function closeIntro() {
    if (introFinished) return;
    introFinished = true;
    if (introRaf) cancelAnimationFrame(introRaf);
    if (introTimer) clearTimeout(introTimer);
    intro.classList.add('is-hidden');
    document.body.classList.remove('intro-active');
    try { sessionStorage.setItem('mohammadPortfolioIntroSeen', '1'); } catch (_) { /* private mode */ }
    window.setTimeout(() => intro.setAttribute('aria-hidden', 'true'), 900);
  }

  /* ---- title helpers ---- */
  function setTitle(text) {
    introTitle.textContent = '';
    for (const ch of text) {
      const span = document.createElement('span');
      span.className = 'ch';
      span.textContent = ch;
      introTitle.appendChild(span);
    }
  }

  const ballX = () => innerWidth / 2;
  const ballY = () => innerHeight * 0.58;

  /* ---- 0.0s: ball bounce + glow flashes ---- */
  function runBall() {
    ballEl.animate([
      { transform: 'translateY(-46svh) scale(.85,1.25)', opacity: 1, offset: 0, easing: 'cubic-bezier(.55,0,1,.45)' },
      { transform: 'translateY(0) scale(1.9,.38)',        opacity: 1, offset: .26, easing: 'ease-out' },
      { transform: 'translateY(-6svh) scale(1,1)',        opacity: 1, offset: .5,  easing: 'cubic-bezier(.55,0,1,.45)' },
      { transform: 'translateY(0) scale(1.7,.42)',        opacity: 1, offset: .74, easing: 'ease-out' },
      { transform: 'translateY(0) scale(1,1)',            opacity: 1, offset: 1 }
    ], { duration: 800, fill: 'forwards' });
    glowEl.animate([
      { opacity: 0, offset: 0 }, { opacity: .1, offset: .2 }, { opacity: .95, offset: .26 },
      { opacity: .05, offset: .5 }, { opacity: .9, offset: .74 }, { opacity: .15, offset: 1 }
    ], { duration: 800, fill: 'forwards' });
  }
  /* ---- 0.8s: bar drops in, then tips over ---- */
  function runStem() {
    stemEl.animate([
      { transform: 'translate(0,-34svh) rotate(0)', opacity: 0, offset: 0 },
      { opacity: 1, offset: .2 },
      { transform: 'translate(0,0) rotate(0)', opacity: 1, offset: .5, easing: 'ease-in' },
      { transform: 'translate(-3svh,4svh) rotate(-68deg) scale(.7)', opacity: 0, offset: 1 }
    ], { duration: 680, fill: 'forwards', easing: 'cubic-bezier(.3,.7,.3,1)' });
    glowEl.animate([{ opacity: .15 }, { opacity: .75, offset: .4 }, { opacity: .55 }], { duration: 1100, fill: 'forwards' });
  }
  /* ---- 1.1s: letters spin out of the ball into their slots ---- */
  function flyLetters() {
    setTitle(NAME);
    const spans = Array.from(introTitle.children);
    spans.forEach((span, i) => {
      const r = span.getBoundingClientRect();
      const dx = ballX() - (r.left + r.width / 2);
      const dy = ballY() - (r.top + r.height / 2);
      const spin = (i % 2 ? 1 : -1) * (150 + Math.random() * 200);
      span.animate([
        { transform: `translate(${dx}px,${dy}px) rotate(${spin}deg) scale(.15)`, opacity: 0, offset: 0 },
        { opacity: 1, offset: .28 },
        { transform: 'translate(0,0) rotate(0deg) scale(1)', opacity: 1, offset: 1 }
      ], { duration: 640, delay: i * 70, easing: 'cubic-bezier(.2,.85,.25,1.05)', fill: 'both' });
    });
  }
  function fadeBall() {
    ballEl.animate([{ transform: 'scale(1)', opacity: 1 }, { transform: 'scale(.2)', opacity: 0 }], { duration: 380, fill: 'forwards' });
    glowEl.animate([{ opacity: .55 }, { opacity: 0 }], { duration: 700, fill: 'forwards' });
  }

  /* ---- timeline ---- */
  const events = [
    { t: 0, fn: runBall },
    { t: 780, fn: runStem },
    { t: 1120, fn: flyLetters },
    { t: 1800, fn: fadeBall }
  ];
  for (let k = 1; k <= FINAL.length; k++) {                    // MOHAMMAD -> PORTFOLIO, left to right
    events.push({ t: 2350 + (k - 1) * 105, fn: () => setTitle(FINAL.slice(0, k) + NAME.slice(k)) });
  }
  events.push(
    { t: 3450, fn: () => intro.classList.add('is-docked') },
    { t: 3750, fn: () => intro.classList.add('show-sub') },
    { t: 4650, fn: () => intro.classList.add('show-nav') },
    { t: 6750, fn: () => intro.classList.add('is-leaving') }
  );
  events.sort((x, y) => x.t - y.t);
  let nextEvent = 0;

  /* ---- background dust ---- */
  function initDust() {
    const dpr = 1;
    dustCanvas.width = innerWidth * dpr;
    dustCanvas.height = innerHeight * dpr;
    dustPainter = dustCanvas.getContext('2d');
    const count = Math.round(clamp(innerWidth * innerHeight / 3800, 120, 420));
    specks = Array.from({ length: count }, () => ({
      x: Math.random() * innerWidth, y: Math.random() * innerHeight,
      s: Math.random() < .2 ? 2 : 1, a: .18 + Math.random() * .55,
      ph: Math.random() * 6.28, sp: .002 + Math.random() * .004
    }));
  }
  function drawDust(now, elapsed) {
    dustPainter.clearRect(0, 0, dustCanvas.width, dustCanvas.height);
    const ramp = smoothstep(3900, 4700, elapsed) * (1 - smoothstep(6750, 7300, elapsed));
    if (ramp <= 0) return;
    dustPainter.fillStyle = '#cfd6ea';
    for (const sp of specks) {
      dustPainter.globalAlpha = ramp * sp.a * (0.45 + 0.55 * Math.sin(now * sp.sp + sp.ph) ** 2);
      dustPainter.fillRect(sp.x, sp.y, sp.s, sp.s);
    }
    dustPainter.globalAlpha = 1;
  }

  /* ---- portrait: grid of glittering dots built from your photo ---- */
  const LEVELS = 40;
  const palettes = [[95, 110, 160, 236, 240, 255], [80, 112, 205, 190, 212, 255], [122, 100, 190, 228, 208, 255]].map(c =>
    Array.from({ length: LEVELS + 1 }, (_, i) => {
      const t = i / LEVELS;
      return `rgb(${Math.round(mix(c[0], c[3], t))},${Math.round(mix(c[1], c[4], t))},${Math.round(mix(c[2], c[5], t))})`;
    }));

  function initPortraitParticles(elapsedNow) {
    if (!portraitImage.complete || !portraitImage.naturalWidth) return;
    const rect = portraitStage.getBoundingClientRect();
    const w = Math.max(1, Math.round(rect.width));
    const h = Math.max(1, Math.round(rect.height));
    const dpr = Math.min(devicePixelRatio || 1, 2);
    portraitW = w; portraitH = h;
    portraitCanvas.width = Math.round(w * dpr);
    portraitCanvas.height = Math.round(h * dpr);
    portraitPainter = portraitCanvas.getContext('2d');
    portraitPainter.setTransform(dpr, 0, 0, dpr, 0, 0);

    const off = document.createElement('canvas');
    off.width = w; off.height = h;
    const ctx = off.getContext('2d', { willReadFrequently: true });
    try {
      ctx.drawImage(portraitImage, 0, 0, w, h);
      const data = ctx.getImageData(0, 0, w, h).data;
      const step = w < 460 ? 3 : 4;
      portraitParticles = [];

      for (let y = 0; y + step <= h; y += step) {
        for (let x = 0; x + step <= w; x += step) {
          let a = 0, r = 0, g = 0, b = 0;
          for (let yy = 0; yy < step; yy++) for (let xx = 0; xx < step; xx++) {
            const i = ((y + yy) * w + (x + xx)) * 4, al = data[i + 3] / 255;
            a += al; r += data[i] * al; g += data[i + 1] * al; b += data[i + 2] * al;
          }
          const n = step * step;
          if (a / n < 0.3) continue;
          const alpha = a / n;
          const lum = (0.2126 * r + 0.7152 * g + 0.0722 * b) / a / 255;

          // like the reference: only the LIT parts glow (face, shirt); hair/suit stay almost black
          let t = clamp(Math.pow(lum, 0.85) * 1.05 + 0.06, 0, 1);
          const nx = (x + step / 2) / w, ny = (y + step / 2) / h;
          t *= (1 - smoothstep(0.66, 0.98, ny)) * smoothstep(0, 0.07, nx) * smoothstep(0, 0.07, 1 - nx);
          if (t < 0.07) continue;

          const size = step * (0.34 + 0.62 * t) * (0.55 + 0.45 * alpha);
          const roll = Math.random();
          portraitParticles.push({
            x: x + (step - size) / 2, y: y + (step - size) / 2, size, t,
            // the swarm starts as a cloud around the HEAD, then spreads to the final position
            sx: w * 0.5 + (Math.random() - 0.5) * w * 0.26,
            sy: h * 0.2 + (Math.random() - 0.5) * h * 0.2,
            delay: ny * 650 + Math.random() * 380,
            dur: 650 + Math.random() * 500,
            g: roll < .6 ? 0 : roll < .85 ? 1 : 2,
            ph: Math.random() * 6.28, sp: .002 + Math.random() * .006
          });
        }
      }
      photoReady = portraitParticles.length > 1200;
      intro.classList.toggle('portrait-generated', photoReady);
      intro.classList.toggle('portrait-fallback', !photoReady);
      portraitT0 = Math.max(4450, elapsedNow);
    } catch (err) {
      // opened with file:// -> browsers block reading pixels. Use Live Server / any local server.
      photoReady = false;
      intro.classList.add('portrait-fallback');
    }
  }

  function drawPortrait(now, elapsed) {
    const ctx = portraitPainter;
    const base = elapsed - portraitT0;
    ctx.clearRect(0, 0, portraitW, portraitH);
    if (base <= 0) return;
    let curAlpha = 1;
    ctx.globalAlpha = 1;
    for (const p of portraitParticles) {
      const k = (base - p.delay) / p.dur;
      if (k <= 0) continue;
      const done = k >= 1;
      const e = done ? 1 : 1 - Math.pow(1 - k, 3);
      const al = done ? 1 : Math.min(1, k * 3);
      if (al !== curAlpha) { ctx.globalAlpha = al; curAlpha = al; }
      // glitter: slow shimmer + occasional bright flashes
      const s = Math.sin(now * p.sp + p.ph);
      const level = clamp(p.t * (0.8 + 0.2 * s) + (s > 0.93 ? (s - 0.93) * 6 : 0), 0, 1);
      ctx.fillStyle = palettes[p.g][Math.round(level * LEVELS)];
      ctx.fillRect(p.sx + (p.x - p.sx) * e, p.sy + (p.y - p.sy) * e, p.size, p.size);
    }
    ctx.globalAlpha = 1;
  }

  function drawIntro(now) {
    if (introFinished) return;
    const elapsed = now - startAt;
    while (nextEvent < events.length && elapsed >= events[nextEvent].t) events[nextEvent++].fn();

    drawDust(now, elapsed);
    if (photoReady && portraitPainter) {
      // the glitter only needs ~30fps
      if (now - lastFrame > 30 || elapsed < portraitT0 + 2400) { drawPortrait(now, elapsed); lastFrame = now; }
    } else if (!photoReady && elapsed > 4450 && portraitImage.complete && portraitImage.naturalWidth) {
      intro.classList.add('portrait-fallback', 'is-formed');
    }
    introRaf = requestAnimationFrame(drawIntro);
  }

  let introSeen = false;
  try { introSeen = sessionStorage.getItem('mohammadPortfolioIntroSeen') === '1'; } catch (_) { /* blocked */ }
  if (reduceMotion || introSeen) {
    intro.classList.add('is-hidden');
    intro.setAttribute('aria-hidden', 'true');
  } else {
    document.body.classList.add('intro-active');
    initDust();
    startAt = performance.now();
    const preparePhoto = () => initPortraitParticles(performance.now() - startAt);
    if (portraitImage.complete && portraitImage.naturalWidth) preparePhoto();
    else portraitImage.addEventListener('load', preparePhoto, { once: true });
    portraitImage.addEventListener('error', () => intro.classList.add('portrait-missing'), { once: true });
    introRaf = requestAnimationFrame(drawIntro);
    introTimer = window.setTimeout(closeIntro, introDuration);
    skip.addEventListener('click', closeIntro);
    contactLink.addEventListener('click', closeIntro);
    window.addEventListener('keydown', e => { if (e.key === 'Escape') closeIntro(); }, { once: true });
    window.addEventListener('resize', () => {
      if (introFinished) return;
      initDust();
      if (portraitImage.complete && portraitImage.naturalWidth) {
        const el = performance.now() - startAt;
        initPortraitParticles(el);
        portraitT0 = el - 3500;                       // show it already formed, no replay
      }
    }, { passive: true });
  }

  /* ------ Navbar + scroll indicator ------ */
  const siteHeader = $('#siteHeader');
  const progressEl = $('#scrollProgress');
  const links = $$('.desktop-nav .nav-link');
  const allSections = $$('main > section[id]');
  let scrollScheduled = false;

  function updateCommonScroll() {
    scrollScheduled = false;
    siteHeader.classList.toggle('is-scrolled', window.scrollY > 24);
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPct = scrollable > 0 ? clamp(window.scrollY / scrollable, 0, 1) : 0;
    progressEl.style.width = `${scrollPct * 100}%`;

    const current = allSections.reduce((value, section) => {
      const top = section.getBoundingClientRect().top;
      if (top < window.innerHeight * .40) return section.id;
      return value;
    }, 'home');
    const mappedSection = current === 'story' ? 'about' : current === 'certificates' ? 'expertise' : current;
    links.forEach(link => {
      const isActive = link.getAttribute('href') === `#${mappedSection}`;
      link.classList.toggle('active', isActive);
      if (isActive) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
    updateAmbientScene(scrollPct);
  }

  window.addEventListener('scroll', () => {
    if (scrollScheduled) return;
    scrollScheduled = true;
    requestAnimationFrame(updateCommonScroll);
  }, { passive: true });
  window.addEventListener('resize', updateCommonScroll, { passive: true });

  /* ------ Mobile menu ------ */
  const menuButton = $('#menuButton');
  const mobileNav = $('#mobileNav');
  function toggleMenu(force) {
    const open = typeof force === 'boolean' ? force : menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', translated(open ? 'Close navigation' : 'Open navigation'));
    mobileNav.hidden = !open;
    siteHeader.classList.toggle('menu-open', open);
  }
  menuButton.addEventListener('click', () => toggleMenu());
  $$('#mobileNav a').forEach(link => link.addEventListener('click', () => toggleMenu(false)));
  window.addEventListener('keydown', (event) => { if (event.key === 'Escape') toggleMenu(false); });

  /* ------ Reveal-on-scroll with fallbacks ------ */
  const reveals = $$('.reveal');
  if (!reduceMotion && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: .09, rootMargin: '0px 0px -30px 0px' });
    reveals.forEach((node, i) => {
      if (node.closest('.expertise-grid,.project-grid')) node.style.transitionDelay = `${(i % 4) * 65}ms`;
      observer.observe(node);
    });
  } else {
    reveals.forEach(node => node.classList.add('is-visible'));
  }

  /* ------ Atmospheric backdrop, gently pans with scroll. No sticky panels. ------ */
  const ambient = $('#ambientProgrammer');
  const ambientVideo = $('#ambientVideo');
  const sourceEl = ambientVideo.querySelector('source');
  const videoSrc = sourceEl?.getAttribute('src');
  // Photo always works. If the optional video file exists, it silently fades in.
  ambientVideo.addEventListener('playing', () => ambient.classList.add('has-video'));
  ambientVideo.addEventListener('error', () => ambient.classList.remove('has-video'));
  ambientVideo.addEventListener('pause', () => ambient.classList.remove('has-video'));
  if (reduceMotion) { ambientVideo.pause(); }
  function updateAmbientScene(p) {
    if (!ambient || reduceMotion || window.innerWidth <= 720) return;
    // Gentle cinematic camera position: center -> right -> left, not a fake walking avatar.
    const goRight = smoothstep(.04, .26, p);
    const goLeft = smoothstep(.31, .58, p);
    const pan = mix(mix(0, 7, goRight), -7, goLeft);
    ambient.style.setProperty('--pan', `${pan.toFixed(2)}vw`);
  }
  updateCommonScroll();

  /* ------ Hero tilt, cursor glow ------ */
  const visual = $('#heroVisual');
  const cursorGlow = $('#cursorGlow');
  const hasFinePointer = window.matchMedia('(pointer:fine)').matches;
  if (hasFinePointer && !reduceMotion) {
    window.addEventListener('pointermove', (event) => {
      if (cursorGlow) {
        cursorGlow.style.opacity = '1';
        cursorGlow.style.left = `${event.clientX}px`;
        cursorGlow.style.top = `${event.clientY}px`;
      }
      if (window.scrollY > window.innerHeight) return;
      const bounds = visual.getBoundingClientRect();
      const mx = (event.clientX - (bounds.left + bounds.width / 2)) / Math.max(bounds.width, 1);
      const my = (event.clientY - (bounds.top + bounds.height / 2)) / Math.max(bounds.height, 1);
      visual.style.transform = `translate3d(${(mx * 13).toFixed(1)}px,${(my * 9).toFixed(1)}px,0)`;
    }, { passive: true });
  }

  // Show the original portrait if IMAGE/my.png is present in the copied asset folder.
  // Otherwise retain the designed monogram, rather than showing a broken image.
  $$('[data-optional-img]').forEach(img => {
    const revealPhoto = () => { if (img.naturalWidth > 0) img.classList.add('is-ready'); };
    if (img.complete) revealPhoto();
    img.addEventListener('load', revealPhoto);
    img.addEventListener('error', () => img.classList.remove('is-ready'));
  });

  /* ------ Portfolio contact: EmailJS (no layout changes) ------ */
  const emailJsConfig = {
    serviceId: 'service_fne0fnh',
    templateId: 'template_c4e75zd',
    publicKey: 'YOUR_PUBLIC_KEY' // EmailJS > Account > Public Key
  };
  const form = $('#contactForm');
  const toast = $('#toast');
  const submitButton = form.querySelector('button[type="submit"]');
  const submitLabel = submitButton.firstChild;
  const toastDuration = 4500;
  let toastTimer = null;
  let sending = false;
  function announce(message) {
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), toastDuration);
  }
  function updateSubmitLabel(message) { submitLabel.textContent = '\n        ' + message + '\n        '; }
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (sending || !form.reportValidity()) return;
    const name = $('#contactName').value.trim();
    const email = $('#contactEmail').value.trim();
    const message = $('#contactMessage').value.trim();
    if (!name || !email || !message) { announce(translated('Please complete all fields.')); return; }
    if (!window.emailjs || emailJsConfig.publicKey === 'YOUR_PUBLIC_KEY') {
      announce(currentLanguage === 'ar' ? 'إعداد الإرسال غير مكتمل. أضف Public Key أولًا.' : 'Email sending is not configured yet. Add your EmailJS Public Key.');
      return;
    }
    sending = true;
    submitButton.disabled = true;
    submitButton.setAttribute('aria-busy', 'true');
    updateSubmitLabel(currentLanguage === 'ar' ? 'جارٍ الإرسال...' : 'SENDING...');
    try {
      await window.emailjs.send(emailJsConfig.serviceId, emailJsConfig.templateId, {
        name, email, message,
        title: `Portfolio enquiry from ${name}`
      }, { publicKey: emailJsConfig.publicKey });
      form.reset();
      announce(currentLanguage === 'ar' ? 'تم إرسال رسالتك بنجاح! شكرًا لتواصلك.' : 'Your message was sent successfully. Thank you!');
    } catch (error) {
      console.error('EmailJS send failed:', error);
      announce(currentLanguage === 'ar' ? 'تعذّر إرسال الرسالة. حاول مرة أخرى لاحقًا.' : 'Could not send your message. Please try again later.');
    } finally {
      sending = false;
      submitButton.disabled = false;
      submitButton.removeAttribute('aria-busy');
      updateSubmitLabel(currentLanguage === 'ar' ? 'إرسال الرسالة' : 'SEND MESSAGE');
    }
  });

  /* ------ Card spotlight follows the mouse, without altering layout ------ */
  if (hasFinePointer && !reduceMotion) {
    $$('.skill-card, .project-image, .timeline-item, .cert-row').forEach(card => {
      card.addEventListener('pointermove', e => {
        const box = card.getBoundingClientRect();
        card.style.setProperty('--hover-x', `${e.clientX - box.left}px`);
        card.style.setProperty('--hover-y', `${e.clientY - box.top}px`);
      }, { passive: true });
    });
  }

  /* ------ Logos: show text instead of broken images if CDN is unavailable ------ */
  $$('.tech-logo img').forEach(img => {
    const onMissing = () => {
      img.hidden = true;
      if (img.classList.contains('fallback-logo')) {
        const initials = img.parentElement.querySelector('.fallback-initials');
        if (initials) initials.style.opacity = '1';
      }
    };
    img.addEventListener('error', onMissing);
    if (img.complete && img.naturalWidth === 0) onMissing();
  });

  /* ------ Experience timeline glow follows active items ------ */
  const timelineItems = $$('.timeline-item');
  if ('IntersectionObserver' in window) {
    const timelineObserver = new IntersectionObserver(entries => {
      entries.forEach(({ target, isIntersecting }) => {
        if (isIntersecting) {
          timelineItems.forEach(el => el.classList.remove('is-current'));
          target.classList.add('is-current');
        }
      });
    }, { rootMargin: '-15% 0px -56% 0px', threshold: 0 });
    timelineItems.forEach(item => timelineObserver.observe(item));
  }

  /* ------ Certificate preview modal: click, Escape, arrow keys, backdrop ------ */
  const certificateDialog = $('#certificateDialog');
  const certificateCards = $$('.cert-row[data-cert-image]');
  const certificateLargeImage = $('#certificateLargeImage');
  const certificateImageMissing = $('#certificateImageMissing');
  let activeCertificate = 0;
  function showCertificate(index) {
    if (!certificateCards.length) return;
    activeCertificate = (index + certificateCards.length) % certificateCards.length;
    const card = certificateCards[activeCertificate];
    const path = card.dataset.certImage;
    const title = card.dataset.certTitle;
    $('#certificateDialogTitle').textContent = translated(title);
    $('#certificatePosition').textContent = `${activeCertificate + 1} / ${certificateCards.length}`;
    certificateImageMissing.hidden = true;
    certificateLargeImage.hidden = false;
    // Set handlers before src so both cached and new images behave correctly.
    certificateLargeImage.onload = () => { certificateLargeImage.hidden = false; certificateImageMissing.hidden = true; };
    certificateLargeImage.onerror = () => {
      certificateLargeImage.hidden = true;
      certificateImageMissing.textContent = currentLanguage === 'ar' ? `الصورة غير موجودة. أضف ${path} إلى المشروع لعرض الشهادة.` : `Image not found. Put ${path} in your project to see this certificate.`;
      certificateImageMissing.hidden = false;
    };
    certificateLargeImage.alt = currentLanguage === 'ar' ? `شهادة ${translated(title)}` : `${title} certificate`;
    certificateLargeImage.src = path;
  }
  certificateCards.forEach((card, index) => card.addEventListener('click', () => {
    showCertificate(index);
    if (!certificateDialog.open) certificateDialog.showModal();
  }));
  $('#certificateClose').addEventListener('click', () => certificateDialog.close());
  $('#certificatePrev').addEventListener('click', () => showCertificate(activeCertificate - 1));
  $('#certificateNext').addEventListener('click', () => showCertificate(activeCertificate + 1));
  certificateDialog.addEventListener('click', e => {
    if (e.target === certificateDialog) certificateDialog.close();
  });
  document.addEventListener('keydown', e => {
    if (!certificateDialog.open) return;
    if (e.key === 'ArrowRight') { e.preventDefault(); showCertificate(activeCertificate + 1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); showCertificate(activeCertificate - 1); }
  });

  const year = $('#year');
  year.textContent = String(new Date().getFullYear());
})();
