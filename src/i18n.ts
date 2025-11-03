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
            title: "Larson Jewelers",
            url: "https://www.larsonjewelers.com/collections/mens-tungsten-wedding-bands-desktop-1",
            image: "/source/larson.png",
            tech: "Created a new collections page and implemented 4 additional links for campaign testing purposes, enhancing the site's navigation structure and A/B testing capabilities."
          },
          {
            title: "The Magic Scent",
            url: "https://themagicscent.com/pages/build-your-pack",
            image: "/source/Magic-Scent.png",
            tech: "Created a custom 'Build Your Pack' page and developed a new  collections page for scent marketing products, enhancing the user experience and product organization."
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
          title: "Magic Scents (TMS)",
          url: "https://themagicscent.com/pages/homepage-new",
          image: "/source/magic-scents.png",
          tech: "Built a new homepage and product page fully according to the Figma design (pixel-perfect) and provided continuous store support for European online retailer of scent diffusers and premium fragrances."
        },
        {
          title: "Studio Nono",
          url: "https://studio-nonna.com/",
          image: "/source/studio-nono.png",
          tech: "Enhanced the existing German jewelry store by adding new settings, fixing bugs, and developing new sections and features to increase store stability and flexibility for content management."
        },
        {
          title: "Mister Maria",
          url: "https://mrmaria.co.uk/",
          image: "/source/mrmaria.png",
          tech: "Migrated the store from WordPress to Shopify, customizing a ready-made theme with significant adjustments to closely match the previous site's look and feel for one of the largest sellers of designer toys and home décor."
        },
        {
          title: "Barney",
          url: "https://barneydk.myshopify.com/",
          image: "/source/barneydk.png",
          tech: "Migrated the Danish retailer store from WordPress to a new Shopify theme, improved and customized functionality, and imported all data including orders, products, and customers for 7,000+ gardening and outdoor products."
        },
        {
          title: "Petralyte",
          url: "https://petralyte.com/",
          image: "/source/petralyte.png",
          tech: "Designed and implemented new sections and developed a custom landing page for European seller of vet-formulated electrolytes in unique flavors for pets, enhancing marketing campaigns with high-converting content."
        },
        {
          title: "Badass Labs",
          url: "https://www.badass-labs.com/",
          image: "/source/badasslabs.png",
          tech: "Delivered bug fixes and improvements, built new blocks and features, and merged 7 regional stores into one centralized store with region and language switcher for automotive cleaning accessories and detailing products."
        },
        {
          title: "Bloomin' Amazing",
          url: "https://www.bloomingamazing.ie/",
          image: "/source/blooming-amazing.png",
          tech: "Improved the purchase flow (cart and checkout), fixed bugs, and provided ongoing support for Irish flower delivery service, resulting in increased checkout success rates and improved customer satisfaction."
        },
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
            title: "Larson Jewelers",
            url: "https://www.larsonjewelers.com/collections/mens-tungsten-wedding-bands-desktop-1",
            image: "/source/larson.png",
            tech: "Створив нову сторінку колекцій та реалізував 4 додаткові посилання для тестування кампаній, покращивши структуру навігації сайту та можливості A/B тестування."
          },
          {
            title: "The Magic Scent",
            url: "https://themagicscent.com/pages/build-your-pack",
            image: "/source/Magic-Scent.png",
            tech: "Створив кастомну сторінку 'Створи свій набір' та розробив нову сторінку колекцій для продуктів аромамаркетингу, покращивши користувацький досвід та організацію продуктів."
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
            title: "Magic Scents (TMS)",
            url: "https://themagicscent.com/pages/homepage-new",
            image: "/source/magic-scents.png",
            tech: "Створив нову головну сторінку та сторінку продукту повністю згідно з дизайном Figma (піксель-перфект) та надав постійну підтримку магазину для європейського онлайн-ретейлера дифузорів ароматів та преміум парфумів."
          },
          {
            title: "Studio Nono",
            url: "https://studio-nonna.com/",
            image: "/source/studio-nono.png",
            tech: "Покращив існуючий німецький ювелірний магазин, додавши нові налаштування, виправивши помилки та розробивши нові секції та функції для підвищення стабільності магазину та гнучкості управління контентом."
          },
          {
            title: "Mister Maria",
            url: "https://mrmaria.co.uk/",
            image: "/source/mrmaria.png",
            tech: "Переніс магазин з WordPress на Shopify, налаштував готову тему зі значними коригуваннями для максимального відповідності попередньому вигляду сайту для одного з найбільших продавців дизайнерських іграшок та домашнього декору."
          },
          {
            title: "Barney",
            url: "https://barneydk.myshopify.com/",
            image: "/source/barneydk.png",
            tech: "Переніс магазин данського ретейлера з WordPress на нову тему Shopify, покращив та налаштував функціональність, імпортував усі дані включаючи замовлення, продукти та клієнтів для 7,000+ товарів для саду та активного відпочинку."
          },
          {
            title: "Petralyte",
            url: "https://petralyte.com/",
            image: "/source/petralyte.png",
            tech: "Спроектував та реалізував нові секції та розробив кастомну посадочну сторінку для європейського продавця ветеринарних електролітів унікальних смаків для домашніх тварин, покращивши маркетингові кампанії висококонверсійним контентом."
          },
          {
            title: "Badass Labs",
            url: "https://www.badass-labs.com/",
            image: "/source/badasslabs.png",
            tech: "Виправив помилки та покращив функціональність, створив нові блоки та функції, об'єднав 7 регіональних магазинів в один централізований з перемикачем регіону та мови для автомобільних аксесуарів для чищення та деталювання."
          },
          {
            title: "Bloomin' Amazing",
            url: "https://www.bloomingamazing.ie/",
            image: "/source/blooming-amazing.png",
            tech: "Покращив процес покупки (кошик та оформлення замовлення), виправив помилки та надав постійну підтримку для ірландської служби доставки квітів, що призвело до підвищення успішності оформлення замовлень та задоволеності клієнтів."
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
