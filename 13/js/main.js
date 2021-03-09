/* global _:readonly */
import './util.js';
import './data.js';
import './card.js';
import './form.js';
import './filters.js';
import './map.js';
import './api.js';
import './popup.js';
import {resetMapCondition, renderOffersOnMap, removeMarkers} from './map.js';
import {getData} from './api.js';
import {setChangeFilter, setResetFilter} from './filters.js';

const RERENDER_DELAY = 500;

getData((offers) =>{
  renderOffersOnMap(offers);
  setChangeFilter(_.debounce(() => {
    removeMarkers();
    renderOffersOnMap(offers);
  }, RERENDER_DELAY));
  setResetFilter(() => renderOffersOnMap(offers));
});

const resetMap = () => {
  resetMapCondition();
};

export {resetMap};

