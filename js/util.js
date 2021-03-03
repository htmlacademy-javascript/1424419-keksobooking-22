const ALERT_SHOW_TIME = 3500;

//Целое число из диапазона
const getRandomInteger  = (min, max) => {
  if (min > max) {
    throw new Error('Неверно указан числовой диапазон');
  }
  const random = min - 0.5 + Math.random() * (max + 1 - min);
  return Math.round(random);
};

//Число с плаваюзей точкой из диапазона
const getRandomFloatNumber = (min, max, floatPoint) => {
  if (min > max) {
    throw new Error('Неверно указан числовой диапазон');
  }
  const randomFloat = Math.random() * (max - min) + min;
  return randomFloat.toFixed(floatPoint);
};

//Случайный элемент из массива
const getRandomArrayElement = (element) => element[Math.floor(Math.random() * element.length)];

//Массив случайной длины
const getRandomArrayLength = (array) => {
  const newArray = [];

  for (let i = 0; i < getRandomInteger(1, array.length); i++) {
    newArray.push(array[i]);
  }
  return newArray;
};

const showAlert = () => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'fixed';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '35px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = '#ff4040';

  alertContainer.textContent = 'Ошибка загрузки данных. Попробуйте ещё раз';

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export {getRandomInteger, getRandomFloatNumber, getRandomArrayElement, getRandomArrayLength, showAlert};
