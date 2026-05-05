import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { CASE_STUDY_ORDER } from './useCaseStudies';

const PINNED_PROJECTS = [
  'ReviewCore',
  'MarinePatches',
  'White Canvas Earth',
  'Lineargent',
  'Peter Bijoux',
  'M-Oceans',
] as const;

export type WorkProject = {
  title: string;
  url: string;
  image: string;
  tech: string;
  caseStudySlug?: string;
};

export type WorksCopy = {
  eyebrow: string;
  title: string;
  subtitle: string;
  allWorksTitle: string;
  allWorksSubtitle: string;
  loadMore: string;
  visitWebsite: string;
  viewCase: string;
  backHome: string;
  contactCard: {
    title: string;
    text: string;
    button: string;
  };
  projects: WorkProject[];
};

export const useWorksContent = () => {
  const { t } = useTranslation();

  return useMemo(() => {
    const works = t('works', { returnObjects: true }) as WorksCopy;
    const orderMap = new Map(
      CASE_STUDY_ORDER.map((slug, index) => [slug, index])
    );
    const pinnedMap = new Map(
      PINNED_PROJECTS.map((title, index) => [title, index])
    );

    return {
      ...works,
      projects: [...works.projects].sort((a, b) => {
        const aPinnedOrder = pinnedMap.get(a.title);
        const bPinnedOrder = pinnedMap.get(b.title);

        if (aPinnedOrder !== undefined || bPinnedOrder !== undefined) {
          return (
            (aPinnedOrder ?? Number.MAX_SAFE_INTEGER) -
            (bPinnedOrder ?? Number.MAX_SAFE_INTEGER)
          );
        }

        const aHasCase = Boolean(a.caseStudySlug);
        const bHasCase = Boolean(b.caseStudySlug);

        if (aHasCase && bHasCase) {
          const aOrder = orderMap.get(a.caseStudySlug ?? '') ?? Number.MAX_SAFE_INTEGER;
          const bOrder = orderMap.get(b.caseStudySlug ?? '') ?? Number.MAX_SAFE_INTEGER;
          return aOrder - bOrder;
        }

        if (aHasCase === bHasCase) return 0;
        return aHasCase ? -1 : 1;
      }),
    };
  }, [t]);
};
