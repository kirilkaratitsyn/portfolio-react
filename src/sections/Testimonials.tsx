import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function Testimonials() {
  const testimonials = [
    {
      name: "Oleksandr",
      image: "source/1.png",
      text: "Kiril is a lifesaver! He fixed all the issues on my Shopify site and even gave me tips to improve it. I'm so happy with the results."
    },
    {
      name: "Anastasia",
      image: "source/4.png",
      text: "I was so lost trying to set up my online store, but Kiril made it a breeze! Now I have a beautiful website that actually gets sales. Thanks, Kiril!"
    },
    {
      name: "Dmytro",
      image: "source/3.png",
      text: "Working with Kiril was a fantastic experience. He's a true expert in Shopify and really cares about his clients. I highly recommend him!"
    },
    {
      name: "Artem",
      image: "source/2.png",
      text: "Kiril went above and beyond to create a stunning website for my business. He's a true professional and a pleasure to work with."
    },
    {
      name: "Hanna",
      image: "source/5.png",
      text: "My new website is everything I wanted and more! Kiril is incredibly talented and easy to work with. I can't thank him enough."
    }
  ];

  return (
    <section id="testimonials">
      <div className="testimonials__container">
        <h1 className="mb-8 text-[37px] font-bold primary-gradient primary-shadow">Testimonials</h1>
        <Splide
          options={{
            perPage: 3,
            perMove: 1,
            gap: "30px",
            pagination: true,
            breakpoints: {
              640: {
                perPage: 1
              }
            }
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SplideSlide key={index}>
              <div className="card mb-[79px] w-full flex-col justify-start text-left border border-white p-2 rounded-[5px] flex gap-[15px]">
                <div className="author flex flex-col lg:flex-row items-center">
                  <img className="max-w-[120px] lazy" data-src={testimonial.image} alt={testimonial.name} />
                  <p className="text-[20px] font-semibold">{testimonial.name}</p>
                </div>
                <span className="opacity-80">{testimonial.text}</span>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
}

export default Testimonials;