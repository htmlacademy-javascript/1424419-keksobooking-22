import './util.js';
import './data.js';
import './card.js';
import './form.js';
import './filters.js';
import './map.js';
import './api.js';
import './popup.js';
import {resetMapCondition} from './map.js';
// /*import {getData} from './api.js';
// import {generateCards} from './card.js'
//
// getData((createOffers) =>{
//   generateCards(createOffers);
// });*/

const resetMap = () => {
  resetMapCondition();
};

export {resetMap};
