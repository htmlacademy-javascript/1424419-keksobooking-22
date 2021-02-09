'use strict';

const TITLE = [
  'Уютная квартира в центре Токио',
  'Просторная квартира для вашей семьи',
  'Апартаменты рядом с метро',
  'Квартира от застройщика в спальном районе Токио',
];

const TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
];

const CHECKIN = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECKOUT = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const DESCRIPTION = [
  'Квартира в тихом районе с прекрасным видом из окна',
  'Магазин в шаговой доступности',
  'Квартира оборудована кондиционерами и теплым полом',
  'Все комнаты выполнены в традиционном японском стиле',
];

const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

const AvatarNumber = {
  MIN: 1,
  MAX: 8,
};

const PriceRange = {
  MIN: 500,
  MAX: 10000,
};

const RoomsRange = {
  MIN: 1,
  MAX: 10,
};

const GuestsQuantity = {
  MIN: 1,
  MAX: 10,
};

const XСoordinates = {
  MIN: 35.65000,
  MAX: 35.70000,
};

const YСoordinates = {
  MIN: 139.70000,
  MAX: 139.80000,
};

const СOORDINATE_FLOAT_POINT = 5;

const getRandomInteger  = (min, max) => {
  if (min > max) {
    throw new Error('Неверно указан числовой диапазон');
  }
  const random = min - 0.5 + Math.random() * (max + 1 - min);
  return Math.round(random);
};


const getRandomFloatNumber = (min, max, floatPoint) => {
  if (min > max) {
    throw new Error('Неверно указан числовой диапазон');
  }
  const randomFloat = Math.random() * (max - min) + min;
  return randomFloat.toFixed(floatPoint);
};

const getRandomArrayElement = (element) => element[Math.floor(Math.random() * element.length)];

const getRandomArrayLength = (array) => {
  const newArray = [];

  for (let i = 0; i < getRandomInteger(1, array.length); i++) {
    newArray.push(array[i]);
  }
  return newArray;
};

const getOffer = () => {
  const xСoordinate = getRandomFloatNumber(XСoordinates.MIN, XСoordinates.MAX, СOORDINATE_FLOAT_POINT);
  const yСoordinate = getRandomFloatNumber(YСoordinates.MIN, YСoordinates.MAX, СOORDINATE_FLOAT_POINT);

  return {
    author: {
      avatar: `img/avatars/user0${getRandomInteger(AvatarNumber.MIN, AvatarNumber.MAX)}.png`,
    },

    offer: {
      title: getRandomArrayElement(TITLE),
      address: `${xСoordinate}, ${yСoordinate}`,
      price: getRandomInteger(PriceRange.MIN, PriceRange.MAX),
      type: getRandomArrayElement(TYPE),
      rooms: getRandomInteger(RoomsRange.MIN, RoomsRange.MAX),
      guests: getRandomInteger(GuestsQuantity.MIN, GuestsQuantity.MAX),
      checkin: getRandomArrayElement(CHECKIN),
      checkout: getRandomArrayElement(CHECKOUT),
      features: getRandomArrayLength(FEATURES),
      description: getRandomArrayElement(DESCRIPTION),
      photos: getRandomArrayLength(PHOTOS),
    },

    location: {
      x: xСoordinate,
      y: yСoordinate,
    },
  };
};

const createOffer = new Array(10).fill(null).map(getOffer);

createOffer;
