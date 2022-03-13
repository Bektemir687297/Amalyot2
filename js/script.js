" use strict";

const btnNews = document.querySelector(".promo__btn"),
  newsGenre = document.querySelector(".promo__genre"),
  bg = document.querySelector(".promo__bg"),
  listNews = document.querySelector(".promo__interactive-list");

const news = [
  "FOOTBALL",
  "BASKETBALL",
  "UFC",
  "BOX",
  "AMERICAN FOOTBAL IN EU...",
];

btnNews.remove();

newsGenre.textContent = "uznews";
newsGenre.style.color = "crimson";
bg.style.backgroundImage = "url(img/2.jpg)";
listNews.innerHTML = "";
news.forEach((itemNews, index) => {
  listNews.innerHTML += `
  <li class="promo__interactive-item">
  ${index + 1}  ${itemNews}
  <div class="delete"></div>
</li>
`;
});
