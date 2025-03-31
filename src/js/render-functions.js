import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { per_page } from './pixabay-api';

let gallery = new SimpleLightbox('.gallery-item a', {
  captionsData: 'alt',
  captionDelay: 250,
});

const renderFnc = (response, page) => {
  if (parseInt(response.data.totalHits) > 0) {
    const html = response.data.hits
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
          return `<li class="gallery-item"><a href="${largeImageURL}" class="gallery-img"><img src="${webformatURL}" alt="${tags}"></a>
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
    document.querySelector('.loader').style.display = 'none';
    if (page > Math.ceil(parseInt(response.data.totalHits) / per_page)) {
      document.querySelector('.loadMoreBtn').style.display = 'none';
      return iziToast.error({
        position: 'topRight',
        message: "We're sorry, but you've reached the end of search results.",
        backgroundColor: '#90CAF9',
        position: 'topRight',
      });
    } else document.querySelector('.loadMoreBtn').style.display = 'flex';
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
    document.querySelector('.gallery').innerHTML = '';
    document.querySelector('.loadMoreBtn').style.display = 'none';
    document.querySelector('.loader').style.display = 'none';
  }
};

export default renderFnc;
