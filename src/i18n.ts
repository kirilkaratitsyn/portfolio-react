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
        tech: {
          html_css: "HTML&CSS",
          liquid: "Liquid",
          javascript: "JavaScript"
        }
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
        book_call: "Book a Call"
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
        contact: "Contact Me",
        resume: "Resume"
      }
    }
  },
  uk: {
    translation: {
      hero: {
        web: "Веб",
        title: "Я Кирило",
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
        tech: {
          html_css: "HTML&CSS",
          liquid: "Liquid",
          javascript: "JavaScript"
        }
      },
      testimonials: {
        title: "Відгуки",
        reviews: {
          oleksandr: {
            name: "Олександр",
            text: "Кирило - справжній рятівник! Він виправив усі проблеми на моєму сайті Shopify і навіть дав поради щодо його покращення. Я дуже задоволений результатами."
          },
          anastasia: {
            name: "Анастасія",
            text: "Я була така розгублена, намагаючись налаштувати свій онлайн-магазин, але Кирило зробив це легко! Тепер у мене є красивий веб-сайт, який дійсно приносить продажі. Дякую, Кирило!"
          },
          dmytro: {
            name: "Дмитро",
            text: "Робота з Кирилом була фантастичним досвідом. Він справжній експерт у Shopify і дійсно дбає про своїх клієнтів. Я дуже рекомендую його!"
          },
          artem: {
            name: "Артем",
            text: "Кирило зробив все можливе, щоб створити приголомшливий веб-сайт для мого бізнесу. Він справжній професіонал і з ним приємно працювати."
          },
          hanna: {
            name: "Ганна",
            text: "Мій новий веб-сайт - це все, що я хотіла, і навіть більше! Кирило неймовірно талановитий і з ним легко працювати. Я не можу достатньо подякувати йому."
          }
        }
      },
      contact: {
        title: "ДАВАЙТЕ ПРАЦЮВАТИ РАЗОМ",
        subtitle: "все починається з розмови",
        email: "karatitsynkiril@gmail.com",
        book_call: "Забронювати дзвінок"
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