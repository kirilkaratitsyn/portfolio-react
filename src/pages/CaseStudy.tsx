import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Contact from '../sections/Contact';
import { useCaseStudies, useCaseStudyBySlug } from '../hooks/useCaseStudies';
import TransitionLink from '../components/TransitionLink';
import CaseStudyMobilePreview from '../components/CaseStudyMobilePreview';
import CaseStudyMoreProjects from '../components/CaseStudyMoreProjects';
import { useSeo } from '../hooks/useSeo';

const CaseStudy = () => {
  const { slug } = useParams();
  const caseStudies = useCaseStudies();
  const caseStudy = useCaseStudyBySlug(slug);

  useSeo(
    caseStudy
      ? {
          title: `${caseStudy.title} Case Study`,
          description: caseStudy.summary,
          path: `/projects/${caseStudy.slug}`,
          type: 'article',
          image: caseStudy.image,
        }
      : {
          title: 'Case Study Not Found',
          description: 'The requested case study could not be found.',
          path: '/projects',
          robots: 'noindex,follow',
        }
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [slug]);

  if (!caseStudy) {
    return (
      <>
        <section className="bg-[#0E0E0E]">
          <div className="blog__container min-h-[60vh] pt-20" data-aos="fade-up">
            <div className="space-y-6">
              <h1 className="text-3xl font-bold uppercase primary-gradient primary-shadow md:text-[37px]">
                {caseStudies.title}
              </h1>
              <p className="text-lg text-white/70">{caseStudies.notFound}</p>
              <TransitionLink
                to="/projects"
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-white hover:text-white/70"
              >
                <span aria-hidden>←</span>
                {caseStudies.backToCases}
              </TransitionLink>
            </div>
          </div>
        </section>
        <Contact />
      </>
    );
  }

  return (
    <>
      <article className="bg-[#0E0E0E]">
        <div className="blog__container pt-20" data-aos="fade-up">
          <div className="mb-10">
            <TransitionLink
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-white/70 hover:text-white"
            >
              <span aria-hidden>←</span>
              {caseStudies.backToCases}
            </TransitionLink>
          </div>

          <header className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                {caseStudy.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-4xl font-bold leading-tight text-white md:text-[52px]">
                {caseStudy.title}
              </h1>
              <p className="max-w-3xl text-lg leading-relaxed text-white/75 md:text-xl">
                {caseStudy.summary}
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                {caseStudies.outcomeTitle}
              </p>
              <ul className=" text-base leading-relaxed text-white/75">
                {caseStudy.outcome.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a
                href={caseStudy.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium uppercase tracking-wide text-black transition hover:bg-white/90"
              >
                {caseStudies.visitStore}
              </a>
            </div>
          </header>

          <section className="my-12">
            <h2 className="mb-6 text-2xl font-semibold text-white">
              {caseStudies.mediaTitle}
            </h2>
            <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
              <div className="hidden overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-4 lg:block">
                <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                  {caseStudies.desktopLabel}
                </div>
                <img
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  className="h-[575px] w-full rounded-[24px] object-cover object-top"
                  loading="lazy"
                />
              </div>

              <div className="rounded-[32px] border border-dashed border-white/15 bg-white/5 p-4">
                <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                  {caseStudies.mobileLabel}
                </div>
                <CaseStudyMobilePreview
                  alt={`${caseStudy.title} mobile preview`}
                  fallbackText={caseStudies.mobilePlaceholder}
                  imageSrc={caseStudy.mobileImage}
                />
              </div>
            </div>
          </section>

          {caseStudy.screenshotCaptions?.length ? (
            <section className="mb-12">
              <h2 className="mb-6 text-2xl font-semibold text-white">
                {caseStudies.screenshotTitle}
              </h2>
              <div className="grid gap-4 md:grid-cols-3">
                {caseStudy.screenshotCaptions.map((caption) => (
                  <div
                    key={caption}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm leading-relaxed text-white/70"
                  >
                    {caption}
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          <section className="mb-12 rounded-[28px] border border-white/10 bg-white/5 p-6">
            <h2 className="mb-4 text-2xl font-semibold text-white">
              {caseStudies.aboutBrandTitle}
            </h2>
            <p className="max-w-4xl text-base leading-relaxed text-white/75">
              {caseStudy.brandDescription}
            </p>
          </section>

          <div className="grid gap-6 lg:grid-cols-2">
            <section className="rounded-[28px] border border-white/10 bg-white/5 p-6">
              <h2 className="mb-4 text-2xl font-semibold text-white">
                {caseStudies.challengeTitle}
              </h2>
              <p className="text-base leading-relaxed text-white/75">
                {caseStudy.challenge}
              </p>
            </section>

            <section className="rounded-[28px] border border-white/10 bg-white/5 p-6">
              <h2 className="mb-4 text-2xl font-semibold text-white">
                {caseStudies.stackTitle}
              </h2>
              <div className="flex flex-wrap gap-3">
                {caseStudy.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/10 px-3 py-2 text-sm text-white/75"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </section>

            <section className="rounded-[28px] border border-white/10 bg-white/5 p-6">
              <h2 className="mb-4 text-2xl font-semibold text-white">
                {caseStudies.scopeTitle}
              </h2>
              <ul className="text-base leading-relaxed text-white/75">
                {caseStudy.scope.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="rounded-[28px] border border-white/10 bg-white/5 p-6">
              <h2 className="mb-4 text-2xl font-semibold text-white">
                {caseStudies.solutionTitle}
              </h2>
              <ul className="text-base leading-relaxed text-white/75">
                {caseStudy.solution.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </article>

      <CaseStudyMoreProjects copy={caseStudies} items={caseStudies.items} currentSlug={caseStudy.slug} />

      <Contact />
    </>
  );
};

export default CaseStudy;
