import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      hero: {
        web: "Web",
        title: "I'm Kiril",
        subtitle: "I build websites that make your business shine online.",
        book_call: "Book a Call",
        send_message: "Send me a message",
        or: "or",
        words: ["Developer", "Magician", "Expert", "Master", "Specialist", "Guru", "Virtuoso", "Maestro"]
      },
      about: {
        title: "My name is Kiril Karatitsyn",
        text: "I create beautiful websites and online-shops that help businesses sell more online. Specializing in developing sites that are easy to use and look great on any device.",
        text_2: "The focus is on making websites that are fast, easy to navigate, and help turn visitors into customers. Whether you need a new website or want to improve your existing one, let's make it happen.",
        lets_work: "Let's Work Together"
      },
      process: {
        title: "My Process",
        steps: {
          step1: {
            title: "1. First Chat 🚀",
            description: "Let's discuss your business goals and website requirements. Planning the perfect solution - from simple websites to complete online stores. 🎯"
          },
          step2: {
            title: "2. Research 🔍",
            description: "Analyzing industry best practices to ensure your website stands out and attracts the right customers. 📊"
          },
          step3: {
            title: "3. Design 🎨",
            description: "Creating modern, attractive designs that look great on phones, tablets, and computers. 💫"
          },
          step4: {
            title: "4. Building 💻",
            description: "Building your website using the best tools to make it fast, secure, and easy to update. ⚡"
          },
          step5: {
            title: "5. Check & Test ✅",
            description: "Thorough testing ensures everything works perfectly, with adjustments made as needed. 🔄"
          },
          step6: {
            title: "6. Go Live 🚀",
            description: "Your website goes live with ongoing support to ensure continued optimal performance. 🌟"
          }
        },
        book_call: "Book a Call"
      },
      works: {
        title: "Works",
        loadMore: "Load More",
        visitWebsite: "Visit Website",
        contactCard: {
          title: "Your Project Here",
          text: "Have a project in mind? Let's work together to create a stunning website that helps your business grow online.",
          button: "Contact Me"
        },
        projects: [
          {
            title: "Honey Sunny Paradise",
            url: "https://www.honeysunnyparadise.com/",
            image: "/source/works_1.webp",
            tech: "US client selling Hawaiian honey needed a quality, simple online store. I fully configured it and integrated FedEx shipping."
          },
          {
            title: "Craft-Minds(PDPs)",
            url: "https://craft-minds.com/",
            image: "/source/6718b31b0e47a451312f3357 1.png",
            tech: "Ongoing collaboration with the client, developing unique product landing pages and enhancing the theme with custom sections."
          },
          {
            title: "Pair Stich",
            url: "https://pairstitch.pl/",
            image: "/source/Pairstich.webp",
            tech: "Implemented a custom color selector that dynamically changes based on clothing type and bypasses the 100 variant limit."
          },
          {
            title: "Kramucci",
            url: "https://kramucci.com/",
            image: "/source/Kramucci - Premium Italian Women Bags.webp",
            tech: "Migrated the Polish site version to English with additional improvements."
          },
          {
            title: "Steppyshoes",
            url: "https://steppyshoes.com/",
            image: "/source/Steppy _ Pour les petits pieds en pleine croissance.webp",
            tech: "Migrated the English version of the site to French and added custom sections."
          },
          {
            title: "Haftx",
            url: "https://haftx.com/",
            image: "/source/HaftX.webp",
            tech: "Developed a custom color selector that adapts to clothing type and overcomes the 100 variant limitation."
          },
          {
            title: "Canvaswall",
            url: "https://canvaswallartstore.com/",
            image: "/source/TheCanvasWallArt.webp",
            tech: "Developed and implemented several custom sections according to the design and technical requirements."
          },
          {
            title: "The Vegan Wellness",
            url: "https://theveganwellnessco.uk/",
            image: "/source/The Vegan Wellness Co. affordable plant-based nutrition.webp",
            tech: "Developed a Shopify store with a custom theme from scratch, implemented a subscription system, and integrated sections with metafields for easy administration."
          },
          {
            title: "Junofires",
            url: "https://junofires.nl/",
            image: "/source/Bestel de mooiste rustieke ledkaarsen met timer bij JUNOfires.webp",
            tech: "Optimized filters in a Shopify store, added automatic image display functionality when filtering by color, improving UX and navigation."
          },
          {
            title: "Lerros",
            url: "https://www.lerros.com/",
            image: "/source/Buy fashion for men conveniently online.webp",
            tech: "Updated the theme in a Shopify store, correctly transferred content and metafields, preserved data structure, and configured product display for stable operation."
          },
          {
            title: "Kiki Green",
            url: "https://kikigreen.com/",
            image: "/source/kiki-green.png",
            tech: "Developed a full-cycle e-commerce solution from scratch, including complete online store creation and integration with various plugins such as loyalty programs and product subscriptions."
          },
        {
          title: "Junior's Cheesecake",
          url: "https://juniorscheesecake.com/",
          image: "/source/Juniors Cheesecake.png",
          tech: "Created new custom sections based on Figma design, developed email templates and handling, and implemented serving page functionality."
        },
        {
          title: "Spring Mountain Vineyard",
          url: "https://club.springmountainvineyard.com/",
          image: "/source/Spring Mountain Vineyard.png",
          tech: "Redesigned the collection page with improved filter design and product cards, implemented dynamic breadcrumb logic that updates without page refresh for better UX."
        },
        {
          title: "Lunesi",
          url: "https://lunesi.co.uk/",
          image: "/source/lunesi.png",
          tech: "Developed a dynamic cart drawer upsell section that intelligently displays products based on cart contents, fully configurable through the theme editor. Enhanced header with customizable color schemes and a configurable announcement banner for flexible branding and promotions."
        },
        {
          title: "Nimfa",
          url: "https://nimfa.nl/",
          image: "/source/nimfa.png",
          tech: "Built a custom Shopify theme from scratch with pixel-perfect implementation according to Figma design. Developed blog functionality, upsell sections, and full multilingual support (English, Ukrainian, Dutch) for the premium intimate care brand."
        },
          {
            title: "Melinava",
            url: "https://melinava.nl/",
            image: "/source/melinava.png",
            tech: "Final pre-launch polish and QA before going live. I owned the full “ready for traffic” checklist: key customer journeys, cart and checkout sanity checks, responsive issues, speed, and visual bugs so the site was stable and conversion ready."
          },
          {
            title: "Petaljet",
            url: "https://petaljet.com/",
            image: "/source/petaljet.png",
            tech: "Ongoing store support within a team. I improve SEO and performance across key pages, ship changes fast, keep releases clean, and handle day to day updates without breaking the storefront."
          },
          {
            title: "Indian Affairs",
            url: "https://indianaffairs.de/",
            image: "/source/indian-affairs.png",
            tech: "Migrated the store from a legacy theme to Shopify Online Store 2.0 (Prestige). I transferred all content, rebuilt custom functionality, implemented client requirements from the spec, and aligned styling and UX across the site."
          },
          {
            title: "SafeTag Tracking",
            url: "https://safetagtracking.com/",
            image: "/source/safeatags.png",
            tech: "Custom Shopify theme development from Figma with full customization and multilingual setup. Built flexible sections for easy content management, delivered pixel accurate UI, and set the foundation for scaling pages and markets."
          },
          {
            title: "Virea",
            url: "https://virea.se/",
            image: "/source/virea.png",
            tech: "Implemented a refreshed design for the homepage, product pages, and core templates. The store is on continuous support: new features, performance optimization, UX improvements, and regular technical iterations."
          },
          {
            title: "M-Oceans",
            url: "https://m-oceans.com/",
            image: "/source/m-oceans.png",
            tech: "Migrated from an old theme to a new Shopify 2.0 architecture and carried over custom logic. Added new functionality, improved page structure, and ensured all critical store flows worked reliably after launch."
          },
          {
            title: "Silk Tallow",
            url: "https://silktallow.com/",
            image: "/source/silk-tallow.png",
            tech: "Built advanced Mystery Gift and Free Gift logic that works without page reloads. Integrated it seamlessly into the storefront design for a smooth experience, including rules, cart behavior, and edge case handling."
          },
          {
            title: "Bella Bloom Box",
            url: "https://bellabloombox.se/",
            image: "/source/httpsbellabloombox.png",
            tech: "Built a full Shopify store based on a Lovable design. Translated the design into theme sections and templates, set up content structure, and made it easy for the client to manage without code."
          },
          {
            title: "Bazar Bizar",
            url: "https://bazarbizar.be/",
            image: "/source/bazarbizar.png",
            tech: "Worked on a large, complex Shopify store with many templates and custom logic. Delivered deep customization across sections and layouts, implemented functional improvements, and supported larger changes while keeping the site stable."
          }
        ]
      },
      upworkReviews: {
        title: "Upwork Reviews",
        subtitle: "Trusted by clients worldwide. 100% 5-star reviews with proven results—fast delivery, clear communication, and solutions that exceed expectations.",
        seeMore: "See more",
        openOnUpwork: "Open on Upwork",
        seeMoreReviews: "See more reviews",
        reviews: [
          {
            title: "Shopify expert needed for some final adjustments and mobile ui",
            rating: 5,
            ratingLabel: "Rating is 5.0 out of 5.",
            timeframe: "Sep 20, 2025 - Oct 29, 2025",
            contractType: "Fixed price",
            feedback: "\"Kiril Did a super job on my Shopify store. Very skilled, fast, and easy to communicate with. He understood exactly what I wanted and delivered beyond expectations. Highly recommended… See more\"",
            showSeeMore: true,
          },
          {
            title: "Looking for a Shopify Developer (Small One-Time Task)",
            rating: 5,
            ratingLabel: "Rating is 5.0 out of 5.",
            timeframe: "Oct 27, 2025 - Oct 28, 2025",
            contractType: "Fixed price",
            feedback: "\"Kiril did a great job! He quickly understood the requirements, implemented everything exactly as shown in the loom video, and delivered fast, clean results. Excellent communication and professional work. I… See more\"",
            showSeeMore: true,
          },
          {
            title: "Shopify Developer Needed to Fix Site Technical Errors",
            rating: 5,
            ratingLabel: "Rating is 5.0 out of 5.",
            timeframe: "Oct 22, 2025 - Oct 23, 2025",
            contractType: "Fixed price",
            feedback: "\"Perfect Job by Kiril – Highly Recommended Kiril did an outstanding job fixing critical technical issues on our Shopify Rise theme site. He quickly resolved 404 URL errors, language switching… See more\"",
            showSeeMore: true
          },
          {
            title: "Shopify CRO Developer Needed to Create a \"Bundle Builder\"",
            rating: 5,
            ratingLabel: "Rating is 5.0 out of 5.",
            timeframe: "Oct 29, 2025 - Nov 2, 2025",
            contractType: "Fixed price",
            showSeeMore: false
          }
        ]
      },
      testimonials: {
        title: "Testimonials",
        reviews: [
          {
            name: "Oleksandr",
            image: "/source/1.png",
            text: "Kiril is a lifesaver! He fixed all the issues on my Shopify site and even gave me tips to improve it. I'm so happy with the results."
          },
          {
            name: "Anastasia",
            image: "/source/4.png",
            text: "I was so lost trying to set up my online store, but Kiril made it a breeze! Now I have a beautiful website that actually gets sales. Thanks, Kiril!"
          },
          {
            name: "Dmytro",
            image: "/source/3.png",
            text: "Working with Kiril was a fantastic experience. He's a true expert in Shopify and really cares about his clients. I highly recommend him!"
          },
          {
            name: "Artem",
            image: "/source/2.png",
            text: "Kiril went above and beyond to create a stunning website for my business. He's a true professional and a pleasure to work with."
          },
          {
            name: "Hanna",
            image: "/source/5.png",
            text: "My new website is everything I wanted and more! Kiril is incredibly talented and easy to work with. I can't thank him enough."
          }
        ]
      },
      contact: {
        title: "LET'S WORK TOGETHER",
        subtitle: "everything starts with a conversation",
        email: "karatitsynkiril@gmail.com",
        book_call: "Book a Call",
        linkedin: "LinkedIn",
        github: "GitHub",
        preferMessage: "Prefer to send a direct message?",
        sendMessage: "Send Message"
      },
      blog: {
        title: "Blog",
        subtitle: "Thoughts on creating high-performing online experiences.",
        readMore: "Read more",
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
            question: "What makes your websites special? 💻",
            answer: "I create websites that are fast, look great, and are easy for your customers to use. They work perfectly on phones, tablets, and computers. 🚀"
          },
          {
            question: "Why choose Shopify for my online store? 🛍️",
            answer: "Shopify is the safest and easiest way to run an online store. It has everything you need to start selling online quickly. 🔒"
          },
          {
            question: "Why work with me? 🌟",
            answer: "I create websites that not only look beautiful but also help your business grow. I'm here to support you every step of the way. ⚡"
          },
          {
            question: "How much? 💰",
            answer: "Each project is unique - let's discuss your specific needs and goals to find the right solution for your budget. 📊"
          },
          {
            question: "Support after launch? 🔄",
            answer: "Yes! I provide ongoing support to ensure your website stays up-to-date and performs at its best. 🛡️"
          },
          {
            question: "Who do you prefer, a Dog or a Cat? 🐱",
            answer: "Cats are my favorite! They're independent, graceful, and make perfect coding companions. 😺"
          }
        ],
        book_call: "Book a Call"
      },
      header: {
        about: "About Me",
        process: "Process",
        faq: "FAQ",
        works: "Works",
        blog: "Blog",
        contact: "Contact Me",
        resume: "Resume"
      }
    }
  },
  uk: {
    translation: {
      hero: {
        web: "Веб",
        title: "Я Кіріл",
        subtitle: "Я створюю веб-сайти, які роблять ваш бізнес помітним в інтернеті.",
        book_call: "Забронювати дзвінок",
        send_message: "Написати мені",
        or: "або",
        words: ["Розробник", "Чарівник", "Експерт", "Майстер", "Спеціаліст", "Гуру", "Віртуоз", "Маестро"]
      },
      about: {
        title: "Мене звати Кіріл Каратіцин",
        text: "Я створюю красиві веб-сайти та онлайн-магазини, які допомагають бізнесу продавати більше в інтернеті. Спеціалізуюся на розробці сайтів, які легко використовувати та виглядають чудово на будь-якому пристрої.",
        text_2: "Головний акцент робиться на створенні веб-сайтів, які швидко працюють, легко навігуються та допомагають перетворити відвідувачів в клієнтів. Чи вам потрібен новий веб-сайт або ви хочете покращити свій існуючий, давайте зробимо це.",
        lets_work: "Давайте працювати разом"
      },
      process: {
        title: "Мій Процес",
        steps: {
          step1: {
            title: "1. Перша Розмова 🚀",
            description: "Обговоримо цілі вашого бізнесу та вимоги до веб-сайту. Планування ідеального рішення - від простих веб-сайтів до повноцінних інтернет-магазинів. 🎯"
          },
          step2: {
            title: "2. Дослідження 🔍",
            description: "Аналіз найкращих практик галузі, щоб ваш веб-сайт виділявся та привертав потрібних клієнтів. 📊"
          },
          step3: {
            title: "3. Дизайн 🎨",
            description: "Створення сучасних, привабливих дизайнів, які чудово виглядають на телефонах, планшетах та комп'ютерах. 💫"
          },
          step4: {
            title: "4. Розробка 💻",
            description: "Створення вашого веб-сайту з використанням найкращих інструментів, щоб зробити його швидким, безпечним та легким в оновленні. ⚡"
          },
          step5: {
            title: "5. Перевірка і Тестування ✅",
            description: "Ретельне тестування забезпечує ідеальну роботу всього, з внесенням необхідних коригувань. 🔄"
          },
          step6: {
            title: "6. Запуск 🚀",
            description: "Ваш веб-сайт запускається з постійною підтримкою для забезпечення оптимальної роботи. 🌟"
          }
        },
        book_call: "Забронювати дзвінок"
      },
      works: {
        title: "Роботи",
        loadMore: "Завантажити ще",
        visitWebsite: "Відвідати сайт",
        contactCard: {
          title: "Ваш Проект Тут",
          text: "Маєте проект на думці? Давайте працювати разом, щоб створити приголомшливий веб-сайт, який допоможе вашому бізнесу зростати в інтернеті.",
          button: "Зв'язатися зі мною"
        },
        projects: [
          {
            title: "Honey Sunny Paradise",
            url: "https://www.honeysunnyparadise.com/",
            image: "/source/works_1.webp",
            tech: "Клієнт із США, що продає гавайський мед, потребував якісний, простий інтернет-магазин. Я повністю налаштував його та інтегрував доставку FedEx."
          },
          {
            title: "Craft-Minds(PDPs)",
            url: "https://craft-minds.com/",
            image: "/source/6718b31b0e47a451312f3357 1.png",
            tech: "Постійна співпраця з клієнтом, розробка унікальних посадочних сторінок продуктів та покращення теми власними секціями."
          },
          {
            title: "Pair Stich",
            url: "https://pairstitch.pl/",
            image: "/source/Pairstich.webp",
            tech: "Реалізовано кастомний селектор кольорів, який динамічно змінюється за типом одягу та обходить ліміт у 100 варіантів."
          },
          {
            title: "Kramucci",
            url: "https://kramucci.com/",
            image: "/source/Kramucci - Premium Italian Women Bags.webp",
            tech: "Перенесено польську версію сайту на англійську з додатковими покращеннями."
          },
          {
            title: "Steppyshoes",
            url: "https://steppyshoes.com/",
            image: "/source/Steppy _ Pour les petits pieds en pleine croissance.webp",
            tech: "Перенесено англійську версію сайту на французьку та додано кастомні секції."
          },
          {
            title: "Haftx",
            url: "https://haftx.com/",
            image: "/source/HaftX.webp",
            tech: "Розроблено кастомний селектор кольорів, який адаптується до типу одягу та обходить обмеження у 100 варіантів."
          },
          {
            title: "Canvaswall",
            url: "https://canvaswallartstore.com/",
            image: "/source/TheCanvasWallArt.webp",
            tech: "Розроблено та впроваджено кілька кастомних секцій згідно з дизайном і технічними вимогами."
          },
          {
            title: "The Vegan Wellness",
            url: "https://theveganwellnessco.uk/",
            image: "/source/The Vegan Wellness Co. affordable plant-based nutrition.webp",
            tech: "Розробив Shopify-магазин із кастомною темою з нуля, реалізував систему підписки та інтегрував секції з метаполями для зручного адміністрування."
          },
          {
            title: "Junofires",
            url: "https://junofires.nl/",
            image: "/source/Bestel de mooiste rustieke ledkaarsen met timer bij JUNOfires.webp",
            tech: "Оптимізував фільтри в Shopify-магазині, додав функцію автоматичного відображення зображення при фільтрації за кольором, покращивши UX і навігацію."
          },
          {
            title: "Lerros",
            url: "https://www.lerros.com/",
            image: "/source/Buy fashion for men conveniently online.webp",
            tech: "Оновив тему в Shopify-магазині, коректно переніс контент і метаполя, зберіг структуру даних і налаштував відображення товарів для стабільної роботи."
          },
          {
            title: "Kiki Green",
            url: "https://kikigreen.com/",
            image: "/source/kiki-green.png",
            tech: "Розробив повний цикл e-commerce рішення з нуля, включаючи створення повноцінного інтернет-магазину та інтеграцію з різними плагінами, такими як програми лояльності та підписка на продукти."
          },
          {
            title: "Junior's Cheesecake",
            url: "https://juniorscheesecake.com/",
            image: "/source/Juniors Cheesecake.png",
            tech: "Створив нові кастомні секції на основі дизайну Figma, розробив email шаблони та їх обробку, а також реалізував функціональність сторінки подачі."
          },
          {
            title: "Spring Mountain Vineyard",
            url: "https://club.springmountainvineyard.com/",
            image: "/source/Spring Mountain Vineyard.png",
            tech: "Редизайнив сторінку колекції з покращеним дизайном фільтрів та карток продуктів, реалізував динамічну логіку хлібних крихт, яка оновлюється без перезавантаження сторінки для кращого UX."
          },
          {
            title: "Lunesi",
            url: "https://lunesi.co.uk/",
            image: "/source/lunesi.png",
            tech: "Розробив динамічну секцію апселла в кошику, яка інтелектуально відображає продукти на основі вмісту кошика, повністю налаштовувану через редактор теми. Покращив хедер з налаштовуваними кольоровими схемами та конфігурованим банером оголошень для гнучкого брендингу та промо-акцій."
          },
          {
            title: "Nimfa",
            url: "https://nimfa.nl/",
            image: "/source/nimfa.png",
            tech: "Створив кастомну тему Shopify з нуля з піксель-перфектною реалізацією згідно з дизайном Figma. Розробив функціональність блогу, секції апселлів та повну багатомовну підтримку (англійська, українська, голландська) для преміум бренду інтимного догляду."
          },
          {
            title: "Melinava",
            url: "https://melinava.nl/",
            image: "/source/melinava.png",
            tech: "Фінальна підготовка перед запуском: QA і полірування всіх деталей. Вів повний чекліст “готово до трафіку”: ключові сценарії користувача, перевірки кошика та checkout, адаптив, швидкість і візуальні баги — щоб сайт був стабільний і готовий до конверсій."
          },
          {
            title: "Petaljet",
            url: "https://petaljet.com/",
            image: "/source/petaljet.png",
            tech: "Постійна підтримка магазину в команді. Підсилюю SEO і продуктивність на ключових сторінках, швидко доставляю зміни, тримаю релізи чистими та виконую щоденні оновлення без ризику “поламати” storefront."
          },
          {
            title: "Indian Affairs",
            url: "https://indianaffairs.de/",
            image: "/source/indian-affairs.png",
            tech: "Міграція з legacy-теми на Shopify Online Store 2.0 (Prestige). Переніс увесь контент, відбудував кастомну функціональність, реалізував вимоги зі спеки та вирівняв стилі й UX по всьому сайту."
          },
          {
            title: "SafeTag Tracking",
            url: "https://safetagtracking.com/",
            image: "/source/safeatags.png",
            tech: "Розробка кастомної Shopify-теми з Figma з повною кастомізацією та мультимовністю. Побудував гнучкі секції для зручного керування контентом, зробив pixel-accurate UI і заклав фундамент для масштабування сторінок та маркетів."
          },
          {
            title: "Virea",
            url: "https://virea.se/",
            image: "/source/virea.png",
            tech: "Впровадив оновлений дизайн для головної, PDP та базових шаблонів. Магазин на постійній підтримці: нові фічі, оптимізація швидкості, UX-покращення та регулярні технічні ітерації."
          },
          {
            title: "M-Oceans",
            url: "https://m-oceans.com/",
            image: "/source/m-oceans.png",
            tech: "Міграція зі старої теми на Shopify 2.0 архітектуру з перенесенням кастомної логіки. Додав нову функціональність, покращив структуру сторінок і забезпечив надійну роботу критичних флоу після запуску."
          },
          {
            title: "Silk Tallow",
            url: "https://silktallow.com/",
            image: "/source/silk-tallow.png",
            tech: "Реалізував складну логіку Mystery Gift і Free Gift без перезавантаження сторінки. Акуратно інтегрував у дизайн storefront: правила, поведінка кошика та обробка edge cases."
          },
          {
            title: "Bella Bloom Box",
            url: "https://bellabloombox.se/",
            image: "/source/httpsbellabloombox.png",
            tech: "Зібрав повний Shopify-магазин на базі дизайну Lovable. Переклав дизайн у секції та шаблони теми, налаштував структуру контенту й зробив керування максимально простим для клієнта без коду."
          },
          {
            title: "Bazar Bizar",
            url: "https://bazarbizar.be/",
            image: "/source/bazarbizar.png",
            tech: "Працював з великим складним Shopify-магазином із багатьма шаблонами та кастомною логікою. Робив глибоку кастомізацію секцій і лейаутів, впроваджував функціональні покращення та підтримував великі зміни, зберігаючи стабільність."
          }
        ]
      },
      upworkReviews: {
        title: "Відгуки з Upwork",
        subtitle: "Надійність, доведена клієнтами по всьому світу. 100% відгуків на 5 зірок з доведеними результатами—швидка реалізація, зрозуміла комунікація та рішення, які перевершують очікування.",
        seeMore: "Дивитися більше",
        openOnUpwork: "Відкрити на Upwork",
        seeMoreReviews: "Дивитися більше відгуків",
        reviews: [
          {
            title: "Потрібен експерт з Shopify для фінальних налаштувань та мобільного інтерфейсу",
            rating: 5,
            ratingLabel: "Оцінка 5,0 з 5.",
            timeframe: "20 вересня 2025 - 29 жовтня 2025",
            contractType: "Фіксована ціна",
            feedback: "\"Кіріл зробив чудову роботу над моїм магазином Shopify. Дуже досвідчений, швидкий і легко спілкується. Він точно зрозумів, що я хотів, і виконав роботу краще за очікування. Настійно рекомендую… Дивитися більше\"",
            showSeeMore: true,
          },
          {
            title: "Шукаю розробника Shopify (Невелике разове завдання)",
            rating: 5,
            ratingLabel: "Оцінка 5,0 з 5.",
            timeframe: "27 жовтня 2025 - 28 жовтня 2025",
            contractType: "Фіксована ціна",
            feedback: "\"Кіріл зробив чудову роботу! Він швидко зрозумів вимоги, реалізував все точно так, як показано у відео, і надав швидкі, чисті результати. Відмінна комунікація та професійна робота. Я… Дивитися більше\"",
            showSeeMore: true,
          },
          {
            title: "Потрібен розробник Shopify для виправлення технічних помилок на сайті",
            rating: 5,
            ratingLabel: "Оцінка 5,0 з 5.",
            timeframe: "22 жовтня 2025 - 23 жовтня 2025",
            contractType: "Фіксована ціна",
            feedback: "\"Ідеальна робота від Кіріла – Настійно рекомендую. Кіріл зробив видатну роботу з виправлення критичних технічних проблем на нашому сайті Shopify Rise theme. Він швидко вирішив помилки 404 URL, перемикання мов… Дивитися більше\"",
            showSeeMore: true,
          },
          {
            title: "Потрібен розробник Shopify CRO для створення \"Bundle Builder\"",
            rating: 5,
            ratingLabel: "Оцінка 5,0 з 5.",
            timeframe: "29 жовтня 2025 - 2 листопада 2025",
            contractType: "Фіксована ціна",
            showSeeMore: false,
          }
        ]
      },
      testimonials: {
        title: "Відгуки",
        reviews: [
          {
            name: "Олександр",
            image: "/source/1.png",
            text: "Кирило - справжній рятівник! Він виправив усі проблеми на моєму сайті Shopify і навіть дав поради щодо його покращення. Я дуже задоволений результатами."
          },
          {
            name: "Анастасія",
            image: "/source/4.png",
            text: "Я була така розгублена, намагаючись налаштувати свій онлайн-магазин, але Кирило зробив це легко! Тепер у мене є красивий веб-сайт, який дійсно приносить продажі. Дякую, Кирило!"
          },
          {
            name: "Дмитро",
            image: "/source/3.png",
            text: "Робота з Кирилом була фантастичним досвідом. Він справжній експерт у Shopify і дійсно дбає про своїх клієнтів. Я дуже рекомендую його!"
          },
          {
            name: "Артем",
            image: "/source/2.png",
            text: "Кирило зробив все можливе, щоб створити приголомшливий веб-сайт для мого бізнесу. Він справжній професіонал і з ним приємно працювати."
          },
          {
            name: "Ганна",
            image: "/source/5.png",
            text: "Мій новий веб-сайт - це все, що я хотіла, і навіть більше! Кирило неймовірно талановитий і з ним легко працювати. Я не можу достатньо подякувати йому."
          }
        ]
      },
      contact: {
        title: "ДАВАЙТЕ ПРАЦЮВАТИ РАЗОМ",
        subtitle: "все починається з розмови",
        email: "karatitsynkiril@gmail.com",
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
            question: "Що робить ваші веб-сайти особливими? 💻",
            answer: "Я створюю веб-сайти, які швидко працюють, гарно виглядають та зручні для ваших клієнтів. Вони ідеально працюють на телефонах, планшетах та комп'ютерах. 🚀"
          },
          {
            question: "Чому обирати Shopify для мого інтернет-магазину? 🛍️",
            answer: "Shopify - це найбезпечніший і найпростіший спосіб вести інтернет-магазин. Він має все необхідне для швидкого початку продажів онлайн. 🔒"
          },
          {
            question: "Чому працювати зі мною? 🌟",
            answer: "Я створюю веб-сайти, які не лише гарно виглядають, але й допомагають вашому бізнесу рости. Я тут, щоб підтримувати вас на кожному етапі. ⚡"
          },
          {
            question: "Скільки це коштує? 💰",
            answer: "Кожен проект унікальний - давайте обговоримо ваші конкретні потреби та цілі, щоб знайти правильне рішення для вашого бюджету. 📊"
          },
          {
            question: "Підтримка після запуску? 🔄",
            answer: "Так! Я надаю постійну підтримку, щоб ваш веб-сайт залишався актуальним і працював на найвищому рівні. 🛡️"
          },
          {
            question: "Хто тобі більше подобається, собака чи кіт? 🐱",
            answer: "Коти - мої улюбленці! Вони незалежні, граціозні та стають ідеальними компаньйонами для програмування. 😺"
          }
        ],
        book_call: "Забронювати дзвінок"
      },
      header: {
        about: "Про мене",
        process: "Процес",
        faq: "FAQ",
        works: "Роботи",
        blog: "Блог",
        contact: "Контакти",
        resume: "Резюме"
      }
    }
  },
  de: {
    translation: {
      hero: {
        web: "Web",
        title: "Ich bin Kiril",
        subtitle: "Ich erstelle Websites, die Ihr Unternehmen online zum Strahlen bringen.",
        book_call: "Termin vereinbaren",
        send_message: "Nachricht senden",
        or: "oder",
        words: ["Entwickler", "Magier", "Experte", "Meister", "Spezialist", "Guru", "Virtuose", "Maestro"]
      },
      about: {
        title: "Mein Name ist Kiril Karatitsyn",
        text: "Ich erstelle schöne Websites und Online-Shops, die Unternehmen helfen, mehr online zu verkaufen. Spezialisiert auf die Entwicklung von Websites, die einfach zu bedienen sind und auf jedem Gerät großartig aussehen.",
        text_2: "Der Fokus liegt darauf, Websites zu erstellen, die schnell sind, einfach zu navigieren und Besucher in Kunden verwandeln. Ob Sie eine neue Website benötigen oder Ihre bestehende verbessern möchten, lassen Sie uns das umsetzen.",
        lets_work: "Lassen Sie uns zusammenarbeiten"
      },
      process: {
        title: "Mein Prozess",
        steps: {
          step1: {
            title: "1. Erstes Gespräch 🚀",
            description: "Lassen Sie uns Ihre Geschäftsziele und Website-Anforderungen besprechen. Planung der perfekten Lösung - von einfachen Websites bis hin zu vollständigen Online-Shops. 🎯"
          },
          step2: {
            title: "2. Recherche 🔍",
            description: "Analyse der Branchenbest Practices, um sicherzustellen, dass Ihre Website hervorsticht und die richtigen Kunden anzieht. 📊"
          },
          step3: {
            title: "3. Design 🎨",
            description: "Erstellung moderner, ansprechender Designs, die auf Telefonen, Tablets und Computern großartig aussehen. 💫"
          },
          step4: {
            title: "4. Entwicklung 💻",
            description: "Erstellung Ihrer Website mit den besten Tools, um sie schnell, sicher und einfach zu aktualisieren. ⚡"
          },
          step5: {
            title: "5. Prüfung & Test ✅",
            description: "Gründliches Testen stellt sicher, dass alles perfekt funktioniert, mit Anpassungen nach Bedarf. 🔄"
          },
          step6: {
            title: "6. Live gehen 🚀",
            description: "Ihre Website geht live mit kontinuierlicher Unterstützung, um eine optimale Leistung zu gewährleisten. 🌟"
          }
        },
        book_call: "Termin vereinbaren"
      },
      works: {
        title: "Projekte",
        loadMore: "Mehr laden",
        visitWebsite: "Website besuchen",
        contactCard: {
          title: "Ihr Projekt hier",
          text: "Haben Sie ein Projekt im Kopf? Lassen Sie uns zusammenarbeiten, um eine atemberaubende Website zu erstellen, die Ihrem Unternehmen hilft, online zu wachsen.",
          button: "Kontaktieren Sie mich"
        },
        projects: [
          {
            title: "Honey Sunny Paradise",
            url: "https://www.honeysunnyparadise.com/",
            image: "/source/works_1.webp",
            tech: "US-Kunde, der hawaiianischen Honig verkauft, benötigte einen qualitativ hochwertigen, einfachen Online-Shop. Ich habe ihn vollständig konfiguriert und FedEx-Versand integriert."
          },
          {
            title: "Craft-Minds(PDPs)",
            url: "https://craft-minds.com/",
            image: "/source/6718b31b0e47a451312f3357 1.png",
            tech: "Laufende Zusammenarbeit mit dem Kunden, Entwicklung einzigartiger Produkt-Landingpages und Verbesserung des Themes mit benutzerdefinierten Abschnitten."
          },
          {
            title: "Pair Stich",
            url: "https://pairstitch.pl/",
            image: "/source/Pairstich.webp",
            tech: "Implementierung eines benutzerdefinierten Farbwählers, der sich dynamisch basierend auf Kleidungstyp ändert und die 100-Varianten-Grenze umgeht."
          },
          {
            title: "Kramucci",
            url: "https://kramucci.com/",
            image: "/source/Kramucci - Premium Italian Women Bags.webp",
            tech: "Migration der polnischen Site-Version ins Englische mit zusätzlichen Verbesserungen."
          },
          {
            title: "Steppyshoes",
            url: "https://steppyshoes.com/",
            image: "/source/Steppy _ Pour les petits pieds en pleine croissance.webp",
            tech: "Migration der englischen Version der Site ins Französische und Hinzufügung benutzerdefinierter Abschnitte."
          },
          {
            title: "Haftx",
            url: "https://haftx.com/",
            image: "/source/HaftX.webp",
            tech: "Entwicklung eines benutzerdefinierten Farbwählers, der sich an den Kleidungstyp anpasst und die 100-Varianten-Beschränkung überwindet."
          },
          {
            title: "Canvaswall",
            url: "https://canvaswallartstore.com/",
            image: "/source/TheCanvasWallArt.webp",
            tech: "Entwicklung und Implementierung mehrerer benutzerdefinierter Abschnitte gemäß Design- und technischen Anforderungen."
          },
          {
            title: "The Vegan Wellness",
            url: "https://theveganwellnessco.uk/",
            image: "/source/The Vegan Wellness Co. affordable plant-based nutrition.webp",
            tech: "Entwicklung eines Shopify-Shops mit benutzerdefiniertem Theme von Grund auf, Implementierung eines Abonnement-Systems und Integration von Abschnitten mit Metafeldern für einfache Verwaltung."
          },
          {
            title: "Junofires",
            url: "https://junofires.nl/",
            image: "/source/Bestel de mooiste rustieke ledkaarsen met timer bij JUNOfires.webp",
            tech: "Optimierung der Filter in einem Shopify-Shop, Hinzufügung automatischer Bildanzeigefunktionalität beim Filtern nach Farbe, Verbesserung von UX und Navigation."
          },
          {
            title: "Lerros",
            url: "https://www.lerros.com/",
            image: "/source/Buy fashion for men conveniently online.webp",
            tech: "Aktualisierung des Themes in einem Shopify-Shop, korrekte Übertragung von Inhalten und Metafeldern, Erhaltung der Datenstruktur und Konfiguration der Produktanzeige für stabilen Betrieb."
          },
          {
            title: "Kiki Green",
            url: "https://kikigreen.com/",
            image: "/source/kiki-green.png",
            tech: "Entwicklung einer vollständigen E-Commerce-Lösung von Grund auf, einschließlich vollständiger Online-Shop-Erstellung und Integration mit verschiedenen Plugins wie Treueprogrammen und Produktabonnements."
          },
          {
            title: "Junior's Cheesecake",
            url: "https://juniorscheesecake.com/",
            image: "/source/Juniors Cheesecake.png",
            tech: "Erstellung neuer benutzerdefinierter Abschnitte basierend auf Figma-Design, Entwicklung von E-Mail-Vorlagen und -Handhabung sowie Implementierung der Serving-Seiten-Funktionalität."
          },
          {
            title: "Spring Mountain Vineyard",
            url: "https://club.springmountainvineyard.com/",
            image: "/source/Spring Mountain Vineyard.png",
            tech: "Neugestaltung der Kollektionsseite mit verbessertem Filterdesign und Produktkarten, Implementierung dynamischer Breadcrumb-Logik, die sich ohne Seitenaktualisierung aktualisiert für bessere UX."
          },
          {
            title: "Lunesi",
            url: "https://lunesi.co.uk/",
            image: "/source/lunesi.png",
            tech: "Entwicklung eines dynamischen Warenkorb-Upsell-Bereichs, der Produkte intelligent basierend auf dem Warenkorbinhalt anzeigt, vollständig konfigurierbar über den Theme-Editor. Verbesserter Header mit anpassbaren Farbschemata und konfigurierbarem Ankündigungsbanner für flexibles Branding und Werbeaktionen."
          },
          {
            title: "Nimfa",
            url: "https://nimfa.nl/",
            image: "/source/nimfa.png",
            tech: "Erstellung eines benutzerdefinierten Shopify-Themes von Grund auf mit pixelgenauer Implementierung gemäß Figma-Design. Entwicklung von Blog-Funktionalität, Upsell-Bereichen und vollständiger mehrsprachiger Unterstützung (Englisch, Ukrainisch, Niederländisch) für die Premium-Marke für intime Pflege."
          },
          {
            title: "Melinava",
            url: "https://melinava.nl/",
            image: "/source/melinava.png",
            tech: "Finale Pre-Launch-Politur und QA vor dem Go-Live. Ich verantwortete die komplette “ready for traffic” Checkliste: zentrale Customer Journeys, Cart- und Checkout-Sanity-Checks, Responsive-Issues, Speed und visuelle Bugs — damit der Shop stabil und conversion-ready ist."
          },
          {
            title: "Petaljet",
            url: "https://petaljet.com/",
            image: "/source/petaljet.png",
            tech: "Laufender Store-Support im Team. Ich verbessere SEO und Performance auf wichtigen Seiten, shippe Changes schnell, halte Releases sauber und übernehme tägliche Updates ohne den Storefront zu gefährden."
          },
          {
            title: "Indian Affairs",
            url: "https://indianaffairs.de/",
            image: "/source/indian-affairs.png",
            tech: "Migration vom Legacy-Theme auf Shopify Online Store 2.0 (Prestige). Ich habe Inhalte übertragen, Custom-Funktionalität neu aufgebaut, Anforderungen aus der Spezifikation umgesetzt und Styling sowie UX über die gesamte Site hinweg vereinheitlicht."
          },
          {
            title: "SafeTag Tracking",
            url: "https://safetagtracking.com/",
            image: "/source/safeatags.png",
            tech: "Custom Shopify Theme Development aus Figma mit voller Customization und mehrsprachigem Setup. Flexible Sections für einfaches Content-Management, pixelgenaues UI und eine solide Basis zum Skalieren von Seiten und Markets."
          },
          {
            title: "Virea",
            url: "https://virea.se/",
            image: "/source/virea.png",
            tech: "Umsetzung eines Refresh-Designs für Homepage, Produktseiten und Core-Templates. Kontinuierlicher Support: neue Features, Performance-Optimierung, UX-Verbesserungen und regelmäßige technische Iterationen."
          },
          {
            title: "M-Oceans",
            url: "https://m-oceans.com/",
            image: "/source/m-oceans.png",
            tech: "Migration von einem alten Theme auf eine neue Shopify-2.0-Architektur inklusive Übernahme von Custom-Logik. Neue Funktionalität ergänzt, Seitenstruktur verbessert und alle kritischen Store-Flows nach dem Launch zuverlässig abgesichert."
          },
          {
            title: "Silk Tallow",
            url: "https://silktallow.com/",
            image: "/source/silk-tallow.png",
            tech: "Advanced Mystery-Gift- und Free-Gift-Logik ohne Page Reloads gebaut. Nahtlos ins Storefront-Design integriert — inklusive Regeln, Cart-Verhalten und Edge-Case-Handling."
          },
          {
            title: "Bella Bloom Box",
            url: "https://bellabloombox.se/",
            image: "/source/httpsbellabloombox.png",
            tech: "Kompletten Shopify-Store basierend auf einem Lovable-Design gebaut. Design in Theme-Sections und Templates übersetzt, Content-Struktur aufgesetzt und so umgesetzt, dass der Kunde ohne Code verwalten kann."
          },
          {
            title: "Bazar Bizar",
            url: "https://bazarbizar.be/",
            image: "/source/bazarbizar.png",
            tech: "Arbeit an einem großen, komplexen Shopify-Store mit vielen Templates und Custom-Logik. Tiefgreifende Anpassungen an Sections und Layouts, funktionale Verbesserungen und Support größerer Changes — bei stabiler Basis."
          }
        ]
      },
      upworkReviews: {
        title: "Upwork Bewertungen",
        subtitle: "Vertraut von Kunden weltweit. 100% 5-Sterne-Bewertungen mit bewährten Ergebnissen—schnelle Lieferung, klare Kommunikation und Lösungen, die Erwartungen übertreffen.",
        seeMore: "Mehr anzeigen",
        openOnUpwork: "Auf Upwork öffnen",
        seeMoreReviews: "Mehr Bewertungen anzeigen",
        reviews: [
          {
            title: "Shopify-Experte für einige finale Anpassungen und mobile UI",
            rating: 5,
            ratingLabel: "Bewertung ist 5,0 von 5.",
            timeframe: "20. Sep. 2025 - 29. Okt. 2025",
            contractType: "Festpreis",
            feedback: "\"Kiril hat einen super Job in meinem Shopify-Shop gemacht. Sehr geschickt, schnell und einfach zu kommunizieren. Er verstand genau, was ich wollte, und lieferte über die Erwartungen hinaus. Sehr empfehlenswert… Mehr anzeigen\"",
            showSeeMore: true,
          },
          {
            title: "Suche nach Shopify-Entwickler (Kleine einmalige Aufgabe)",
            rating: 5,
            ratingLabel: "Bewertung ist 5,0 von 5.",
            timeframe: "27. Okt. 2025 - 28. Okt. 2025",
            contractType: "Festpreis",
            feedback: "\"Kiril hat einen großartigen Job gemacht! Er verstand schnell die Anforderungen, implementierte alles genau wie im Loom-Video gezeigt, und lieferte schnelle, saubere Ergebnisse. Ausgezeichnete Kommunikation und professionelle Arbeit. Ich… Mehr anzeigen\"",
            showSeeMore: true,
          },
          {
            title: "Shopify-Entwickler benötigt, um technische Fehler auf der Site zu beheben",
            rating: 5,
            ratingLabel: "Bewertung ist 5,0 von 5.",
            timeframe: "22. Okt. 2025 - 23. Okt. 2025",
            contractType: "Festpreis",
            feedback: "\"Perfekter Job von Kiril – Sehr empfehlenswert. Kiril hat einen herausragenden Job bei der Behebung kritischer technischer Probleme auf unserer Shopify Rise Theme-Site gemacht. Er löste schnell 404 URL-Fehler, Sprachumschaltung… Mehr anzeigen\"",
            showSeeMore: true
          },
          {
            title: "Shopify CRO-Entwickler benötigt, um einen \"Bundle Builder\" zu erstellen",
            rating: 5,
            ratingLabel: "Bewertung ist 5,0 von 5.",
            timeframe: "29. Okt. 2025 - 2. Nov. 2025",
            contractType: "Festpreis",
            showSeeMore: false
          }
        ]
      },
      testimonials: {
        title: "Referenzen",
        reviews: [
          {
            name: "Oleksandr",
            image: "/source/1.png",
            text: "Kiril ist ein Lebensretter! Er hat alle Probleme auf meiner Shopify-Site behoben und mir sogar Tipps zur Verbesserung gegeben. Ich bin so glücklich mit den Ergebnissen."
          },
          {
            name: "Anastasia",
            image: "/source/4.png",
            text: "Ich war so verloren beim Versuch, meinen Online-Shop einzurichten, aber Kiril hat es zum Kinderspiel gemacht! Jetzt habe ich eine schöne Website, die tatsächlich Verkäufe bringt. Danke, Kiril!"
          },
          {
            name: "Dmytro",
            image: "/source/3.png",
            text: "Die Zusammenarbeit mit Kiril war eine fantastische Erfahrung. Er ist ein echter Shopify-Experte und kümmert sich wirklich um seine Kunden. Ich empfehle ihn sehr!"
          },
          {
            name: "Artem",
            image: "/source/2.png",
            text: "Kiril hat alles getan, um eine atemberaubende Website für mein Unternehmen zu erstellen. Er ist ein echter Profi und es macht Spaß, mit ihm zu arbeiten."
          },
          {
            name: "Hanna",
            image: "/source/5.png",
            text: "Meine neue Website ist alles, was ich wollte und mehr! Kiril ist unglaublich talentiert und einfach zu arbeiten. Ich kann ihm nicht genug danken."
          }
        ]
      },
      contact: {
        title: "LASSEN SIE UNS ZUSAMMENARBEITEN",
        subtitle: "alles beginnt mit einem Gespräch",
        email: "karatitsynkiril@gmail.com",
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
            question: "Was macht Ihre Websites besonders? 💻",
            answer: "Ich erstelle Websites, die schnell sind, großartig aussehen und für Ihre Kunden einfach zu verwenden sind. Sie funktionieren perfekt auf Telefonen, Tablets und Computern. 🚀"
          },
          {
            question: "Warum Shopify für meinen Online-Shop wählen? 🛍️",
            answer: "Shopify ist der sicherste und einfachste Weg, einen Online-Shop zu betreiben. Es hat alles, was Sie brauchen, um schnell online zu verkaufen. 🔒"
          },
          {
            question: "Warum mit mir arbeiten? 🌟",
            answer: "Ich erstelle Websites, die nicht nur schön aussehen, sondern auch Ihrem Unternehmen beim Wachstum helfen. Ich bin hier, um Sie in jedem Schritt zu unterstützen. ⚡"
          },
          {
            question: "Wie viel kostet es? 💰",
            answer: "Jedes Projekt ist einzigartig - lassen Sie uns Ihre spezifischen Bedürfnisse und Ziele besprechen, um die richtige Lösung für Ihr Budget zu finden. 📊"
          },
          {
            question: "Unterstützung nach dem Launch? 🔄",
            answer: "Ja! Ich biete kontinuierliche Unterstützung, um sicherzustellen, dass Ihre Website auf dem neuesten Stand bleibt und optimal funktioniert. 🛡️"
          },
          {
            question: "Wer bevorzugen Sie, einen Hund oder eine Katze? 🐱",
            answer: "Katzen sind meine Favoriten! Sie sind unabhängig, anmutig und perfekte Programmierbegleiter. 😺"
          }
        ],
        book_call: "Termin vereinbaren"
      },
      header: {
        about: "Über mich",
        process: "Prozess",
        faq: "FAQ",
        works: "Projekte",
        blog: "Blog",
        contact: "Kontakt",
        resume: "Lebenslauf"
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
