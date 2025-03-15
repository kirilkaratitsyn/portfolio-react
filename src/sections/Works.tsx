import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Button from '../components/Button';

function Works() {
  const works = [
    {
      title: "Honey Sunny Paradise",
      url: "https://www.honeysunnyparadise.com/",
      image: "/source/works_1.webp",
      tech: ""
    },
    {
      title: "Hephestorium(PDPs)",
      url: "https://www.hephestorium.com/",
      image: "/source/works_3.webp",
      tech: ""
    },
    {
      title: "Craft-Minds(PDPs)",
      url: "https://craft-minds.com/",
      image: "/source/6718b31b0e47a451312f3357 1.png",
      tech: ""
    },
    {
      title: "Art Broken Bottle",
      url: "https://artbrokenbottle.com/",
      image: "/source/works_5.webp",
      tech: ""
    },
    {
      title: "Shovavas",
      url: "https://shovavas.org/",
      image: "/source/works_6.webp",
      tech: ""
    },
    {
      title: "Pair Stich",
      url: "https://pairstitch.pl/",
      image: "/source/Pairstich.webp",
      tech: ""
    },
    {
      title: "Kramucci",
      url: "https://kramucci.com/",
      image: "/source/Kramucci - Premium Italian Women Bags.webp",
      tech: ""
    },
    {
      title: "Steppyshoes",
      url: "https://steppyshoes.com/",
      image: "/source/Steppy _ Pour les petits pieds en pleine croissance.webp",
      tech: ""
    },
    {
      title: "Haftx",
      url: "https://haftx.com/",
      image: "/source/HaftX.webp",
      tech: ""
    },
    {
      title: "Canvaswall",
      url: "https://canvaswallartstore.com/",
      image: "/source/TheCanvasWallArt.webp",
      tech: ""
    },
    {
      title: "The Vegan Wellness",
      url: "https://theveganwellnessc.com/",
      image: "/source/The Vegan Wellness Co. affordable plant-based nutrition.webp",
      tech: ""
    },
    {
      title: "Junofires",
      url: "https://junofires.nl/",
      image: "/source/Bestel de mooiste rustieke ledkaarsen met timer bij JUNOfires.webp",
      tech: ""
    },
    {
      title: "Lerros",
      url: "https://www.leiros.com/en",
      image: "/source/Buy fashion for men conveniently online.webp",
      tech: ""
    }
  ];


  return (
    <section id="work"  className="work__container">
      <div data-aos="fade-up">
        <h1 className="mb-8 text-[37px] font-bold primary-gradient primary-shadow">Works</h1>
        
        {/* Desktop Grid */}
        <div className="items grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 place-items-center gap-x-[40px]">
          {works.map((work, index) => (
              <div key={index} className="item px-3 py-3 light-shadow transition-all duration-300  rounded-md mb-[79px] max-w-[490px] flex-col items-center justify-between flex gap-[15px]">
              <a 
                href={work.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[316px] h-[255px] block overflow-hidden "
              >
                <img 
                  className=" object-top rounded-sm lazy w-full h-full object-cover"
                  data-src={work.image}
                  alt={work.title}
                />
              </a>
              <p className="text-[20px] font-semibold">{work.title}</p>
              <span className="opacity-80">{work.tech}</span>
              <button
                onClick={() => window.open(work.url, '_blank')}
                className="bg-white text-black light-shadow px-12 py-3 rounded-full w-fit"
              >
                Visit Website
              </button>
            </div>
          ))}
          </div>
        </div>

        {/* Mobile Slider */}
      
  
    </section>
  );
}

export default Works;