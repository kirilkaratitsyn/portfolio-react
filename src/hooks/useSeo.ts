import { useEffect } from 'react';

const BASE_URL = 'https://www.karatitsyn.com';
const SITE_NAME = 'Kiril Karatitsyn';
const DEFAULT_IMAGE = '/android-chrome-512x512.png';

type SeoInput = {
  title: string;
  description: string;
  path?: string;
  type?: 'website' | 'article';
  image?: string;
  robots?: string;
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
};

function ensureMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element?.setAttribute(key, value);
  });
}

function ensureLink(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLLinkElement>(selector);

  if (!element) {
    element = document.createElement('link');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element?.setAttribute(key, value);
  });
}

export function useSeo({
  title,
  description,
  path = '/',
  type = 'website',
  image = DEFAULT_IMAGE,
  robots = 'index,follow',
  structuredData,
}: SeoInput) {
  useEffect(() => {
    const canonicalUrl = new URL(path, BASE_URL).toString();
    const imageUrl = new URL(image, BASE_URL).toString();
    const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;

    document.title = fullTitle;
    document.documentElement.lang = 'en';

    ensureMeta('meta[name="description"]', {
      name: 'description',
      content: description,
    });
    ensureMeta('meta[name="robots"]', {
      name: 'robots',
      content: robots,
    });
    ensureMeta('meta[property="og:title"]', {
      property: 'og:title',
      content: fullTitle,
    });
    ensureMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: description,
    });
    ensureMeta('meta[property="og:type"]', {
      property: 'og:type',
      content: type,
    });
    ensureMeta('meta[property="og:url"]', {
      property: 'og:url',
      content: canonicalUrl,
    });
    ensureMeta('meta[property="og:image"]', {
      property: 'og:image',
      content: imageUrl,
    });
    ensureMeta('meta[property="og:site_name"]', {
      property: 'og:site_name',
      content: SITE_NAME,
    });
    ensureMeta('meta[name="twitter:card"]', {
      name: 'twitter:card',
      content: 'summary_large_image',
    });
    ensureMeta('meta[name="twitter:title"]', {
      name: 'twitter:title',
      content: fullTitle,
    });
    ensureMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: description,
    });
    ensureMeta('meta[name="twitter:image"]', {
      name: 'twitter:image',
      content: imageUrl,
    });

    ensureLink('link[rel="canonical"]', {
      rel: 'canonical',
      href: canonicalUrl,
    });

    const scriptId = 'seo-structured-data';
    const existingScript = document.getElementById(scriptId);
    if (existingScript) existingScript.remove();

    if (structuredData) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    return () => {
      const script = document.getElementById(scriptId);
      if (script) script.remove();
    };
  }, [description, image, path, robots, structuredData, title, type]);
}

export { BASE_URL, SITE_NAME };
