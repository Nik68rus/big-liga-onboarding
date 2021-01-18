const KeyCode = {
  ENTER: 'Enter',
};

const loadingHandler = () => {
  const loader = document.querySelector('.loader');
  const intro = document.querySelector('.intro');
  if (!loader) {
    return;
  }
  loader.classList.add('loader--loaded');
  document.addEventListener('keyup', (evt) => {
    evt.preventDefault();
    if (evt.key === KeyCode.ENTER) {
      loader.classList.remove('loader--active');
      loader.classList.remove('loader--loaded');
      setTimeout(() => {
        loader.classList.add('loader--hidden');
        if (intro) {
          intro.classList.add('screen--active');
        }
      }, 700);
    }
  });
};

const initLoader = () => {
  window.addEventListener('load', loadingHandler);
};

export {initLoader};
