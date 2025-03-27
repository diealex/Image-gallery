import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const renderFnc = response => {
  document.querySelector('.loader').style.display = 'none';
  if (parseInt(response.data.totalHits) > 0) {
    const html = response.data.hits
      .map(
        hit => `<li class="gallery-item"><a href="${hit.largeImageURL}" class="gallery-img"><img src="${hit.webformatURL}" alt="${hit.tags}"></a>
            <div class="legend">
  <div class="field">
    <span class="label">Likes</span>
    <span class="value">${hit.likes}</span>
  </div>
  <div class="field">
    <span class="label">Views</span>
    <span class="value">${hit.views}</span>
  </div>
  <div class="field">
    <span class="label">Comments</span>
    <span class="value">${hit.comments}</span>
  </div>
  <div class="field">
    <span class="label">Downloads</span>
    <span class="value">${hit.downloads}</span>
  </div>
</div></li>`
      )
      .join('');
    document.querySelector('.gallery').innerHTML = html;
    let gallery = new SimpleLightbox('.gallery-item a', {
      captionsData: 'alt',
      captionDelay: 250,
    });
    gallery.on('show.simplelightbox', function () {});
    gallery.refresh();
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
  }
};

export default renderFnc;
