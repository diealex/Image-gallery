import{S as F,i as d,a as L}from"./assets/vendor-BjRz3xa9.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const S=24;let B=new F(".gallery-item a",{captionsData:"alt",captionDelay:250});const q=(o,r)=>{if(parseInt(o.data.totalHits)>0){const s=o.data.hits.map(({largeImageURL:n,webformatURL:e,tags:t,likes:a,views:h,comments:v,downloads:b})=>`<li class="gallery-item"><a href="${n}"><img class="gallery-img" src="${e}" alt="${t}"></a>
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
    <span class="value">${b}</span>
  </div>
</div></li>`).join("");if(document.querySelector(".gallery").insertAdjacentHTML("beforeend",s),B.refresh(),p(),r>2&&$(),r>Math.ceil(parseInt(o.data.totalHits)/g))return i(),d.info({position:"topRight",message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#90CAF9",position:"topRight"});C()}else d.show({title:"Error",titleColor:"#FFFFFF",titleSize:"16px",titleLineHeight:"1.5",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",messageColor:"#FFFFFF",messageSize:"16px",messageLineHeight:"1.5",close:!0,progressBar:!0,progressBarColor:"#B51B1B",position:"topRight"}),y(),i(),p()},$=()=>{const o=document.querySelector(".gallery-item");window.scrollBy({top:2*(o.getBoundingClientRect().height+S),behavior:"smooth"})},y=()=>{document.querySelector(".gallery").innerHTML=""},p=()=>{document.querySelector(".loader").style.display="none"},m=()=>{document.querySelector(".loader").style.display="flex"},C=()=>{document.querySelector(".loadMoreBtn").style.display="flex"},i=()=>{document.querySelector(".loadMoreBtn").style.display="none"},w="49502149-61d0264429aca11602d0077d5",g=15,f=async(o,r)=>{try{const s=await L.get(`https://pixabay.com/api/?key=${w}&q=${encodeURIComponent(o)}&image_type=photo&per_page=${g}&page=${r}`);q(s,r+1)}catch(s){p(),y(),i(),d.error({message:`${s}`,backgroundColor:"#EF4040",close:!0,position:"topRight"})}};let c="",l;const u=document.querySelector(".form"),M=document.querySelector(".loadMoreBtn");u.addEventListener("submit",o=>{if(o.preventDefault(),l=1,y(),i(),c=u.elements.searchText.value.trim(),!c){d.error({message:"Please fill out the field",backgroundColor:"#EF4040",close:!0,position:"topRight"});return}m(),u.reset(),f(c,l),l+=1});M.addEventListener("click",o=>{i(),m(),f(c,l),l+=1});
//# sourceMappingURL=index.js.map
