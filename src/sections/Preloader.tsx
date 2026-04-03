import { useEffect, useState } from 'react';
import { acquirePageScrollLock } from '../utils/scrollLock';

function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const debugEnabled = import.meta.env.DEV;
    const startedAt = performance.now();
    const holdMs = 320;
    const fadeMs = 160;
    const longTasks: Array<{
      startMs: number;
      durationMs: number;
      endMs: number;
      name: string;
    }> = [];
    let longTaskObserver: PerformanceObserver | null = null;

    const getNavigationSnapshot = () => {
      const navigationEntry = performance.getEntriesByType('navigation')[0] as
        | PerformanceNavigationTiming
        | undefined;

      return {
        domContentLoadedMs: navigationEntry
          ? Math.round(navigationEntry.domContentLoadedEventEnd)
          : null,
        loadEventMs: navigationEntry
          ? Math.round(navigationEntry.loadEventEnd)
          : null,
        responseEndMs: navigationEntry
          ? Math.round(navigationEntry.responseEnd)
          : null,
        readyState: document.readyState,
      };
    };

    const logDebugSummary = (phase: string) => {
      if (!debugEnabled) {
        return;
      }

      const elapsedMs = Math.round(performance.now() - startedAt);
      const totalBlockingMs = longTasks.reduce(
        (sum, task) => sum + Math.max(task.durationMs - 50, 0),
        0
      );
      const longestTaskMs = longTasks.length
        ? Math.max(...longTasks.map((task) => task.durationMs))
        : 0;
      const latestLongTaskEndMs = longTasks.length
        ? Math.max(...longTasks.map((task) => task.endMs))
        : null;

      console.debug('[preloader] summary', {
        phase,
        elapsedMs,
        expectedHoldMs: holdMs,
        fadeMs,
        longTaskCount: longTasks.length,
        totalBlockingMs: Math.round(totalBlockingMs),
        longestTaskMs,
        latestLongTaskEndMs,
        longTasks,
        ...getNavigationSnapshot(),
      });
    };

    if (debugEnabled) {
      console.debug('[preloader] mounted', {
        holdMs,
        fadeMs,
        ...getNavigationSnapshot(),
      });

      if (
        'PerformanceObserver' in window &&
        PerformanceObserver.supportedEntryTypes?.includes('longtask')
      ) {
        longTaskObserver = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            const task = {
              startMs: Math.round(entry.startTime - startedAt),
              durationMs: Math.round(entry.duration),
              endMs: Math.round(entry.startTime + entry.duration - startedAt),
              name: entry.name || 'longtask',
            };

            longTasks.push(task);
            console.debug('[preloader] longtask', task);
          });
        });

        longTaskObserver.observe({ type: 'longtask', buffered: true });
      }
    }

    const timer = setTimeout(() => {
      if (debugEnabled) {
        console.debug('[preloader] fade-out start', {
          elapsedMs: Math.round(performance.now() - startedAt),
        });
      }

      logDebugSummary('fade-out start');

      setIsFadingOut(true);

      setTimeout(() => {
        if (debugEnabled) {
          console.debug('[preloader] unmounted', {
            elapsedMs: Math.round(performance.now() - startedAt),
          });
        }

        logDebugSummary('unmounted');
        setIsLoading(false);
      }, fadeMs);
    }, holdMs);

    return () => {
      clearTimeout(timer);
      longTaskObserver?.disconnect();

      if (debugEnabled) {
        console.debug('[preloader] cleanup', {
          elapsedMs: Math.round(performance.now() - startedAt),
        });
      }
    };
  }, []);

  useEffect(() => {
    if (!isLoading) {
      return;
    }

    return acquirePageScrollLock();
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <div
      id="preloader"
      className={`preloader-overlay ${isFadingOut ? 'preloader-overlay--hidden' : ''}`}
    >
      <div className="route-loader__track">
        <span className="route-loader__bar" />
      </div>
    </div>
  );
}

export default Preloader;
