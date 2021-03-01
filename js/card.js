import {createOffer} from './data.js';

const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

const similarCard = createOffer();

const HOUSE_TYPE = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец ',
};

/*const generateCards = (similarCard) => {
  similarCard.forEach(({author, offer, location}) => {
    const cardElement = generateCard(author, offer);
  });
};*/

const generateCard = ({author, offer}) => {
  const cardElement = cardTemplate.cloneNode(true);

  cardElement.querySelector('.popup__title').textContent = offer.title;
  cardElement.querySelector('.popup__text--address').textContent = offer.address;
  cardElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  cardElement.querySelector('.popup__type').textContent = HOUSE_TYPE[offer.type];
  cardElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  cardElement.querySelector('.popup__description').textContent = offer.description;
  cardElement.querySelector('.popup__avatar');
  cardElement.querySelector('img').src = author.avatar;

  const availableFeaturesList = cardElement.querySelector('.popup__features');
  availableFeaturesList.innerHTML = null;
  offer.features.forEach(feature => {
    availableFeaturesList.insertAdjacentHTML('beforeend', `<li class="popup__feature popup__feature--${feature}"></li>`)
  });

  const photoList = cardElement.querySelector('.popup__photos');
  photoList.innerHTML = null;
  offer.photos.forEach(photo => {
    photoList.insertAdjacentHTML('beforeend', `<img src="${photo}" class="popup__photo" width="45" height="40" alt="Фотография жилья">`)
  });

  return cardElement;
};

const generateCards = similarCard.map(generateCard);
const generateCardsFragment = document.createDocumentFragment();
generateCardsFragment.appendChild(generateCards[0]);

/*const clearGenerateCard = () => {
  cardTemplate.innerHTML = '';
};*/

export {similarCard, generateCard};
