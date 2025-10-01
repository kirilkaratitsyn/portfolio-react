import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  date: string;
  readingTime: string;
  excerpt: string;
  image: string;
  tags?: string[];
  content: string[];
};

export type BlogCopy = {
  title: string;
  subtitle: string;
  readMore: string;
  backToList: string;
  notFound: string;
  featuredTitle: string;
  featuredSubtitle: string;
  viewAll: string;
  estimatedRead: string;
  posts: BlogPost[];
};

export const useBlogContent = () => {
  const { t } = useTranslation();

  return useMemo(() => t('blog', { returnObjects: true }) as BlogCopy, [t]);
};

export const useBlogPosts = () => {
  const blog = useBlogContent();
  return blog.posts;
};
