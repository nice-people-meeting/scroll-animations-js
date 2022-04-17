/**
 * @interface Options
 * delay: 0 ~ 3000 + 50
 * duration: 100 ~ 3000 + 50
 * intersectionObserverOptions:
 */
interface Options {
  delay?: number;
  duration?: number;
  intersectionObserverOptions?: IntersectionObserverOptions;
}

/**
 * @interface IntersectionObserverOptions
 * root : Element | Document | null;
 * rootMargin : top | right | bottom | left px
 * threshold : 0.00 ~ 1
 */

interface IntersectionObserverOptions {
  root?: Element | Document | null;
  rootMargin?: string;
  threshold?: number | number[];
}

let options: Options = {
  delay: 0,
  duration: 500,
  intersectionObserverOptions: { threshold: 0, root: null, rootMargin: '0px' },
};

function init(settings?: Options) {
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

  document.querySelector('body').setAttribute('sa-duration', options.duration.toString());
  document.querySelector('body').setAttribute('sa-delay', options.delay.toString());

  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('sa-animated');
        observer.unobserve(entry.target);
      } else {
        entry.target.classList.remove('sa-animated');
      }
    });
  }, options.intersectionObserverOptions);

  document.querySelectorAll('.sa-animation').forEach(element => io.observe(element));
}

export default {
  init,
};
