import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { per_page } from './pixabay-api';
const gap = 24;
let gallery = new SimpleLightbox('.gallery-item a', {
  captionsData: 'alt',
  captionDelay: 250,
});

const createGallery = (images, page) => {
  if (parseInt(images.data.totalHits) > 0) {
    const html = images.data.hits
      .map(
        ({
          largeImageURL,
          webformatURL,
          tags,
          likes,
          views,
          comments,
          downloads,
        }) => {
          return `<li class="gallery-item"><a href="${largeImageURL}"><img class="gallery-img" src="${webformatURL}" alt="${tags}"></a>
            <div class="legend">
  <div class="field">
    <span class="label">Likes</span>
    <span class="value">${likes}</span>
  </div>
  <div class="field">
    <span class="label">Views</span>
    <span class="value">${views}</span>
  </div>
  <div class="field">
    <span class="label">Comments</span>
    <span class="value">${comments}</span>
  </div>
  <div class="field">
    <span class="label">Downloads</span>
    <span class="value">${downloads}</span>
  </div>
</div></li>`;
        }
      )
      .join('');
    document.querySelector('.gallery').insertAdjacentHTML('beforeend', html);
    gallery.refresh();
    hideLoader();
    if (page > 2) {
      offSet();
    }
    if (page > Math.ceil(parseInt(images.data.totalHits) / per_page)) {
      hideLoadMoreButton();
      return iziToast.info({
        position: 'topRight',
        message: "We're sorry, but you've reached the end of search results.",
        backgroundColor: '#90CAF9',
        position: 'topRight',
      });
    } else showLoadMoreButton();
  } else {
    iziToast.show({
      title: 'Error',
      titleColor: '#FFFFFF',
      titleSize: '16px',
      titleLineHeight: '1.5',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      backgroundColor: '#EF4040',
      messageColor: '#FFFFFF',
      messageSize: '16px',
      messageLineHeight: '1.5',
      close: true,
      progressBar: true,
      progressBarColor: '#B51B1B',
      position: 'topRight',
    });
    clearGallery();
    hideLoadMoreButton();
    hideLoader();
  }
};

const offSet = () => {
  const galleryItem = document.querySelector('.gallery-item');
  window.scrollBy({
    top: 2 * (galleryItem.getBoundingClientRect().height + gap), // adding gaps
    behavior: 'smooth',
  });
};

export const clearGallery = () => {
  document.querySelector('.gallery').innerHTML = '';
};
export const hideLoader = () => {
  document.querySelector('.loader').style.display = 'none';
};
export const showLoader = () => {
  document.querySelector('.loader').style.display = 'flex';
};
export const showLoadMoreButton = () => {
  document.querySelector('.loadMoreBtn').style.display = 'flex';
};
export const hideLoadMoreButton = () => {
  document.querySelector('.loadMoreBtn').style.display = 'none';
};

export default createGallery;
