import Button from '../components/Button';

function Contact() {
  return (
    <section id="contact">
      <div className="contact__container flex justify-center items-center flex-col" data-aos="fade-up">
        <h3 className="md:text-[24px] text-lg md:mb-[40px] mb-5 font-[200] light-gradient">
          LET'S WORK TOGETHER
        </h3>
        <h6 className="md:text-[24px] text-lg md:mb-[40px] mb-5 font-[200] text-center text-gray-300">
         everything starts with a conversation
        </h6>
        <a 
          href="mailto:karatitsynkiril@gmail.com?subject=Hi Kiril!" 
          className="font-medium md:text-[64px] text-2xl primary-gradient primary-shadow md:mb-[114px] mb-10 py-5"
        >
          karatitsynkiril@gmail.com
        </a>
       
        <div className="flex justify-center items-center" data-aos="fade-up">
          <Button size="extraLarge">
            <span>Book a Call</span>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Contact;