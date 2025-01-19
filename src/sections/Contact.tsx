function Contact() {
  return (
    <section id="contact">
      <div className="contact__container flex justify-center items-center flex-col" data-aos="fade-up">
        <h3 className="md:text-[24px] text-lg md:mb-[40px] mb-5 font-[200] light-gradient">
          LET'S WORK TOGETHER
        </h3>
        <a 
          href="mailto:karatitsynkiril@gmail.com?subject=Hi Kiril!" 
          className="font-medium md:text-[64px] text-2xl primary-gradient primary-shadow md:mb-[114px] mb-10 py-5"
        >
          karatitsynkiril@gmail.com
        </a>
        <button 
          data-aos="fade-up"
          className="light-shadow text-black font-semibold text-[14px] md:text-[24px] bg-white px-[43px] md:px-[73px] py-[9px] rounded-full"
          data-cal-link="kiril-karatitsyn/free-consultation-call"
          data-cal-namespace="free-consultation-call"
          data-cal-config='{"layout":"month_view","theme":"dark"}'
        >
          Book a Call
        </button>
      </div>
    </section>
  );
}

export default Contact;