import{S as b,i as d,a as F}from"./assets/vendor-BjRz3xa9.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const S=24;let B=new b(".gallery-item a",{captionsData:"alt",captionDelay:250});const q=(o,s)=>{if(parseInt(o.data.totalHits)>0){const r=o.data.hits.map(({largeImageURL:i,webformatURL:e,tags:t,likes:a,views:h,comments:v,downloads:L})=>`<li class="gallery-item"><a href="${i}"><img class="gallery-img" src="${e}" alt="${t}"></a>
            <div class="legend">
  <div class="field">
    <span class="label">Likes</span>
    <span class="value">${a}</span>
  </div>
  <div class="field">
    <span class="label">Views</span>
    <span class="value">${h}</span>
  </div>
  <div class="field">
    <span class="label">Comments</span>
    <span class="value">${v}</span>
  </div>
  <div class="field">
    <span class="label">Downloads</span>
    <span class="value">${L}</span>
  </div>
</div></li>`).join("");if(document.querySelector(".gallery").insertAdjacentHTML("beforeend",r),B.refresh(),p(),$(),s>Math.ceil(parseInt(o.data.totalHits)/g))return n(),d.info({position:"topRight",message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#90CAF9",position:"topRight"});w()}else d.show({title:"Error",titleColor:"#FFFFFF",titleSize:"16px",titleLineHeight:"1.5",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",messageColor:"#FFFFFF",messageSize:"16px",messageLineHeight:"1.5",close:!0,progressBar:!0,progressBarColor:"#B51B1B",position:"topRight"}),y(),n(),p()},$=()=>{const o=document.querySelector(".gallery-item");window.scrollBy({top:2*(o.getBoundingClientRect().height+S),behavior:"smooth"})},y=()=>{document.querySelector(".gallery").innerHTML=""},p=()=>{document.querySelector(".loader").style.display="none"},m=()=>{document.querySelector(".loader").style.display="flex"},w=()=>{document.querySelector(".loadMoreBtn").style.display="flex"},n=()=>{document.querySelector(".loadMoreBtn").style.display="none"},C="49502149-61d0264429aca11602d0077d5",g=15,f=async(o,s)=>{try{const r=await F.get(`https://pixabay.com/api/?key=${C}&q=${encodeURIComponent(o)}&image_type=photo&per_page=${g}&page=${s}`);q(r,s+1)}catch(r){p(),y(),n(),d.error({message:`${r}`,backgroundColor:"#EF4040",close:!0,position:"topRight"})}};let u="",l;const c=document.querySelector(".form"),M=document.querySelector(".loadMoreBtn");c.addEventListener("submit",o=>{o.preventDefault(),l=1,y(),n(),u=c.elements.searchText.value,m(),c.reset(),f(u,l),l+=1});M.addEventListener("click",o=>{n(),m(),f(u,l),l+=1});
//# sourceMappingURL=index.js.map
