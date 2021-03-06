const filterForm = document.querySelector('.map__filters');
const selectsFilter = filterForm.querySelectorAll('select');
const featuresFilter = filterForm.querySelector('#housing-features');
const housingType = filterForm.querySelector('#housing-type');
const housingPrice = filterForm.querySelector('#housing-price');
const housingRooms = filterForm.querySelector('#housing-rooms');
const housingGuests = filterForm.querySelector('#housing-guests');

const DEFAULT_VALUE = 'any';

const PriceValue = {
  LOW_PRICE: 10000,
  HIGH_PRICE: 50000,
};

const filterByType = (data) => {
  return  housingType.value === DEFAULT_VALUE || housingType.value === data.offer.type;
};

const filterByRooms = (data) => {
  return  housingRooms.value === DEFAULT_VALUE || Number(housingRooms.value) === data.offer.rooms;
};
const filterByGuests = (data) => {
  return  housingGuests.value === DEFAULT_VALUE || Number(housingGuests.value) === data.offer.guests;
};

const filterByPrice = (data) => {
  switch (housingPrice.value) {
    case DEFAULT_VALUE:
      return data;
    case 'middle':
      return data.offer.price >= PriceValue.LOW_PRICE && data.offer.price <= PriceValue.HIGH_PRICE;
    case 'low':
      return  data.offer.price < PriceValue.LOW_PRICE;
    case 'high':
      return data.offer.price >= PriceValue.HIGH_PRICE;
  }
};

const filterByFeatures = (data) => {
  let result = true;

  const features = featuresFilter.querySelectorAll('input:checked');

  features.forEach((feature) => {
    if (data.offer.features.indexOf(feature.value) === -1) {
      result = false;
    }
  });

  return result;
};

const filterOffers = (data) => {

  return (
    filterByType(data) &&
    filterByRooms(data) &&
    filterByGuests(data) &&
    filterByPrice(data) &&
    filterByFeatures(data)
  )
};

const setResetFilter = (cb) => {
  filterForm.addEventListener('reset', () => {
    cb();
  });
};

const setChangeFilter = (cb) => {
  filterForm.addEventListener('change', () => {
    cb()
  });
};

const disableFilter = () => {
  filterForm.classList.add('map__filters--disabled');
  featuresFilter.disabled = true;
  for (let select of selectsFilter) {
    select.disabled = true;
  }
};

disableFilter();

const activateFilter = () => {
  filterForm.classList.remove('map__filters--disabled');
  featuresFilter.disabled = false;
  for (let select of selectsFilter) {
    select.disabled = false;
  }
};

export {activateFilter, filterForm, setResetFilter, setChangeFilter, filterOffers};
