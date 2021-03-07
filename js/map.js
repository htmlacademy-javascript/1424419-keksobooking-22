import {activateFilter, filterOffers} from './filters.js';
import {activateForm, address, validatePrice, validateCheckIn} from './form.js';
import {generateCard} from './card.js';

const COORDINATES = {
  lat: 35.65841,
  lng: 139.78145,
};

const ZOOM = 12;

const OFFERS_COUNT = 10;

const setDefaultAddress = () => {
  address.value = `${COORDINATES.lat}, ${COORDINATES.lng}`
};

/* global L:readonly */
let markers = [];
const map = L.map('map-canvas')
  .on('load', () => {
    activateFilter();
    activateForm();
    validatePrice(),
    validateCheckIn(),
    setDefaultAddress();
  })
  .setView({
    lat: COORDINATES.lat,
    lng: COORDINATES.lng,
  }, ZOOM);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinMarker = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const mainMarker = L.marker(
  {
    lat: COORDINATES.lat,
    lng: COORDINATES.lng,
  },
  {
    draggable: true,
    icon: mainPinMarker,
  },
);

mainMarker.addTo(map);

mainMarker.on('moveend', (evt) => {
  address.value = `${evt.target.getLatLng().lat.toFixed(5)}, ${evt.target.getLatLng().lng.toFixed(5)}`;
});

const anotherPin = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const renderOffersOnMap = (offers) => {
  offers
    .slice()
    .filter(filterOffers)
    .slice(0, OFFERS_COUNT)
    .forEach((offer) => {

      const anotherMarker = L.marker(
        {
          lat: offer.location.lat,
          lng: offer.location.lng,
        },
        {
          icon: anotherPin,
        },
      );

      anotherMarker
        .addTo(map)
        .bindPopup(generateCard(offer));

      markers.push(anotherMarker);
    });
};

const clearMarkers = () => {
  markers.forEach((marker) => {
    map.removeLayer(marker);
  });

  markers = [];
}

const resetMapCondition = () => {
  map.setView(COORDINATES, ZOOM);
  mainMarker.setLatLng(COORDINATES);
  setDefaultAddress();
};

export {resetMapCondition, renderOffersOnMap, clearMarkers};
