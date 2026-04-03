import { useTranslation } from "react-i18next";
import { type WorkProject } from "../hooks/useWorks";
import { useCaseStudyBySlug } from "../hooks/useCaseStudies";
import TransitionLink from "./TransitionLink";

type WorkCardProps = {
  work: WorkProject;
  viewCaseLabel: string;
  visitWebsiteLabel: string;
  cardRef?: (node: HTMLDivElement | null) => void;
  onMouseMove?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onMouseLeave?: () => void;
  lazyImage?: boolean;
};

const WorkCard = ({
  work,
  viewCaseLabel,
  visitWebsiteLabel,
  cardRef,
  onMouseMove,
  onMouseLeave,
  lazyImage = false,
}: WorkCardProps) => {
  const { t } = useTranslation();
  const caseStudy = useCaseStudyBySlug(work.caseStudySlug);

  const imageProps = lazyImage
    ? {
        "data-src": work.image,
        className:
          "lazy h-full w-full rounded-lg object-cover object-top transition-transform duration-700",
      }
    : {
        src: work.image,
        loading: "lazy" as const,
        className:
          "h-full w-full rounded-lg object-cover object-top transition-transform duration-700",
      };

  return (
    <div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="item flex h-full w-full max-w-[490px] flex-col items-center justify-start gap-[15px] rounded-lg border border-white/10 bg-white/5 px-5 py-5 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white/10"
      style={{ transition: "all 0.3s ease" }}
    >
      <a
        href={work.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-[255px] w-[-webkit-fill-available] overflow-hidden rounded-lg"
      >
        <img alt={work.title} {...imageProps} />
      </a>
      <p className="w-full text-left text-[20px] font-semibold md:text-center">
        {work.title}
      </p>
      {work.caseStudySlug && caseStudy ? (
        <div className="w-full rounded-2xl border border-dashed border-white/15 bg-black/20 p-4 text-left">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
            {t("caseStudies.aboutBrandTitle")}
          </p>
          <p
            className="text-sm leading-relaxed text-white/70"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {caseStudy.brandSummary}
          </p>
          <TransitionLink
            to={`/projects/${work.caseStudySlug}`}
            className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-white underline decoration-white/20 underline-offset-4 transition hover:text-white/70"
          >
            {t("caseStudies.readMore")}
          </TransitionLink>
        </div>
      ) : null}
      <span className="min-h-[100px] opacity-80">{work.tech}</span>
      <div className="mt-auto flex w-full flex-wrap justify-center gap-3 pt-6">
        {work.caseStudySlug ? (
          <TransitionLink
            to={`/projects/${work.caseStudySlug}`}
            className="rounded-full bg-white px-12 py-3 text-lg font-medium whitespace-nowrap text-black transition-all duration-500 light-shadow"
          >
            {viewCaseLabel}
          </TransitionLink>
        ) : (
          <button
            onClick={() => window.open(work.url, "_blank")}
            className="rounded-full bg-white px-12 py-3 text-lg font-medium whitespace-nowrap text-black transition-all duration-500 light-shadow"
          >
            {visitWebsiteLabel}
          </button>
        )}
      </div>
    </div>
  );
};

export default WorkCard;
