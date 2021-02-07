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


const randomInteger  = (min, max) => {
  if (min > max) {
    throw new Error('Неверно указан числовой диапазон');
  }
  const random = min - 0.5 + Math.random() * (max + 1 - min);
  return Math.round(random);
};


const randomFloatNumber = (min, max, floatPoint) => {
  if (min > max) {
    throw new Error('Неверно указан числовой диапазон');
  }
  const randomFloat = Math.random() * (max - min) + min;
  return randomFloat.toFixed(floatPoint);
};

const randomArrayElement = (element) => {
  return  element[Math.floor(Math.random() * element.length)];
};

const randomArrayLength = (array) => {
  const newArrey = [];

  for (let i = 0; i < randomInteger(1, array.length); i++) {
    newArrey.push(array[i]);
  }
  return newArrey;
};

const getOffer = () => {
  const xСoordinate = randomFloatNumber(35.65000, 35.70000, 5);
  const yСoordinate = randomFloatNumber(139.70000, 139.80000, 5);

  return {
    author: {
      avatar: 'img/avatars/user0' + randomInteger(1, 8) + '.png',
    },

    offer: {
      title: randomArrayElement(TITLE),
      address: xСoordinate + ', ' + yСoordinate,
      price: randomInteger(500, 10000),
      type: randomArrayElement(TYPE),
      rooms: randomInteger(1, 10),
      guests: randomInteger(1, 10),
      checkin: randomArrayElement(CHECKIN),
      checkout: randomArrayElement(CHECKOUT),
      features: randomArrayLength(FEATURES),
      description: randomArrayElement(DESCRIPTION),
      photos: randomArrayLength(PHOTOS),
    },

    location: {
      x: xСoordinate,
      y: yСoordinate,
    },
  };
};

const createOffer = new Array(10).fill(null).map(getOffer);

createOffer;
