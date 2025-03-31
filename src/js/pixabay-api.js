import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';
import renderFnc from './render-functions';

const myApiKey = '49502149-61d0264429aca11602d0077d5';
export const per_page = 15;

const serverRequest = async (searchWord, page) => {
  try {
    const response = await axios.get(
      `https://pixabay.com/api/?key=${myApiKey}&q=${encodeURIComponent(
        searchWord
      )}&image_type=photo&per_page=${per_page}&page=${page}`
    );
    renderFnc(response, page + 1);
  } catch (error) {
    document.querySelector('.loader').style.display = 'none';
    document.querySelector('.gallery').innerHTML = '';
    document.querySelector('.loadMoreBtn').style.display = 'none';
    iziToast.error({
      message: `${error}`,
      backgroundColor: '#EF4040',
      close: true,
      position: 'topRight',
    });
  }
};

export default serverRequest;

// const fetchPostsBtn = document.querySelector('.btn');
// const postList = document.querySelector('.posts');

// let page = 1;
// let perPage = 10;

// fetchPostsBtn.addEventListener('click', async () => {
//   try {
//     const posts = await fetchPosts();
//     renderPosts(posts);
//     page += 1;

//     if (page > 1) {
//       fetchPostsBtn.textContent = 'Fetch more posts';
//     }
//   } catch (error) {
//     console.log(error);
//   }
// });

// async function fetchPosts() {
//   const params = new URLSearchParams({
//     _limit: perPage,
//     _page: page,
//   });

//   const response = await axios.get(
//     `https://jsonplaceholder.typicode.com/posts?${params}`
//   );
//   return response.data;
// }

// function renderPosts(posts) {
//   const markup = posts
//     .map(({ id, title, body, userId }) => {
//       return `<li>
//           <h2 class="post-title">${title.slice(0, 30)}</h2>
//           <p><b>Post id</b>: ${id}</p>
//           <p><b>Author id</b>: ${userId}</p>
//           <p class="post-body">${body}</p>
//         </li>`;
//     })
//     .join('');
//   postList.insertAdjacentHTML('beforeend', markup);
// }
