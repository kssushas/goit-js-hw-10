import { fetchBreeds, fetchCatByBreed } from './cat-api';
export let select = document.querySelector('.breed-select');
export const catInfo = document.querySelector('.cat-info');
export const loader = document.querySelector('.loader');
export const error = document.querySelector('.error');
loader.style.display = 'none';
error.style.display = 'none';

select.addEventListener('change', fetchCatByBreed);

fetchBreeds().then(data => {
  let arrayId = [];
  for (let id of data) {
    arrayId.push(id.id);
  }
  const marcupId = createSelectMarkup(arrayId);
  select.insertAdjacentHTML('beforeend', marcupId);
});

function createSelectMarkup(catId) {
  return catId
    .map(id => {
      return `<option value=${id}>${id}</option>`;
    })
    .join(' ');
}

export function createMarkup(params) {
  catInfo.style.display = 'block';
  catInfo.classList.add('border');
  let catInformation = `<h2>${params[0].breeds[0].name}</h2><div class="block"><img src=${params[0].url} alt="cat"><div"><p>${params[0].breeds[0].description}</p><p class="temperament"><strong>Temperament: </strong>${params[0].breeds[0].temperament}</p></div></div>`;
  catInfo.innerHTML = catInformation;
  loader.style.display = 'none';
}
