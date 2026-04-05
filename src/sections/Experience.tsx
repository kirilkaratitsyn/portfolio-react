import { Briefcase, GraduationCap, Sparkles } from 'lucide-react';
import { useEffect, useMemo, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

type ExperienceItem = {
  kind: string;
  role: string;
  company: string;
  dateRange: string;
  location?: string;
  summary: string;
  logo: string;
  logoAlt: string;
  isPlaceholderLogo?: boolean;
};

gsap.registerPlugin(ScrollTrigger);

function getKindIcon(kind: string) {
  const normalized = kind.trim().toLowerCase();

  if (['internship', 'стажування', 'praktikum'].includes(normalized)) {
    return Sparkles;
  }

  if (['education', 'освіта', 'ausbildung'].includes(normalized)) {
    return GraduationCap;
  }

  return Briefcase;
}

function Experience() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const items = t('experience.items', { returnObjects: true }) as ExperienceItem[];

  const timelineItems = useMemo(
    () =>
      items.map((item) => ({
        ...item,
        Icon: getKindIcon(item.kind),
      })),
    [items]
  );

  useEffect(() => {
    if (!sectionRef.current || !progressRef.current) return;

    const section = sectionRef.current;
    const progress = progressRef.current;
    const cards = section.querySelectorAll('[data-experience-card]');

    const ctx = gsap.context(() => {
      gsap.set(progress, { scaleY: 0, transformOrigin: 'top center' });

      gsap.to(progress, {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          end: 'bottom 35%',
          scrub: true,
        },
      });

      gsap.fromTo(
        cards,
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.14,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 75%',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience">
      <div ref={sectionRef} className="experience__container pt-10 md:pt-20">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-white/80">
            {t('experience.eyebrow')}
          </p>
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold uppercase primary-gradient primary-shadow md:text-[37px]">
              {t('experience.title')}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/75 md:text-xl">
              {t('experience.subtitle')}
            </p>
          </div>

          <div className="relative mt-12">
            <div className="absolute bottom-0 left-[23px] top-0 w-px bg-white/10 md:left-1/2 md:-translate-x-1/2" />
            <div
              ref={progressRef}
              className="absolute bottom-0 left-[23px] top-0 w-px bg-[linear-gradient(180deg,rgba(255,93,36,0.95)_0%,rgba(255,162,29,0.9)_55%,rgba(255,212,163,0.65)_100%)] md:left-1/2 md:-translate-x-1/2"
            />

            <div className="space-y-6 md:space-y-10">
            {timelineItems.map(({ Icon, ...item }, index) => (
              <article
                key={`${item.company}-${item.dateRange}`}
                data-experience-card
                className="group relative pl-14 md:grid md:grid-cols-[minmax(0,1fr)_72px_minmax(0,1fr)] md:items-start md:gap-8 md:pl-0"
              >
                <div className="absolute left-0 top-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#111111] text-white/75 shadow-[0_0_0_8px_rgba(14,14,14,1)] md:left-1/2 md:top-8 md:z-10 md:-translate-x-1/2 md:shadow-[0_0_0_12px_rgba(14,14,14,1)]">
                  <Icon className="h-4.5 w-4.5" strokeWidth={2} aria-hidden />
                </div>

                <div
                  className={`rounded-[20px] border border-white/10 bg-transparent p-5 transition-all duration-300 hover:border-white/15 md:p-6 ${
                    index % 2 === 0 ? 'md:col-start-1 md:text-right' : 'md:col-start-3'
                  }`}
                >
                  <div className={`min-w-0 flex flex-col ${
                          index % 2 === 0 ? 'md:items-end' : ''
                        }`}>
                      <div
                        className={`flex flex-wrap items-center gap-2.5 ${
                          index % 2 === 0 ? 'md:flex-row-reverse md:justify-start' : ''
                        }`}
                      >
                        <div
                          className={`flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-lg border ${
                            item.isPlaceholderLogo
                              ? 'border-dashed border-white/15 bg-[#121212]'
                              : 'border-white/10 bg-white/95'
                          } p-1.5`}
                        >
                          <img
                            src={item.logo}
                            alt={item.logoAlt}
                            className="max-h-full max-w-full object-contain opacity-90"
                            loading={index < 2 ? 'eager' : 'lazy'}
                          />
                        </div>
                        <span className="inline-flex items-center rounded-full border border-white/10 bg-transparent px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/60">
                          {item.kind}
                        </span>
                        {item.isPlaceholderLogo ? (
                          <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-white/28">
                            {t('experience.placeholderLabel')}
                          </span>
                        ) : null}
                      </div>

                      <h3 className="mt-4 text-lg font-semibold text-white md:text-[22px]">
                        {item.role}
                        <span className="text-white/45"> @ </span>
                        <span className="text-white/85">{item.company}</span>
                      </h3>

                      <div
                        className={`mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] text-white/50 ${
                          index % 2 === 0 ? 'md:justify-end' : ''
                        }`}
                      >
                        <span>{item.dateRange}</span>
                        
                      </div>

                      <p className="mt-4 max-w-[42ch] text-sm leading-relaxed text-white/62">
                        {item.summary}
                      </p>
                  </div>
                </div>

                <div className="hidden md:block" />
              </article>
            ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
