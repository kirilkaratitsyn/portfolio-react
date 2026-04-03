import { useEffect, useRef, useState } from "react";
import Button from "../components/Button";
import { useTranslation } from 'react-i18next';
import { getServiceIcon } from '../constants/serviceIcons';

type ServiceItem = {
  id: string;
  title: string;
  description: string;
};

function AnimatedStat({
  target,
  suffix,
  label,
}: {
  target: number;
  suffix: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [n, setN] = useState(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setActive(true);
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!active) return;
    const dur = 1500;
    let start: number | null = null;
    let frameId = 0;
    const tick = (ts: number) => {
      if (start === null) start = ts;
      const p = Math.min((ts - start) / dur, 1);
      const eased = 1 - (1 - p) ** 3;
      setN(Math.round(eased * target));
      if (p < 1) frameId = requestAnimationFrame(tick);
    };
    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [active, target]);

  return (
    <div
      ref={ref}
      className="rounded-2xl border border-white/10 bg-white/[0.04] px-2 py-3.5 text-center backdrop-blur-sm sm:px-3 md:px-4 md:py-4 md:text-left"
    >
      <div className="text-[26px] font-bold tabular-nums leading-none text-white sm:text-[30px] md:text-[34px]">
        {n}
        {suffix}
      </div>
      <p className="mt-2 text-[10px] font-medium uppercase leading-snug tracking-[0.12em] text-white/55 sm:text-[11px] md:text-xs">
        {label}
      </p>
    </div>
  );
}

function AboutMe() {
  const { t } = useTranslation();
  const serviceItems = t('services.items', { returnObjects: true }) as ServiceItem[];

  return (
    <section className="bg-[#0E0E0E]" id="about_me">
      <div className="about__container pt-10 md:pt-20" data-aos="fade-up">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.58fr)_minmax(0,0.42fr)] lg:items-stretch lg:gap-8 xl:gap-12">
          <div className="content flex h-full max-w-xl flex-col lg:max-w-none">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-white/80">
              {t('about.eyebrow')}
            </p>
            <h2 className="mb-5 text-2xl font-bold uppercase primary-gradient primary-shadow md:text-[32px] lg:text-[34px]">
              {t('about.title')}
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-white/75 md:text-lg lg:max-w-none">
              {t('about.text')}
            </p>

            <div className="mt-8 grid max-w-xl grid-cols-3 gap-2 sm:gap-3 lg:max-w-none">
              <AnimatedStat target={3} suffix="+" label={t('about.statYearLabel')} />
              <AnimatedStat target={30} suffix="+" label={t('about.statProjectsLabel')} />
              <AnimatedStat target={99} suffix="%" label={t('about.statSatisfactionLabel')} />
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {serviceItems.map((item) => {
                const Icon = getServiceIcon(item.id);
                return (
                  <span
                    key={item.id}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm md:px-4 md:py-2 md:text-sm"
                  >
                    <Icon className="h-3.5 w-3.5 shrink-0 text-white/90" strokeWidth={2} aria-hidden />
                    {item.title}
                  </span>
                );
              })}
            </div>

            <div className="mt-8 flex justify-start lg:mt-auto lg:pt-6">
              <Button size="large">
                <span>{t('about.lets_work')}</span>
              </Button>
            </div>
          </div>

          <div className="flex h-full w-full items-center justify-center lg:justify-end">
            <div className="w-full max-w-[420px] overflow-hidden rounded-[22px] border border-white/10 bg-black/20 p-3 backdrop-blur-md">
              <img
                className="lazy h-[280px] w-full rounded-[18px] object-cover object-top shadow-white sm:h-[320px] lg:h-[440px]"
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
