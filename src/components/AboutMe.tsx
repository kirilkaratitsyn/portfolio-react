function AboutMe() {
  return (
    <section className="bg-[#0E0E0E]" id="about_me">
      <div className="about__container lg:flex flex-row justify-between" data-aos="fade-up">
        <div className="content max-w-[670px]">
          <h1 className="mb-8 text-3xl md:text-[37px] font-bold primary-gradient uppercase">
            My name is Kiril Karatitsyn
          </h1>
          <div className="font-bold text-[24px] light-gradient">
            <p className="mb-5">
              I am a Front-end developer with in-depth knowledge in{' '}
              <span className="primary-gradient primary-shadow">Shopify</span>, focused on creating seamless and engaging online shopping experiences.
            </p>
            <p>
              Driven by precision and efficiency, I build solutions that make e-commerce straightforward and user-friendly for businesses and their customers.
            </p>
          </div>
        </div>
        <div className="media mt-6 lg:mt-0">
          <img className="lazy" data-src="source/aboutme_1.webp" width="415" height="450" alt="Kiril Karatitsyn" />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;