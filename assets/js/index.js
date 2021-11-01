'use strict';

const cardsContainer = document.getElementById(
  'cardsContainer'
);

const HTMLElements = actors.map((actor) =>
  createActorCard(actor)
);

function createActorCard({ photo, name, birthdate }) {
  const cardWrapper = document.createElement('li');
  cardWrapper.classList.add('cardWrapper');

  const cardContainer = document.createElement('article');
  cardContainer.classList.add('cardContainer');

  const cardImageWrapper = document.createElement('div');
  cardImageWrapper.classList.add('cardImageWrapper');

  const cardInitials = document.createElement('div');
  cardInitials.classList.add('cardInitials');
  cardInitials.append(
    document.createTextNode(getInitials(name || 'noname'))
  );
  cardInitials.style.backgroundColor = stringToColour(name);

  const cardImage = document.createElement('img');
  cardImage.setAttribute('src', photo);
  cardImage.setAttribute('alt', getInitials(name));
  cardImage.addEventListener('error', handleImageError);
  cardImage.classList.add('cardImage');

  cardImageWrapper.append(cardInitials, cardImage);

  const cardName = document.createElement('h2');
  cardName.append(
    document.createTextNode(name || 'noname')
  );
  cardName.classList.add('cardName');

  const cardDescription = document.createElement('p');
  cardDescription.append(
    document.createTextNode(birthdate || 'unknown')
  );
  cardDescription.classList.add('cardDescription');

  cardContainer.append(
    cardImageWrapper,
    cardName,
    cardDescription
  );
  cardWrapper.appendChild(cardContainer);
  return cardWrapper;
}

cardsContainer.append(...HTMLElements);

function handleImageError({ target }) {
  target.remove();
}

function stringToColour(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let colour = '#';
  for (let i = 0; i < 3; i++) {
    let value = (hash >> (i * 8)) & 0xff;
    colour += ('00' + value.toString(16)).substr(-2);
  }
  return colour;
}

function getInitials(name) {
  return name
    .toUpperCase()
    .split(' ')
    .map((item) => item.substr(0, 1))
    .join('');
}
console.log(getInitials('tom soer'));
