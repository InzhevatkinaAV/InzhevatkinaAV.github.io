(()=>{"use strict";var e={};function t(){return fetch("https://nomoreparties.co/v1/wff-cohort-1/cards",{headers:{authorization:"9d6a2078-c8bd-460f-aba9-4f83db3dbd20","Content-Type":"application/json"}}).then(n)}e.p="";var o=function(){return fetch("https://nomoreparties.co/v1/wff-cohort-1/users/me",{headers:{authorization:"9d6a2078-c8bd-460f-aba9-4f83db3dbd20","Content-Type":"application/json"}}).then(n)};function n(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(res.status))}const r=e.p+"images/picture_img_not_found.a0317e460cf1deb28088.jpg";var c="ef36abce93dd9b4195075dd8";function a(e,t,o,n,a){var i,u=o.querySelector(".card").cloneNode(!0);return u.querySelector(".card__title").textContent=e.name,u.querySelector(".card__image").alt=e.name,(i=e.link,new Promise((function(e,t){var o=document.createElement("img");o.src=i,o.onload=function(){return e(o)},o.onerror=function(){return t(new Error("Ошибка загрузки изображения ".concat(i)))}}))).then((function(t){u.querySelector(".card__image").src=e.link}),(function(e){u.querySelector(".card__image").src=r})),u.id=e._id,u.querySelector(".card__image").addEventListener("click",a),u.querySelector(".card__like-button").onclick=n,u.querySelector(".card__likes-count").textContent=e.likes.length,e.likes.forEach((function(e){e._id===c&&p(u.querySelector(".card__like-button"),"card__like-button_is-active")})),e.owner._id!=c?u.querySelector(".card__delete-button").style.display="none":u.querySelector(".card__delete-button").onclick=t,u}function i(e){var t;(t=e.target.closest(".card").id,fetch("https://nomoreparties.co/v1/wff-cohort-1/cards/".concat(t),{method:"DELETE",headers:{authorization:"9d6a2078-c8bd-460f-aba9-4f83db3dbd20","Content-Type":"application/json"}}).then(n)).then((function(){e.target.closest(".card").remove()})).catch(console.error)}function u(e){var t,o=e.target.closest(".card").querySelector(".card__likes-count");e.target.classList.contains("card__like-button_is-active")?(t=e.target.closest(".card").id,fetch("https://nomoreparties.co/v1/wff-cohort-1/cards/likes/".concat(t),{method:"DELETE",headers:{authorization:"9d6a2078-c8bd-460f-aba9-4f83db3dbd20","Content-Type":"application/json"}}).then(n)).then((function(e){o.textContent=e.likes.length})).catch(console.error):function(e){return fetch("https://nomoreparties.co/v1/wff-cohort-1/cards/likes/".concat(e),{method:"PUT",headers:{authorization:"9d6a2078-c8bd-460f-aba9-4f83db3dbd20","Content-Type":"application/json"}}).then(n)}(e.target.closest(".card").id).then((function(e){o.textContent=e.likes.length})).catch(console.error),p(e.target,"card__like-button_is-active")}function p(e,t){e.classList.toggle(t)}function d(e){l("popup_is-animated",e),setTimeout((function(){l("popup_is-opened",e),e.style.opacity=1}),100),document.addEventListener("keydown",s)}function l(e,t){t.classList.add(e)}function s(e){"Escape"===e.key&&_(document.querySelector(".popup_is-opened"))}function _(e){e.classList.remove("popup_is-opened"),e.classList.remove("popup__image"),e.style.opacity=0,setTimeout((function(){l("popup_is-animated",e)}),600),document.removeEventListener("keydown",s)}function f(e,t,o,n,r,c){t.forEach((function(t){var o=e.querySelector(".".concat(t.id,"_error"));t.classList.remove(r),o.classList.remove(c)})),o.classList.add(n)}function y(e,t,o){for(var n=!0,r=0;r<e.length;r++)if(!e[r].validity.valid){n=!1;break}n?(t.disabled=!1,t.classList.remove(o)):(t.disabled=!0,t.classList.add(o))}var m=function(e,t,o,n,r){var c=e.querySelector(".".concat(t.id,"_error"));c.textContent=o,c.classList.add(r),t.classList.add(n)},v=function(e,t,o,n){var r=e.querySelector(".".concat(t.id,"_error"));r.textContent="",r.classList.remove(n),t.classList.remove(o)},h=document.querySelector(".popup_type_edit"),b=document.querySelector(".popup_type_new-card"),S=document.querySelector(".popup_type_image"),q=document.querySelector("#card-template").content,g=document.querySelector(".places__list");Promise.all([t,o]).then((function(){t().then((function(e){e.forEach((function(e){var t=a(e,i,q,u,w);!function(e,t){e.append(t)}(g,t)}))})).catch((function(e){console.log(e)})),o().then((function(e){e._id;var t=document.querySelector(".profile__title"),o=document.querySelector(".profile__description");t.textContent=e.name,o.textContent=e.about,I.style.backgroundImage="url('".concat(e.avatar,"')")})).catch((function(e){console.log(e)}))}));var k=document.querySelector(".profile__edit-button"),C=h.querySelector(".popup__form"),L=h.querySelector(".popup__button");k.addEventListener("click",(function(e){var t=document.querySelector(".profile__title"),o=h.querySelector(".popup__input_type_name");o.value=t.textContent;var n=document.querySelector(".profile__description"),r=h.querySelector(".popup__input_type_description");r.value=n.textContent,f(C,[o,r],L,".popup__button","popup__button_disabled","popup__input_type_error"),d(h)}));var E=document.querySelector(".profile__add-button"),x=b.querySelector(".popup__form"),T=b.querySelector(".popup__button");function w(e){var t=S.querySelector("img");t.src=e.target.closest("img").src,t.alt=e.target.closest("img").alt,S.querySelector(".popup__caption").textContent=t.alt,d(S)}E.addEventListener("click",(function(e){var t=b.querySelector(".popup__input_type_card-name"),o=b.querySelector(".popup__input_type_url");f(x,[t,o],T,".popup__button","popup__button_disabled","popup__input_type_error"),d(b)}));var j=h.querySelector(".popup__form"),z=h.querySelector(".popup__input_type_name"),P=h.querySelector(".popup__input_type_description");j.addEventListener("submit",(function(e){e.preventDefault();var t=z.value,o=P.value,r=document.querySelector(".profile__title"),c=document.querySelector(".profile__description");j.textContent="Сохранение...",function(e,t){return fetch("https://nomoreparties.co/v1/wff-cohort-1//users/me",{method:"PATCH",headers:{authorization:"9d6a2078-c8bd-460f-aba9-4f83db3dbd20","Content-Type":"application/json"},body:JSON.stringify({name:e,about:t})}).then(n)}(t,o).then((function(e){r.textContent=e.name,c.textContent=e.about,_(h)})).catch((function(e){console.log(e)})).finally((function(){j.textContent="Сохранить"}))}));var A=b.querySelector(".popup__form"),D=b.querySelector(".popup__input_type_card-name"),N=b.querySelector(".popup__input_type_url");A.addEventListener("submit",(function(e){e.preventDefault();var t,o,r=D.value,c={name:r,link:N.value,alt:r};A.textContent="Сохранение...",(t=c.name,o=c.link,fetch("https://nomoreparties.co/v1/wff-cohort-1/cards",{method:"POST",headers:{authorization:"9d6a2078-c8bd-460f-aba9-4f83db3dbd20","Content-Type":"application/json"},body:JSON.stringify({name:t,link:o})}).then(n)).then((function(e){!function(e,t,o){var n=a(e,i,t,u);o.prepend(n)}(c,q,g),A.reset(),_(b)})).catch((function(e){console.log(e)})).finally((function(){A.textContent="Сохранить"}))})),document.addEventListener("mousedown",(function(e){(e.target.classList.contains("popup")||e.target.classList.contains("popup__close"))&&_(document.querySelector(".popup_is-opened"))})),Array.from(document.querySelectorAll(".popup__form")).forEach((function(e){!function(e,t,o,n,r,c){var a=Array.from(e.querySelectorAll(t));a.forEach((function(t){t.addEventListener("input",(function(){!function(e,t,o,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?v(e,t,o,n):m(e,t,t.validationMessage,o,n)}(e,t,r,c),y(a,i,n)}))}));var i=e.querySelector(o);y(a,i,n)}(e,".popup__input",".popup__button","popup__button_disabled","popup__input_type_error","popup__error_visible")}));var O=document.querySelector(".profile__avatar-edit"),J=document.querySelector(".popup_type_avatar-edit"),M=J.querySelector(".popup__form");O.addEventListener("click",(function(e){f(M,[H],V,".popup__button","popup__button_disabled","popup__input_type_error"),d(J)}));var H=J.querySelector(".popup__input_type_url"),I=document.querySelector(".profile__image"),V=J.querySelector(".popup__form");V.addEventListener("submit",(function(e){e.preventDefault();var t,o=H.value;V.textContent="Сохранение...",(t=o,fetch("https://nomoreparties.co/v1/wff-cohort-1/users/me/avatar",{method:"PATCH",headers:{authorization:"9d6a2078-c8bd-460f-aba9-4f83db3dbd20","Content-Type":"application/json"},body:JSON.stringify({avatar:t})}).then(n)).then((function(e){I.style.backgroundImage="url(".concat(o,")"),_(J)})).catch((function(e){console.log(e)})).finally((function(){V.textContent="Сохранить"}))}))})();