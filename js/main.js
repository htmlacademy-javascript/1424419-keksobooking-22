import './util.js';
import './data.js';
import './card.js';
import './form.js';
import './filters.js';
import './map.js';
import './api.js';
import './popup.js';
import {resetMapCondition, renderOffersOnMap} from './map.js';
import {getData} from './api.js';

getData((offers) =>{
  renderOffersOnMap(offers);
});

const resetMap = () => {
  resetMapCondition();
};

export {resetMap};
