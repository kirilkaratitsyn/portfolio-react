import { useTranslation } from 'react-i18next';

function Hero() {
  const { t } = useTranslation();
  const proofItems = t('hero.proofItems', { returnObjects: true }) as string[];

  return (
    <section id="hero">
      <video className="back-video" autoPlay loop muted playsInline>
        <source src="/source/video/hero-background.webm" type="video/webm" />
      </video>

      <div
        className="hero__container relative flex flex-col justify-center gap-8 bg-transparent py-[56px] md:min-h-[calc(100vh-76px)] md:py-[88px]"
        data-aos="fade-up"
      >
        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.32em] text-white/80">
            {t('hero.eyebrow')}
          </p>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white/80 backdrop-blur-sm">
            <img src="/source/ui/upwork-top-rated.svg" alt="" className="h-5 w-5 shrink-0" aria-hidden />
            <span>{t('hero.topRated')}</span>
          </div>
          <h1 className="max-w-4xl text-[42px] font-bold leading-[1.05] text-white md:text-[50px]">
            {t('hero.title')}{' '}
            <span className="primary-gradient primary-shadow">{t('hero.titleAccent')}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/65 md:text-lg">
            {t('hero.description')}
          </p>
        </div>

        <div className="flex flex-col items-start gap-5 text-sm md:flex-row md:items-center md:gap-6">
          <button
            className="transition-all duration-500 whitespace-nowrap font-medium bg-white text-black light-shadow px-12 py-3 text-lg rounded-full"
            data-cal-link="kiril-karatitsyn/free-consultation-call"
            data-cal-namespace="free-consultation-call"
            data-cal-config='{"layout":"month_view","theme":"dark"}'
            id="Button"
          >
            {t('hero.book_call')}
          </button>
          <a
            href="mailto:karatitsynkiril@gmail.com?subject=Shopify%20project%20inquiry"
            className="flex items-center justify-center rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
          >
            {t('hero.send_message')}
            <img className="ml-2" width="16px" src="/source/ui/arrow-up-right.png" alt="arrow" />
          </a>
        </div>

        <div className="hidden grid gap-3 border-t border-white/10 pt-6 text-sm text-white/70 md:grid-cols-3">
          {proofItems.map((item) => (
            <div
              key={item}
              className="shiny-surface rounded-2xl border border-white/10 bg-black/20 px-4 py-3 backdrop-blur-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
