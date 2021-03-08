import {resetButton} from './form.js'

const filterForm = document.querySelector('.map__filters');
const selectsFilter = filterForm.querySelectorAll('select');
const featuresFilter = filterForm.querySelector('#housing-features');
const housingType = filterForm.querySelector('#housing-type');
const housingPrice = filterForm.querySelector('#housing-price');
const housingRooms = filterForm.querySelector('#housing-rooms');
const housingGuests = filterForm.querySelector('#housing-guests');

const DEFAULT_VALUE = 'any';

const PriceValue = {
  LOW: 10000,
  HIGH: 50000,
};

const filterByType = ({offer: {type}}) => {
  return housingType.value === DEFAULT_VALUE || housingType.value === type;
};

const filterByRooms = ({offer: {rooms}}) => {
  return housingRooms.value === DEFAULT_VALUE || Number(housingRooms.value) === rooms;
};

const filterByGuests = ({offer: {guests}}) => {
  return housingGuests.value === DEFAULT_VALUE || Number(housingGuests.value) === guests;
};

const filterByPrice = ({offer: {price}}) => {
  switch (housingPrice.value) {
    case DEFAULT_VALUE:
      return true;
    case 'middle':
      return price >= PriceValue.LOW && price <= PriceValue.HIGH;
    case 'low':
      return price < PriceValue.LOW;
    case 'high':
      return price >= PriceValue.HIGH;
  }
};

const filterByFeatures = ({offer: {features}}) => {
  const checkedFeatures = featuresFilter.querySelectorAll('input:checked');

  return Array.from(checkedFeatures).every((feature) => {
    return features.includes(feature.value);
  });
};

const filterOffers = (offer) => {
  return (
    filterByType(offer) &&
    filterByRooms(offer) &&
    filterByGuests(offer) &&
    filterByPrice(offer) &&
    filterByFeatures(offer)
  );
};

const setResetFilter = (cb) => {
  resetButton.addEventListener('click', () => cb());
};

const setChangeFilter = (cb) => {
  filterForm.addEventListener('change', () => cb());
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

export { activateFilter, filterForm, setResetFilter, setChangeFilter, filterOffers };
