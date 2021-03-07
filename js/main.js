import './util.js';
import './data.js';
import './card.js';
import './form.js';
import './filters.js';
import './map.js';
import './api.js';
import './popup.js';
import {resetMapCondition, renderOffersOnMap, clearMarkers} from './map.js';
import {getData} from './api.js';
import {setChangeFilter, setResetFilter} from './filters.js';

getData((offers) =>{
  renderOffersOnMap(offers);
  setChangeFilter(() => {
    clearMarkers();
    renderOffersOnMap(offers);
  });
  setResetFilter(() => renderOffersOnMap(offers));
});

const resetMap = () => {
  resetMapCondition();
};

export {resetMap};
