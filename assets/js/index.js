'use strict';

const cardsContainer = document.getElementById('cardsContainer');

const HTMLElements = actors.map((actor) => createActorCard(actor));

function createActorCard({ photo, name, birthdate }) {
  const cardWrapper = document.createElement('li');
  cardWrapper.classList.add('cardWrapper');

  const cardContainer = document.createElement('article');
  cardContainer.classList.add('cardContainer');

  const cardImage = document.createElement('img');
  cardImage.setAttribute('src', photo);
  cardImage.setAttribute('alt', name);
  cardImage.classList.add('cardImage');

  const cardName = document.createElement('h2');
  cardName.append(document.createTextNode(name));
  cardName.classList.add('cardName');

  const cardDescription = document.createElement('p');
  cardDescription.append(document.createTextNode(birthdate));
  cardDescription.classList.add('cardDescription');

  cardContainer.append(cardImage, cardName, cardDescription);
  cardWrapper.appendChild(cardContainer);
  return cardWrapper;
}

cardsContainer.append(...HTMLElements);
