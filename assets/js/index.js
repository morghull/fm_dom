'use strict';

const cardsContainer = document.getElementById(
  'cardsContainer'
);

const HTMLElements = actors.map((actor) =>
  createActorCard(actor)
);

function createActorCard(actor) {
  const { name, birthdate } = actor;

  const cardWrapper = document.createElement('li');
  cardWrapper.classList.add('cardWrapper');

  const cardContainer = document.createElement('article');
  cardContainer.classList.add('cardContainer');

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
    createImageWrapper(actor),
    cardName,
    cardDescription
  );
  cardWrapper.appendChild(cardContainer);
  return cardWrapper;
}
cardsContainer.append(...HTMLElements);

function createImageWrapper(actor) {
  const { name, id } = actor;
  const cardImageWrapper = document.createElement('div');
  cardImageWrapper.setAttribute('id', `wrapper${id}`);
  cardImageWrapper.classList.add('cardImageWrapper');

  const cardInitials = document.createElement('div');
  cardInitials.classList.add('cardInitials');
  cardInitials.append(
    document.createTextNode(getInitials(name || 'noname'))
  );
  cardInitials.style.backgroundColor = stringToColour(name);

  cardImageWrapper.append(cardInitials, createImage(actor));
  return cardImageWrapper;
}

function createImage({ photo, name, id }) {
  const image = document.createElement('img');
  image.classList.add('cardImage');
  image.setAttribute('src', photo);
  image.setAttribute('alt', getInitials(name));
  image.dataset.id = id;
  image.addEventListener('error', handleImageError);
  image.addEventListener('load', handleImageLoader);
  return image;
}

function handleImageError({ target }) {
  target.remove();
}
function handleImageLoader({
  target,
  target: {
    dataset: { id },
  },
}) {
  document.getElementById(`wrapper${id}`).appent(target);
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
