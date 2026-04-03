const ROUTE_LOADER_START_EVENT = 'app:route-loader-start';
const ROUTE_LOADING_CLASS = 'route-loading';
const ROUTE_LOADING_OUT_CLASS = 'route-loading-out';
const ROUTE_LOADER_OUT_DURATION = 220;

let visibleSince = 0;
let hideTimeoutId: number | null = null;
let cleanupTimeoutId: number | null = null;

const syncRouteLoaderClasses = (className: string, isActive: boolean) => {
  const method = isActive ? 'add' : 'remove';
  document.documentElement.classList[method](className);
  document.body.classList[method](className);
};

export const showRouteLoader = () => {
  if (hideTimeoutId) {
    window.clearTimeout(hideTimeoutId);
    hideTimeoutId = null;
  }

  if (cleanupTimeoutId) {
    window.clearTimeout(cleanupTimeoutId);
    cleanupTimeoutId = null;
  }

  visibleSince = Date.now();
  syncRouteLoaderClasses(ROUTE_LOADING_OUT_CLASS, false);
  syncRouteLoaderClasses(ROUTE_LOADING_CLASS, true);
};

export const hideRouteLoader = (minimumVisibleMs = 0) => {
  if (!visibleSince) {
    syncRouteLoaderClasses(ROUTE_LOADING_CLASS, false);
    syncRouteLoaderClasses(ROUTE_LOADING_OUT_CLASS, false);
    return;
  }

  if (hideTimeoutId) {
    window.clearTimeout(hideTimeoutId);
  }

  if (cleanupTimeoutId) {
    window.clearTimeout(cleanupTimeoutId);
    cleanupTimeoutId = null;
  }

  const elapsed = Date.now() - visibleSince;
  const remainingDelay = Math.max(minimumVisibleMs - elapsed, 0);

  hideTimeoutId = window.setTimeout(() => {
    syncRouteLoaderClasses(ROUTE_LOADING_CLASS, false);
    syncRouteLoaderClasses(ROUTE_LOADING_OUT_CLASS, true);

    cleanupTimeoutId = window.setTimeout(() => {
      syncRouteLoaderClasses(ROUTE_LOADING_OUT_CLASS, false);
      visibleSince = 0;
      cleanupTimeoutId = null;
    }, ROUTE_LOADER_OUT_DURATION);

    hideTimeoutId = null;
  }, remainingDelay);
};

export const triggerRouteLoader = () => {
  showRouteLoader();
  window.dispatchEvent(new Event(ROUTE_LOADER_START_EVENT));
};

export const routeLoaderStartEvent = ROUTE_LOADER_START_EVENT;
