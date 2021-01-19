import {KeyCode, Event} from '../const';
const breakpoint = window.matchMedia('(max-width: 919px)');

const loaderRemoveHandler = (evt) => {
  const intro = document.querySelector('.intro');
  const loader = document.querySelector('.loader');
  if (!intro || !loader) {
    return;
  }
  evt.preventDefault();
  if ((evt.type === Event.KEYUP && evt.key === KeyCode.ENTER) || evt.type === Event.CLICK) {
    loader.classList.remove('loader--active');
    loader.classList.remove('loader--loaded');
    setTimeout(() => {
      loader.classList.add('loader--hidden');
      intro.classList.add('screen--active');
    }, 700);
    if (evt.type === Event.KEYUP) {
      document.removeEventListener('keyup', loaderRemoveHandler);
    } else {
      document.removeEventListener('click', loaderRemoveHandler);
    }
  }
};

const loadingHandler = () => {
  const loader = document.querySelector('.loader');
  if (!loader) {
    return;
  }
  loader.classList.add('loader--loaded');
  if (breakpoint.matches) {
    document.addEventListener('click', loaderRemoveHandler);
  } else {
    document.addEventListener('keyup', loaderRemoveHandler);
  }
};

const initLoader = () => {
  window.addEventListener('load', loadingHandler);
};

export {initLoader};
