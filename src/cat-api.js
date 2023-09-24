import axios from 'axios';
axios.defaults.headers.common['x-api-key'] =
  'live_h8dxyoqDgTGgp2bRSQVVWLIvSZ2rl9IB0IOgM64aKFBvSE7i9RByU20Ca4XRc859';
const BASE_URL = 'https://api.thecatapi.com/v1';

export function fetchBreeds() {
  return axios.get(`${BASE_URL}/breeds`).then(response => {
    return response.data;
  });
}

export function fetchCatByBreed(e) {
  return axios
    .get(`${BASE_URL}/images/search?breed_ids=${e}`)
    .then(response => {
      return response.data;
    });
}
