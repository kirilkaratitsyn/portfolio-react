import Button from "../components/Button";
import { useTranslation } from 'react-i18next';

function AboutMe() {
  const { t } = useTranslation();

  return (
    <section className="bg-[#0E0E0E]" id="about_me">
      <div className="about__container " data-aos="fade-up">
        <div className="lg:flex flex-row justify-between">
          <div className="content max-w-[670px]">
            <h1 className="mb-8 text-3xl md:text-[37px] font-bold primary-gradient uppercase">
              {t('about.title')}
            </h1>
            <div className="font-bold text-[24px] ">
              <div className="light-gradient mb-10">
                <p className="mb-5">
                  {t('about.text')}
                </p>
                <p>
                  {t('about.text_2')}
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