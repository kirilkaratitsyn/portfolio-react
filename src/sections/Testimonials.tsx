import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import { useTranslation } from 'react-i18next';

// Custom pagination styles
const styles = `
  :root {
    
  }
`;

const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

function Testimonials() {
  const { t } = useTranslation();
  const testimonials = t('testimonials.reviews', { returnObjects: true }) as Array<{ 
    image: string, 
    name: string, 
    text: string 
  }>;

  return (
    <section id="testimonials">
      <div className="testimonials__container">
        <h1 className="mb-8 text-[37px] font-bold primary-gradient primary-shadow">
          {t('testimonials.title')}
          </h1>
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          {testimonials.map((testimonial: { image: string, name: string, text: string }, index: number) => (
            <SwiperSlide key={index}>
              <div className="card mb-[79px] w-full flex-col justify-start text-left border border-white p-2 rounded-[5px] flex gap-[15px]">
                <div className="author flex flex-col lg:flex-row items-center">
                  <img className="max-w-[120px] lazy" data-src={testimonial.image} alt={testimonial.name} />
                  <p className="text-[20px] font-semibold">{testimonial.name}</p>
                </div>
                <span className="opacity-80">{testimonial.text}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;