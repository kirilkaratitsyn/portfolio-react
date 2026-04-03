import type { CaseStudy, CaseStudiesCopy } from '../hooks/useCaseStudies';
import TransitionLink from './TransitionLink';

type CaseStudyMoreProjectsProps = {
  copy: CaseStudiesCopy;
  items: CaseStudy[];
  currentSlug: string;
};

const CaseStudyMoreProjects = ({ copy, items, currentSlug }: CaseStudyMoreProjectsProps) => {
  const others = items.filter((item) => item.slug !== currentSlug).slice(0, 3);

  if (others.length === 0) return null;

  return (
    <section className="border-t border-white/10 bg-[#0E0E0E] py-16" aria-labelledby="case-study-more-heading">
      <div className="blog__container">
        <div className="mb-10 max-w-3xl space-y-3">
          <h2 id="case-study-more-heading" className="text-2xl font-bold text-white md:text-3xl">
            {copy.moreProjectsTitle}
          </h2>
          <p className="text-base leading-relaxed text-white/70 md:text-lg">{copy.moreProjectsSubtitle}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {others.map((item) => (
            <article
              key={item.slug}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:border-white/20"
            >
              <TransitionLink to={`/projects/${item.slug}`} className="block overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-44 w-full object-cover object-top transition duration-300 group-hover:scale-[1.02] md:h-52"
                  loading="lazy"
                />
              </TransitionLink>
              <div className="flex flex-1 flex-col gap-3 p-5">
                <h3 className="text-lg font-semibold leading-snug text-white">{item.title}</h3>
                <p className="line-clamp-2 flex-1 text-sm leading-relaxed text-white/65">{item.summary}</p>
                <TransitionLink
                  to={`/projects/${item.slug}`}
                  className="inline-flex w-fit items-center gap-2 text-sm font-medium text-white underline decoration-white/25 underline-offset-4 transition hover:text-white/80"
                >
                  {copy.viewCase}
                  <span aria-hidden>→</span>
                </TransitionLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyMoreProjects;
