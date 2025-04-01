import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';
import createGallery from './render-functions';
import { clearGallery } from './render-functions';
import { hideLoader } from './render-functions';
import { hideLoadMoreButton } from './render-functions';

const myApiKey = '49502149-61d0264429aca11602d0077d5';
export const per_page = 15;

const getImagesByQuery = async (query, page) => {
  try {
    const images = await axios.get(
      `https://pixabay.com/api/?key=${myApiKey}&q=${encodeURIComponent(
        query
      )}&image_type=photo&per_page=${per_page}&page=${page}`
    );
    createGallery(images, page + 1);
  } catch (error) {
    hideLoader();
    clearGallery();
    hideLoadMoreButton();
    iziToast.error({
      message: `${error}`,
      backgroundColor: '#EF4040',
      close: true,
      position: 'topRight',
    });
  }
};

export default getImagesByQuery;
