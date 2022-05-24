export const useClearNotify = (func, ttl = 5000) => {
  let timeoutId;
  clearTimeout(timeoutId);
  timeoutId = setTimeout(() => {
    func();
  }, ttl);
};
