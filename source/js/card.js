const HOUSE_TYPE = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец ',
};

const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

const generateCard = ({author, offer}) => {
  const cardElement = cardTemplate.cloneNode(true);

  cardElement.querySelector('.popup__title').textContent = offer.title;

  const addressContainer = cardElement.querySelector('.popup__text--address');
  if (offer.address === null) {
    addressContainer.remove();
  } else {
    addressContainer.textContent = offer.address;
  }

  cardElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;


  const typeContainer = cardElement.querySelector('.popup__type');
  if (offer.type === null) {
    typeContainer.remove();
  } else {
    typeContainer.textContent = HOUSE_TYPE[offer.type];
  }

  const capacityContainer = cardElement.querySelector('.popup__text--capacity');
  if (offer.capacity === null || offer.guests === null) {
    capacityContainer.remove();
  } else {
    capacityContainer.textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  }

  const timeContainer = cardElement.querySelector('.popup__text--time');
  if (offer.checkin === null || offer.checkout === null) {
    timeContainer.remove();
  } else {
    timeContainer.textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  }

  const descriptionContainer = cardElement.querySelector('.popup__description');
  if (offer.description === null) {
    descriptionContainer.remove();
  } else {
    descriptionContainer.textContent = offer.description;
  }

  const avatarContainer = cardElement.querySelector('.popup__avatar');
  if (author.avatar === null) {
    avatarContainer.remove();
  } else {
    avatarContainer.src = author.avatar;
  }

  const availableFeaturesContainer = cardElement.querySelector('.popup__features');
  if (offer.features.length === 0) {
    availableFeaturesContainer.remove();
  } else {
    availableFeaturesContainer.innerHTML = null;
    offer.features.forEach(feature => {
      availableFeaturesContainer.insertAdjacentHTML('beforeend', `<li class="popup__feature popup__feature--${feature}"></li>`)
    });
  }

  const photoContainer = cardElement.querySelector('.popup__photos');
  if (offer.photos.length === 0) {
    photoContainer.remove();
  } else {
    photoContainer.innerHTML = null;
    offer.photos.forEach(photo => {
      photoContainer.insertAdjacentHTML('beforeend', `<img src="${photo}" class="popup__photo" width="45" height="40" alt="Фотография жилья">`)
    });
  }

  return cardElement;
};

export {generateCard};
