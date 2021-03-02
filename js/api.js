import {showAlert} from './util.js';

const RECEIVING_LINK = 'https://22.javascript.pages.academy/keksobooking/data';
const DEPARTURE_LINK = 'https://22.javascript.pages.academy/keksobooking';

const getData = (onSuccess) => {
  fetch(RECEIVING_LINK)
    .then((response) => response.json())
    .catch(showAlert)
    .then(onSuccess)
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    DEPARTURE_LINK,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

export {getData, sendData};
