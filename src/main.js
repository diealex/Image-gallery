import serverRequest from './js/pixabay-api';

let searchWord = '';
const form = document.querySelector('.form');
form.addEventListener('submit', evt => {
  evt.preventDefault();
  searchWord = form.elements.searchText.value;
  document.querySelector('.loader').style.display = 'flex';
  form.reset();
  serverRequest(searchWord);
});
