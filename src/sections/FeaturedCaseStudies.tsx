import { useCaseStudies } from '../hooks/useCaseStudies';
import TransitionLink from '../components/TransitionLink';

const FeaturedCaseStudies = () => {
  const caseStudies = useCaseStudies();
  const renderBrandBlock = (slug: string, brandSummary: string, className = '') => (
    <div
      className={`rounded-[22px] border border-dashed border-white/15 bg-black/20 p-4 text-sm text-white/70 ${className}`.trim()}
    >
      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
        {caseStudies.aboutBrandTitle}
      </span>
      <p className="leading-relaxed">{brandSummary}</p>
      <TransitionLink
        to={`/projects/${slug}`}
        className="mt-3 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-white hover:text-white/75"
      >
        {caseStudies.readMore}
        <span aria-hidden>→</span>
      </TransitionLink>
    </div>
  );

  return (
    <section id="case-studies" className="bg-[#0E0E0E]">
      <div className="cases__container pt-10 md:pt-20" data-aos="fade-up">
        <div className="mb-12 flex flex-col md:flex-row md:justify-between gap-6">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/80">
              {caseStudies.eyebrow}
            </p>
            <h2 className="text-3xl font-bold uppercase primary-gradient primary-shadow md:text-[37px]">
              {caseStudies.title}
            </h2>
            <p className="text-lg leading-relaxed text-white/75 md:text-xl">
              {caseStudies.subtitle}
            </p>
          </div>
          <TransitionLink
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-white hover:text-white/70"
          >
            {caseStudies.moreProjectsTitle}
            <span aria-hidden>→</span>
          </TransitionLink>
        </div>

        <div className="grid gap-8">
          {caseStudies.items.slice(0, 3).map((item) => (
            <article
              key={item.slug}
              className="group grid overflow-hidden rounded-[28px] border border-white/10 bg-white/5 transition duration-300 hover:border-white/20 hover:bg-white/10 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch"
            >
              <div className="border-b border-white/10 p-4 lg:border-b-0 lg:border-r lg:p-6">
                <div className="flex h-full flex-col gap-4">
                  <div className="overflow-hidden rounded-[24px] border border-white/10 bg-black/20 p-3 lg:flex lg:h-full lg:w-full">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-64 w-full rounded-[18px] object-cover object-top lg:h-full lg:min-h-[340px]"
                      loading="lazy"
                    />
                  </div>
                  {renderBrandBlock(item.slug, item.brandSummary, 'hidden lg:block')}
                </div>
              </div>
              <div className="flex h-full flex-col gap-5 p-6 lg:p-8">
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="text-base leading-relaxed text-white/70">
                    {item.summary}
                  </p>
                </div>
                {renderBrandBlock(item.slug, item.brandSummary, 'lg:hidden')}
                <div className="grid gap-3 text-sm text-white/70">
                  <div className="shiny-surface rounded-2xl border border-white/10 bg-black/20 p-4">
                    <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                      {caseStudies.challengeTitle}
                    </span>
                    <p>{item.challenge}</p>
                  </div>
                  <div className="shiny-surface rounded-2xl border border-white/10 bg-black/20 p-4">
                    <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                      {caseStudies.outcomeTitle}
                    </span>
                    <p>{item.outcome[0]}</p>
                  </div>
                </div>
                <div className="mt-auto flex flex-wrap gap-4 pt-2">
                  <TransitionLink
                    to={`/projects/${item.slug}`}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium uppercase tracking-wide text-black transition hover:bg-white/90"
                  >
                    {caseStudies.viewCase}
                  </TransitionLink>
                  <a
                    href={item.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-medium uppercase tracking-wide text-white transition hover:bg-white/10"
                  >
                    {caseStudies.visitStore}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCaseStudies;
