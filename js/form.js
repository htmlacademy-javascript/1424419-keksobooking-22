const MIN_HOUSE_PRICE = {
  bungalow: 0,
  flat: 1000,
  house: 5000,
  palace: 10000,
};

const ROOM_CAPACITY = {
  '1': ['1'],
  '2': ['1', '2'],
  '3': ['1', '2', '3'],
  '100': ['0'],
};

const adForm = document.querySelector('.ad-form');
const typeFlat = adForm.querySelector('#type');
const priceFlat = adForm.querySelector('#price');
const timeIn = adForm.querySelector('#timein');
const timeOut = adForm.querySelector('#timeout');
const fieldsets = adForm.querySelectorAll('fieldset');
const address = adForm.querySelector('#address');
const rooms = adForm.querySelector('#room_number');
const capacity = adForm.querySelector('#capacity');

const disableForm = () => {
  adForm.classList.add('ad-form--disabled');
  for (let fieldset of fieldsets) {
    fieldset.disabled = true;
  }
};

disableForm();

const activateForm =() => {
  adForm.classList.remove('ad-form--disabled');
  for (let fieldset of fieldsets) {
    fieldset.disabled = false;
  }
};

const validatePrice = () => {
  priceFlat.placeholder = MIN_HOUSE_PRICE[typeFlat.value];
  priceFlat.min = MIN_HOUSE_PRICE[typeFlat.value];
};

typeFlat.addEventListener('change', validatePrice);

const validateCheckIn = () => {
  timeIn.addEventListener('change', () => timeOut.value = timeIn.value);
  timeOut.addEventListener('change', () => timeIn.value = timeOut.value);
};

const validateCapacity = (peopleAmount) => {
  const capacityOptions = capacity.querySelectorAll('option');

  capacityOptions.forEach((option) => {
    option.disabled = true;
  });

  ROOM_CAPACITY[peopleAmount].forEach((seatsAmount) => {
    capacityOptions.forEach((option) => {
      if (option.value === seatsAmount) {
        option.disabled = false;
        option.selected = true;
      }
    });
  });
};

rooms.addEventListener('change', () => {
  validateCapacity(rooms.value);
});

validatePrice();
validateCheckIn();

export {activateForm, address};
