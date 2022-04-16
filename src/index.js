let options = {};

function init(settings) {
  options = Object.assign(options, settings);

  /*
   * IntersectionObserver if not supported
   */
  if (
    !('IntersectionObserver' in window) ||
    !('IntersectionObserverEntry' in window) ||
    !('intersectionRatio' in window.IntersectionObserverEntry.prototype) ||
    !('isIntersecting' in window.IntersectionObserverEntry.prototype)
  ) {
    console.warn('IntersectionObserver is not supported by your browser.');
    return;
  }

  const io = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('sa-animated');
          observer.unobserve(entry.target);
        } else {
          entry.target.classList.remove('sa-animated');
        }
      });
    },
    {
      threshold: 0,
      root: null,
      rootMargin: '0px',
    }
  );

  document.querySelectorAll('.sa-animation').forEach(element => io.observe(element));
}

init();

export default {
  init,
};