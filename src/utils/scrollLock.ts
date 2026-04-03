let activeLocks = 0;

const LOCK_CLASS = 'page-scroll-locked';

const syncScrollLockClass = () => {
  const method = activeLocks > 0 ? 'add' : 'remove';
  document.documentElement.classList[method](LOCK_CLASS);
  document.body.classList[method](LOCK_CLASS);
};

export const acquirePageScrollLock = () => {
  activeLocks += 1;
  syncScrollLockClass();

  return () => {
    activeLocks = Math.max(activeLocks - 1, 0);
    syncScrollLockClass();
  };
};
