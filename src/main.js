import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import serverRequest from './js/pixabay-api';

let searchWord = '';
let page;
const form = document.querySelector('.form');
const moreBtn = document.querySelector('.loadMoreBtn');
form.addEventListener('submit', evt => {
  page = 1;
  evt.preventDefault();
  document.querySelector('.gallery').innerHTML = '';
  document.querySelector('.loadMoreBtn').style.display = 'none';
  searchWord = form.elements.searchText.value;
  document.querySelector('.loader').style.display = 'flex';
  form.reset();
  serverRequest(searchWord, page);
  page += 1;
});

moreBtn.addEventListener('click', evt => {
  moreBtn.style.display = 'none';
  document.querySelector('.loader').style.display = 'flex';
  serverRequest(searchWord, page);
  page += 1;
});
