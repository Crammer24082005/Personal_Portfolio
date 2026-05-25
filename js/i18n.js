// i18n.js — lightweight language switcher + translations
// Supported UI languages: EN (English), ES (Spanish), FR (French), DA (Danish)
// Hero typewriter cycles through 10 greetings regardless of UI language.

(function () {
    'use strict';

    // ─────────────────────────────────────────────────────────────
    // Translations
    // Keys are dotted; values are per-locale strings.
    // ─────────────────────────────────────────────────────────────
    const TRANSLATIONS = {
        en: {
            // Nav
            'nav.tagline': 'AI Engineer // India',
            'nav.about': 'About',
            'nav.projects': 'Projects',
            'nav.resume': 'Resume',
            'nav.theme_title': 'Switch Theme',
            'nav.lang_title': 'Switch language',
            'nav.menu_aria': 'Toggle navigation',

            // Doc titles
            'title.home': 'Arnav Khandelwal | Data Engineer',
            'title.projects': 'Arnav Khandelwal | Projects',
            'title.resume': 'Arnav Khandelwal | Resume',

            // Home / hero
            'hero.label': 'Arnav Khandelwal // AI Enginer // India',
            'hero.subtitle_line1': 'DATA & ML ENGINEER //',
            'hero.subtitle_line2': 'SCALABLE PIPELINES //',
            'hero.subtitle_line3': 'AI PRODUCT DEVELOPMENT',

            // Skills
            'skills.label': 'Status: Active // Skills',
            'skills.langs': 'Programming Languages',
            'skills.cloud': 'Infra',
            'skills.data': 'Data Engineering',
            'skills.ml': 'ML Stack',

            // Home projects
            'home.projects.label': 'Repository Feed // Featured',
            'home.projects.explore': 'explore_all',
            'home.projects.seo_desc': 'Automated content generation tool optimized for SEO performance.',
            'home.projects.openweather_desc': 'Integration with OpenWeather API for real-time meteorological data analysis.',
            'home.projects.scoring_desc': 'Credit scoring model and analysis for banking customer data.',

            // Contact
            'contact.label': 'Status: Online // Contact',
            'contact.prompt': '// Interested in collaboration? Execute the command below.',

            // maxime.py code box (string literals + comment only; keywords stay as code)
            'code.doc_line1': 'Developer bridging the gap between',
            'code.doc_line2': 'models and production, architecting',
            'code.doc_line3': 'scalable data & ML pipelines.',
            'code.role': '"Data / ML Engineer"',
            'code.base': '"India"',
            'code.comment': '# years of experience',
            'code.mission': '"From messy data to reliable predictions, at scale."',

            // Footer / status
            'status.online': 'System Status: Online',
            'status.copenhagen': 'India',
            'footer.copy': '© 2026 Arnav Khandelwal. Built with code.',

            // Projects page
            'projects.label': 'Repository Feed // GitHub API',
            'projects.title_line1': 'OPEN SOURCE',
            'projects.title_line2': '/ PROJECTS',
            'projects.subtitle': 'A collection of data engineering, ML, and analytics projects — sorted by stars.',
            'projects.briefing_label': 'System Briefing',
            'projects.briefing_text': 'Repositories fetched live from GitHub API, sorted by community interest.',
            'projects.source': 'Source',
            'projects.status': 'Status',
            'projects.status_online': 'Online',
            'projects.loading': '_fetching_data_from_github...',
            'projects.git_cmd': '> git fetch origin master --sort=stars',
            'projects.live_link': 'Live ↗',
            'projects.source_link': 'GitHub ↗',

            // Blog page
            'blog.label': 'Publication Feed // Medium RSS',
            'blog.title_line1': 'ARTICLES',
            'blog.title_line2': '& ANALYSES',
            'blog.subtitle': 'Writing on data engineering, machine learning, and the systems that power modern AI products.',
            'blog.briefing_label': 'System Briefing',
            'blog.briefing_text': 'Articles on scalable data pipelines, ML engineering, and production AI systems.',
            'blog.channel': 'Channel',
            'blog.status': 'Status',
            'blog.status_online': 'Online',
            'blog.loading': '_establishing_connection_to_rss_feed...',

            // CV page
            'cv.label': 'System Profile // Work History',
            'cv.title_line1': 'CAREER /',
            'cv.title_line2': 'EXPERIENCE',
            'cv.subtitle': '5 years building data and ML systems at scale — from pipelines to production models.',
            'cv.briefing_label': 'System Briefing',
            'cv.briefing_text': 'Work history loaded from experience.json — roles, achievements, and tech stacks.',
            'cv.experience': 'Experience',
            'cv.years': '5 yrs',
            'cv.base': 'Base',
            'cv.loading': '_fetching_experience_data...',
            'cv.download': '[ DOWNLOAD_RESUME_PDF ]',
        },

        es: {
            'nav.tagline': 'Ingeniero de Datos // Copenhague',
            'nav.about': 'Sobre mí',
            'nav.projects': 'Proyectos',
            'nav.blog': 'Blog',
            'nav.resume': 'Currículum',
            'nav.theme_title': 'Cambiar tema',
            'nav.lang_title': 'Cambiar idioma',
            'nav.menu_aria': 'Alternar navegación',

            'title.home': 'Maxime Haegeman | Ingeniero de Datos',
            'title.projects': 'Maxime | Proyectos',
            'title.blog': 'Maxime | Blog',
            'title.resume': 'Maxime | Currículum',

            'hero.label': 'Maxime Haegeman // Ingeniero de Datos // Copenhague',
            'hero.subtitle_line1': 'INGENIERO SENIOR DE DATOS Y ML //',
            'hero.subtitle_line2': 'PIPELINES ESCALABLES //',
            'hero.subtitle_line3': 'DESARROLLO DE PRODUCTOS DE IA',

            'skills.label': 'Estado: Activo // Habilidades',
            'skills.langs': 'Lenguajes de Programación',
            'skills.cloud': 'Cloud e Infraestructura',
            'skills.data': 'Ingeniería de Datos',
            'skills.ml': 'Stack de ML',
            'skills.mon': 'Monitorización',
            'skills.pm': 'Gestión de Proyectos',

            'home.projects.label': 'Feed de Repositorios // Destacados',
            'home.projects.explore': 'explorar_todo',
            'home.projects.seo_desc': 'Herramienta automatizada de generación de contenido optimizada para SEO.',
            'home.projects.openweather_desc': 'Integración con la API OpenWeather para análisis meteorológico en tiempo real.',
            'home.projects.scoring_desc': 'Modelo de scoring crediticio y análisis para datos de clientes bancarios.',

            'contact.label': 'Estado: En línea // Contacto',
            'contact.prompt': '// ¿Interesado en colaborar? Ejecuta el comando de abajo.',

            'code.doc_line1': 'Desarrollador que tiende puentes entre',
            'code.doc_line2': 'modelos y producción, diseñando',
            'code.doc_line3': 'pipelines de datos y ML escalables.',
            'code.role': '"Ingeniero Senior de Datos / ML"',
            'code.base': '"Copenhague, Dinamarca"',
            'code.comment': '# años de experiencia',
            'code.mission': '"De datos caóticos a predicciones fiables, a escala."',

            'status.online': 'Estado del sistema: En línea',
            'status.copenhagen': 'Copenhague',
            'footer.copy': '© 2025 Maxime Haegeman. Hecho con código.',

            'projects.label': 'Feed de Repositorios // GitHub API',
            'projects.title_line1': 'OPEN SOURCE',
            'projects.title_line2': '/ PROYECTOS',
            'projects.subtitle': 'Una colección de proyectos de ingeniería de datos, ML y analítica — ordenados por estrellas.',
            'projects.briefing_label': 'Informe del sistema',
            'projects.briefing_text': 'Repositorios obtenidos en vivo desde la API de GitHub, ordenados por interés de la comunidad.',
            'projects.source': 'Fuente',
            'projects.status': 'Estado',
            'projects.status_online': 'En línea',
            'projects.loading': '_obteniendo_datos_de_github...',
            'projects.git_cmd': '> git fetch origin master --sort=stars',
            'projects.live_link': 'En vivo ↗',
            'projects.source_link': 'GitHub ↗',

            'blog.label': 'Feed de Publicaciones // Medium RSS',
            'blog.title_line1': 'ARTÍCULOS',
            'blog.title_line2': 'Y ANÁLISIS',
            'blog.subtitle': 'Escribo sobre ingeniería de datos, aprendizaje automático y los sistemas que impulsan los productos de IA modernos.',
            'blog.briefing_label': 'Informe del sistema',
            'blog.briefing_text': 'Artículos sobre pipelines de datos escalables, ingeniería de ML y sistemas de IA en producción.',
            'blog.channel': 'Canal',
            'blog.status': 'Estado',
            'blog.status_online': 'En línea',
            'blog.loading': '_estableciendo_conexión_con_rss...',

            'cv.label': 'Perfil del Sistema // Historial Laboral',
            'cv.title_line1': 'TRAYECTORIA /',
            'cv.title_line2': 'EXPERIENCIA',
            'cv.subtitle': '5 años construyendo sistemas de datos y ML a escala — desde pipelines hasta modelos en producción.',
            'cv.briefing_label': 'Informe del sistema',
            'cv.briefing_text': 'Historial cargado desde experience.json — roles, logros y stacks tecnológicos.',
            'cv.experience': 'Experiencia',
            'cv.years': '5 años',
            'cv.base': 'Base',
            'cv.loading': '_obteniendo_datos_de_experiencia...',
            'cv.download': '[ DESCARGAR_CV_PDF ]',
        },

        fr: {
            'nav.tagline': 'Ingénieur Data // Copenhague',
            'nav.about': 'À propos',
            'nav.projects': 'Projets',
            'nav.blog': 'Blog',
            'nav.resume': 'CV',
            'nav.theme_title': 'Changer de thème',
            'nav.lang_title': 'Changer de langue',
            'nav.menu_aria': 'Basculer la navigation',

            'title.home': 'Maxime Haegeman | Ingénieur Data',
            'title.projects': 'Maxime | Projets',
            'title.blog': 'Maxime | Blog',
            'title.resume': 'Maxime | CV',

            'hero.label': 'Maxime Haegeman // Ingénieur Data // Copenhague',
            'hero.subtitle_line1': 'INGÉNIEUR SENIOR DATA & ML //',
            'hero.subtitle_line2': 'PIPELINES SCALABLES //',
            'hero.subtitle_line3': 'DÉVELOPPEMENT DE PRODUITS IA',

            'skills.label': 'Statut : Actif // Compétences',
            'skills.langs': 'Langages de programmation',
            'skills.cloud': 'Cloud & Infra',
            'skills.data': 'Data Engineering',
            'skills.ml': 'Stack ML',
            'skills.mon': 'Monitoring',
            'skills.pm': 'Gestion de projet',

            'home.projects.label': 'Flux de dépôts // Sélection',
            'home.projects.explore': 'tout_explorer',
            'home.projects.seo_desc': 'Outil de génération de contenu automatisé optimisé pour la performance SEO.',
            'home.projects.openweather_desc': 'Intégration avec l\u2019API OpenWeather pour l\u2019analyse de données météorologiques en temps réel.',
            'home.projects.scoring_desc': 'Modèle de scoring crédit et analyse de données clients bancaires.',

            'contact.label': 'Statut : En ligne // Contact',
            'contact.prompt': '// Intéressé par une collaboration ? Exécutez la commande ci-dessous.',

            'code.doc_line1': 'Développeur faisant le lien entre',
            'code.doc_line2': 'modèles et production, architecturant',
            'code.doc_line3': 'des pipelines data & ML scalables.',
            'code.role': '"Ingénieur Senior Data / ML"',
            'code.base': '"Copenhague, Danemark"',
            'code.comment': '# années d\u2019expérience',
            'code.mission': '"Des données désordonnées aux prédictions fiables, à grande échelle."',

            'status.online': 'État du système : En ligne',
            'status.copenhagen': 'Copenhague',
            'footer.copy': '© 2025 Maxime Haegeman. Conçu avec du code.',

            'projects.label': 'Flux de dépôts // API GitHub',
            'projects.title_line1': 'OPEN SOURCE',
            'projects.title_line2': '/ PROJETS',
            'projects.subtitle': 'Une collection de projets data engineering, ML et analytics — triés par étoiles.',
            'projects.briefing_label': 'Briefing système',
            'projects.briefing_text': 'Dépôts récupérés en direct via l\u2019API GitHub, triés selon l\u2019intérêt de la communauté.',
            'projects.source': 'Source',
            'projects.status': 'Statut',
            'projects.status_online': 'En ligne',
            'projects.loading': '_récupération_des_données_github...',
            'projects.git_cmd': '> git fetch origin master --sort=stars',
            'projects.live_link': 'En direct ↗',
            'projects.source_link': 'GitHub ↗',

            'blog.label': 'Flux de publications // Medium RSS',
            'blog.title_line1': 'ARTICLES',
            'blog.title_line2': '& ANALYSES',
            'blog.subtitle': 'J\u2019écris sur le data engineering, le machine learning et les systèmes qui font tourner les produits IA modernes.',
            'blog.briefing_label': 'Briefing système',
            'blog.briefing_text': 'Articles sur les pipelines de données scalables, l\u2019ingénierie ML et les systèmes IA en production.',
            'blog.channel': 'Canal',
            'blog.status': 'Statut',
            'blog.status_online': 'En ligne',
            'blog.loading': '_connexion_au_flux_rss...',

            'cv.label': 'Profil système // Parcours professionnel',
            'cv.title_line1': 'CARRIÈRE /',
            'cv.title_line2': 'EXPÉRIENCE',
            'cv.subtitle': '5 ans à construire des systèmes data et ML à grande échelle — des pipelines aux modèles en production.',
            'cv.briefing_label': 'Briefing système',
            'cv.briefing_text': 'Historique chargé depuis experience.json — rôles, réalisations et stacks techniques.',
            'cv.experience': 'Expérience',
            'cv.years': '5 ans',
            'cv.base': 'Base',
            'cv.loading': '_récupération_des_données_d_expérience...',
            'cv.download': '[ TÉLÉCHARGER_CV_PDF ]',
        },

        da: {
            'nav.tagline': 'Data Engineer // København',
            'nav.about': 'Om mig',
            'nav.projects': 'Projekter',
            'nav.blog': 'Blog',
            'nav.resume': 'CV',
            'nav.theme_title': 'Skift tema',
            'nav.lang_title': 'Skift sprog',
            'nav.menu_aria': 'Skift navigation',

            'title.home': 'Maxime Haegeman | Data Engineer',
            'title.projects': 'Maxime | Projekter',
            'title.blog': 'Maxime | Blog',
            'title.resume': 'Maxime | CV',

            'hero.label': 'Maxime Haegeman // Data Engineer // København',
            'hero.subtitle_line1': 'SENIOR DATA- OG ML-ENGINEER //',
            'hero.subtitle_line2': 'SKALERBARE PIPELINES //',
            'hero.subtitle_line3': 'UDVIKLING AF AI-PRODUKTER',

            'skills.label': 'Status: Aktiv // Kompetencer',
            'skills.langs': 'Programmeringssprog',
            'skills.cloud': 'Cloud & Infrastruktur',
            'skills.data': 'Data Engineering',
            'skills.ml': 'ML-stak',
            'skills.mon': 'Overvågning',
            'skills.pm': 'Projektledelse',

            'home.projects.label': 'Repository-feed // Udvalgte',
            'home.projects.explore': 'udforsk_alt',
            'home.projects.seo_desc': 'Automatiseret værktøj til indholdsgenerering optimeret til SEO.',
            'home.projects.openweather_desc': 'Integration med OpenWeather API til realtidsanalyse af vejrdata.',
            'home.projects.scoring_desc': 'Kreditscoringmodel og analyse af bankkundedata.',

            'contact.label': 'Status: Online // Kontakt',
            'contact.prompt': '// Interesseret i samarbejde? Kør kommandoen nedenfor.',

            'code.doc_line1': 'Udvikler der bygger bro mellem',
            'code.doc_line2': 'modeller og produktion, og arkitekt for',
            'code.doc_line3': 'skalerbare data- og ML-pipelines.',
            'code.role': '"Senior Data- / ML-Engineer"',
            'code.base': '"København, Danmark"',
            'code.comment': '# års erfaring',
            'code.mission': '"Fra rodede data til pålidelige forudsigelser, i stor skala."',

            'status.online': 'Systemstatus: Online',
            'status.copenhagen': 'København',
            'footer.copy': '© 2025 Maxime Haegeman. Bygget med kode.',

            'projects.label': 'Repository-feed // GitHub API',
            'projects.title_line1': 'OPEN SOURCE',
            'projects.title_line2': '/ PROJEKTER',
            'projects.subtitle': 'En samling af data engineering-, ML- og analyseprojekter — sorteret efter stjerner.',
            'projects.briefing_label': 'System-briefing',
            'projects.briefing_text': 'Repositories hentet live via GitHub API, sorteret efter fællesskabets interesse.',
            'projects.source': 'Kilde',
            'projects.status': 'Status',
            'projects.status_online': 'Online',
            'projects.loading': '_henter_data_fra_github...',
            'projects.git_cmd': '> git fetch origin master --sort=stars',
            'projects.live_link': 'Live ↗',
            'projects.source_link': 'GitHub ↗',

            'blog.label': 'Publikationsfeed // Medium RSS',
            'blog.title_line1': 'ARTIKLER',
            'blog.title_line2': '& ANALYSER',
            'blog.subtitle': 'Skriverier om data engineering, machine learning og systemerne bag moderne AI-produkter.',
            'blog.briefing_label': 'System-briefing',
            'blog.briefing_text': 'Artikler om skalerbare data-pipelines, ML-engineering og AI-systemer i produktion.',
            'blog.channel': 'Kanal',
            'blog.status': 'Status',
            'blog.status_online': 'Online',
            'blog.loading': '_opretter_forbindelse_til_rss...',

            'cv.label': 'Systemprofil // Arbejdshistorik',
            'cv.title_line1': 'KARRIERE /',
            'cv.title_line2': 'ERFARING',
            'cv.subtitle': '5 år med at bygge data- og ML-systemer i stor skala — fra pipelines til produktionsmodeller.',
            'cv.briefing_label': 'System-briefing',
            'cv.briefing_text': 'Arbejdshistorik indlæst fra experience.json — roller, resultater og teknologistakke.',
            'cv.experience': 'Erfaring',
            'cv.years': '5 år',
            'cv.base': 'Base',
            'cv.loading': '_henter_erfaringsdata...',
            'cv.download': '[ HENT_CV_PDF ]',
        },
    };

    const DEFAULT_LANG = 'en';
    const STORAGE_KEY = 'lang';

    // ─────────────────────────────────────────────────────────────
    // Greetings used by the looping hero typewriter (not UI state).
    // Order matches the user's request.
    // ─────────────────────────────────────────────────────────────
    const GREETINGS = [
        { lang: 'en', text: 'Hi, I am Arnav !',       dir: 'ltr' },
        { lang: 'es', text: '¡Hola, soy Arnav !',     dir: 'ltr' },
        { lang: 'fr', text: 'Salut, je suis Arnav !', dir: 'ltr' },
        { lang: 'de', text: 'Hallo, ich bin Arnav !', dir: 'ltr' },
        { lang: 'it', text: 'Ciao, sono Arnav !',     dir: 'ltr' },
        { lang: 'pt', text: 'Olá, eu sou o Arnav !',  dir: 'ltr' },
        { lang: 'zh', text: '你好，我是 Arnav ！',     dir: 'ltr' },
        { lang: 'ja', text: 'こんにちは、Arnavです ！', dir: 'ltr' },
        { lang: 'da', text: 'Hej, jeg hedder Arnav !', dir: 'ltr' },
        { lang: 'hi', text: 'नमस्ते, मैं Arnav हूँ !',      dir: 'ltr' },
    ];

    // ─────────────────────────────────────────────────────────────
    // Core helpers
    // ─────────────────────────────────────────────────────────────
    function getLang() {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved && TRANSLATIONS[saved]) return saved;
        return DEFAULT_LANG;
    }

    function t(key, lang) {
        lang = lang || getLang();
        const dict = TRANSLATIONS[lang] || TRANSLATIONS[DEFAULT_LANG];
        if (Object.prototype.hasOwnProperty.call(dict, key)) return dict[key];
        // Fallback to English
        const enDict = TRANSLATIONS[DEFAULT_LANG];
        if (Object.prototype.hasOwnProperty.call(enDict, key)) return enDict[key];
        return key;
    }

    // Apply translations to any element with [data-i18n] inside `root` (default: document).
    // Supports:
    //   data-i18n="key"              → textContent
    //   data-i18n-attr="title:key;aria-label:key2"   → attributes
    function applyTranslations(root) {
        const scope = root || document;
        const lang = getLang();

        // Text nodes
        scope.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (!key) return;
            el.textContent = t(key, lang);
        });

        // Attribute translations
        scope.querySelectorAll('[data-i18n-attr]').forEach(el => {
            const spec = el.getAttribute('data-i18n-attr');
            if (!spec) return;
            spec.split(';').forEach(pair => {
                const parts = pair.split(':').map(s => s.trim());
                if (parts.length !== 2) return;
                const [attr, key] = parts;
                el.setAttribute(attr, t(key, lang));
            });
        });

        // <title> element if it has data-i18n
        const titleEl = document.querySelector('title[data-i18n]');
        if (titleEl) {
            const key = titleEl.getAttribute('data-i18n');
            document.title = t(key, lang);
        }

        document.documentElement.setAttribute('lang', lang);
    }

    function setLang(lang) {
        if (!TRANSLATIONS[lang]) return;
        localStorage.setItem(STORAGE_KEY, lang);
        applyTranslations();
        updateLangButton();
        // Notify listeners (e.g. dynamic loaders, typewriter restart hooks)
        window.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
    }

    function updateLangButton() {
        const btn = document.getElementById('lang-toggle');
        if (!btn) return;
        const lang = getLang();
        const entry = LANGS.find(l => l.code === lang) || LANGS[0];
        btn.textContent = entry.label + ' ▾';
        btn.setAttribute('aria-label', t('nav.lang_title') + ': ' + entry.name);

        // Mark active option in menu
        const menu = document.getElementById('lang-menu');
        if (menu) {
            menu.querySelectorAll('[data-lang]').forEach(opt => {
                opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
            });
        }
    }

    // ─────────────────────────────────────────────────────────────
    // Build the language switcher UI and inject into .nav-controls
    // ─────────────────────────────────────────────────────────────
    function initLangSwitcher() {
        const navControls = document.querySelector('.nav-controls');
        if (!navControls) return;
        if (document.getElementById('lang-toggle')) return; // already built

        const wrap = document.createElement('div');
        wrap.className = 'lang-switcher';

        const btn = document.createElement('button');
        btn.id = 'lang-toggle';
        btn.className = 'lang-toggle';
        btn.type = 'button';
        btn.setAttribute('aria-haspopup', 'listbox');
        btn.setAttribute('aria-expanded', 'false');

        const menu = document.createElement('ul');
        menu.id = 'lang-menu';
        menu.className = 'lang-menu';
        menu.setAttribute('role', 'listbox');

        LANGS.forEach(l => {
            const li = document.createElement('li');
            li.setAttribute('role', 'option');
            li.setAttribute('data-lang', l.code);
            li.className = 'lang-option';
            li.innerHTML = `<span class="lang-flag">${l.flag}</span><span class="lang-name">${l.name}</span>`;
            // l.flag is trusted (inline SVG defined in this file, not user input).
            li.addEventListener('click', (ev) => {
                ev.stopPropagation();
                setLang(l.code);
                closeMenu();
            });
            menu.appendChild(li);
        });

        wrap.appendChild(btn);
        wrap.appendChild(menu);

        // Insert BEFORE the theme toggle so order is: menu ☰ | EN▾ | ☀
        const themeBtn = document.getElementById('theme-toggle');
        if (themeBtn && themeBtn.parentNode === navControls) {
            navControls.insertBefore(wrap, themeBtn);
        } else {
            navControls.appendChild(wrap);
        }

        function openMenu() {
            menu.classList.add('open');
            btn.setAttribute('aria-expanded', 'true');
        }
        function closeMenu() {
            menu.classList.remove('open');
            btn.setAttribute('aria-expanded', 'false');
        }

        btn.addEventListener('click', (ev) => {
            ev.stopPropagation();
            if (menu.classList.contains('open')) closeMenu(); else openMenu();
        });

        document.addEventListener('click', (ev) => {
            if (!wrap.contains(ev.target)) closeMenu();
        });

        document.addEventListener('keydown', (ev) => {
            if (ev.key === 'Escape') closeMenu();
        });

        updateLangButton();
    }

    // ─────────────────────────────────────────────────────────────
    // Hero typewriter: cycles through all greetings, loops forever.
    // Respects prefers-reduced-motion (shows current UI-lang greeting, static).
    // ─────────────────────────────────────────────────────────────
    function initTypewriterCycle() {
        const el = document.getElementById('typewriter');
        if (!el) return;

        const reduceMotion = window.matchMedia &&
            window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (reduceMotion) {
            // Pick the UI-language greeting if we have one, else English.
            const ui = getLang();
            const pick = GREETINGS.find(g => g.lang === ui) || GREETINGS[0];
            el.textContent = pick.text;
            el.setAttribute('dir', pick.dir);
            return;
        }

        const TYPE_SPEED = 90;    // ms per char typing
        const ERASE_SPEED = 45;   // ms per char erasing
        const HOLD_AFTER = 1400;  // pause after fully typed
        const PAUSE_BETWEEN = 250; // pause after fully erased

        let idx = 0;

        function typeOne() {
            const g = GREETINGS[idx];
            el.setAttribute('dir', g.dir);
            el.setAttribute('lang', g.lang);
            // Use Array.from to split by grapheme for multi-byte chars (CJK, emoji-safe)
            const chars = Array.from(g.text);
            let i = 0;
            el.textContent = '';

            function step() {
                if (i < chars.length) {
                    el.textContent += chars[i];
                    i++;
                    setTimeout(step, TYPE_SPEED);
                } else {
                    setTimeout(eraseOne, HOLD_AFTER);
                }
            }
            step();
        }

        function eraseOne() {
            const current = Array.from(el.textContent);
            let i = current.length;

            function step() {
                if (i > 0) {
                    i--;
                    el.textContent = current.slice(0, i).join('');
                    setTimeout(step, ERASE_SPEED);
                } else {
                    idx = (idx + 1) % GREETINGS.length;
                    setTimeout(typeOne, PAUSE_BETWEEN);
                }
            }
            step();
        }

        typeOne();
    }

    // ─────────────────────────────────────────────────────────────
    // Public API
    // ─────────────────────────────────────────────────────────────
    window.i18n = {
        t,
        getLang,
        setLang,
        applyTranslations,
        LANGS,
        GREETINGS,
        // Return a localized project { title, desc } for the given repo name, or null.
        getProject(repoName) {
            const entry = PROJECTS[repoName];
            if (!entry) return null;
            const lang = getLang();
            return entry[lang] || entry[DEFAULT_LANG] || null;
        },
        // Return ordered experience entries, each fully localized for the active language.
        getExperience() {
            const lang = getLang();
            return EXPERIENCE_ORDER.map((id) => {
                const e = EXPERIENCE[id];
                const loc = e[lang] || e[DEFAULT_LANG];
                return { id, ...e.common, ...loc };
            });
        },
    };

    // Auto-init
    document.addEventListener('DOMContentLoaded', () => {
        applyTranslations();
        initLangSwitcher();
        initTypewriterCycle();
    });
})();
