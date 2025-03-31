import{S as h,i as c,a as v}from"./assets/vendor-BjRz3xa9.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();let S=new h(".gallery-item a",{captionsData:"alt",captionDelay:250});const q=(r,o)=>{if(parseInt(r.data.totalHits)>0){const s=r.data.hits.map(({largeImageURL:n,webformatURL:e,tags:t,likes:l,views:m,comments:g,downloads:f})=>`<li class="gallery-item"><a href="${n}" class="gallery-img"><img src="${e}" alt="${t}"></a>
            <div class="legend">
  <div class="field">
    <span class="label">Likes</span>
    <span class="value">${l}</span>
  </div>
  <div class="field">
    <span class="label">Views</span>
    <span class="value">${m}</span>
  </div>
  <div class="field">
    <span class="label">Comments</span>
    <span class="value">${g}</span>
  </div>
  <div class="field">
    <span class="label">Downloads</span>
    <span class="value">${f}</span>
  </div>
</div></li>`).join("");if(document.querySelector(".gallery").insertAdjacentHTML("beforeend",s),S.refresh(),document.querySelector(".loader").style.display="none",o>Math.ceil(parseInt(r.data.totalHits)/p))return document.querySelector(".loadMoreBtn").style.display="none",c.error({position:"topRight",message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#90CAF9",position:"topRight"});document.querySelector(".loadMoreBtn").style.display="flex"}else c.show({title:"Error",titleColor:"#FFFFFF",titleSize:"16px",titleLineHeight:"1.5",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",messageColor:"#FFFFFF",messageSize:"16px",messageLineHeight:"1.5",close:!0,progressBar:!0,progressBarColor:"#B51B1B",position:"topRight"}),document.querySelector(".gallery").innerHTML="",document.querySelector(".loadMoreBtn").style.display="none",document.querySelector(".loader").style.display="none"},F="49502149-61d0264429aca11602d0077d5",p=15,y=async(r,o)=>{try{const s=await v.get(`https://pixabay.com/api/?key=${F}&q=${encodeURIComponent(r)}&image_type=photo&per_page=${p}&page=${o}`);q(s,o+1)}catch(s){document.querySelector(".loader").style.display="none",document.querySelector(".gallery").innerHTML="",document.querySelector(".loadMoreBtn").style.display="none",c.error({message:`${s}`,backgroundColor:"#EF4040",close:!0,position:"topRight"})}};let d="",a;const i=document.querySelector(".form"),u=document.querySelector(".loadMoreBtn");i.addEventListener("submit",r=>{a=1,r.preventDefault(),document.querySelector(".gallery").innerHTML="",document.querySelector(".loadMoreBtn").style.display="none",d=i.elements.searchText.value,document.querySelector(".loader").style.display="flex",i.reset(),y(d,a),a+=1});u.addEventListener("click",r=>{u.style.display="none",document.querySelector(".loader").style.display="flex",y(d,a),a+=1});
//# sourceMappingURL=index.js.map
