const pictureVisabilityHandler = (evt) => {
  const picture = document.querySelector('.intro__picture');
  if (!picture || evt.target.closest('.header__logo')) {
    return;
  }
  const screen = picture.closest('.screen--active');
  const breakpoint = window.matchMedia('(max-width: 919px)');
  if (screen && breakpoint.matches) {
    picture.classList.toggle('intro__picture--tablet-active');
  }
};

const initPicture = () => {
  document.addEventListener('click', pictureVisabilityHandler);
};

export {initPicture};
