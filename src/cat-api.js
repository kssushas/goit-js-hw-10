import axios from 'axios';
import { createMarkup, select, loader, catInfo, error } from './index';
axios.defaults.headers.common['x-api-key'] =
  'live_h8dxyoqDgTGgp2bRSQVVWLIvSZ2rl9IB0IOgM64aKFBvSE7i9RByU20Ca4XRc859';
const BASE_URL = 'https://api.thecatapi.com/v1/breeds';

export function fetchBreeds() {
  return axios
    .get(`${BASE_URL}`)
    .then(response => {
      return response.data;
    })
    .catch(er => {
      error.style.display = 'block';
    });
}

export function fetchCatByBreed() {
  loader.style.display = 'block';
  catInfo.style.display = 'none';
  error.style.display = 'none';

  return axios
    .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${select.value}`)
    .then(response => {
      createMarkup(response.data);
      return response.data;
    })
    .catch(er => {
      error.style.display = 'block';
      loader.style.display = 'none';
      catInfo.style.display = 'none';
    });
}
