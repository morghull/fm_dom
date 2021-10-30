'use strict';

const cardsContainer = document.getElementById('cardsContainer');

const HTMLElements = actors.map((actor) => createActorCard(actor));

function createActorCard({ photo, name, birthdate }) {
  const cardWrapper = document.createElement('li');
  cardWrapper.classList.add('cardWrapper');

  const cardContainer = document.createElement('article');
  cardContainer.classList.add('cardContainer');

  const cardImageWrapper = document.createElement('div');
  cardImageWrapper.classList.add('cardImageWrapper');

  const cardInitials = document.createElement('div');
  cardInitials.classList.add('cardInitials');
  cardInitials.append(document.createTextNode(name[0]));

  const cardImage = document.createElement('img');
  cardImage.setAttribute('src', photo);
  cardImage.setAttribute('alt', name);
  cardImage.addEventListener('error', handleImageError);
  cardImage.classList.add('cardImage');

  cardImageWrapper.append(cardInitials, cardImage);

  const cardName = document.createElement('h2');
  cardName.append(document.createTextNode(name));
  cardName.classList.add('cardName');

  const cardDescription = document.createElement('p');
  cardDescription.append(document.createTextNode(birthdate));
  cardDescription.classList.add('cardDescription');

  cardContainer.append(cardImageWrapper, cardName, cardDescription);
  cardWrapper.appendChild(cardContainer);
  return cardWrapper;
}

cardsContainer.append(...HTMLElements);

function handleImageError({ target }) {
  target.remove();
}
