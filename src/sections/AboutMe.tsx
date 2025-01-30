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
              I create <span className="primary-gradient primary-shadow">beautiful</span> websites and online-shops that help businesses sell more online. Specializing in developing sites that are easy to use and look great on any device.
            </p>
            <p>
              The focus is on making websites that are fast, easy to navigate, and help turn visitors into customers. Whether you need a new website or want to improve your existing one, let's make it happen.
            </p>
            
          </div>
        </div>
        <div className="media mt-6 lg:mt-0">
          <img className="lazy" data-src="./public/source/me.JPG" width="415" height="450" alt="Kiril Karatitsyn" />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;