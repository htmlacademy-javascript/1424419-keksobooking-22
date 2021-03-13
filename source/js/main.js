import './util.js';
import './card.js';
import './form.js';
import './filters.js';
import './map.js';
import './api.js';
import './popup.js';
import './pictures.js'
import 'leaflet/dist/leaflet.css';
import * as _ from 'lodash';
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

