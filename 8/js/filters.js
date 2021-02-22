const filterForm = document.querySelector('.map__filters');
const selectsFilter = filterForm.querySelectorAll('select');
const featuresFilter = filterForm.querySelector('#housing-features');

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

export {activateFilter};
