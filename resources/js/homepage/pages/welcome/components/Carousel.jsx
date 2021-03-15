const slider = function () {
    const btnLeft = document.querySelector('.slider__btn--left');
    const btnRight = document.querySelector('.slider__btn--right');
    const dotContainer = document.querySelector('.dots');
    const slides = document.querySelectorAll('.slide');
    let curSlide = 0;
    const maxSlide = slides.length - 1;
    let minSlide = 0;
    // Function declarations
    const createDots = function () {
      slides.forEach(function (_, i) {
        dotContainer.insertAdjacentHTML(
          'beforeend',
          `<button class="dots__dot" data-slide="${i}"></button>`
        );
      });
    };
    const activateDot = function (slide) {
      document
        .querySelectorAll('.dots__dot')
        .forEach(dot => dot.classList.remove('dots__dot--active'));
      document
        .querySelector(`.dots__dot[data-slide="${slide}"]`)
        .classList.add('dots__dot--active');
    };
    const goToSlide = function (slide) {
      slides.forEach(
        (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
      );
    };
    const nextSlide = function () {
      curSlide === maxSlide ? (curSlide = 0) : curSlide++;
      goToSlide(curSlide);
      activateDot(curSlide);
    };
    const previousSlide = function () {
      curSlide === minSlide ? (curSlide = maxSlide) : curSlide--;
      goToSlide(curSlide);
      activateDot(curSlide);
    };
    const init = function () {
      goToSlide(0);
      createDots();
      activateDot(0);
    };
    //initialization
    init();