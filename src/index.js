import { fetchBreeds, fetchCatByBreed } from './cat-api';
const select = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');

loader.style.display = 'none';
error.style.display = 'none';

select.addEventListener('change', hendleClick);

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

function hendleClick(e) {
  loader.style.display = 'block';
  catInfo.style.display = 'none';
  error.style.display = 'none';

  fetchCatByBreed(e.target.value)
    .then(data => {
      createMarkup(data);
    })
    .catch(er => {
      error.style.display = 'block';
      loader.style.display = 'none';
      catInfo.style.display = 'none';
    });
}

function createMarkup(dataCat) {
  const data = dataCat[0].breeds[0];

  catInfo.style.display = 'block';
  catInfo.classList.add('border');

  catInfo.innerHTML = `<h2>${data.name}</h2>
  <div class="block"><img src=${dataCat[0].url} alt="cat">
  <div">
  <p>${data.description}</p>
  <p class="temperament"><strong>Temperament: </strong>${data.temperament}</p>
  </div>
  </div>`;
  loader.style.display = 'none';
}
