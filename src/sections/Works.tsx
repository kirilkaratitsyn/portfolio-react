import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function Works() {
  const works = [
    {
      title: "Honey Sunny Paradise",
      url: "https://www.honeysunnyparadise.com/",
      image: "/source/works_1.webp",
      tech: "HTML&CSS, Liquid"
    },
    {
      title: "Hephestorium(PDPs)",
      url: "https://www.hephestorium.com/",
      image: "/source/works_3.webp",
      tech: "HTML&CSS, Liquid"
    },
    {
      title: "Craft-Minds(PDPs)",
      url: "https://craft-minds.com/",
      image: "/source/6718b31b0e47a451312f3357 1.png",
      tech: "HTML&CSS, Liquid"
    },
    {
      title: "Art Broken Bottle",
      url: "https://artbrokenbottle.com/",
      image: "/source/works_5.webp",
      tech: "HTML&CSS, Liquid"
    },
    {
      title: "Shovavas",
      url: "https://shovavas.org/",
      image: "/source/works_6.webp",
      tech: "HTML&CSS, Liquid, JavaScript"
    },
    {
      title: "Rose-Gold",
      url: "https://rose-gold.co/",
      image: "/source/works_8.webp",
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
        </div>

        {/* Mobile Slider */}
        <div className="sm:hidden block">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
            }}
          >
            {works.map((work, index) => (
              <SwiperSlide key={index}>
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
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
  
    </section>
  );
}

export default Works;