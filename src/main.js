import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import getImagesByQuery from './js/pixabay-api';
import { clearGallery } from './js/render-functions';
import { hideLoadMoreButton } from './js/render-functions';
import { showLoader } from './js/render-functions';

let query = '';
let page;
const form = document.querySelector('.form');
const moreBtn = document.querySelector('.loadMoreBtn');
form.addEventListener('submit', evt => {
  evt.preventDefault();
  page = 1;
  clearGallery();
  hideLoadMoreButton();
  query = form.elements.searchText.value.trim();
  if (!query) {
    iziToast.error({
      message: 'Please fill out the field',
      backgroundColor: '#EF4040',
      close: true,
      position: 'topRight',
    });
    return;
  }
  showLoader();
  form.reset();
  getImagesByQuery(query, page);
  page += 1;
});
moreBtn.addEventListener('click', evt => {
  hideLoadMoreButton();
  showLoader();
  getImagesByQuery(query, page);
  page += 1;
});
