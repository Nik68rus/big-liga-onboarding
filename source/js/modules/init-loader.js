import {KeyCode} from '../const';

const keyPressHandler = (evt) => {
  const intro = document.querySelector('.intro');
  const loader = document.querySelector('.loader');
  evt.preventDefault();
  if (evt.key === KeyCode.ENTER && intro && loader) {
    loader.classList.remove('loader--active');
    loader.classList.remove('loader--loaded');
    setTimeout(() => {
      loader.classList.add('loader--hidden');
      intro.classList.add('screen--active');
    }, 700);
    document.removeEventListener('keyup', keyPressHandler);
  }
};

const loadingHandler = () => {
  const loader = document.querySelector('.loader');
  if (!loader) {
    return;
  }
  loader.classList.add('loader--loaded');
  document.addEventListener('keyup', keyPressHandler);
};

const initLoader = () => {
  window.addEventListener('load', loadingHandler);
};

export {initLoader};
