import { Splide, SplideSlide } from '@splidejs/react-splide';

function Works() {
  const works = [
    {
      title: "Honey Sunny Paradise",
      url: "https://www.honeysunnyparadise.com/",
      image: "public/source/works_1.webp",
      tech: "HTML&CSS, Liquid"
    },
    {
      title: "Purr & Bark",
      url: "https://purrbark.store/",
      image: "public/source/works_2.webp",
      tech: "HTML&CSS, Liquid"
    },
    {
      title: "Hephestorium(PDPs)",
      url: "https://www.hephestorium.com/",
      image: "public/source/works_3.webp",
      tech: "HTML&CSS, Liquid"
    },
    {
      title: "Craft-Minds(PDPs)",
      url: "https://craft-minds.com/",
      image: "public/source/6718b31b0e47a451312f3357 1.png",
      tech: "HTML&CSS, Liquid"
    },
    {
      title: "Art Broken Bottle",
      url: "https://artbrokenbottle.com/",
      image: "public/source/works_5.webp",
      tech: "HTML&CSS, Liquid"
    },
    {
      title: "Shovavas",
      url: "https://shovavas.org/",
      image: "public/source/works_6.webp",
      tech: "HTML&CSS, Liquid, JavaScript"
    },
    {
      title: "Rose-Gold",
      url: "https://rose-gold.co/",
      image: "public/source/works_8.webp",
      tech: "HTML&CSS, Liquid"
    },
    {
      title: "Easy-Move",
      url: "https://easy-move.com.ua/",
      image: "public/source/works_7.webp",
      tech: "HTML&CSS, Liquid"
    }
  ];

  return (
    <section id="work">
      <div className="work__container" data-aos="fade-up">
        <h1 className="mb-8 text-[37px] font-bold primary-gradient primary-shadow">Works</h1>
        
        {/* Desktop Grid */}
        <div className="items sm:grid grid-cols-3 hidden gap-x-[40px]">
          {works.map((work, index) => (
            <div key={index} className="item mb-[79px] max-w-[490px] flex-col flex gap-[15px]">
              <a 
                href={work.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ maxWidth: "316px", maxHeight: "255px" }}
              >
                <img 
                  className="light-shadow rounded-[5px] lazy"
                  style={{ minHeight: "255px" }}
                  data-src={work.image}
                  alt={work.title}
                />
              </a>
              <p className="text-[20px] font-semibold">{work.title}</p>
              <span className="opacity-80">{work.tech}</span>
            </div>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="sm:hidden block">
          <Splide
            options={{
              perPage: 1,
              perMove: 1,
              gap: "30px",
              pagination: true
            }}
          >
            {works.map((work, index) => (
              <SplideSlide key={index}>
                <div className="item mb-[79px] max-w-[490px] flex-col items-center flex gap-[15px]">
                  <a 
                    href={work.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ maxWidth: "316px", maxHeight: "255px" }}
                  >
                    <img 
                      className="light-shadow rounded-[5px] lazy"
                      style={{ minHeight: "255px" }}
                      data-src={work.image}
                      alt={work.title}
                    />
                  </a>
                  <p className="text-[20px] font-semibold">{work.title}</p>
                  <span className="opacity-80">{work.tech}</span>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </section>
  );
}

export default Works;