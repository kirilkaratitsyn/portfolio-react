import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      hero: {
        eyebrow: "Shopify Developer",
        topRated: "Top Rated on Upwork",
        title: "I build Shopify stores that",
        titleAccent: "convert, scale, and stay easy to manage.",
        subtitle: "Custom themes, Online Store 2.0 migrations, integrations, CRO-focused storefront work, and long-term support for brands that need more than a generic setup.",
        description: "Cleaner UX, faster pages, stronger merchandising, and custom Shopify work that stays easy to run.",
        book_call: "Book a Call",
        send_message: "Send me a message",
        proofItems: [
          "5-star Upwork reviews from recent Shopify clients.",
          "Hands-on work across custom builds, migrations, CRO, and support retainers.",
          "Focused on Shopify-first execution with clean UX and reliable releases."
        ],
        or: "or",
        words: ["Developer", "Magician", "Expert", "Master", "Specialist", "Guru", "Virtuoso", "Maestro"]
      },
      about: {
        eyebrow: "Why Shopify Teams Hire Me",
        title: "A Shopify partner for growth-minded brands",
        text: "I turn business goals into Shopify storefronts that are clean, maintainable, and built to keep improving after launch.",
        statYearLabel: "Years shipping Shopify work",
        statProjectsLabel: "Projects delivered",
        statHoursLabel: "Upwork hours worked",
        lets_work: "Let's Work Together"
      },
      services: {
        eyebrow: "Services",
        title: "Shopify Services",
        subtitle: "Focused Shopify support for launches, growth, and custom storefront work.",
        items: [
          {
            id: "store-setup",
            title: "Shopify Store Setup From Scratch",
            description: "Launch a new store with a clean theme structure, flexible sections, and admin-friendly content—aligned to your brand before you scale."
          },
          {
            id: "platform-migration",
            title: "Platform Migration",
            description: "Move from WooCommerce, Magento, custom stacks, or legacy Shopify themes to Online Store 2.0 without losing SEO, redirects, or critical customer flows."
          },
          {
            id: "app-integration",
            title: "App Integration for Shopify",
            description: "Connect apps, subscriptions, payments, CRMs, and custom APIs so storefront, cart, and admin stay reliable and easy to operate."
          },
          {
            id: "performance-seo",
            title: "Performance & SEO Optimization",
            description: "Improve Core Web Vitals and perceived speed with leaner Liquid and assets, plus technical SEO foundations—structured data, metadata, and crawl-friendly templates."
          },
          {
            id: "cro-audit",
            title: "Conversion & UX Optimization Audit",
            description: "Review funnels, UX friction, and merchandising gaps—then ship prioritized fixes that lift conversion without a full rebuild."
          },
          {
            id: "support",
            title: "Ongoing Support and Maintenance",
            description: "Retainers for launches, bug fixes, theme updates, and iteration so your team can focus on growth while the storefront stays stable."
          }
        ]
      },
      caseStudies: {
        eyebrow: "Case Studies",
        title: "Featured Work",
        subtitle: "A few deeper Shopify projects, from custom builds to migrations.",
        viewCase: "View Case Study",
        visitStore: "Visit Store",
        backToCases: "Back to all projects",
        notFound: "Case study not found.",
        mediaTitle: "Media",
        desktopLabel: "Desktop",
        mobileLabel: "Mobile",
        mobilePlaceholder: "Mobile version placeholder. A dedicated mobile preview will be added here later.",
        aboutBrandTitle: "About the brand",
        readMore: "Read more",
        challengeTitle: "Challenge",
        scopeTitle: "Scope",
        solutionTitle: "Solution",
        stackTitle: "Stack & capabilities",
        outcomeTitle: "Outcome",
        screenshotTitle: "Project highlights",
        moreProjectsTitle: "More Shopify projects",
        moreProjectsSubtitle: "A broader sample of Shopify work across migrations, CRO, support, custom sections, and storefront enhancements.",
        items: [
          {
            id: "nimfa",
            slug: "nimfa",
            title: "Nimfa",
            summary: "A premium sex shop needed a custom Shopify build from Figma with multilingual support, scalable sections, and a storefront polished enough to launch as a premium product.",
            brandSummary: "Nimfa is a premium intimate wellness brand and sex shop built around discreet, stylish, and shame-free self-care for women.",
            brandDescription: "Nimfa positions intimacy as something natural, elegant, and free from judgment. The brand presents intimate wellness and pleasure products in a softer premium context, with a focus on self-acceptance, privacy, and a shopping experience that feels closer to modern self-care than to a traditional adult store.",
            image: "/source/desktop/nimfa-desktop.webp",
            mobileImage: "/source/mobile/nimfa-mobile.webp",
            liveUrl: "https://nimfa.nl/",
            tags: ["Custom Theme", "Multilingual", "Figma to Shopify"],
            challenge: "The store needed to feel premium from day one while staying manageable for the client team. That meant translating a detailed design into Shopify without sacrificing flexibility, multilingual structure, or future content control.",
            scope: [
              "Build a custom Shopify theme from scratch based on Figma.",
              "Create flexible sections for landing, product, and editorial content.",
              "Support multilingual storefront content and admin-friendly updates."
            ],
            solution: [
              "Implemented a pixel-accurate storefront with reusable theme sections and templates.",
              "Built blog and upsell functionality directly into the theme so content and merchandising could grow together.",
              "Structured the setup so the client could manage content changes without depending on code for every update."
            ],
            outcome: [
              "Delivered a premium Shopify storefront aligned with the original design direction.",
              "Made multilingual growth easier by building the content structure into the theme from the start.",
              "Set up the store for future merchandising and editorial updates without a rebuild."
            ],
            stack: ["Shopify", "Liquid", "Theme sections", "Multilingual setup", "Figma implementation"],
            screenshotCaptions: [
              "Custom storefront styling aligned closely to the approved Figma direction.",
              "Theme architecture designed for repeated content changes without code edits.",
              "Multilingual-ready setup for a premium Shopify brand."
            ]
          },
          {
            id: "indian-affairs",
            slug: "indian-affairs",
            title: "Indian Affairs",
            summary: "A legacy store needed to move to Shopify Online Store 2.0 while preserving structure, rebuilding custom functionality, and cleaning up the experience across the site.",
            brandSummary: "Indian Affairs is a fashion brand for children and adults, known for timeless pieces, natural materials, and handcrafted details rooted in Indian textile traditions.",
            brandDescription: "Indian Affairs offers clothing and accessories across kidswear and adult categories, with a strong focus on timeless design, soft materials, and artisanal character. Many pieces highlight techniques such as hand block printing and emphasize a slower, more thoughtful product feel than fast-moving trend fashion.",
            image: "/source/desktop/indian-affairs-desktop.webp",
            mobileImage: "/source/mobile/indian-affairs-mobile.webp",
            liveUrl: "https://indianaffairs.de/",
            tags: ["Migration", "Online Store 2.0", "Theme rebuild"],
            challenge: "The migration could not be treated like a visual refresh alone. Content, custom logic, and day-to-day store operations had to survive the move to a newer architecture without introducing instability.",
            scope: [
              "Migrate the storefront from a legacy setup to Shopify Online Store 2.0.",
              "Transfer content and rebuild custom behavior in the new theme architecture.",
              "Align styling, UX, and core customer journeys across the site."
            ],
            solution: [
              "Rebuilt key functionality inside the OS 2.0 structure instead of patching legacy behavior forward.",
              "Preserved important content relationships and store logic during migration.",
              "Used the migration as an opportunity to clean up UX and improve maintainability."
            ],
            outcome: [
              "Moved the store onto a more scalable Shopify architecture.",
              "Reduced the risk of launch regressions by rebuilding critical flows deliberately.",
              "Left the client with a cleaner foundation for future storefront updates."
            ],
            stack: ["Shopify OS 2.0", "Liquid", "Template migration", "UX refinement", "Launch QA"],
            screenshotCaptions: [
              "Migration work focused on preserving structure while modernizing the theme base.",
              "Custom requirements rebuilt for a more maintainable Shopify setup.",
              "UX and styling aligned during the move instead of postponed for later."
            ]
          },
          {
            id: "silk-tallow",
            slug: "silk-tallow",
            title: "Silk Tallow",
            summary: "The store needed advanced Mystery Gift and Free Gift logic that felt native to the storefront, updated instantly, and handled cart edge cases without page reloads.",
            brandSummary: "Silk Tallow is a natural skincare brand centered on tallow-based formulas, simple ingredients, and toxin-free routines inspired by nature.",
            brandDescription: "Silk Tallow is positioned around natural simplicity and skincare without artificial ingredients. The brand ties its products to nourishment, protection, and a return to slower, cleaner routines, using tallow-based formulas as the core of a more minimal and nature-led skincare philosophy.",
            image: "/source/desktop/silk-tallow-desktop.webp",
            mobileImage: "/source/mobile/silk-tallow-mobile.webp",
            liveUrl: "https://silktallow.com/",
            tags: ["Custom Logic", "Cart UX", "Merchandising"],
            challenge: "Gift logic often breaks UX when it depends on clunky reloads or fragile scripts. The implementation needed to feel smooth for customers while still respecting cart rules and promotional edge cases.",
            scope: [
              "Implement dynamic Mystery Gift and Free Gift storefront logic.",
              "Integrate the experience into the existing design without making it feel bolted on.",
              "Handle cart rules, promotional triggers, and edge cases cleanly."
            ],
            solution: [
              "Built storefront behavior that updates gifts without forcing page reloads.",
              "Integrated promotional logic directly into the customer flow instead of hiding it in disconnected messaging.",
              "Covered rule handling and cart behavior so the experience stayed predictable during real shopping sessions."
            ],
            outcome: [
              "Created a smoother promotional experience inside the cart and storefront.",
              "Made advanced gift logic feel like part of the core product experience.",
              "Improved merchandising flexibility without compromising storefront stability."
            ],
            stack: ["Shopify", "Liquid", "JavaScript", "Cart logic", "Promotional UX"],
            screenshotCaptions: [
              "Advanced gift logic designed to feel native inside the storefront.",
              "Cart behavior built to update dynamically instead of relying on reload-heavy flows.",
              "Promotion handling structured for edge cases and real-world usage."
            ]
          },
          {
            id: "bazar-bizar",
            slug: "bazar-bizar",
            title: "Bazar Bizar",
            summary: "A full custom Shopify theme rebuild based on a Figma redesign, while carrying over the live store's functionality into a cleaner, more modern storefront experience.",
            brandSummary: "Bazar Bizar is an interior and lifestyle brand rooted in Antwerp and Bali, known for handcrafted homeware, furniture, lighting, and decor shaped by travel, craftsmanship, and fair-trade values.",
            brandDescription: "Bazar Bizar presents itself as a home and lifestyle brand born from a passion for travel, with flagship roots in Antwerp and Bali. Its collections combine traditional craftsmanship with contemporary interiors, blending handmade character, coastal warmth, and fair-trade principles across furniture, lighting, tableware, textiles, and decorative pieces.",
            image: "/source/desktop/bazar-bizar-desktop.webp",
            mobileImage: "/source/mobile/bazar-bizar-mobile.webp",
            liveUrl: "https://bazarbizar.be/",
            tags: ["Custom Theme", "Redesign", "Figma to Shopify"],
            challenge: "The project was not just about making the store look different. The new theme had to follow the updated Figma direction while preserving the functionality customers and the client team already relied on in the live store.",
            scope: [
              "Build a fully custom Shopify theme based on the new Figma redesign.",
              "Carry over important live-store functionality into the rebuilt storefront.",
              "Improve structure, maintainability, and consistency while updating the visual direction."
            ],
            solution: [
              "Rebuilt the storefront as a custom Shopify theme instead of layering redesign changes on top of the old implementation.",
              "Mapped existing functionality from the live store into the new theme so key customer-facing behavior remained intact.",
              "Used the redesign as a chance to clean up theme structure and deliver a more maintainable foundation."
            ],
            outcome: [
              "Delivered a redesigned Shopify storefront based on Figma without losing important live-store functionality.",
              "Created a cleaner and more flexible theme base for future updates.",
              "Improved the store's long-term maintainability while preserving the customer experience."
            ],
            stack: ["Shopify", "Liquid", "Custom theme development", "Figma implementation", "Theme architecture"],
            screenshotCaptions: [
              "Custom Shopify theme rebuilt around the approved Figma redesign.",
              "Live-store functionality preserved while the storefront experience was redesigned.",
              "Cleaner theme structure delivered as part of the rebuild, not postponed until later."
            ]
          },
          {
            id: "elanora-skin",
            slug: "elanora-skin",
            title: "Elanora Skin",
            summary: "An ongoing Shopify project where I have been supporting the store for the last six months as their Shopify expert, shipping multi-market storefront logic and retention-focused custom functionality.",
            brandSummary: "élanora is a skincare brand from Breda inspired by Korean skincare traditions and Western simplicity, combining pure ingredients with modern formulas for everyday self-care.",
            brandDescription: "élanora frames skincare as both effective care and a daily ritual of calm. The brand mixes Korean skincare inspiration with a cleaner Western aesthetic, positioning its products around glow, routine, and accessible self-care rather than a purely clinical beauty experience.",
            image: "/source/desktop/elanora-skin-desktop.webp",
            mobileImage: "/source/mobile/elanora-skin-mobile.webp",
            liveUrl: "https://elanoraskin.com/",
            tags: ["Ongoing support", "Multi-market", "Klaviyo API"],
            challenge: "The store needed ongoing technical support across multiple markets, with promotional logic that could adapt by market instead of relying on one generic setup. On top of that, the client needed deeper retention functionality, including a custom back-in-stock flow connected through the Klaviyo API.",
            scope: [
              "Support the Shopify storefront as an ongoing technical partner over multiple months.",
              "Implement market-specific announcement, upsell, gift, and free-shipping logic.",
              "Build custom back-in-stock functionality integrated through the Klaviyo API."
            ],
            solution: [
              "Implemented multi-market storefront behavior so promotional messaging and merchandising logic could change depending on the active market.",
              "Built custom upsell and free gift flows that work with different free shipping thresholds across markets.",
              "Added back-in-stock logic through the Klaviyo API to support retention and customer re-engagement beyond standard theme work."
            ],
            outcome: [
              "The store now has more flexible market-specific merchandising and promotional behavior.",
              "Retention functionality was expanded with a custom back-in-stock flow connected to Klaviyo.",
              "Ongoing Shopify support means the store can keep evolving without piling risky ad hoc fixes on top of the theme."
            ],
            stack: ["Shopify", "Liquid", "JavaScript", "Multi-market logic", "Klaviyo API"],
            screenshotCaptions: [
              "Ongoing Shopify support focused on scalable market-specific storefront behavior.",
              "Promotional logic adapted by market instead of relying on one global setup.",
              "Back-in-stock functionality extended through Klaviyo API integration."
            ]
          },
          {
            id: "petaljet",
            slug: "petaljet",
            title: "Petaljet",
            summary: "An ongoing Shopify support project where the work started with a deep SEO audit, performance improvements, and continuous storefront updates that help the store keep evolving instead of standing still.",
            brandSummary: "Petaljet is a wholesale flower supplier for florists and professional designers, shipping farm-direct blooms across the U.S. for weddings, events, and everyday floral programs.",
            brandDescription: "Petaljet is built for B2B flower buying, serving florists, event designers, and other professional buyers with farm-direct wholesale flowers. The brand emphasizes dependable supply, broad category depth, and a workflow that supports recurring orders, large events, and everyday floral operations with less friction.",
            image: "/source/desktop/petaljet-desktop.webp",
            mobileImage: "/source/mobile/petaljet-mobile.webp",
            liveUrl: "https://petaljet.com/",
            tags: ["SEO audit", "Performance", "Ongoing support"],
            challenge: "The store needed more than isolated fixes. It needed an SEO-first technical review, stronger performance on key pages, and ongoing support that could keep the storefront improving over time instead of slowly degrading with scattered updates.",
            scope: [
              "Run an SEO audit and identify technical opportunities that affect visibility and search performance.",
              "Improve storefront performance on important pages and flows.",
              "Stay involved as an ongoing support partner for updates, fixes, and iterative store improvements."
            ],
            solution: [
              "Started with an SEO audit to identify issues and opportunities that could strengthen search visibility.",
              "Implemented performance-focused improvements across key storefront areas to make the store lighter and more reliable.",
              "Continued supporting the store through ongoing updates so improvements could compound instead of being treated like one-off maintenance."
            ],
            outcome: [
              "The project gained a stronger SEO foundation that helped improve search visibility and rankings.",
              "Performance work made the storefront faster and healthier on an ongoing basis.",
              "Continuous support keeps the store evolving and prevents it from going stale between major updates."
            ],
            stack: ["Shopify", "Technical SEO", "Performance optimization", "Storefront support", "Ongoing iteration"],
            screenshotCaptions: [
              "SEO work started with a technical audit rather than guessing at isolated fixes.",
              "Performance improvements were treated as part of the storefront roadmap, not a one-time patch.",
              "Ongoing support keeps the store improving through steady technical evolution."
            ]
          }
        ]
      },
      experience: {
        eyebrow: "Timeline",
        title: "Experience",
        subtitle: "Work, study, and internship experience shaping my Shopify path.",
        placeholderLabel: "Placeholder logo",
        stats: {
          timeline: "Active timeline entries",
          since: "Learning and building since"
        },
        items: [
          {
            kind: "Internship",
            role: "Frontend Developer",
            company: "Funduino GmbH",
            dateRange: "February 2026 - Present",
            location: "Nordhorn, Germany",
            summary: "An ongoing internship as a Frontend Developer at an Arduino-focused learning platform and education brand, contributing to interface and storefront work inside a live company environment.",
            logo: "/source/logos/funduino.jpg",
            logoAlt: "Funduino GmbH logo",
            isPlaceholderLogo: false
          },
          {
            kind: "Education",
            role: "Student",
            company: "KBS Nordhorn",
            dateRange: "2024 - Present",
            location: "Nordhorn, Germany",
            summary: "Studying at Kaufmannische Berufsbildende Schulen Nordhorn since 2024, building a stronger technical and professional foundation alongside real Shopify project work.",
            logo: "/source/logos/kbs-nordhorn.png",
            logoAlt: "KBS Nordhorn logo",
            isPlaceholderLogo: false
          },
          {
            kind: "Work",
            role: "Shopify Developer",
            company: "Collab IT",
            dateRange: "May 2025 - November 2025",
            location: "Remote",
            summary: "Worked as a Shopify Developer on client delivery and storefront implementation. Public company details are currently limited, so the portfolio copy stays intentionally factual and conservative.",
            logo: "/source/logos/collab-it.png",
            logoAlt: "Collab IT logo",
            isPlaceholderLogo: false
          },
          {
            kind: "Work",
            role: "Shopify Developer",
            company: "Great Dev",
            dateRange: "December 2024 - April 2025",
            location: "Remote",
            summary: "Worked on Shopify development in a team setting before the company website became unavailable. The entry is kept concise until an official logo source is available again.",
            logo: "/source/logos/great-dev.png",
            logoAlt: "Great Dev logo",
            isPlaceholderLogo: false
          }
        ]
      },
      works: {
        eyebrow: "Project Catalog",
        title: "More Work",
        subtitle: "A broader mix of Shopify launches, custom builds, and storefront improvements.",
        allWorksTitle: "All Shopify projects",
        allWorksSubtitle: "A full catalog of Shopify work across custom builds, migrations, storefront improvements, merchandising logic, multilingual setups, and ongoing support.",
        loadMore: "See more",
        visitWebsite: "Visit Website",
        viewCase: "View Case Study",
        backHome: "Back to homepage",
        contactCard: {
          title: "Your Project Here",
          text: "Have a project in mind? Let's work together to create a stunning website that helps your business grow online.",
          button: "Contact Me"
        },
        projects: [
          {
            title: "Pair Stich",
            url: "https://pairstitch.pl/",
            image: "/source/desktop/pair-stich-desktop.webp",
            tech: "Implemented a custom color selector that dynamically changes based on clothing type and bypasses the 100 variant limit."
          },
          {
            title: "Haftx",
            url: "https://haftx.com/",
            image: "/source/desktop/haftx-desktop.webp",
            tech: "Developed a custom color selector that adapts to clothing type and overcomes the 100 variant limitation."
          },
          {
            title: "Junofires",
            url: "https://junofires.nl/",
            image: "/source/desktop/junofires-desktop.webp",
            tech: "Optimized filters in a Shopify store, added automatic image display functionality when filtering by color, improving UX and navigation."
          },
          {
            title: "Lerros",
            url: "https://www.lerros.com/",
            image: "/source/desktop/lerros-desktop.webp",
            tech: "Updated the theme in a Shopify store, correctly transferred content and metafields, preserved data structure, and configured product display for stable operation."
          },
          {
            title: "Kiki Green",
            url: "https://kiki-green.com/",
            image: "/source/desktop/kiki-green-desktop.webp",
            tech: "Developed a full-cycle e-commerce solution from scratch, including complete online store creation and integration with various plugins such as loyalty programs and product subscriptions."
          },
        {
          title: "Junior's Cheesecake",
          url: "https://juniorscheesecake.com/",
          image: "/source/desktop/juniors-cheesecake-desktop.webp",
          tech: "Created new custom sections based on Figma design, developed email templates and handling, and implemented serving page functionality."
        },
        {
          title: "Spring Mountain Vineyard",
          url: "https://club.springmountainvineyard.com/",
          image: "/source/desktop/spring-mountain-vineyard-desktop.webp",
          tech: "Redesigned the collection page with improved filter design and product cards, implemented dynamic breadcrumb logic that updates without page refresh for better UX."
        },
        {
          title: "Lunesi",
          url: "https://lunesi.co.uk/",
          image: "/source/desktop/lunesi-desktop.webp",
          tech: "Developed a dynamic cart drawer upsell section that intelligently displays products based on cart contents, fully configurable through the theme editor. Enhanced header with customizable color schemes and a configurable announcement banner for flexible branding and promotions."
        },
          {
            title: "Nimfa",
            url: "https://nimfa.nl/",
            image: "/source/desktop/nimfa-desktop.webp",
            caseStudySlug: "nimfa",
            tech: "Built a custom Shopify theme from scratch with pixel-perfect implementation according to Figma design. Developed blog functionality, upsell sections, and full multilingual support (English, Ukrainian, Dutch) for the premium intimate care brand."
          },
          {
            title: "Melinava",
            url: "https://melinava.nl/",
            image: "/source/desktop/melinava-desktop.webp",
            tech: "Final pre-launch polish and QA before going live. I owned the full “ready for traffic” checklist: key customer journeys, cart and checkout sanity checks, responsive issues, speed, and visual bugs so the site was stable and conversion ready."
          },
          {
            title: "Petaljet",
            url: "https://petaljet.com/",
            image: "/source/desktop/petaljet-desktop.webp",
            caseStudySlug: "petaljet",
            tech: "Ongoing store support within a team. I improve SEO and performance across key pages, ship changes fast, keep releases clean, and handle day to day updates without breaking the storefront."
          },
          {
            title: "Indian Affairs",
            url: "https://indianaffairs.de/",
            image: "/source/desktop/indian-affairs-desktop.webp",
            caseStudySlug: "indian-affairs",
            tech: "Migrated the store from a legacy theme to Shopify Online Store 2.0 (Prestige). I transferred all content, rebuilt custom functionality, implemented client requirements from the spec, and aligned styling and UX across the site."
          },
          {
            title: "SafeTag Tracking",
            url: "https://safetagtracking.com/",
            image: "/source/desktop/safe-tag-tracking-desktop.webp",
            tech: "Custom Shopify theme development from Figma with full customization and multilingual setup. Built flexible sections for easy content management, delivered pixel accurate UI, and set the foundation for scaling pages and markets."
          },
          {
            title: "Virea",
            url: "https://virea.se/",
            image: "/source/desktop/virea-desktop.webp",
            tech: "Implemented a refreshed design for the homepage, product pages, and core templates. I still support the store as their Shopify expert, handling new features, performance optimization, UX improvements, and ongoing technical iterations."
          },
          {
            title: "M-Oceans",
            url: "https://m-oceans.com/",
            image: "/source/desktop/m-oceans-desktop.webp",
            tech: "Migrated from an old theme to Shopify 2.0, carried over custom logic, and improved key storefront flows. I still support the project as their Shopify expert, shipping new functionality and keeping the store stable after launch."
          },
          {
            title: "Elanora Skin",
            url: "https://elanoraskin.com/",
            image: "/source/desktop/elanora-skin-desktop.webp",
            caseStudySlug: "elanora-skin",
            tech: "Ongoing Shopify support for the last six months as the store's Shopify expert. Implemented multi-market announcement banners, market-specific upsell and free gift logic, and different free shipping thresholds for different markets."
          },
          {
            title: "Silk Tallow",
            url: "https://silktallow.com/",
            image: "/source/desktop/silk-tallow-desktop.webp",
            caseStudySlug: "silk-tallow",
            tech: "Built advanced Mystery Gift and Free Gift logic that works without page reloads. Integrated it seamlessly into the storefront design for a smooth experience, including rules, cart behavior, and edge case handling."
          },
          {
            title: "Bella Bloom Box",
            url: "https://bellabloombox.se/",
            image: "/source/desktop/bella-bloom-box-desktop.webp",
            tech: "Built a full Shopify store based on a Lovable design. Translated the design into theme sections and templates, set up content structure, and made it easy for the client to manage without code."
          },
          {
            title: "Bazar Bizar",
            url: "https://bazarbizar.be/",
            image: "/source/desktop/bazar-bizar-desktop.webp",
            caseStudySlug: "bazar-bizar",
            tech: "Worked on a large, complex Shopify store with many templates and custom logic. Delivered deep customization across sections and layouts, implemented functional improvements, and supported larger changes while keeping the site stable."
          }
        ]
      },
      upworkReviews: {
        eyebrow: "Upwork",
        title: "Upwork Reviews",
        subtitle: "A tighter look at the Upwork work history behind the portfolio: migration support, performance improvements, checkout work, bug fixing, and final launch polish.",
        aiLabel: "AI Overview",
        workHistoryLabel: "Work history on Upwork",
        overviewTitle: "How Upwork describes me",
        overviewText: "An experienced Shopify Developer and Liquid Expert specializing in custom theme development and performance optimization. Successfully completed projects like PetalJet, enhancing SEO and loading speeds through technical refactoring, and implemented a 'Build Your Bundle' feature for MagicScent, effectively increasing average order values. Proficient in Shopify 2.0, advanced customization, bug fixing, and technically specific storefront work.",
        ratingLabel: "Rating",
        openProfile: "Open Upwork Profile",
        currentHighlightLabel: "Current highlight",
        currentHighlight: {
          title: "Performance optimization of Shopify site LINEARGENT.com",
          timeframe: "Nov 10, 2025 - Present",
          status: "In progress",
          feedback: "\"Kiril is a good professional, he works efficiently and solves the problems delivering accurate job on time and welldone.\""
        },
        metrics: {
          items: [
            { label: "Completed jobs", count: 25 },
            { label: "In progress", count: 11 },
            { label: "5-star public reviews", count: 5 },
            { label: "Shopify-focused wins", count: 5 }
          ]
        },
        insights: {
          title: "Insights from completed jobs",
          subtitle: "Signals pulled from completed Upwork projects. These are the qualities clients mentioned most often in review feedback.",
          items: [
            { label: "Committed to Quality", count: 10 },
            { label: "Clear Communicator", count: 8 },
            { label: "Collaborative", count: 5 },
            { label: "Detail Oriented", count: 4 },
            { label: "Solution Oriented", count: 4 },
            { label: "Reliable", count: 3 },
            { label: "Accountable for Outcomes", count: 2 },
            { label: "Professional", count: 2 }
          ]
        },
        reviews: [
          {
            title: "Shopify expert needed for some final adjustments and mobile ui",
            rating: 5,
            ratingLabel: "Rating is 5.0 out of 5.",
            timeframe: "Sep 20, 2025 - Oct 29, 2025",
            contractType: "Fixed price",
            feedback: "\"Kiril Did a super job on my Shopify store. Very skilled, fast, and easy to communicate with. He understood exactly what I wanted and delivered beyond expectations. Highly recommended.\""
          },
          {
            title: "Shopify Developer Needed to Fix Site Technical Errors",
            rating: 5,
            ratingLabel: "Rating is 5.0 out of 5.",
            timeframe: "Oct 22, 2025 - Oct 23, 2025",
            contractType: "Fixed price",
            feedback: "\"Perfect Job by Kiril - Highly Recommended. Kiril did an outstanding job fixing critical technical issues on our Shopify Rise theme site. He quickly resolved 404 URL errors, language switching issues, and other technical problems.\""
          },
          {
            title: "Shopify Developer Needed - Clean Embedded Checkout (WHOP x Shopify)",
            rating: 5,
            ratingLabel: "Rating is 5.0 out of 5.",
            timeframe: "Jan 1, 2026 - Jan 3, 2026",
            contractType: "Fixed price",
            feedback: "\"It's been great to work with Kiril! This freelancer is clear and concise in communication, cutting through ambiguity and keeping goals and next steps on track.\""
          },
          {
            title: "Shopify Store Update from Prestige 4 to 10-11 and further improvement",
            rating: 5,
            ratingLabel: "Rating is 5.0 out of 5.",
            timeframe: "Nov 10, 2025 - Nov 21, 2025",
            contractType: "Fixed price",
            feedback: "\"Great experience working with Kiril. Communication was clear and timely, and all tasks were completed reliably. I'm fully satisfied with the results and would gladly work together again.\""
          },
          {
            title: "Shopify 2.0 Migration and Speed Optimization Expert (Ukrainian Developers)",
            rating: 5,
            ratingLabel: "Rating is 5.0 out of 5.",
            timeframe: "Nov 10, 2025 - Feb 6, 2026",
            contractType: "Fixed price",
            feedback: "\"Thank you, Kiril was helpful in our migration to Shopify 2 with a bunch of manually coded solutions.\""
          },
          {
            title: "Shopify Site & Landing Page Final Polish (One-Time Project)",
            rating: 5,
            ratingLabel: "Rating is 5.0 out of 5.",
            timeframe: "Dec 4, 2025 - Dec 15, 2025",
            contractType: "Fixed price",
            feedback: "\"Kiril assisted with several Shopify setup and technical tasks. We paused the project while reassessing overall site direction.\""
          },
          {
            title: "Shopify Redesign + Technical Migration + SEO / Growth Marketing Setup - US/Europe Based Agency Only",
            rating: 4,
            ratingLabel: "Rating is 4.0 out of 5.",
            timeframe: "Dec 9, 2025 - Mar 8, 2026",
            contractType: "Fixed price",
            feedback: "\"Hi Kiril, I appreciate the work you've put into this. Thank you for your help in getting the Shopify Store revamp and for your flexibility as the project scope evolved. Best of luck with your other projects!\""
          },
          {
            title: "Shopify Developer - Smart Auto-Add Gift Logic (Spend EUR75, Get Product Free)",
            rating: 4,
            ratingLabel: "Rating is 4.0 out of 5.",
            timeframe: "Oct 29, 2025 - Nov 2, 2025",
            contractType: "Fixed price",
            feedback: "\"Responds fast and does a good job\""
          },
          {
            title: "translation and error adjustments",
            rating: 5,
            ratingLabel: "Rating is 5.0 out of 5.",
            timeframe: "Oct 30, 2025 - Oct 31, 2025",
            contractType: "Fixed price",
            feedback: "\"amazing as the last time. fast, keeping the deadline, perfekt. thanks bro.\""
          },
          {
            title: "Looking for a Shopify Developer (Small One-Time Task)",
            rating: 5,
            ratingLabel: "Rating is 5.0 out of 5.",
            timeframe: "Oct 27, 2025 - Oct 28, 2025",
            contractType: "Fixed price",
            feedback: "\"Kiril did a great job! He quickly understood the requirements, implemented everything exactly as shown in the loom video, and delivered fast, clean results. Excellent communication and professional work.\""
          },
          {
            title: "Performance optimization of Shopify site LINEARGENT.com",
            rating: 5,
            ratingLabel: "Rating is 5.0 out of 5.",
            timeframe: "Nov 10, 2025 - Present",
            contractType: "In progress",
            feedback: "\"Kiril is a good professional, he works efficiently and solves the problems delivering accurate job on time and welldone.\""
          },
          {
            title: "Shopify Bug",
            rating: 5,
            ratingLabel: "Rating is 5.0 out of 5.",
            timeframe: "Nov 4, 2025 - Nov 5, 2025",
            contractType: "Fixed price",
            feedback: "\"Kiril is great to work with. Fast communication, good execution, clean work.\""
          }
        ]
      },
      testimonials: {
        title: "Testimonials",
        reviews: [
          {
            name: "Oleksandr",
            image: "/source/profile/testimonial-avatar-placeholder.png",
            text: "Kiril is a lifesaver! He fixed all the issues on my Shopify site and even gave me tips to improve it. I'm so happy with the results."
          },
          {
            name: "Anastasia",
            image: "/source/profile/testimonial-avatar-placeholder.png",
            text: "I was so lost trying to set up my online store, but Kiril made it a breeze! Now I have a beautiful website that actually gets sales. Thanks, Kiril!"
          },
          {
            name: "Dmytro",
            image: "/source/profile/testimonial-avatar-placeholder.png",
            text: "Working with Kiril was a fantastic experience. He's a true expert in Shopify and really cares about his clients. I highly recommend him!"
          },
          {
            name: "Artem",
            image: "/source/profile/testimonial-avatar-placeholder.png",
            text: "Kiril went above and beyond to create a stunning website for my business. He's a true professional and a pleasure to work with."
          },
          {
            name: "Hanna",
            image: "/source/profile/testimonial-avatar-placeholder.png",
            text: "My new website is everything I wanted and more! Kiril is incredibly talented and easy to work with. I can't thank him enough."
          }
        ]
      },
      contact: {
        title: "Contact",
        topRated: "Top Rated on Upwork",
        subtitle: "Let’s talk about your Shopify project",
        email: "karatitsynkiril@gmail.com",
        note: "Send your store link and a short task summary, and we can take it from there.",
        topRatedNote: "Work with a Top Rated Upwork freelancer who focuses on clean communication, reliable delivery, and Shopify work that stays solid after launch.",
        audit: "Free store audit and project discussion",
        book_call: "Book a Call",
        linkedin: "LinkedIn",
        github: "GitHub",
        preferMessage: "Prefer to send a direct message?",
        sendMessage: "Send Message"
      },
      blog: {
        title: "Blog",
        subtitle: "Thoughts on creating high-performing online experiences.",
        readMore: "Читати далі",
        backToList: "Back to all articles",
        notFound: "Article not found.",
        featuredTitle: "Featured insights",
        featuredSubtitle: "Fresh takeaways from recent projects and launches.",
        viewAll: "View all",
        estimatedRead: "{{time}} read",
        posts: [
          {
            id: "shopify-conversion-boost",
            slug: "shopify-conversion-boost",
            title: "5 quick wins to boost your Shopify conversion",
            date: "May 15, 2024",
            readingTime: "4 min",
            excerpt: "Simple UX tweaks and speed optimizations that immediately make visitors trust your store and hit the buy button more often.",
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
            tags: ["Shopify", "Conversion"],
            content: [
              "Conversion uplift rarely requires a full redesign. Small, focused improvements stacked together get you there faster.",
              "Start with speed. Compress hero images, lazy-load below-the-fold sections and keep third-party scripts in check. A fast store feels professional and removes hesitation.",
              "Next, simplify the product page. Clear call-to-actions, upfront shipping information and social proof near the add-to-cart button reduce friction.",
              "Use bundles or progress bars in the cart to lift average order value. Customers love seeing how close they are to free shipping or a bonus gift.",
              "Finally, track everything. Set up basic funnels in Shopify analytics or GA4 so you can double down on what works and cut the rest."
            ]
          },
          {
            id: "landing-page-launch-checklist",
            slug: "landing-page-launch-checklist",
            title: "Landing page launch checklist for busy founders",
            date: "April 4, 2024",
            readingTime: "3 min",
            excerpt: "Before you launch, run through this lightweight checklist to make sure your offer is clear, fast and ready to convert.",
            image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
            tags: ["Checklist", "Launch"],
            content: [
              "Publishing a landing page without checks is like shipping code without tests. A tight review keeps conversions from leaking.",
              "Headline first. It should explain what you offer and why it matters in one sentence. Pair it with a subheading that answers who it is for.",
              "Make sure the primary call-to-action is above the fold and repeated after each major section. Consistency turns interest into action.",
              "Proof matters. Add testimonials, logos or quick stats to show that real people trust you.",
              "Wrap it up with tracking pixels and form submissions routed to the right inbox or CRM so you can follow up fast."
            ]
          }
        ]
      },
      faq: {
        title: "FAQ",
        questions: [
          {
            question: "What Shopify work do you usually take on?",
            answer: "Most projects fall into one of four buckets: custom theme work, Online Store 2.0 migrations, feature development for the storefront, and ongoing support after launch."
          },
          {
            question: "Can you work inside an existing Shopify store?",
            answer: "Yes. I regularly work inside live Shopify stores to improve sections, product pages, cart behavior, filtering, integrations, speed, and launch readiness."
          },
          {
            question: "Do you handle migrations to Shopify Online Store 2.0?",
            answer: "Yes. I can help move a store from a legacy setup to OS 2.0 while protecting content structure, rebuilding custom logic, and reducing launch risk."
          },
          {
            question: "Can you help after launch too?",
            answer: "Yes. Many clients keep me involved after launch for fixes, experiments, SEO and speed improvements, new sections, and ongoing storefront development."
          },
          {
            question: "How do we start?",
            answer: "Send the store URL, the problem you want solved, and any deadlines or constraints. From there I can suggest the cleanest next step, whether that is an audit, a small sprint, or a larger implementation."
          },
          {
            question: "Do you work with designers or existing specs?",
            answer: "Yes. I can build from Figma, Loom videos, written specs, or an existing storefront reference, and I also help tighten the implementation plan when requirements are still rough."
          }
        ],
        book_call: "Book a Call"
      },
      header: {
        services: "Services",
        cases: "Case Studies",
        experience: "Experience",
        upwork: "Upwork",
        contact: "Contact Me",
        bookCall: "Book a Call",
        about: "About Me",
        works: "Projects",
        blog: "Blog",
        resume: "Resume"
      },
      footer: {
        blurb: "Shopify development for brands that need custom work, cleaner UX, and dependable support without unnecessary complexity.",
        follow: "Elsewhere",
        telegram: "Telegram",
        instagram: "Instagram",
        rights: "All rights reserved."
      }
    }
  },
  uk: {
    translation: {
      hero: {
        eyebrow: "Shopify Розробник",
        topRated: "Top Rated на Upwork",
        title: "Я створюю Shopify-магазини, які",
        titleAccent: "конвертують, масштабуються і залишаються зручними в управлінні.",
        subtitle: "Кастомні теми, міграції на Online Store 2.0, інтеграції, CRO-орієнтована робота зі storefront і довгострокова технічна підтримка для брендів, яким замало шаблонного рішення.",
        description: "Чистіший UX, швидші сторінки, сильніший мерчандайзинг і кастомна Shopify-розробка, з якою магазином легко керувати.",
        book_call: "Забронювати дзвінок",
        send_message: "Написати мені",
        proofItems: [
          "5-зіркові відгуки на Upwork від актуальних Shopify-клієнтів.",
          "Практичний досвід у кастомних збірках, міграціях, CRO і support-retainer задачах.",
          "Фокус на Shopify-first реалізації, чистому UX і стабільних релізах."
        ],
        or: "або",
        words: ["Розробник", "Чарівник", "Експерт", "Майстер", "Спеціаліст", "Гуру", "Віртуоз", "Маестро"]
      },
      about: {
        eyebrow: "Чому зі мною працюють Shopify-команди",
        title: "Shopify-партнер для брендів, що ростуть",
        text: "Перетворюю бізнес-цілі на Shopify-магазини, які чисто зібрані, легко підтримуються і стають сильнішими після запуску.",
        statYearLabel: "Років з Shopify",
        statProjectsLabel: "Реалізованих проєктів",
        statHoursLabel: "Годин на Upwork",
        lets_work: "Давайте працювати разом"
      },
      services: {
        eyebrow: "Послуги",
        title: "Shopify-послуги",
        subtitle: "Сфокусована Shopify-підтримка для запусків, росту і кастомної storefront-розробки.",
        items: [
          {
            id: "store-setup",
            title: "Запуск Shopify-магазину з нуля",
            description: "Новий магазин із чистою структурою теми, гнучкими секціями та зручним для команди контентом — під бренд і подальше масштабування."
          },
          {
            id: "platform-migration",
            title: "Міграція з іншої платформи",
            description: "Перехід з WooCommerce, Magento, кастомних рішень або legacy-тем Shopify на Online Store 2.0 без втрати SEO, редиректів і критичних клієнтських флоу."
          },
          {
            id: "app-integration",
            title: "Інтеграція додатків для Shopify",
            description: "Підключення додатків, підписок, оплат, CRM і кастомних API так, щоб storefront, кошик і адмінка залишались стабільними."
          },
          {
            id: "performance-seo",
            title: "Оптимізація продуктивності та SEO",
            description: "Кращі Core Web Vitals і відчутна швидкість — легший Liquid і асети, плюс технічне SEO: структуровані дані, метадані та зручні для краулінгу шаблони."
          },
          {
            id: "cro-audit",
            title: "Аудит конверсії та UX",
            description: "Розбір воронок, тертя в UX і мерчандайзингу — потім пріоритезовані правки без повної переробки магазину."
          },
          {
            id: "support",
            title: "Підтримка та супровід",
            description: "Ретейнери на запуски, багфікси, оновлення теми й ітерації, поки команда зосереджена на зростанні, а магазин лишається під контролем."
          }
        ]
      },
      caseStudies: {
        eyebrow: "Кейси",
        title: "Вибрані роботи",
        subtitle: "Кілька глибших Shopify-проєктів: від кастомних збірок до міграцій.",
        viewCase: "Дивитися кейс",
        visitStore: "Перейти на сайт",
        backToCases: "Назад до всіх проєктів",
        notFound: "Кейс не знайдено.",
        mediaTitle: "Медіа",
        desktopLabel: "Desktop",
        mobileLabel: "Mobile",
        mobilePlaceholder: "Тимчасовий placeholder для мобільної версії. Окремий mobile preview буде додано пізніше.",
        aboutBrandTitle: "Про бренд",
        readMore: "Read more",
        challengeTitle: "Задача",
        scopeTitle: "Обсяг робіт",
        solutionTitle: "Рішення",
        stackTitle: "Стек і компетенції",
        outcomeTitle: "Результат",
        screenshotTitle: "Ключові акценти",
        moreProjectsTitle: "Більше Shopify-проєктів",
        moreProjectsSubtitle: "Ширший зріз Shopify-робіт: міграції, CRO, підтримка, кастомні секції та покращення storefront.",
        items: [
          {
            id: "nimfa",
            slug: "nimfa",
            title: "Nimfa",
            summary: "Преміум секс-шопу був потрібен кастомний Shopify-магазин з Figma, мультимовністю, масштабованими секціями та storefront-рівнем якості, готовим до преміального запуску.",
            brandSummary: "Nimfa — це преміум бренд intimate wellness і секс-шоп, побудований навколо делікатного, стильного і безстигматного self-care для жінок.",
            brandDescription: "Nimfa подає інтимність як природну, елегантну і вільну від осуду частину життя. Бренд оформлює товари для задоволення та intimate wellness у м’якшому преміальному контексті, з фокусом на self-acceptance, приватність і досвід покупки, який ближчий до сучасного self-care, ніж до класичного adult store.",
            image: "/source/desktop/nimfa-desktop.webp",
            mobileImage: "/source/mobile/nimfa-mobile.webp",
            liveUrl: "https://nimfa.nl/",
            tags: ["Кастомна тема", "Мультимовність", "Figma to Shopify"],
            challenge: "Магазин мав виглядати преміально з першого дня і водночас залишатися зручним для контентної команди. Потрібно було перенести детальний дизайн у Shopify без втрати гнучкості, мультимовної структури й майбутньої керованості.",
            scope: [
              "Побудувати кастомну Shopify-тему з нуля на основі Figma.",
              "Створити гнучкі секції для landing, product та editorial контенту.",
              "Підтримати мультимовний storefront і зручні оновлення з адмінки."
            ],
            solution: [
              "Реалізував pixel-accurate storefront з перевикористовуваними theme sections і шаблонами.",
              "Вбудував блог і upsell-функціональність прямо в тему, щоб контент і мерчандайзинг розвивалися разом.",
              "Побудував структуру так, щоб клієнт міг керувати змінами контенту без залежності від коду."
            ],
            outcome: [
              "Отримано преміальний Shopify-storefront, що відповідає затвердженому дизайну.",
              "Мультимовне масштабування закладене в тему з самого старту.",
              "Магазин готовий до подальших мерчандайзингових і контентних оновлень без перебудови."
            ],
            stack: ["Shopify", "Liquid", "Theme sections", "Мультимовний setup", "Figma implementation"],
            screenshotCaptions: [
              "Кастомний storefront-стиль, тісно прив’язаний до затвердженого Figma-напряму.",
              "Архітектура теми розрахована на повторні контентні оновлення без правок коду.",
              "Мультимовний фундамент для преміального Shopify-бренду."
            ]
          },
          {
            id: "indian-affairs",
            slug: "indian-affairs",
            title: "Indian Affairs",
            summary: "Legacy-магазин потрібно було перевести на Shopify Online Store 2.0, зберігши структуру, відбудувавши кастомну функціональність і одночасно почистивши UX по всьому сайту.",
            brandSummary: "Indian Affairs — це fashion-бренд для дітей і дорослих, відомий timeless-речами, натуральними матеріалами і handcrafted деталями, пов’язаними з індійськими текстильними традиціями.",
            brandDescription: "Indian Affairs пропонує одяг та аксесуари для дітей і дорослих з акцентом на timeless design, м’які матеріали та ремісничий характер. У багатьох речах відчуваються техніки на кшталт hand block printing, а сам бренд ближчий до повільнішої, продуманішої моди, ніж до швидкого трендового ритейлу.",
            image: "/source/desktop/indian-affairs-desktop.webp",
            mobileImage: "/source/mobile/indian-affairs-mobile.webp",
            liveUrl: "https://indianaffairs.de/",
            tags: ["Міграція", "Online Store 2.0", "Перебудова теми"],
            challenge: "Цю міграцію не можна було розглядати лише як візуальний редизайн. Контент, кастомна логіка та щоденні операції магазину мали пережити перехід на нову архітектуру без нестабільності.",
            scope: [
              "Мігрувати storefront з legacy-setup на Shopify Online Store 2.0.",
              "Перенести контент і відбудувати кастомну поведінку в новій theme-архітектурі.",
              "Вирівняти стилі, UX і ключові customer journeys по всьому сайту."
            ],
            solution: [
              "Перезібрав ключову функціональність всередині OS 2.0 замість перенесення legacy-патчів.",
              "Зберіг важливі контентні зв’язки й store-логіку в процесі міграції.",
              "Використав міграцію як шанс одночасно почистити UX і покращити підтримуваність теми."
            ],
            outcome: [
              "Магазин перенесено на масштабованішу Shopify-архітектуру.",
              "Ризик launch-regression зменшено завдяки свідомій перебудові критичних флоу.",
              "Клієнт отримав чистішу базу для наступних storefront-оновлень."
            ],
            stack: ["Shopify OS 2.0", "Liquid", "Theme migration", "UX refinement", "Launch QA"],
            screenshotCaptions: [
              "Міграція з фокусом на збереження структури та модернізацію theme-base.",
              "Кастомні вимоги перебудовані під підтримуваний Shopify-setup.",
              "UX і стилі вирівняні під час переходу, а не винесені на потім."
            ]
          },
          {
            id: "silk-tallow",
            slug: "silk-tallow",
            title: "Silk Tallow",
            summary: "Магазину була потрібна складна Mystery Gift і Free Gift логіка, яка виглядає природно в storefront, оновлюється миттєво і коректно обробляє edge cases без перезавантаження сторінки.",
            brandSummary: "Silk Tallow — це бренд натурального догляду за шкірою, побудований навколо tallow-based формул, простих інгредієнтів і toxin-free рутини, натхненної природою.",
            brandDescription: "Silk Tallow будує позиціонування навколо природної простоти та skincare без штучних інгредієнтів. Бренд пов’язує свої продукти з живленням, захистом і поверненням до чистішого, повільнішого догляду, де tallow-based формули стають основою більш мінімалістичної і nature-led філософії.",
            image: "/source/desktop/silk-tallow-desktop.webp",
            mobileImage: "/source/mobile/silk-tallow-mobile.webp",
            liveUrl: "https://silktallow.com/",
            tags: ["Кастомна логіка", "Cart UX", "Merchandising"],
            challenge: "Gift-логіка часто ламає UX, коли тримається на незграбних reload-сценаріях або крихких скриптах. Тут усе мало працювати плавно для покупця і водночас коректно дотримуватись правил кошика та промо-механік.",
            scope: [
              "Реалізувати динамічну Mystery Gift і Free Gift логіку у storefront.",
              "Вписати досвід у наявний дизайн так, щоб це не виглядало прикрученим зверху.",
              "Акуратно обробити cart rules, promo triggers і edge cases."
            ],
            solution: [
              "Побудував storefront-поведінку, яка оновлює gift-сценарії без page reloads.",
              "Інтегрував промо-логіку прямо в customer flow замість ізольованих повідомлень.",
              "Продумав правила і cart-поведінку так, щоб досвід залишався передбачуваним у реальних покупках."
            ],
            outcome: [
              "Промо-досвід у кошику та storefront став плавнішим і зрозумілішим.",
              "Складна gift-логіка сприймається як частина core product experience.",
              "Мерчандайзинг став гнучкішим без компромісу по стабільності storefront."
            ],
            stack: ["Shopify", "Liquid", "JavaScript", "Cart logic", "Promotional UX"],
            screenshotCaptions: [
              "Gift-логіка, яка відчувається нативною частиною storefront.",
              "Cart-поведінка оновлюється динамічно, без reload-heavy сценаріїв.",
              "Промо-механіка спроєктована з урахуванням edge cases і реального використання."
            ]
          },
          {
            id: "bazar-bizar",
            slug: "bazar-bizar",
            title: "Bazar Bizar",
            summary: "Повна кастомна Shopify-тема на основі Figma-редизайну з перенесенням усього функціоналу з live-магазину в чистіший і сучасніший storefront.",
            brandSummary: "Bazar Bizar — це interior і lifestyle бренд з корінням в Антверпені та на Балі, відомий handcrafted homeware, furniture, lighting і decor, сформованими подорожами, ремеслом і fair-trade цінностями.",
            brandDescription: "Bazar Bizar позиціонує себе як home і lifestyle бренд, народжений з любові до подорожей, з флагманською присутністю в Антверпені та на Балі. Їхні колекції поєднують традиційне ремесло з сучасними інтер’єрами, змішуючи handmade характер, coastal warmth і fair-trade принципи у меблях, освітленні, tableware, текстилі та декорі.",
            image: "/source/desktop/bazar-bizar-desktop.webp",
            mobileImage: "/source/mobile/bazar-bizar-mobile.webp",
            liveUrl: "https://bazarbizar.be/",
            tags: ["Кастомна тема", "Редизайн", "Figma to Shopify"],
            challenge: "Завдання було не лише в новому візуалі. Нова тема мала точно відобразити оновлений Figma-дизайн і водночас зберегти функціональність, на яку вже покладалися клієнт і покупці в live-магазині.",
            scope: [
              "Побудувати повністю кастомну Shopify-тему на основі нового Figma-редизайну.",
              "Перенести важливий функціонал з live-магазину в новий storefront.",
              "Покращити структуру, підтримуваність і цілісність теми разом з оновленням дизайну."
            ],
            solution: [
              "Перезібрав storefront як повністю кастомну Shopify-тему замість нашарування редизайну поверх старої реалізації.",
              "Переніс ключовий live-функціонал у нову тему, щоб зберегти звичну customer-facing поведінку.",
              "Використав редизайн як можливість одночасно почистити архітектуру теми і закласти кращу базу для підтримки."
            ],
            outcome: [
              "Отримано редизайнений Shopify-storefront на основі Figma без втрати важливого live-функціоналу.",
              "Створено чистішу і гнучкішу theme-base для подальших оновлень.",
              "Підтримуваність магазину покращена без компромісу для customer experience."
            ],
            stack: ["Shopify", "Liquid", "Кастомна тема", "Figma implementation", "Архітектура теми"],
            screenshotCaptions: [
              "Кастомна Shopify-тема, повністю перебудована навколо затвердженого Figma-редизайну.",
              "Функціональність live-магазину збережена, поки storefront отримував нову візуальну систему.",
              "Чистіша структура теми стала частиною перебудови, а не відкладеним етапом."
            ]
          },
          {
            id: "elanora-skin",
            slug: "elanora-skin",
            title: "Elanora Skin",
            summary: "Постійний Shopify-проєкт, який я вже пів року веду як Shopify-експерт магазину, розвиваючи мультимаркет-логіку storefront і retention-функціональність.",
            brandSummary: "élanora — це skincare-бренд з Бреди, натхненний корейськими skincare-традиціями та західною простотою, який поєднує чисті інгредієнти з сучасними формулами для щоденного self-care.",
            brandDescription: "élanora подає догляд за шкірою як поєднання ефективності та щоденного ритуалу спокою. Бренд змішує натхнення корейським skincare з більш чистою західною естетикою, позиціонуючи продукти навколо glow, routine і доступного self-care, а не виключно клінічного beauty-підходу.",
            image: "/source/desktop/elanora-skin-desktop.webp",
            mobileImage: "/source/mobile/elanora-skin-mobile.webp",
            liveUrl: "https://elanoraskin.com/",
            tags: ["Постійна підтримка", "Мультимаркет", "Klaviyo API"],
            challenge: "Магазину була потрібна постійна технічна підтримка для кількох ринків, де промо-логіка мала відрізнятися залежно від маркету, а не працювати одним шаблоном для всіх. Додатково клієнту потрібна була retention-функціональність глибше за стандартну тему, зокрема кастомний back-in-stock flow через Klaviyo API.",
            scope: [
              "Вести Shopify-storefront як постійний технічний партнер протягом багатьох місяців.",
              "Реалізувати announcement, upsell, gift і free-shipping логіку з прив'язкою до конкретних маркетів.",
              "Побудувати кастомну back-in-stock функціональність через інтеграцію з Klaviyo API."
            ],
            solution: [
              "Реалізував мультимаркет-поведінку storefront, де промо-повідомлення і merchandising-логіка змінюються залежно від активного маркету.",
              "Побудував кастомні upsell і free gift сценарії з різними free shipping thresholds для різних ринків.",
              "Додав back-in-stock логіку через Klaviyo API, щоб посилити retention і повторне залучення клієнтів поза межами стандартної theme-логіки."
            ],
            outcome: [
              "Storefront отримав гнучкішу мультимаркет-промо і merchandising-поведінку.",
              "Retention-функціональність розширена кастомним back-in-stock flow, підключеним до Klaviyo.",
              "Постійна Shopify-підтримка дозволяє магазину розвиватися без накопичення ризикових точкових фіксів у темі."
            ],
            stack: ["Shopify", "Liquid", "JavaScript", "Мультимаркет логіка", "Klaviyo API"],
            screenshotCaptions: [
              "Постійна Shopify-підтримка з фокусом на масштабовану мультимаркет-поведінку storefront.",
              "Промо-логіка адаптована під конкретні маркети, а не зведена до одного глобального сценарію.",
              "Back-in-stock функціональність розширена через інтеграцію з Klaviyo API."
            ]
          },
          {
            id: "petaljet",
            slug: "petaljet",
            title: "Petaljet",
            summary: "Постійний Shopify-проєкт, де робота почалася з глибокого SEO-аудиту, покращення performance і далі перейшла в безперервну підтримку та розвиток storefront.",
            brandSummary: "Petaljet — це wholesale flower supplier для флористів і професійних дизайнерів, який доставляє farm-direct квіти по США для весіль, подій і щоденних floral-програм.",
            brandDescription: "Petaljet побудований навколо B2B-закупівлі квітів для флористів, event-дизайнерів та інших професійних покупців. Бренд робить акцент на надійному постачанні, широкому асортименті й workflow, який підтримує регулярні замовлення, великі події та щоденні floral-операції з меншим тертям.",
            image: "/source/desktop/petaljet-desktop.webp",
            mobileImage: "/source/mobile/petaljet-mobile.webp",
            liveUrl: "https://petaljet.com/",
            tags: ["SEO аудит", "Performance", "Постійна підтримка"],
            challenge: "Магазину були потрібні не точкові фікси, а сильна технічна база: SEO-аудит, покращення швидкості на ключових сторінках і постійна підтримка, яка дозволяє storefront еволюціонувати, а не деградувати через випадкові оновлення.",
            scope: [
              "Провести SEO-аудит і знайти технічні можливості, що впливають на видимість у пошуку.",
              "Покращити performance storefront на ключових сторінках і флоу.",
              "Підтримувати магазин далі через постійні оновлення, фікси та ітеративні покращення."
            ],
            solution: [
              "Почав із SEO-аудиту, щоб знайти проблеми й точки росту для пошукової видимості.",
              "Впровадив performance-покращення на важливих storefront-зонах, щоб магазин працював швидше і стабільніше.",
              "Продовжив вести магазин у режимі ongoing support, щоб покращення накопичувалися, а не зводилися до разового maintenance."
            ],
            outcome: [
              "Проєкт отримав сильнішу SEO-базу, що допомогло покращити видимість і позиції в пошуку.",
              "Performance-робота зробила storefront швидшим і технічно здоровішим у довшій перспективі.",
              "Постійна підтримка дозволяє магазину еволюціонувати і не втрачати якість між великими оновленнями."
            ],
            stack: ["Shopify", "Технічне SEO", "Performance optimization", "Storefront support", "Постійні ітерації"],
            screenshotCaptions: [
              "SEO-робота почалася з технічного аудиту, а не з випадкових точкових правок.",
              "Performance-покращення стали частиною roadmap storefront, а не одноразовим патчем.",
              "Постійна підтримка тримає магазин живим через послідовну технічну еволюцію."
            ]
          }
        ]
      },
      experience: {
        eyebrow: "Таймлайн",
        title: "Досвід",
        subtitle: "Робота, навчання і стажування, що формують мій Shopify-шлях.",
        placeholderLabel: "Тимчасовий логотип",
        stats: {
          timeline: "Активні етапи таймлайну",
          since: "Навчаюся і розвиваюся з"
        },
        items: [
          {
            kind: "Стажування",
            role: "Frontend Developer",
            company: "Funduino GmbH",
            dateRange: "Лютий 2026 - дотепер",
            location: "Нордгорн, Німеччина",
            summary: "Поточне стажування на позиції Frontend Developer в Arduino-орієнтованій освітній платформі та бренді навчальних наборів, де я працюю над інтерфейсами й storefront у реальному компанійному середовищі.",
            logo: "/source/logos/funduino.jpg",
            logoAlt: "Логотип Funduino GmbH",
            isPlaceholderLogo: false
          },
          {
            kind: "Освіта",
            role: "Student",
            company: "KBS Nordhorn",
            dateRange: "2024 - дотепер",
            location: "Нордгорн, Німеччина",
            summary: "Навчаюся в Kaufmannische Berufsbildende Schulen Nordhorn з 2024 року, паралельно посилюючи технічну й професійну базу разом із реальною Shopify-практикою.",
            logo: "/source/logos/kbs-nordhorn.png",
            logoAlt: "Логотип KBS Nordhorn",
            isPlaceholderLogo: false
          },
          {
            kind: "Робота",
            role: "Shopify Developer",
            company: "Collab IT",
            dateRange: "Травень 2025 - Листопад 2025",
            location: "Віддалено",
            summary: "Працював Shopify Developer над клієнтською реалізацією та storefront-розробкою. Публічної інформації про компанію зараз небагато, тому опис у портфоліо свідомо залишається стриманим і фактичним.",
            logo: "/source/logos/collab-it.png",
            logoAlt: "Логотип Collab IT",
            isPlaceholderLogo: false
          },
          {
            kind: "Робота",
            role: "Shopify Developer",
            company: "Great Dev",
            dateRange: "Грудень 2024 - Квітень 2025",
            location: "Віддалено",
            summary: "Працював над Shopify-розробкою в командному середовищі ще до того, як сайт компанії став недоступним. Запис залишено коротким, поки знову не з’явиться офіційне джерело логотипа.",
            logo: "/source/logos/great-dev.png",
            logoAlt: "Логотип Great Dev",
            isPlaceholderLogo: false
          }
        ]
      },
      works: {
        eyebrow: "Каталог проєктів",
        title: "Ще роботи",
        subtitle: "Ширший зріз Shopify-запусків, кастомних збірок і покращень storefront.",
        allWorksTitle: "Усі Shopify-проєкти",
        allWorksSubtitle: "Повний каталог Shopify-робіт: кастомні збірки, міграції, storefront-покращення, мерчандайзинг-логіка, мультимовні сетапи і постійна підтримка.",
        loadMore: "Дивитися більше",
        visitWebsite: "Відвідати сайт",
        viewCase: "Дивитися кейс",
        backHome: "Назад на головну",
        contactCard: {
          title: "Ваш Проект Тут",
          text: "Маєте проект на думці? Давайте працювати разом, щоб створити приголомшливий веб-сайт, який допоможе вашому бізнесу зростати в інтернеті.",
          button: "Зв'язатися зі мною"
        },
        projects: [
          {
            title: "Pair Stich",
            url: "https://pairstitch.pl/",
            image: "/source/desktop/pair-stich-desktop.webp",
            tech: "Реалізовано кастомний селектор кольорів, який динамічно змінюється за типом одягу та обходить ліміт у 100 варіантів."
          },
          {
            title: "Haftx",
            url: "https://haftx.com/",
            image: "/source/desktop/haftx-desktop.webp",
            tech: "Розроблено кастомний селектор кольорів, який адаптується до типу одягу та обходить обмеження у 100 варіантів."
          },
          {
            title: "Junofires",
            url: "https://junofires.nl/",
            image: "/source/desktop/junofires-desktop.webp",
            tech: "Оптимізував фільтри в Shopify-магазині, додав функцію автоматичного відображення зображення при фільтрації за кольором, покращивши UX і навігацію."
          },
          {
            title: "Lerros",
            url: "https://www.lerros.com/",
            image: "/source/desktop/lerros-desktop.webp",
            tech: "Оновив тему в Shopify-магазині, коректно переніс контент і метаполя, зберіг структуру даних і налаштував відображення товарів для стабільної роботи."
          },
          {
            title: "Kiki Green",
            url: "https://kiki-green.com/",
            image: "/source/desktop/kiki-green-desktop.webp",
            tech: "Розробив повний цикл e-commerce рішення з нуля, включаючи створення повноцінного інтернет-магазину та інтеграцію з різними плагінами, такими як програми лояльності та підписка на продукти."
          },
          {
            title: "Junior's Cheesecake",
            url: "https://juniorscheesecake.com/",
            image: "/source/desktop/juniors-cheesecake-desktop.webp",
            tech: "Створив нові кастомні секції на основі дизайну Figma, розробив email шаблони та їх обробку, а також реалізував функціональність сторінки подачі."
          },
          {
            title: "Spring Mountain Vineyard",
            url: "https://club.springmountainvineyard.com/",
            image: "/source/desktop/spring-mountain-vineyard-desktop.webp",
            tech: "Редизайнив сторінку колекції з покращеним дизайном фільтрів та карток продуктів, реалізував динамічну логіку хлібних крихт, яка оновлюється без перезавантаження сторінки для кращого UX."
          },
          {
            title: "Lunesi",
            url: "https://lunesi.co.uk/",
            image: "/source/desktop/lunesi-desktop.webp",
            tech: "Розробив динамічну секцію апселла в кошику, яка інтелектуально відображає продукти на основі вмісту кошика, повністю налаштовувану через редактор теми. Покращив хедер з налаштовуваними кольоровими схемами та конфігурованим банером оголошень для гнучкого брендингу та промо-акцій."
          },
          {
            title: "Nimfa",
            url: "https://nimfa.nl/",
            image: "/source/desktop/nimfa-desktop.webp",
            caseStudySlug: "nimfa",
            tech: "Створив кастомну тему Shopify з нуля з піксель-перфектною реалізацією згідно з дизайном Figma. Розробив функціональність блогу, секції апселлів та повну багатомовну підтримку (англійська, українська, голландська) для преміум секс-шопу."
          },
          {
            title: "Melinava",
            url: "https://melinava.nl/",
            image: "/source/desktop/melinava-desktop.webp",
            tech: "Фінальна підготовка перед запуском: QA і полірування всіх деталей. Вів повний чекліст “готово до трафіку”: ключові сценарії користувача, перевірки кошика та checkout, адаптив, швидкість і візуальні баги — щоб сайт був стабільний і готовий до конверсій."
          },
          {
            title: "Petaljet",
            url: "https://petaljet.com/",
            image: "/source/desktop/petaljet-desktop.webp",
            caseStudySlug: "petaljet",
            tech: "Постійна підтримка магазину в команді. Підсилюю SEO і продуктивність на ключових сторінках, швидко доставляю зміни, тримаю релізи чистими та виконую щоденні оновлення без ризику “поламати” storefront."
          },
          {
            title: "Indian Affairs",
            url: "https://indianaffairs.de/",
            image: "/source/desktop/indian-affairs-desktop.webp",
            caseStudySlug: "indian-affairs",
            tech: "Міграція з legacy-теми на Shopify Online Store 2.0 (Prestige). Переніс увесь контент, відбудував кастомну функціональність, реалізував вимоги зі спеки та вирівняв стилі й UX по всьому сайту."
          },
          {
            title: "SafeTag Tracking",
            url: "https://safetagtracking.com/",
            image: "/source/desktop/safe-tag-tracking-desktop.webp",
            tech: "Розробка кастомної Shopify-теми з Figma з повною кастомізацією та мультимовністю. Побудував гнучкі секції для зручного керування контентом, зробив pixel-accurate UI і заклав фундамент для масштабування сторінок та маркетів."
          },
          {
            title: "Virea",
            url: "https://virea.se/",
            image: "/source/desktop/virea-desktop.webp",
            tech: "Впровадив оновлений дизайн для головної, PDP та базових шаблонів. Я досі підтримую магазин як їхній Shopify-експерт: нові фічі, оптимізація швидкості, UX-покращення та постійні технічні ітерації."
          },
          {
            title: "M-Oceans",
            url: "https://m-oceans.com/",
            image: "/source/desktop/m-oceans-desktop.webp",
            tech: "Міграція зі старої теми на Shopify 2.0 з перенесенням кастомної логіки та покращенням ключових storefront-флоу. Я досі веду проєкт як їхній Shopify-експерт, додаю нову функціональність і підтримую стабільність магазину після запуску."
          },
          {
            title: "Elanora Skin",
            url: "https://elanoraskin.com/",
            image: "/source/desktop/elanora-skin-desktop.webp",
            caseStudySlug: "elanora-skin",
            tech: "Постійна Shopify-підтримка вже пів року як Shopify-експерт магазину. Реалізував мультимаркет announcement banner, апселл і free gift логіку для різних маркетів, а також різні thresholds для безкоштовної доставки залежно від ринку."
          },
          {
            title: "Silk Tallow",
            url: "https://silktallow.com/",
            image: "/source/desktop/silk-tallow-desktop.webp",
            caseStudySlug: "silk-tallow",
            tech: "Реалізував складну логіку Mystery Gift і Free Gift без перезавантаження сторінки. Акуратно інтегрував у дизайн storefront: правила, поведінка кошика та обробка edge cases."
          },
          {
            title: "Bella Bloom Box",
            url: "https://bellabloombox.se/",
            image: "/source/desktop/bella-bloom-box-desktop.webp",
            tech: "Зібрав повний Shopify-магазин на базі дизайну Lovable. Переклав дизайн у секції та шаблони теми, налаштував структуру контенту й зробив керування максимально простим для клієнта без коду."
          },
          {
            title: "Bazar Bizar",
            url: "https://bazarbizar.be/",
            image: "/source/desktop/bazar-bizar-desktop.webp",
            caseStudySlug: "bazar-bizar",
            tech: "Працював з великим складним Shopify-магазином із багатьма шаблонами та кастомною логікою. Робив глибоку кастомізацію секцій і лейаутів, впроваджував функціональні покращення та підтримував великі зміни, зберігаючи стабільність."
          }
        ]
      },
      upworkReviews: {
        eyebrow: "Upwork",
        title: "Відгуки з Upwork",
        subtitle: "Сильніший зріз Upwork-історії за портфоліо: міграції, speed optimization, checkout-задачі, bug fixing і фінальне полірування перед релізом.",
        aiLabel: "AI Overview",
        workHistoryLabel: "Історія робіт на Upwork",
        overviewTitle: "Як мене описує Upwork",
        overviewText: "Досвідчений Shopify Developer і Liquid Expert з фокусом на кастомній theme-розробці та performance optimization. Серед завершених проєктів є, наприклад, PetalJet, де технічний рефакторинг допоміг підсилити SEO та швидкість завантаження, а також MagicScent, де я реалізував функціональність 'Build Your Bundle', що допомогла збільшити середній чек. Добре працюю з Shopify 2.0, глибокою кастомізацією, bug fixing і технічно специфічними storefront-задачами.",
        ratingLabel: "Оцінка",
        openProfile: "Відкрити профіль Upwork",
        currentHighlightLabel: "Поточний проєкт",
        currentHighlight: {
          title: "Performance optimization of Shopify site LINEARGENT.com",
          timeframe: "10 листопада 2025 - дотепер",
          status: "У роботі",
          feedback: "\"Kiril is a good professional, he works efficiently and solves the problems delivering accurate job on time and welldone.\""
        },
        metrics: {
          items: [
            { label: "Завершених проєктів", count: 25 },
            { label: "У роботі", count: 11 },
            { label: "Публічних 5-зіркових відгуків", count: 5 },
            { label: "Сильних Shopify-кейсів", count: 5 }
          ]
        },
        insights: {
          title: "Інсайти із завершених проєктів",
          subtitle: "Сигнали з завершених Upwork-проєктів. Саме ці якості клієнти найчастіше відзначали у фідбеку.",
          items: [
            { label: "Орієнтований на якість", count: 10 },
            { label: "Чітка комунікація", count: 8 },
            { label: "Командний", count: 5 },
            { label: "Уважний до деталей", count: 4 },
            { label: "Орієнтований на рішення", count: 4 },
            { label: "Надійний", count: 3 },
            { label: "Відповідальний за результат", count: 2 },
            { label: "Професійний", count: 2 }
          ]
        },
        reviews: [
          {
            title: "Потрібен експерт Shopify для фінальних правок і mobile UI",
            rating: 5,
            ratingLabel: "Оцінка 5,0 з 5.",
            timeframe: "20 вересня 2025 - 29 жовтня 2025",
            contractType: "Фіксована ціна",
            feedback: "\"Кирило чудово попрацював над моїм Shopify-магазином. Дуже сильний спеціаліст, швидкий і комфортний у спілкуванні. Він точно зрозумів, що мені потрібно, і перевершив очікування. Дуже рекомендую.\""
          },
          {
            title: "Потрібен Shopify Developer для виправлення технічних помилок на сайті",
            rating: 5,
            ratingLabel: "Оцінка 5,0 з 5.",
            timeframe: "22 жовтня 2025 - 23 жовтня 2025",
            contractType: "Фіксована ціна",
            feedback: "\"Ідеальна робота від Кирила — дуже рекомендую. Він відмінно впорався з критичними технічними проблемами на нашому Shopify-сайті на темі Rise. Швидко виправив 404 URL-помилки, проблеми з перемиканням мов та інші технічні баги.\""
          },
          {
            title: "Потрібен Shopify Developer — чистий embedded checkout (WHOP x Shopify)",
            rating: 5,
            ratingLabel: "Оцінка 5,0 з 5.",
            timeframe: "1 січня 2026 - 3 січня 2026",
            contractType: "Фіксована ціна",
            feedback: "\"З Кирилом було дуже приємно працювати! Він комунікує чітко й по суті, прибирає неоднозначність і допомагає тримати цілі та наступні кроки під контролем.\""
          },
          {
            title: "Оновлення Shopify-магазину з Prestige 4 до 10-11 і подальші покращення",
            rating: 5,
            ratingLabel: "Оцінка 5,0 з 5.",
            timeframe: "10 листопада 2025 - 21 листопада 2025",
            contractType: "Фіксована ціна",
            feedback: "\"Дуже хороший досвід роботи з Кирилом. Комунікація була чіткою та своєчасною, а всі задачі виконані надійно. Я повністю задоволений результатом і з радістю попрацював би разом ще раз.\""
          },
          {
            title: "Експерт із Shopify 2.0 Migration і Speed Optimization (Ukrainian Developers)",
            rating: 5,
            ratingLabel: "Оцінка 5,0 з 5.",
            timeframe: "10 листопада 2025 - 6 лютого 2026",
            contractType: "Фіксована ціна",
            feedback: "\"Дякую, Кирило дуже допоміг нам у переході на Shopify 2 та з низкою рішень, які потрібно було реалізувати вручну.\""
          },
          {
            title: "Фінальне полірування Shopify-сайту і landing page (разовий проєкт)",
            rating: 5,
            ratingLabel: "Оцінка 5,0 з 5.",
            timeframe: "4 грудня 2025 - 15 грудня 2025",
            contractType: "Фіксована ціна",
            feedback: "\"Кирило допоміг із низкою Shopify-налаштувань і технічних задач. Ми поставили проєкт на паузу, поки переглядали загальний напрямок сайту.\""
          },
          {
            title: "Shopify Redesign + Technical Migration + SEO / Growth Marketing Setup — лише агентство з US/Europe",
            rating: 4,
            ratingLabel: "Оцінка 4,0 з 5.",
            timeframe: "9 грудня 2025 - 8 березня 2026",
            contractType: "Фіксована ціна",
            feedback: "\"Привіт, Кириле, я ціную роботу, яку ти в це вклав. Дякую за допомогу з оновленням Shopify-магазину та за гнучкість у момент, коли обсяг проєкту змінювався. Успіхів у наступних проєктах!\""
          },
          {
            title: "Shopify Developer — розумна auto-add gift логіка (витрать EUR75, отримай продукт безкоштовно)",
            rating: 4,
            ratingLabel: "Оцінка 4,0 з 5.",
            timeframe: "29 жовтня 2025 - 2 листопада 2025",
            contractType: "Фіксована ціна",
            feedback: "\"Швидко відповідає і добре виконує роботу.\""
          },
          {
            title: "Правки перекладів і помилок",
            rating: 5,
            ratingLabel: "Оцінка 5,0 з 5.",
            timeframe: "30 жовтня 2025 - 31 жовтня 2025",
            contractType: "Фіксована ціна",
            feedback: "\"Як і минулого разу, все чудово: швидко, в дедлайн, ідеально. Дякую, бро.\""
          },
          {
            title: "Шукаю Shopify Developer (невелика разова задача)",
            rating: 5,
            ratingLabel: "Оцінка 5,0 з 5.",
            timeframe: "27 жовтня 2025 - 28 жовтня 2025",
            contractType: "Фіксована ціна",
            feedback: "\"Кирило чудово впорався! Він швидко зрозумів вимоги, реалізував усе точно так, як було показано у Loom-відео, і віддав швидкий, чистий результат. Відмінна комунікація та професійний підхід.\""
          },
          {
            title: "Performance optimization Shopify-сайту LINEARGENT.com",
            rating: 5,
            ratingLabel: "Оцінка 5,0 з 5.",
            timeframe: "10 листопада 2025 - дотепер",
            contractType: "У роботі",
            feedback: "\"Кирило хороший спеціаліст, працює ефективно, розв’язує проблеми і здає точну, якісну роботу вчасно.\""
          },
          {
            title: "Shopify Bug",
            rating: 5,
            ratingLabel: "Оцінка 5,0 з 5.",
            timeframe: "4 листопада 2025 - 5 листопада 2025",
            contractType: "Фіксована ціна",
            feedback: "\"З Кирилом дуже комфортно працювати. Швидка комунікація, хороше виконання і чиста робота.\""
          }
        ]
      },
      testimonials: {
        title: "Відгуки",
        reviews: [
          {
            name: "Олександр",
            image: "/source/profile/testimonial-avatar-placeholder.png",
            text: "Кирило - справжній рятівник! Він виправив усі проблеми на моєму сайті Shopify і навіть дав поради щодо його покращення. Я дуже задоволений результатами."
          },
          {
            name: "Анастасія",
            image: "/source/profile/testimonial-avatar-placeholder.png",
            text: "Я була така розгублена, намагаючись налаштувати свій онлайн-магазин, але Кирило зробив це легко! Тепер у мене є красивий веб-сайт, який дійсно приносить продажі. Дякую, Кирило!"
          },
          {
            name: "Дмитро",
            image: "/source/profile/testimonial-avatar-placeholder.png",
            text: "Робота з Кирилом була фантастичним досвідом. Він справжній експерт у Shopify і дійсно дбає про своїх клієнтів. Я дуже рекомендую його!"
          },
          {
            name: "Артем",
            image: "/source/profile/testimonial-avatar-placeholder.png",
            text: "Кирило зробив все можливе, щоб створити приголомшливий веб-сайт для мого бізнесу. Він справжній професіонал і з ним приємно працювати."
          },
          {
            name: "Ганна",
            image: "/source/profile/testimonial-avatar-placeholder.png",
            text: "Мій новий веб-сайт - це все, що я хотіла, і навіть більше! Кирило неймовірно талановитий і з ним легко працювати. Я не можу достатньо подякувати йому."
          }
        ]
      },
      contact: {
        title: "Контакт",
        topRated: "Top Rated на Upwork",
        subtitle: "Обговорімо ваш Shopify-проєкт",
        email: "karatitsynkiril@gmail.com",
        note: "Надішліть посилання на магазин і короткий опис задачі, а далі вже розберемо разом.",
        topRatedNote: "Працюйте з Top Rated фрилансером на Upwork, який робить ставку на чітку комунікацію, надійну реалізацію і Shopify-роботу, що лишається стабільною після запуску.",
        audit: "Безкоштовний аудит магазину і обговорення проєкту",
        book_call: "Забронювати дзвінок",
        linkedin: "LinkedIn",
        github: "GitHub",
        preferMessage: "Надаєте перевагу прямому повідомленню?",
        sendMessage: "Надіслати повідомлення"
      },
      blog: {
        title: "Блог",
        subtitle: "Ділюся практичними ідеями про ефективні онлайн-проєкти.",
        readMore: "Читати",
        backToList: "Повернутися до всіх статей",
        notFound: "Статтю не знайдено.",
        featuredTitle: "Вибрані статті",
        featuredSubtitle: "Нові ідеї та висновки з актуальних проєктів.",
        viewAll: "Переглянути всі",
        estimatedRead: "{{time}} читати",
        posts: [
          {
            id: "shopify-conversion-boost",
            slug: "shopify-conversion-boost",
            title: "5 швидких кроків, щоб підняти конверсію Shopify",
            date: "15 травня 2024",
            readingTime: "4 хв",
            excerpt: "Кілька легких змін у швидкості та UX, які змушують покупців довіряти магазину і частіше натискати “Купити”.",
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
            tags: ["Shopify", "Конверсія"],
            content: [
              "Щоб підняти конверсію, не завжди потрібен повний редизайн. Послідовні точкові покращення працюють швидше.",
              "Почніть зі швидкості. Стисніть зображення, використовуйте ліниве завантаження для блоків нижче першого екрану та контролюйте сторонні скрипти.",
              "Спростіть картку товару. Чіткі CTA, інформація про доставку та соціальні докази поруч із кнопкою додавання в кошик зменшують тертя.",
              "Додайте набори або прогрес-бари в кошику, щоб підвищити середній чек. Клієнтам подобається бачити, наскільки вони близькі до безкоштовної доставки чи подарунка.",
              "І відстежуйте все. Налаштуйте воронки в Shopify або GA4, щоб ухвалювати рішення на основі даних."
            ]
          },
          {
            id: "landing-page-launch-checklist",
            slug: "landing-page-launch-checklist",
            title: "Чекліст запуску лендингу для зайнятих засновників",
            date: "4 квітня 2024",
            readingTime: "3 хв",
            excerpt: "Перед запуском пройдіться по швидкому чеклісту, щоб переконатися, що сторінка швидка, зрозуміла і готова до конверсій.",
            image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
            tags: ["Чекліст", "Запуск"],
            content: [
              "Публікувати лендинг без перевірок — як відправляти код без тестів. Швидкий огляд зберігає конверсії.",
              "Почніть із заголовка. Він має пояснити пропозицію та користь в одному реченні. Підзаголовок відповідає на питання “для кого”.",
              "Головний заклик до дії повинен бути вище згину і дублюватися після кожного блоку. Постійність конвертує інтерес у дію.",
              "Додайте соціальний доказ: відгуки, логотипи або цифри, які підтверджують довіру.",
              "Завершіть налаштуванням аналітики і маршрутизацією заявок у потрібну пошту чи CRM, щоб швидко відповідати."
            ]
          }
        ]
      },
      faq: {
        title: "FAQ",
        questions: [
          {
            question: "Які Shopify-задачі ви зазвичай берете?",
            answer: "Найчастіше це одна з чотирьох категорій: кастомна theme-розробка, міграції на Online Store 2.0, feature development для storefront і підтримка після запуску."
          },
          {
            question: "Чи можете ви працювати в уже існуючому Shopify-магазині?",
            answer: "Так. Я регулярно працюю всередині live Shopify-storefronts: покращую секції, product pages, cart behavior, фільтрацію, інтеграції, швидкість і готовність до запуску."
          },
          {
            question: "Чи займаєтесь ви міграціями на Shopify Online Store 2.0?",
            answer: "Так. Я допомагаю переносити магазини з legacy-setup на OS 2.0, зберігаючи структуру контенту, відбудовуючи кастомну логіку і знижуючи launch-ризики."
          },
          {
            question: "Чи можете ви допомагати й після запуску?",
            answer: "Так. Багато клієнтів залишають мене в проєкті після релізу для фіксів, експериментів, SEO і speed-покращень, нових секцій та постійної storefront-розробки."
          },
          {
            question: "З чого краще почати?",
            answer: "Надішліть URL магазину, короткий опис задачі та дедлайни або обмеження. Далі я підкажу найчистіший наступний крок: аудит, невеликий спринт чи ширшу реалізацію."
          },
          {
            question: "Чи працюєте ви з дизайнерами або готовими ТЗ?",
            answer: "Так. Я можу реалізовувати задачі з Figma, Loom-відео, письмового ТЗ або на основі існуючого storefront-референсу, а також допомогти уточнити план, якщо вимоги ще сирі."
          }
        ],
        book_call: "Забронювати дзвінок"
      },
      header: {
        services: "Послуги",
        cases: "Кейси",
        experience: "Досвід",
        upwork: "Upwork",
        contact: "Контакти",
        bookCall: "Дзвінок",
        about: "Про мене",
        works: "Проєкти",
        blog: "Блог",
        resume: "Резюме"
      },
      footer: {
        blurb: "Shopify-розробка для брендів, яким потрібні кастомні рішення, чистіший UX і надійна підтримка без зайвої складності.",
        follow: "Ще я тут",
        telegram: "Telegram",
        instagram: "Instagram",
        rights: "Усі права захищені."
      }
    }
  },
  de: {
    translation: {
      hero: {
        eyebrow: "Shopify Entwickler",
        topRated: "Top Rated auf Upwork",
        title: "Ich entwickle Shopify Stores, die",
        titleAccent: "konvertieren, skalieren und trotzdem leicht zu pflegen bleiben.",
        subtitle: "Custom Themes, Online-Store-2.0-Migrationen, Integrationen, CRO-orientierte Storefront-Arbeit und langfristiger Support für Marken, die mehr als ein Standard-Setup brauchen.",
        description: "Sauberer UX, schnellere Seiten, stärkeres Merchandising und individuelle Shopify-Arbeit, die leicht zu betreiben bleibt.",
        book_call: "Termin vereinbaren",
        send_message: "Nachricht senden",
        proofItems: [
          "5-Sterne-Upwork-Bewertungen von aktuellen Shopify-Kunden.",
          "Praxis in Custom Builds, Migrationen, CRO und laufendem Store-Support.",
          "Shopify-first Umsetzung mit sauberem UX und stabilen Releases."
        ],
        or: "oder",
        words: ["Entwickler", "Magier", "Experte", "Meister", "Spezialist", "Guru", "Virtuose", "Maestro"]
      },
      about: {
        eyebrow: "Warum Shopify Teams mit mir arbeiten",
        title: "Ein Shopify Partner für wachsende Marken",
        text: "Ich übersetze Business-Ziele in Shopify-Storefronts, die sauber aufgebaut, wartbar und auch nach dem Launch weiterentwickelbar sind.",
        statYearLabel: "Jahre Shopify-Erfahrung",
        statProjectsLabel: "Projekte umgesetzt",
        statHoursLabel: "Upwork-Stunden",
        lets_work: "Lassen Sie uns zusammenarbeiten"
      },
      services: {
        eyebrow: "Leistungen",
        title: "Shopify Leistungen",
        subtitle: "Fokussierte Shopify-Unterstützung für Launches, Wachstum und individuelle Storefront-Arbeit.",
        items: [
          {
            id: "store-setup",
            title: "Shopify Store Setup von Grund auf",
            description: "Neuen Store mit sauberem Theme-Aufbau, flexiblen Sections und admin-freundlichen Inhalten—passend zur Marke und bereit zum Skalieren."
          },
          {
            id: "platform-migration",
            title: "Plattform-Migration",
            description: "Umzug von WooCommerce, Magento, Custom-Stacks oder Legacy-Themes zu Online Store 2.0—ohne SEO, Redirects oder kritische Kundenflüsse zu verlieren."
          },
          {
            id: "app-integration",
            title: "App-Integration für Shopify",
            description: "Apps, Abos, Payments, CRMs und APIs anbinden, sodass Storefront, Warenkorb und Admin stabil und gut bedienbar bleiben."
          },
          {
            id: "performance-seo",
            title: "Performance- & SEO-Optimierung",
            description: "Core Web Vitals und gefühlte Geschwindigkeit verbessern mit schlankerem Liquid und Assets, plus technisches SEO—Structured Data, Metadaten, crawl-freundliche Templates."
          },
          {
            id: "cro-audit",
            title: "Conversion- & UX-Optimierungs-Audit",
            description: "Funnels, UX-Reibung und Merchandising-Lücken prüfen—dann priorisierte Fixes, die Conversion verbessern ohne Full-Rebuild."
          },
          {
            id: "support",
            title: "Laufender Support und Wartung",
            description: "Retainer für Launches, Bugfixes, Theme-Updates und Iteration—damit ihr wachsen könnt, während der Store zuverlässig bleibt."
          }
        ]
      },
      caseStudies: {
        eyebrow: "Case Studies",
        title: "Ausgewählte Arbeiten",
        subtitle: "Einige tiefere Shopify-Projekte, von Custom Builds bis zu Migrationen.",
        viewCase: "Case Study ansehen",
        visitStore: "Store besuchen",
        backToCases: "Zurück zu allen Projekten",
        notFound: "Case Study nicht gefunden.",
        mediaTitle: "Media",
        desktopLabel: "Desktop",
        mobileLabel: "Mobile",
        mobilePlaceholder: "Temporärer Placeholder für die mobile Version. Eine eigene Mobile Preview wird später hier ergänzt.",
        aboutBrandTitle: "Über die Marke",
        readMore: "Mehr lesen",
        challengeTitle: "Ausgangslage",
        scopeTitle: "Leistungsumfang",
        solutionTitle: "Lösung",
        stackTitle: "Stack & Fähigkeiten",
        outcomeTitle: "Ergebnis",
        screenshotTitle: "Projekt-Highlights",
        moreProjectsTitle: "Weitere Shopify Projekte",
        moreProjectsSubtitle: "Ein breiterer Ausschnitt meiner Shopify Arbeit: Migrationen, CRO, Support, Custom Sections und Storefront-Verbesserungen.",
        items: [
          {
            id: "nimfa",
            slug: "nimfa",
            title: "Nimfa",
            summary: "Ein Premium-Sexshop brauchte einen Custom Shopify Store aus Figma, mehrsprachig, mit skalierbaren Sections und einer Premium-Präsentation ab dem ersten Launch.",
            brandSummary: "Nimfa ist eine Premium-Marke für Intimate Wellness und ein Sexshop, aufgebaut rund um diskrete, stilvolle und schamfreie Self-Care für Frauen.",
            brandDescription: "Nimfa positioniert Intimität als etwas Natürliches, Elegantes und Urteilsfreies. Die Marke präsentiert Produkte für Pleasure und Intimate Wellness in einem weicheren Premium-Kontext, mit Fokus auf Selbstakzeptanz, Privatsphäre und einem Einkaufserlebnis, das näher an modernem Self-Care liegt als an einem klassischen Adult Store.",
            image: "/source/desktop/nimfa-desktop.webp",
            mobileImage: "/source/mobile/nimfa-mobile.webp",
            liveUrl: "https://nimfa.nl/",
            tags: ["Custom Theme", "Mehrsprachig", "Figma to Shopify"],
            challenge: "Der Store musste vom ersten Tag an hochwertig wirken und gleichzeitig für das Content-Team leicht pflegbar bleiben. Design, Mehrsprachigkeit und zukünftige Content-Flexibilität mussten zusammen funktionieren.",
            scope: [
              "Ein Custom Shopify Theme auf Basis von Figma von Grund auf entwickeln.",
              "Flexible Sections für Landing-, Produkt- und Editorial-Content aufbauen.",
              "Mehrsprachigen Storefront und adminfreundliche Content-Pflege unterstützen."
            ],
            solution: [
              "Pixelgenauen Storefront mit wiederverwendbaren Sections und Templates umgesetzt.",
              "Blog- und Upsell-Funktionalität direkt ins Theme integriert, damit Content und Merchandising gemeinsam wachsen können.",
              "Die Struktur so aufgebaut, dass das Team Inhalte ohne ständige Code-Abhängigkeit verwalten kann."
            ],
            outcome: [
              "Ein Premium-Shopify-Storefront geliefert, der der freigegebenen Designrichtung entspricht.",
              "Mehrsprachiges Wachstum von Anfang an in die Theme-Struktur eingebaut.",
              "Eine Basis geschaffen, auf der Merchandising- und Content-Updates ohne Rebuild weiterlaufen können."
            ],
            stack: ["Shopify", "Liquid", "Theme Sections", "Mehrsprachiges Setup", "Figma Umsetzung"],
            screenshotCaptions: [
              "Custom Styling eng an die freigegebene Figma-Richtung angelehnt.",
              "Theme-Architektur für wiederkehrende Content-Änderungen ohne Codeeingriffe.",
              "Mehrsprachige Grundlage für eine Premium-Shopify-Marke."
            ]
          },
          {
            id: "indian-affairs",
            slug: "indian-affairs",
            title: "Indian Affairs",
            summary: "Ein Legacy Store musste auf Shopify Online Store 2.0 migriert werden, inklusive Erhalt der Struktur, Neuaufbau individueller Funktionalität und UX-Bereinigung über die gesamte Site.",
            brandSummary: "Indian Affairs ist eine Modemarke für Kinder und Erwachsene, bekannt für zeitlose Stücke, natürliche Materialien und handwerkliche Details mit Bezug zu indischen Textiltraditionen.",
            brandDescription: "Indian Affairs bietet Kleidung und Accessoires für Kinder und Erwachsene mit Fokus auf zeitloses Design, weiche Materialien und handwerklichen Charakter. Viele Produkte greifen Techniken wie Handblockdruck auf, wodurch die Marke näher an einer langsameren, bewussteren Modehaltung liegt als an schnelllebigem Trend-Retail.",
            image: "/source/desktop/indian-affairs-desktop.webp",
            mobileImage: "/source/mobile/indian-affairs-mobile.webp",
            liveUrl: "https://indianaffairs.de/",
            tags: ["Migration", "Online Store 2.0", "Theme Rebuild"],
            challenge: "Die Migration war mehr als ein visuelles Refresh. Inhalte, Custom Logik und operative Abläufe mussten den Wechsel auf eine neue Architektur ohne Instabilität überstehen.",
            scope: [
              "Den Storefront von einem Legacy Setup auf Shopify Online Store 2.0 migrieren.",
              "Inhalte übertragen und individuelle Funktionalität in der neuen Theme-Architektur neu aufbauen.",
              "Styling, UX und zentrale Customer Journeys über die Site hinweg angleichen."
            ],
            solution: [
              "Wichtige Funktionalität innerhalb der OS-2.0-Struktur neu aufgebaut statt Legacy-Verhalten nur weiterzuschleppen.",
              "Relevante Content-Beziehungen und Store-Logik während der Migration abgesichert.",
              "Die Migration genutzt, um gleichzeitig UX und Wartbarkeit zu verbessern."
            ],
            outcome: [
              "Den Store auf eine skalierbarere Shopify Architektur umgestellt.",
              "Launch-Risiken reduziert, indem kritische Flows bewusst neu aufgebaut wurden.",
              "Dem Kunden eine sauberere Basis für zukünftige Storefront-Änderungen hinterlassen."
            ],
            stack: ["Shopify OS 2.0", "Liquid", "Theme Migration", "UX Refinement", "Launch QA"],
            screenshotCaptions: [
              "Migration mit Fokus auf Struktur-Erhalt und Modernisierung der Theme-Basis.",
              "Custom Anforderungen in ein wartbares Shopify Setup überführt.",
              "UX und Styling direkt im Rahmen der Migration vereinheitlicht."
            ]
          },
          {
            id: "silk-tallow",
            slug: "silk-tallow",
            title: "Silk Tallow",
            summary: "Der Store brauchte anspruchsvolle Mystery-Gift- und Free-Gift-Logik, die sich nativ anfühlt, sofort reagiert und Cart-Edge-Cases ohne Page Reloads abfängt.",
            brandSummary: "Silk Tallow ist eine natürliche Skincare-Marke rund um tallow-basierte Formeln, einfache Inhaltsstoffe und toxinfreie Routinen mit Naturbezug.",
            brandDescription: "Silk Tallow baut seine Positionierung um natürliche Einfachheit und Hautpflege ohne künstliche Inhaltsstoffe auf. Die Marke verbindet ihre Produkte mit Pflege, Schutz und einer Rückkehr zu ruhigeren, saubereren Routinen, in denen tallow-basierte Formeln den Kern einer minimalistischen, naturgeleiteten Skincare-Philosophie bilden.",
            image: "/source/desktop/silk-tallow-desktop.webp",
            mobileImage: "/source/mobile/silk-tallow-mobile.webp",
            liveUrl: "https://silktallow.com/",
            tags: ["Custom Logic", "Cart UX", "Merchandising"],
            challenge: "Gift-Logik beschädigt oft den UX, wenn sie auf clunky Reloads oder fragilen Scripts basiert. Hier musste das Erlebnis für Kunden flüssig bleiben und trotzdem sauber auf Cart-Regeln und Promo-Edge-Cases reagieren.",
            scope: [
              "Dynamische Mystery-Gift- und Free-Gift-Storefront-Logik entwickeln.",
              "Die Experience so integrieren, dass sie sich nicht nach einem Add-on anfühlt.",
              "Cart-Regeln, Promo-Trigger und Edge-Cases sauber abbilden."
            ],
            solution: [
              "Storefront-Verhalten gebaut, das Gift-Logik ohne Page Reloads aktualisiert.",
              "Promotions direkt in den Customer Flow integriert statt in isolierten Hinweisen zu verstecken.",
              "Regeln und Cart-Verhalten so umgesetzt, dass das Erlebnis in echten Sessions stabil bleibt."
            ],
            outcome: [
              "Ein flüssigeres Promotion-Erlebnis im Cart und Storefront geschaffen.",
              "Komplexe Gift-Logik so umgesetzt, dass sie Teil des eigentlichen Produkterlebnisses wirkt.",
              "Merchandising-Flexibilität erhöht, ohne die Storefront-Stabilität zu gefährden."
            ],
            stack: ["Shopify", "Liquid", "JavaScript", "Cart Logic", "Promotion UX"],
            screenshotCaptions: [
              "Gift-Logik so aufgebaut, dass sie sich wie ein nativer Teil des Storefronts anfühlt.",
              "Cart-Verhalten reagiert dynamisch statt auf reload-lastige Abläufe zu setzen.",
              "Promotion-Handhabung mit Blick auf Edge Cases und reale Nutzung."
            ]
          },
          {
            id: "bazar-bizar",
            slug: "bazar-bizar",
            title: "Bazar Bizar",
            summary: "Ein vollständig individuell entwickeltes Shopify Theme auf Basis eines Figma-Redesigns, bei dem die komplette Funktionalität des Live-Stores in einen saubereren, moderneren Storefront übertragen wurde.",
            brandSummary: "Bazar Bizar ist eine Interior- und Lifestyle-Marke mit Wurzeln in Antwerpen und Bali, bekannt für handgefertigte Homeware, Möbel, Licht und Dekor geprägt von Reisen, Handwerk und Fair-Trade-Werten.",
            brandDescription: "Bazar Bizar versteht sich als Home- und Lifestyle-Marke, die aus einer Leidenschaft für Reisen entstanden ist und ihre Flagship-Wurzeln in Antwerpen und Bali hat. Die Kollektionen verbinden traditionelle Handwerkskunst mit zeitgenössischen Interiors und mischen handgemachten Charakter, coastal warmth und Fair-Trade-Prinzipien über Möbel, Beleuchtung, Tableware, Textilien und dekorative Stücke hinweg.",
            image: "/source/desktop/bazar-bizar-desktop.webp",
            mobileImage: "/source/mobile/bazar-bizar-mobile.webp",
            liveUrl: "https://bazarbizar.be/",
            tags: ["Custom Theme", "Redesign", "Figma to Shopify"],
            challenge: "Es ging nicht nur um ein neues Erscheinungsbild. Das neue Theme musste die aktualisierte Figma-Richtung sauber umsetzen und gleichzeitig die Funktionalität erhalten, auf die sich Kunden und das Team im Live-Store bereits verließen.",
            scope: [
              "Ein vollständig individuelles Shopify Theme auf Basis des neuen Figma-Redesigns entwickeln.",
              "Wichtige Live-Store-Funktionalität in den neu aufgebauten Storefront übernehmen.",
              "Struktur, Wartbarkeit und Konsistenz gemeinsam mit der visuellen Erneuerung verbessern."
            ],
            solution: [
              "Den Storefront als echtes Custom Shopify Theme neu aufgebaut, statt den Redesign-Layer nur auf die alte Umsetzung zu legen.",
              "Bestehende Live-Funktionalität gezielt in die neue Theme-Basis übertragen, damit wichtige Customer-Flows erhalten bleiben.",
              "Das Redesign genutzt, um gleichzeitig die Theme-Architektur aufzuräumen und eine wartbarere Grundlage zu schaffen."
            ],
            outcome: [
              "Einen neu designten Shopify-Storefront auf Basis von Figma geliefert, ohne wichtige Live-Funktionalität zu verlieren.",
              "Eine sauberere und flexiblere Theme-Basis für künftige Änderungen geschaffen.",
              "Die langfristige Wartbarkeit verbessert, ohne das Kundenerlebnis zu verschlechtern."
            ],
            stack: ["Shopify", "Liquid", "Custom Theme Development", "Figma Umsetzung", "Theme Architektur"],
            screenshotCaptions: [
              "Custom Shopify Theme komplett um die freigegebene Figma-Richtung herum neu aufgebaut.",
              "Live-Store-Funktionalität erhalten, während der Storefront visuell neu gestaltet wurde.",
              "Sauberere Theme-Struktur als Teil des Rebuilds geliefert, nicht als späteres To-do."
            ]
          },
          {
            id: "elanora-skin",
            slug: "elanora-skin",
            title: "Elanora Skin",
            summary: "Ein laufendes Shopify-Projekt, das ich seit einem halben Jahr als Shopify-Experte begleite, mit Fokus auf Multi-Market-Storefront-Logik und retention-orientierte Custom-Funktionalität.",
            brandSummary: "élanora ist eine Skincare-Marke aus Breda, inspiriert von koreanischen Hautpflegetraditionen und westlicher Schlichtheit, die reine Inhaltsstoffe mit modernen Formeln für täglichen Self-Care verbindet.",
            brandDescription: "élanora inszeniert Hautpflege als Verbindung aus wirksamer Pflege und einem täglichen Ritual der Ruhe. Die Marke kombiniert koreanische Skincare-Inspiration mit einer klareren westlichen Ästhetik und positioniert ihre Produkte rund um Glow, Routinen und zugänglichen Self-Care statt rein klinischer Beauty-Kommunikation.",
            image: "/source/desktop/elanora-skin-desktop.webp",
            mobileImage: "/source/mobile/elanora-skin-mobile.webp",
            liveUrl: "https://elanoraskin.com/",
            tags: ["Laufender Support", "Multi-Market", "Klaviyo API"],
            challenge: "Der Store brauchte laufenden technischen Support über mehrere Märkte hinweg, bei dem Promo-Logik je Markt unterschiedlich reagieren musste statt in einem globalen Setup zu enden. Zusätzlich wurde eine tiefere Retention-Funktionalität benötigt, darunter ein individueller Back-in-Stock-Flow über die Klaviyo API.",
            scope: [
              "Den Shopify-Storefront über viele Monate als technischer Partner betreuen.",
              "Announcement-, Upsell-, Gift- und Free-Shipping-Logik je Markt umsetzen.",
              "Eine individuelle Back-in-Stock-Funktionalität über die Klaviyo API integrieren."
            ],
            solution: [
              "Multi-Market-Storefront-Verhalten umgesetzt, damit Promo-Messaging und Merchandising-Logik je nach aktivem Markt unterschiedlich reagieren können.",
              "Custom Upsell- und Free-Gift-Flows mit unterschiedlichen Free-Shipping-Schwellen je Markt gebaut.",
              "Back-in-Stock-Logik über die Klaviyo API ergänzt, um Retention und Re-Engagement über die Standard-Theme-Logik hinaus zu stärken."
            ],
            outcome: [
              "Der Store verfügt jetzt über flexiblere marktspezifische Merchandising- und Promo-Logik.",
              "Die Retention-Funktionalität wurde mit einem individuellen Back-in-Stock-Flow über Klaviyo erweitert.",
              "Durch laufenden Shopify-Support kann sich der Store weiterentwickeln, ohne riskante Ad-hoc-Fixes in der Theme-Basis anzusammeln."
            ],
            stack: ["Shopify", "Liquid", "JavaScript", "Multi-Market-Logik", "Klaviyo API"],
            screenshotCaptions: [
              "Laufender Shopify-Support mit Fokus auf skalierbares marktspezifisches Storefront-Verhalten.",
              "Promo-Logik je Markt statt eines einzigen globalen Setups.",
              "Back-in-Stock-Funktionalität durch Klaviyo-API-Integration erweitert."
            ]
          },
          {
            id: "petaljet",
            slug: "petaljet",
            title: "Petaljet",
            summary: "Ein laufendes Shopify-Projekt, bei dem die Arbeit mit einem gründlichen SEO-Audit und Performance-Verbesserungen begann und in kontinuierlichen Support für einen lebendigen, weiterentwickelten Storefront überging.",
            brandSummary: "Petaljet ist ein Großhandelsanbieter für Blumen für Floristen und professionelle Designer und liefert farm-direct Blüten in den gesamten USA für Hochzeiten, Events und laufende Floral-Programme.",
            brandDescription: "Petaljet ist auf den B2B-Einkauf von Blumen ausgerichtet und bedient Floristen, Event-Designer und andere professionelle Käufer. Die Marke betont verlässliche Versorgung, Sortimentstiefe und einen Workflow, der wiederkehrende Bestellungen, große Events und tägliche Floral-Operations mit weniger Reibung unterstützt.",
            image: "/source/desktop/petaljet-desktop.webp",
            mobileImage: "/source/mobile/petaljet-mobile.webp",
            liveUrl: "https://petaljet.com/",
            tags: ["SEO Audit", "Performance", "Laufender Support"],
            challenge: "Der Store brauchte mehr als einzelne Fixes. Er brauchte eine stärkere technische Basis mit SEO-Audit, besserer Performance auf wichtigen Seiten und laufendem Support, damit sich der Storefront weiterentwickeln kann, statt durch verstreute Updates langsam an Qualität zu verlieren.",
            scope: [
              "Ein SEO-Audit durchführen und technische Chancen mit Einfluss auf Sichtbarkeit und Suchperformance identifizieren.",
              "Die Performance des Storefronts auf wichtigen Seiten und Flows verbessern.",
              "Als laufender Support-Partner für Updates, Fixes und iterative Verbesserungen eingebunden bleiben."
            ],
            solution: [
              "Mit einem SEO-Audit gestartet, um Probleme und Potenziale für bessere Suchsichtbarkeit aufzudecken.",
              "Performance-orientierte Verbesserungen in wichtigen Storefront-Bereichen umgesetzt, damit der Store leichter und zuverlässiger läuft.",
              "Den Store anschließend kontinuierlich betreut, damit Verbesserungen kumulieren statt nur als einmalige Wartung zu enden."
            ],
            outcome: [
              "Das Projekt erhielt eine stärkere SEO-Basis, die Suchsichtbarkeit und Rankings verbessert hat.",
              "Performance-Arbeit machte den Storefront schneller und langfristig gesünder.",
              "Laufender Support hält den Store lebendig und ermöglicht kontinuierliche Weiterentwicklung zwischen größeren Updates."
            ],
            stack: ["Shopify", "Technisches SEO", "Performance-Optimierung", "Storefront-Support", "Laufende Iteration"],
            screenshotCaptions: [
              "SEO-Arbeit begann mit einem technischen Audit statt mit zufälligen Einzel-Fixes.",
              "Performance-Verbesserungen wurden als Teil der Storefront-Roadmap behandelt, nicht als einmaliger Patch.",
              "Laufender Support hält den Store durch kontinuierliche technische Evolution lebendig."
            ]
          }
        ]
      },
      experience: {
        eyebrow: "Timeline",
        title: "Erfahrung",
        subtitle: "Arbeit, Lernen und Praktikum, die meinen Shopify-Weg prägen.",
        placeholderLabel: "Platzhalter-Logo",
        stats: {
          timeline: "Aktive Timeline-Eintrage",
          since: "Lernen und Bauen seit"
        },
        items: [
          {
            kind: "Praktikum",
            role: "Frontend Developer",
            company: "Funduino GmbH",
            dateRange: "Februar 2026 - Heute",
            location: "Nordhorn, Deutschland",
            summary: "Ein laufendes Praktikum als Frontend Developer bei einer Arduino-orientierten Lernplattform und Education-Marke, mit Fokus auf Interface- und Storefront-Arbeit im echten Unternehmensalltag.",
            logo: "/source/logos/funduino.jpg",
            logoAlt: "Funduino GmbH Logo",
            isPlaceholderLogo: false
          },
          {
            kind: "Ausbildung",
            role: "Student",
            company: "KBS Nordhorn",
            dateRange: "2024 - Heute",
            location: "Nordhorn, Deutschland",
            summary: "Seit 2024 Schuler an den Kaufmannischen Berufsbildenden Schulen Nordhorn und parallel dazu technisches sowie berufliches Fundament durch echte Shopify-Projektarbeit vertieft.",
            logo: "/source/logos/kbs-nordhorn.png",
            logoAlt: "KBS Nordhorn Logo",
            isPlaceholderLogo: false
          },
          {
            kind: "Arbeit",
            role: "Shopify Developer",
            company: "Collab IT",
            dateRange: "Mai 2025 - November 2025",
            location: "Remote",
            summary: "Arbeit als Shopify Developer an Kundenprojekten und Storefront-Umsetzung. Da die öffentliche Firmenpräsenz derzeit sehr begrenzt ist, bleibt der Portfolio-Text bewusst sachlich und zurückhaltend.",
            logo: "/source/logos/collab-it.png",
            logoAlt: "Collab IT Logo",
            isPlaceholderLogo: false
          },
          {
            kind: "Arbeit",
            role: "Shopify Developer",
            company: "Great Dev",
            dateRange: "Dezember 2024 - April 2025",
            location: "Remote",
            summary: "Shopify-Entwicklung im Team, bevor die Unternehmenswebsite nicht mehr erreichbar war. Der Eintrag bleibt bewusst knapp, bis wieder eine offizielle Logo-Quelle verfugbar ist.",
            logo: "/source/logos/great-dev.png",
            logoAlt: "Great Dev Logo",
            isPlaceholderLogo: false
          }
        ]
      },
      works: {
        eyebrow: "Projektkatalog",
        title: "Weitere Arbeiten",
        subtitle: "Ein breiterer Mix aus Shopify-Launches, Custom Builds und Storefront-Verbesserungen.",
        allWorksTitle: "Alle Shopify Projekte",
        allWorksSubtitle: "Ein vollständiger Katalog meiner Shopify Arbeit: Custom Builds, Migrationen, Storefront-Verbesserungen, Merchandising-Logik, mehrsprachige Setups und laufender Support.",
        loadMore: "Mehr ansehen",
        visitWebsite: "Website besuchen",
        viewCase: "Case Study ansehen",
        backHome: "Zurück zur Startseite",
        contactCard: {
          title: "Ihr Projekt hier",
          text: "Haben Sie ein Projekt im Kopf? Lassen Sie uns zusammenarbeiten, um eine atemberaubende Website zu erstellen, die Ihrem Unternehmen hilft, online zu wachsen.",
          button: "Kontaktieren Sie mich"
        },
        projects: [
          {
            title: "Pair Stich",
            url: "https://pairstitch.pl/",
            image: "/source/desktop/pair-stich-desktop.webp",
            tech: "Implementierung eines benutzerdefinierten Farbwählers, der sich dynamisch basierend auf Kleidungstyp ändert und die 100-Varianten-Grenze umgeht."
          },
          {
            title: "Haftx",
            url: "https://haftx.com/",
            image: "/source/desktop/haftx-desktop.webp",
            tech: "Entwicklung eines benutzerdefinierten Farbwählers, der sich an den Kleidungstyp anpasst und die 100-Varianten-Beschränkung überwindet."
          },
          {
            title: "Junofires",
            url: "https://junofires.nl/",
            image: "/source/desktop/junofires-desktop.webp",
            tech: "Optimierung der Filter in einem Shopify-Shop, Hinzufügung automatischer Bildanzeigefunktionalität beim Filtern nach Farbe, Verbesserung von UX und Navigation."
          },
          {
            title: "Lerros",
            url: "https://www.lerros.com/",
            image: "/source/desktop/lerros-desktop.webp",
            tech: "Aktualisierung des Themes in einem Shopify-Shop, korrekte Übertragung von Inhalten und Metafeldern, Erhaltung der Datenstruktur und Konfiguration der Produktanzeige für stabilen Betrieb."
          },
          {
            title: "Kiki Green",
            url: "https://kiki-green.com/",
            image: "/source/desktop/kiki-green-desktop.webp",
            tech: "Entwicklung einer vollständigen E-Commerce-Lösung von Grund auf, einschließlich vollständiger Online-Shop-Erstellung und Integration mit verschiedenen Plugins wie Treueprogrammen und Produktabonnements."
          },
          {
            title: "Junior's Cheesecake",
            url: "https://juniorscheesecake.com/",
            image: "/source/desktop/juniors-cheesecake-desktop.webp",
            tech: "Erstellung neuer benutzerdefinierter Abschnitte basierend auf Figma-Design, Entwicklung von E-Mail-Vorlagen und -Handhabung sowie Implementierung der Serving-Seiten-Funktionalität."
          },
          {
            title: "Spring Mountain Vineyard",
            url: "https://club.springmountainvineyard.com/",
            image: "/source/desktop/spring-mountain-vineyard-desktop.webp",
            tech: "Neugestaltung der Kollektionsseite mit verbessertem Filterdesign und Produktkarten, Implementierung dynamischer Breadcrumb-Logik, die sich ohne Seitenaktualisierung aktualisiert für bessere UX."
          },
          {
            title: "Lunesi",
            url: "https://lunesi.co.uk/",
            image: "/source/desktop/lunesi-desktop.webp",
            tech: "Entwicklung eines dynamischen Warenkorb-Upsell-Bereichs, der Produkte intelligent basierend auf dem Warenkorbinhalt anzeigt, vollständig konfigurierbar über den Theme-Editor. Verbesserter Header mit anpassbaren Farbschemata und konfigurierbarem Ankündigungsbanner für flexibles Branding und Werbeaktionen."
          },
          {
            title: "Nimfa",
            url: "https://nimfa.nl/",
            image: "/source/desktop/nimfa-desktop.webp",
            caseStudySlug: "nimfa",
            tech: "Erstellung eines benutzerdefinierten Shopify-Themes von Grund auf mit pixelgenauer Implementierung gemäß Figma-Design. Entwicklung von Blog-Funktionalität, Upsell-Bereichen und vollständiger mehrsprachiger Unterstützung (Englisch, Ukrainisch, Niederländisch) für einen Premium-Sexshop."
          },
          {
            title: "Melinava",
            url: "https://melinava.nl/",
            image: "/source/desktop/melinava-desktop.webp",
            tech: "Finale Pre-Launch-Politur und QA vor dem Go-Live. Ich verantwortete die komplette “ready for traffic” Checkliste: zentrale Customer Journeys, Cart- und Checkout-Sanity-Checks, Responsive-Issues, Speed und visuelle Bugs — damit der Shop stabil und conversion-ready ist."
          },
          {
            title: "Petaljet",
            url: "https://petaljet.com/",
            image: "/source/desktop/petaljet-desktop.webp",
            caseStudySlug: "petaljet",
            tech: "Laufender Store-Support im Team. Ich verbessere SEO und Performance auf wichtigen Seiten, shippe Changes schnell, halte Releases sauber und übernehme tägliche Updates ohne den Storefront zu gefährden."
          },
          {
            title: "Indian Affairs",
            url: "https://indianaffairs.de/",
            image: "/source/desktop/indian-affairs-desktop.webp",
            caseStudySlug: "indian-affairs",
            tech: "Migration vom Legacy-Theme auf Shopify Online Store 2.0 (Prestige). Ich habe Inhalte übertragen, Custom-Funktionalität neu aufgebaut, Anforderungen aus der Spezifikation umgesetzt und Styling sowie UX über die gesamte Site hinweg vereinheitlicht."
          },
          {
            title: "SafeTag Tracking",
            url: "https://safetagtracking.com/",
            image: "/source/desktop/safe-tag-tracking-desktop.webp",
            tech: "Custom Shopify Theme Development aus Figma mit voller Customization und mehrsprachigem Setup. Flexible Sections für einfaches Content-Management, pixelgenaues UI und eine solide Basis zum Skalieren von Seiten und Markets."
          },
          {
            title: "Virea",
            url: "https://virea.se/",
            image: "/source/desktop/virea-desktop.webp",
            tech: "Umsetzung eines Refresh-Designs für Homepage, Produktseiten und Core-Templates. Ich betreue den Store weiterhin als Shopify-Experte und kümmere mich um neue Features, Performance-Optimierung, UX-Verbesserungen und laufende technische Iterationen."
          },
          {
            title: "M-Oceans",
            url: "https://m-oceans.com/",
            image: "/source/desktop/m-oceans-desktop.webp",
            tech: "Migration von einem alten Theme auf Shopify 2.0 inklusive Übernahme von Custom-Logik und Verbesserung zentraler Storefront-Flows. Ich betreue das Projekt weiterhin als Shopify-Experte, liefere neue Funktionen aus und halte den Store nach dem Launch stabil."
          },
          {
            title: "Elanora Skin",
            url: "https://elanoraskin.com/",
            image: "/source/desktop/elanora-skin-desktop.webp",
            caseStudySlug: "elanora-skin",
            tech: "Seit einem halben Jahr laufender Shopify-Support als Shopify-Experte des Stores. Ich habe Multi-Market Announcement Banner, marktbezogene Upsell- und Free-Gift-Logik sowie unterschiedliche Free-Shipping-Schwellen für verschiedene Märkte umgesetzt."
          },
          {
            title: "Silk Tallow",
            url: "https://silktallow.com/",
            image: "/source/desktop/silk-tallow-desktop.webp",
            caseStudySlug: "silk-tallow",
            tech: "Advanced Mystery-Gift- und Free-Gift-Logik ohne Page Reloads gebaut. Nahtlos ins Storefront-Design integriert — inklusive Regeln, Cart-Verhalten und Edge-Case-Handling."
          },
          {
            title: "Bella Bloom Box",
            url: "https://bellabloombox.se/",
            image: "/source/desktop/bella-bloom-box-desktop.webp",
            tech: "Kompletten Shopify-Store basierend auf einem Lovable-Design gebaut. Design in Theme-Sections und Templates übersetzt, Content-Struktur aufgesetzt und so umgesetzt, dass der Kunde ohne Code verwalten kann."
          },
          {
            title: "Bazar Bizar",
            url: "https://bazarbizar.be/",
            image: "/source/desktop/bazar-bizar-desktop.webp",
            caseStudySlug: "bazar-bizar",
            tech: "Arbeit an einem großen, komplexen Shopify-Store mit vielen Templates und Custom-Logik. Tiefgreifende Anpassungen an Sections und Layouts, funktionale Verbesserungen und Support größerer Changes — bei stabiler Basis."
          }
        ]
      },
      upworkReviews: {
        eyebrow: "Upwork",
        title: "Upwork Bewertungen",
        subtitle: "Ein stärkerer Ausschnitt aus der Upwork-Historie hinter dem Portfolio: Migrationen, Performance-Arbeit, Checkout-Aufgaben, Bug Fixing und finales Launch-Polishing.",
        aiLabel: "AI Overview",
        workHistoryLabel: "Work history on Upwork",
        overviewTitle: "Wie Upwork mich beschreibt",
        overviewText: "Ein erfahrener Shopify Developer und Liquid Expert mit Fokus auf Custom Theme Development und Performance-Optimierung. Zu den abgeschlossenen Projekten gehören zum Beispiel PetalJet, wo technisches Refactoring SEO und Ladegeschwindigkeit verbessert hat, sowie MagicScent, wo ich eine 'Build Your Bundle'-Funktion umgesetzt habe, die den durchschnittlichen Bestellwert erhöht hat. Ich arbeite sicher mit Shopify 2.0, tiefgehender Anpassung, Bug Fixing und technisch spezifischer Storefront-Arbeit.",
        ratingLabel: "Bewertung",
        openProfile: "Upwork-Profil öffnen",
        currentHighlightLabel: "Aktuelles Projekt",
        currentHighlight: {
          title: "Performance optimization of Shopify site LINEARGENT.com",
          timeframe: "10. Nov. 2025 - Heute",
          status: "Laufend",
          feedback: "\"Kiril is a good professional, he works efficiently and solves the problems delivering accurate job on time and welldone.\""
        },
        metrics: {
          items: [
            { label: "Abgeschlossene Jobs", count: 25 },
            { label: "Laufend", count: 11 },
            { label: "Offentliche 5-Sterne-Bewertungen", count: 5 },
            { label: "Starke Shopify-Falle", count: 5 }
          ]
        },
        insights: {
          title: "Einblicke aus abgeschlossenen Projekten",
          subtitle: "Signale aus abgeschlossenen Upwork-Projekten. Das sind die Eigenschaften, die Kunden im Feedback am häufigsten genannt haben.",
          items: [
            { label: "Qualitätsorientiert", count: 10 },
            { label: "Klare Kommunikation", count: 8 },
            { label: "Kollaborativ", count: 5 },
            { label: "Detailorientiert", count: 4 },
            { label: "Lösungsorientiert", count: 4 },
            { label: "Zuverlässig", count: 3 },
            { label: "Verantwortlich für Ergebnisse", count: 2 },
            { label: "Professionell", count: 2 }
          ]
        },
        reviews: [
          {
            title: "Shopify-Experte für einige finale Anpassungen und Mobile UI gesucht",
            rating: 5,
            ratingLabel: "Bewertung ist 5,0 von 5.",
            timeframe: "20. Sep. 2025 - 29. Okt. 2025",
            contractType: "Festpreis",
            feedback: "\"Kiril hat in meinem Shopify-Store einen super Job gemacht. Sehr kompetent, schnell und angenehm in der Kommunikation. Er hat genau verstanden, was ich wollte, und über meine Erwartungen hinaus geliefert. Klare Empfehlung.\""
          },
          {
            title: "Shopify Developer gesucht, um technische Fehler auf der Website zu beheben",
            rating: 5,
            ratingLabel: "Bewertung ist 5,0 von 5.",
            timeframe: "22. Okt. 2025 - 23. Okt. 2025",
            contractType: "Festpreis",
            feedback: "\"Perfekte Arbeit von Kiril - sehr empfehlenswert. Er hat kritische technische Probleme auf unserer Shopify-Website mit dem Rise-Theme hervorragend gelöst. 404-URL-Fehler, Sprachumschaltung und weitere technische Probleme hat er schnell behoben.\""
          },
          {
            title: "Shopify Developer gesucht - sauberer Embedded Checkout (WHOP x Shopify)",
            rating: 5,
            ratingLabel: "Bewertung ist 5,0 von 5.",
            timeframe: "1. Jan. 2026 - 3. Jan. 2026",
            contractType: "Festpreis",
            feedback: "\"Die Zusammenarbeit mit Kiril war wirklich sehr gut! Er kommuniziert klar und präzise, nimmt Unklarheiten heraus und hält Ziele sowie nächste Schritte sauber auf Kurs.\""
          },
          {
            title: "Shopify-Store-Update von Prestige 4 auf 10-11 und weitere Verbesserungen",
            rating: 5,
            ratingLabel: "Bewertung ist 5,0 von 5.",
            timeframe: "10. Nov. 2025 - 21. Nov. 2025",
            contractType: "Festpreis",
            feedback: "\"Die Zusammenarbeit mit Kiril war sehr gut. Die Kommunikation war klar und pünktlich, und alle Aufgaben wurden zuverlässig erledigt. Ich bin mit dem Ergebnis vollständig zufrieden und würde jederzeit wieder mit ihm arbeiten.\""
          },
          {
            title: "Experte für Shopify-2.0-Migration und Speed-Optimierung (Ukrainian Developers)",
            rating: 5,
            ratingLabel: "Bewertung ist 5,0 von 5.",
            timeframe: "10. Nov. 2025 - 6. Feb. 2026",
            contractType: "Festpreis",
            feedback: "\"Danke, Kiril war bei unserer Migration auf Shopify 2 sehr hilfreich und hat eine Reihe manuell programmierter Lösungen umgesetzt.\""
          },
          {
            title: "Finales Polishing für Shopify-Site und Landingpage (einmaliges Projekt)",
            rating: 5,
            ratingLabel: "Bewertung ist 5,0 von 5.",
            timeframe: "4. Dez. 2025 - 15. Dez. 2025",
            contractType: "Festpreis",
            feedback: "\"Kiril hat bei mehreren Shopify-Setup- und Technikaufgaben unterstützt. Wir haben das Projekt pausiert, während wir die Gesamtrichtung der Website neu bewertet haben.\""
          },
          {
            title: "Shopify Redesign + technische Migration + SEO / Growth-Marketing-Setup - nur Agentur aus US/Europa",
            rating: 4,
            ratingLabel: "Bewertung ist 4,0 von 5.",
            timeframe: "9. Dez. 2025 - 8. Mar. 2026",
            contractType: "Festpreis",
            feedback: "\"Hallo Kiril, ich schätze die Arbeit, die du hier hineingesteckt hast. Danke für deine Hilfe beim Shopify-Store-Relaunch und für deine Flexibilität, als sich der Projektumfang verändert hat. Viel Erfolg bei deinen weiteren Projekten!\""
          },
          {
            title: "Shopify Developer - smarte Auto-Add-Gift-Logik (EUR75 ausgeben, Produkt gratis erhalten)",
            rating: 4,
            ratingLabel: "Bewertung ist 4,0 von 5.",
            timeframe: "29. Okt. 2025 - 2. Nov. 2025",
            contractType: "Festpreis",
            feedback: "\"Antwortet schnell und macht gute Arbeit.\""
          },
          {
            title: "Übersetzungs- und Fehleranpassungen",
            rating: 5,
            ratingLabel: "Bewertung ist 5,0 von 5.",
            timeframe: "30. Okt. 2025 - 31. Okt. 2025",
            contractType: "Festpreis",
            feedback: "\"Genauso großartig wie beim letzten Mal. Schnell, termintreu, perfekt. Danke, Bro.\""
          },
          {
            title: "Suche nach einem Shopify Developer (kleine einmalige Aufgabe)",
            rating: 5,
            ratingLabel: "Bewertung ist 5,0 von 5.",
            timeframe: "27. Okt. 2025 - 28. Okt. 2025",
            contractType: "Festpreis",
            feedback: "\"Kiril hat großartige Arbeit geleistet! Er hat die Anforderungen schnell verstanden, alles genau wie im Loom-Video umgesetzt und schnelle, saubere Ergebnisse geliefert. Ausgezeichnete Kommunikation und professionelle Arbeit.\""
          },
          {
            title: "Performance-Optimierung der Shopify-Website LINEARGENT.com",
            rating: 5,
            ratingLabel: "Bewertung ist 5,0 von 5.",
            timeframe: "10. Nov. 2025 - Heute",
            contractType: "Laufend",
            feedback: "\"Kiril ist ein guter Profi, arbeitet effizient, löst Probleme und liefert präzise, saubere Arbeit pünktlich ab.\""
          },
          {
            title: "Shopify Bug",
            rating: 5,
            ratingLabel: "Bewertung ist 5,0 von 5.",
            timeframe: "4. Nov. 2025 - 5. Nov. 2025",
            contractType: "Festpreis",
            feedback: "\"Mit Kiril arbeitet es sich sehr gut. Schnelle Kommunikation, gute Umsetzung, saubere Arbeit.\""
          }
        ]
      },
      testimonials: {
        title: "Referenzen",
        reviews: [
          {
            name: "Oleksandr",
            image: "/source/profile/testimonial-avatar-placeholder.png",
            text: "Kiril ist ein Lebensretter! Er hat alle Probleme auf meiner Shopify-Site behoben und mir sogar Tipps zur Verbesserung gegeben. Ich bin so glücklich mit den Ergebnissen."
          },
          {
            name: "Anastasia",
            image: "/source/profile/testimonial-avatar-placeholder.png",
            text: "Ich war so verloren beim Versuch, meinen Online-Shop einzurichten, aber Kiril hat es zum Kinderspiel gemacht! Jetzt habe ich eine schöne Website, die tatsächlich Verkäufe bringt. Danke, Kiril!"
          },
          {
            name: "Dmytro",
            image: "/source/profile/testimonial-avatar-placeholder.png",
            text: "Die Zusammenarbeit mit Kiril war eine fantastische Erfahrung. Er ist ein echter Shopify-Experte und kümmert sich wirklich um seine Kunden. Ich empfehle ihn sehr!"
          },
          {
            name: "Artem",
            image: "/source/profile/testimonial-avatar-placeholder.png",
            text: "Kiril hat alles getan, um eine atemberaubende Website für mein Unternehmen zu erstellen. Er ist ein echter Profi und es macht Spaß, mit ihm zu arbeiten."
          },
          {
            name: "Hanna",
            image: "/source/profile/testimonial-avatar-placeholder.png",
            text: "Meine neue Website ist alles, was ich wollte und mehr! Kiril ist unglaublich talentiert und einfach zu arbeiten. Ich kann ihm nicht genug danken."
          }
        ]
      },
      contact: {
        title: "Kontakt",
        topRated: "Top Rated auf Upwork",
        subtitle: "Lassen Sie uns über Ihr Shopify Projekt sprechen",
        email: "karatitsynkiril@gmail.com",
        note: "Schicken Sie Ihren Store-Link und eine kurze Aufgabenbeschreibung, dann klären wir den Rest gemeinsam.",
        topRatedNote: "Arbeiten Sie mit einem Top Rated Upwork-Freelancer, der für klare Kommunikation, verlässliche Umsetzung und Shopify-Arbeit steht, die auch nach dem Launch stabil bleibt.",
        audit: "Kostenloser Store Audit und Projekterstgespräch",
        book_call: "Termin vereinbaren",
        linkedin: "LinkedIn",
        github: "GitHub",
        preferMessage: "Bevorzugen Sie eine direkte Nachricht?",
        sendMessage: "Nachricht senden"
      },
      blog: {
        title: "Blog",
        subtitle: "Gedanken zur Schaffung hochperformanter Online-Erlebnisse.",
        readMore: "Weiterlesen",
        backToList: "Zurück zu allen Artikeln",
        notFound: "Artikel nicht gefunden.",
        featuredTitle: "Ausgewählte Einblicke",
        featuredSubtitle: "Frische Erkenntnisse aus aktuellen Projekten und Launches.",
        viewAll: "Alle anzeigen",
        estimatedRead: "{{time}} Lesezeit",
        posts: [
          {
            id: "shopify-conversion-boost",
            slug: "shopify-conversion-boost",
            title: "5 schnelle Gewinne, um Ihre Shopify-Konversion zu steigern",
            date: "15. Mai 2024",
            readingTime: "4 Min",
            excerpt: "Einfache UX-Anpassungen und Geschwindigkeitsoptimierungen, die Besucher sofort dazu bringen, Ihrem Shop zu vertrauen und häufiger auf die Kauf-Schaltfläche zu klicken.",
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
            tags: ["Shopify", "Konversion"],
            content: [
              "Konversionssteigerung erfordert selten ein vollständiges Redesign. Kleine, fokussierte Verbesserungen, die zusammen gestapelt werden, bringen Sie schneller ans Ziel.",
              "Beginnen Sie mit der Geschwindigkeit. Komprimieren Sie Hero-Bilder, verzögern Sie das Laden von Abschnitten unterhalb der Falte und halten Sie Drittanbieter-Skripte unter Kontrolle. Ein schneller Shop wirkt professionell und beseitigt Zögern.",
              "Vereinfachen Sie als Nächstes die Produktseite. Klare Handlungsaufforderungen, vorab Versandinformationen und sozialer Beweis in der Nähe der Warenkorb-Schaltfläche reduzieren Reibung.",
              "Verwenden Sie Bundles oder Fortschrittsbalken im Warenkorb, um den durchschnittlichen Bestellwert zu erhöhen. Kunden lieben es zu sehen, wie nah sie an kostenlosem Versand oder einem Bonusgeschenk sind.",
              "Verfolgen Sie schließlich alles. Richten Sie grundlegende Funnels in Shopify Analytics oder GA4 ein, damit Sie auf das setzen können, was funktioniert, und den Rest kürzen."
            ]
          },
          {
            id: "landing-page-launch-checklist",
            slug: "landing-page-launch-checklist",
            title: "Landingpage-Launch-Checkliste für beschäftigte Gründer",
            date: "4. April 2024",
            readingTime: "3 Min",
            excerpt: "Bevor Sie starten, gehen Sie diese leichte Checkliste durch, um sicherzustellen, dass Ihr Angebot klar, schnell und bereit zur Konversion ist.",
            image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
            tags: ["Checkliste", "Launch"],
            content: [
              "Eine Landingpage ohne Überprüfungen zu veröffentlichen ist wie Code ohne Tests zu versenden. Eine gründliche Überprüfung verhindert, dass Konversionen verloren gehen.",
              "Zuerst die Überschrift. Sie sollte in einem Satz erklären, was Sie anbieten und warum es wichtig ist. Kombinieren Sie es mit einer Unterüberschrift, die beantwortet, für wen es ist.",
              "Stellen Sie sicher, dass die primäre Handlungsaufforderung über der Falte liegt und nach jedem Hauptabschnitt wiederholt wird. Konsistenz verwandelt Interesse in Aktion.",
              "Beweis zählt. Fügen Sie Referenzen, Logos oder schnelle Statistiken hinzu, um zu zeigen, dass echte Menschen Ihnen vertrauen.",
              "Schließen Sie es mit Tracking-Pixeln und Formularübermittlungen ab, die an das richtige Postfach oder CRM weitergeleitet werden, damit Sie schnell nachfassen können."
            ]
          }
        ]
      },
      faq: {
        title: "FAQ",
        questions: [
          {
            question: "Welche Shopify Arbeit übernehmen Sie normalerweise?",
            answer: "Die meisten Projekte fallen in vier Kategorien: Custom Theme Arbeit, Online-Store-2.0-Migrationen, Feature-Entwicklung im Storefront und laufender Support nach dem Launch."
          },
          {
            question: "Können Sie in einem bestehenden Shopify Store arbeiten?",
            answer: "Ja. Ich arbeite regelmäßig in Live Stores und verbessere Sections, Produktseiten, Cart-Verhalten, Filtering, Integrationen, Geschwindigkeit und Launch-Readiness."
          },
          {
            question: "Übernehmen Sie Migrationen auf Shopify Online Store 2.0?",
            answer: "Ja. Ich unterstütze bei der Umstellung von Legacy Setups auf OS 2.0, sichere Content-Struktur, baue individuelle Logik neu auf und reduziere Launch-Risiken."
          },
          {
            question: "Können Sie auch nach dem Launch unterstützen?",
            answer: "Ja. Viele Kunden behalten mich nach dem Launch für Fixes, Experimente, SEO- und Speed-Verbesserungen, neue Sections und laufende Storefront-Entwicklung an Bord."
          },
          {
            question: "Wie starten wir am besten?",
            answer: "Schicken Sie den Store-Link, die Aufgabe und eventuelle Deadlines oder Einschränkungen. Danach kann ich den sinnvollsten nächsten Schritt vorschlagen: Audit, kleiner Sprint oder größere Umsetzung."
          },
          {
            question: "Arbeiten Sie mit Designern oder bestehenden Spezifikationen?",
            answer: "Ja. Ich kann auf Basis von Figma, Loom-Videos, schriftlichen Spezifikationen oder einem bestehenden Storefront-Referenzbild umsetzen und helfe auch dabei, unscharfe Anforderungen sauberer zu strukturieren."
          }
        ],
        book_call: "Termin vereinbaren"
      },
      header: {
        services: "Leistungen",
        cases: "Case Studies",
        experience: "Erfahrung",
        upwork: "Upwork",
        contact: "Kontakt",
        bookCall: "Termin",
        about: "Über mich",
        works: "Projekte",
        blog: "Blog",
        resume: "Lebenslauf"
      },
      footer: {
        blurb: "Shopify Entwicklung für Marken, die individuelle Lösungen, saubereren UX und verlässlichen Support ohne unnötige Komplexität brauchen.",
        follow: "Auch hier",
        telegram: "Telegram",
        instagram: "Instagram",
        rights: "Alle Rechte vorbehalten."
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 
