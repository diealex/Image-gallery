import axios from 'axios';
import renderFnc from './render-functions';

const myApiKey = '49502149-61d0264429aca11602d0077d5';
const serverRequest = searchWord => {
  axios
    .get(
      `https://pixabay.com/api/?key=${myApiKey}&q=${encodeURIComponent(
        searchWord
      )}&image_type=photo`
    )
    .then(response => {
      renderFnc(response);
    })
    .catch(error => {
      console.log(error);
    });
};

export default serverRequest;
