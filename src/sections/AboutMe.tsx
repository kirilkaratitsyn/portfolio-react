import { useEffect, useRef } from "react";
import Button from "../components/Button";
import { useTranslation } from 'react-i18next';
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

// Register the TextPlugin
gsap.registerPlugin(TextPlugin);

function AboutMe() {
  const { t } = useTranslation();
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef1 = useRef<HTMLParagraphElement>(null);
  const textRef2 = useRef<HTMLParagraphElement>(null);
  
  useEffect(() => {
    // Hide the text initially
    if (headingRef.current) headingRef.current.innerHTML = "";
    if (textRef1.current) textRef1.current.innerHTML = "";
    if (textRef2.current) textRef2.current.innerHTML = "";
    
    // Create timeline for typing animation
    const tl = gsap.timeline({ defaults: { ease: "none" } });
    
    // Heading typing animation
    tl.to(headingRef.current, {
      duration: 0.8,
      text: t('about.title'),
      ease: "none",
      delay: 0.2
    });
    
    // First paragraph typing animation
    tl.to(textRef1.current, {
      duration: 1,
      text: t('about.text'),
      ease: "none",
      delay: 0.1
    }, ">");
    
    // Second paragraph typing animation after first completes
    tl.to(textRef2.current, {
      duration: 1,
      text: t('about.text_2'),
      ease: "none",
      delay: 0.1
    }, ">");
    
    return () => {
      // Cleanup animation on component unmount
      tl.kill();
    };
  }, [t]);

  return (
    <section className="bg-[#0E0E0E]" id="about_me">
      <div className="about__container pt-20 " data-aos="fade-up">
        <div className="lg:flex flex-row justify-between ">
          <div className="content max-w-[670px]">
            <h1 className="mb-8 text-3xl md:text-[37px] font-bold primary-gradient primary-shadow uppercase" ref={headingRef}>
              {/* Title will be animated here */}
            </h1>
            <div className="font-bold text-[24px] light-gradient ">
              <div className="mb-10">
                <p className="mb-5" ref={textRef1}>
                  {/* Text will be animated here */}
                </p>
                <p ref={textRef2}>
                  {/* Text will be animated here */}
                </p>
              </div>
            </div>
          </div>
          <div className="media mt-6  lg:mt-0">
            <img 
              className="lazy rounded-[10px]  shadow-white" 
              data-src="/source/me.JPG" 
              src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" 
              width="315" 
              alt="Kiril Karatitsyn" 
            />
          </div>
        </div>
        <div className="flex justify-center">
          <Button size="large">
            <span>{t('about.lets_work')}</span>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;