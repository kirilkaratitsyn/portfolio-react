const SCREENSHOTONE_API_URL = 'https://api.screenshotone.com/take';

const SCREENSHOTONE_ACCESS_KEY =
  import.meta.env.VITE_SCREENSHOTONE_ACCESS_KEY?.trim() || '';

const MOBILE_VIEWPORT_WIDTH = 375;
const MOBILE_VIEWPORT_HEIGHT = 844;
const MOBILE_IMAGE_WIDTH = 410;
const MOBILE_DELAY_SECONDS =
  Math.max(
    0,
    Math.round(
      Number(import.meta.env.VITE_SCREENSHOTONE_MOBILE_DELAY ?? '1') || 1
    )
  );
const MOBILE_CACHE_TTL_SECONDS =
  Number(import.meta.env.VITE_SCREENSHOTONE_CACHE_TTL ?? '2592000') || 2592000;

export const hasScreenshotOneConfig = () => Boolean(SCREENSHOTONE_ACCESS_KEY);

export const buildScreenshotOneMobileUrl = (targetUrl: string) => {
  if (!SCREENSHOTONE_ACCESS_KEY || !targetUrl) {
    return null;
  }

  const params = new URLSearchParams();
  params.set('access_key', SCREENSHOTONE_ACCESS_KEY);
  params.set('url', targetUrl);
  params.set('format', 'webp');
  params.set('image_width', String(MOBILE_IMAGE_WIDTH));
  params.set('viewport_width', String(MOBILE_VIEWPORT_WIDTH));
  params.set('viewport_height', String(MOBILE_VIEWPORT_HEIGHT));
  params.set('viewport_mobile', 'true');
  params.set('viewport_has_touch', 'true');
  params.set('device_scale_factor', '2');
  params.set('full_page', 'true');
  params.set('full_page_scroll', 'true');
  params.set('full_page_scroll_by', '400');
  params.set('full_page_max_height', '6000');
  params.set('reduced_motion', 'true');
  params.set('block_cookie_banners', 'true');
  params.set('block_chats', 'true');
  params.set('block_ads', 'true');
  params.set('cache', 'true');
  params.set('cache_ttl', String(MOBILE_CACHE_TTL_SECONDS));
  params.set('delay', String(MOBILE_DELAY_SECONDS));
  params.append('wait_until', 'domcontentloaded');
  params.append('wait_until', 'networkidle2');

  return `${SCREENSHOTONE_API_URL}?${params.toString()}`;
};
