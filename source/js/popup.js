const main = document.querySelector('main');
const successPopup = document.querySelector('#success').content;
const newSuccessPopup = successPopup.querySelector('.success');

const errorPopup = document.querySelector('#error').content;
const newErrorPopup = errorPopup.querySelector('.error').cloneNode(true);
const closeErrorButton = newErrorPopup.querySelector('.error__button');

const onPopupKeyDown = (evt) => {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    evt.preventDefault();
    closePopup();
  }
};

const openSuccessPopup = () => {
  main.appendChild(newSuccessPopup);
  document.addEventListener('click', onPopupKeyDown);
};

const openErrorPopup = () => {
  main.appendChild(newErrorPopup);
  document.addEventListener('click', onPopupKeyDown);
};

const closePopup = () => {
  if (main.contains(newSuccessPopup)) {
    main.removeChild(newSuccessPopup);
  }

  if (main.contains(newErrorPopup)) {
    main.removeChild(newErrorPopup);
  }

  document.removeEventListener('keydown', onPopupKeyDown);
};

closeErrorButton.addEventListener('click', closePopup);

main.addEventListener('click', closePopup);

export {openSuccessPopup, openErrorPopup};
