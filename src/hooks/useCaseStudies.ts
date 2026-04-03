import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

export const CASE_STUDY_ORDER = [
  'bazar-bizar',
  'elanora-skin',
  'petaljet',
  'nimfa',
  'indian-affairs',
  'silk-tallow',
] as const;

export type CaseStudy = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  brandSummary: string;
  brandDescription: string;
  image: string;
  mobileImage?: string;
  liveUrl: string;
  tags: string[];
  challenge: string;
  scope: string[];
  solution: string[];
  outcome: string[];
  stack: string[];
  screenshotCaptions?: string[];
};

export type CaseStudiesCopy = {
  eyebrow: string;
  title: string;
  subtitle: string;
  viewCase: string;
  visitStore: string;
  backToCases: string;
  notFound: string;
  mediaTitle: string;
  desktopLabel: string;
  mobileLabel: string;
  mobilePlaceholder: string;
  aboutBrandTitle: string;
  readMore: string;
  challengeTitle: string;
  scopeTitle: string;
  solutionTitle: string;
  stackTitle: string;
  outcomeTitle: string;
  screenshotTitle: string;
  moreProjectsTitle: string;
  moreProjectsSubtitle: string;
  items: CaseStudy[];
};

export const useCaseStudies = () => {
  const { t } = useTranslation();

  return useMemo(() => {
    const caseStudies = t('caseStudies', { returnObjects: true }) as CaseStudiesCopy;
    const orderMap = new Map(
      CASE_STUDY_ORDER.map((slug, index) => [slug, index])
    );

    return {
      ...caseStudies,
      items: [...caseStudies.items].sort((a, b) => {
        const aOrder = orderMap.get(a.slug) ?? Number.MAX_SAFE_INTEGER;
        const bOrder = orderMap.get(b.slug) ?? Number.MAX_SAFE_INTEGER;
        return aOrder - bOrder;
      }),
    };
  }, [t]);
};

export const useCaseStudyBySlug = (slug?: string) => {
  const caseStudies = useCaseStudies();

  return useMemo(
    () => caseStudies.items.find((item) => item.slug === slug),
    [caseStudies.items, slug]
  );
};
