import Button from "../components/Button";
import { useTranslation } from 'react-i18next';

function AboutMe() {
  const { t } = useTranslation();
  const highlights = t('about.highlights', { returnObjects: true }) as string[];

  return (
    <section className="bg-[#0E0E0E]" id="about_me">
      <div className="about__container pt-10 md:pt-20" data-aos="fade-up">
        <div className="gap-10 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="content max-w-[760px]">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-white/80">
              {t('about.eyebrow')}
            </p>
            <h2 className="mb-6 text-3xl font-bold uppercase primary-gradient primary-shadow md:text-[37px]">
              {t('about.title')}
            </h2>
            <div className="space-y-5 text-lg leading-relaxed text-white/75 md:text-[22px]">
              <p>{t('about.text')}</p>
              <p>{t('about.text_2')}</p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-base text-white/80 backdrop-blur-md"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-2 flex justify-start">
              <Button size="large">
                <span>{t('about.lets_work')}</span>
              </Button>
            </div>
          </div>

          <div className="media mt-8 lg:mt-0">
            <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-4 backdrop-blur-md">
              <img
                className="lazy max-h-[520px] w-full rounded-[20px] object-cover object-top shadow-white"
                data-src="/source/profile/kiril-karatitsyn-portrait.jpeg"
                src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                alt="Kiril Karatitsyn"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
