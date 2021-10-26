'use strict';

const img1 = document.querySelector(
  'div.wrap>section>article+article>img'
);
const [, img2] = document.images;
const ul1 = document.querySelector('main>nav>ul');
const paragraphList1 = document.querySelectorAll('main>article>p');
const paragraphList2 = document.querySelectorAll('p:not(.text)');
