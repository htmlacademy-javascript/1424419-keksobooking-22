const MIN_HOUSE_PRICE = {
  bungalow: 0,
  flat: 1000,
  house: 5000,
  palace: 10000,
};

const adForm = document.querySelector('.ad-form');
const typeFlat = adForm.querySelector('#type');
const priceFlat = adForm.querySelector('#price');
const timeIn = adForm.querySelector('#timein');
const timeOut = adForm.querySelector('#timeout');

const validatePrice = () => {
  priceFlat.placeholder = MIN_HOUSE_PRICE[typeFlat.value];
  priceFlat.min = MIN_HOUSE_PRICE[typeFlat.value];
  priceFlat.required = true;
};

typeFlat.addEventListener('change', validatePrice);

const validateCheckIn = () => {
  timeIn.addEventListener('change', () => timeOut.value = timeIn.value);
  timeOut.addEventListener('change', () => timeIn.value = timeOut.value);
};

validatePrice();
validateCheckIn();
