import { useTranslation } from 'react-i18next';
import { getServiceIcon } from '../constants/serviceIcons';

type ServiceItem = {
  id: string;
  title: string;
  description: string;
};

const Services = () => {
  const { t } = useTranslation();
  const items = t('services.items', { returnObjects: true }) as ServiceItem[];

  return (
    <section id="services" className="bg-[#0E0E0E]">
      <div className="services__container pt-10 md:pt-20" data-aos="fade-up">
        <div className="mb-12 max-w-3xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/80">
            {t('services.eyebrow')}
          </p>
          <h2 className="text-3xl font-bold uppercase primary-gradient primary-shadow md:text-[37px]">
            {t('services.title')}
          </h2>
          <p className="text-lg leading-relaxed text-white/75 md:text-xl">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid gap-2 md:grid-cols-2 md:gap-3 xl:grid-cols-3">
          {items.map((item) => {
            const Icon = getServiceIcon(item.id);
            return (
              <article
                key={item.id}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition duration-300 hover:border-white/20 hover:bg-white/10"
              >
                <span className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white">
                  <Icon className="h-6 w-6" strokeWidth={1.5} aria-hidden />
                </span>
                <h3 className="mb-3 text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-base leading-relaxed text-white/70">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
