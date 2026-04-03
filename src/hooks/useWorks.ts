import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { CASE_STUDY_ORDER } from './useCaseStudies';

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

    return {
      ...works,
      projects: [...works.projects].sort((a, b) => {
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
