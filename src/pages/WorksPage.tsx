import { useEffect, useState } from "react";
import Contact from "../sections/Contact";
import { useWorksContent } from "../hooks/useWorks";
import WorkCard from "../components/WorkCard";
import TransitionLink from "../components/TransitionLink";
import { useSeo } from "../hooks/useSeo";

const INITIAL_PROJECTS_COUNT = 9;
const PROJECTS_STEP = 6;

const WorksPage = () => {
  const works = useWorksContent();
  const [visibleCount, setVisibleCount] = useState(INITIAL_PROJECTS_COUNT);

  useSeo({
    title: 'Shopify Projects',
    description:
      'Selected Shopify projects across custom themes, migrations, storefront improvements, merchandising logic, and launch support.',
    path: '/projects',
    type: 'website',
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const visibleProjects = works.projects.slice(0, visibleCount);
  const hasMoreProjects = visibleCount < works.projects.length;

  return (
    <>
      <section className="bg-[#0E0E0E]" id="work">
        <div className="work__container pt-20" data-aos="fade-up">
          <div className="mb-10">
            <TransitionLink
              to="/"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-white/70 hover:text-white"
            >
              <span aria-hidden>←</span>
              {works.backHome}
            </TransitionLink>
          </div>

          <div className="mb-10 max-w-3xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/80">
              {works.eyebrow}
            </p>
            <h1 className="text-[37px] font-bold primary-gradient primary-shadow">
              {works.allWorksTitle}
            </h1>
            <p className="text-lg leading-relaxed text-white/75 md:text-xl">
              {works.allWorksSubtitle}
            </p>
          </div>

          <div className="items grid grid-cols-1 gap-x-[40px] gap-y-[40px] justify-items-center lg:grid-cols-2 xl:grid-cols-3">
            {visibleProjects.map((work) => (
              <WorkCard
                key={`${work.title}-${work.url}`}
                work={work}
                viewCaseLabel={works.viewCase}
                visitWebsiteLabel={works.visitWebsite}
              />
            ))}
          </div>

          {hasMoreProjects ? (
            <div className="mt-16 flex justify-center">
              <button
                type="button"
                onClick={() =>
                  setVisibleCount((count) => count + PROJECTS_STEP)
                }
                className="whitespace-nowrap rounded-full bg-white px-12 py-3 text-lg font-medium text-black transition-all duration-500 light-shadow"
              >
                {works.loadMore}
              </button>
            </div>
          ) : null}
        </div>
      </section>
      <Contact />
    </>
  );
};

export default WorksPage;
