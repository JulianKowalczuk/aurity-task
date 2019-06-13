import { cardsValuesSortedAscByHierarchy } from './constants';

function compareCardsValues(firstCard, secondCard) {
  const firstCardIndex = cardsValuesSortedAscByHierarchy.indexOf(firstCard.value);
  const secondCardIndex = cardsValuesSortedAscByHierarchy.indexOf(secondCard.value);

  return Math.sign(secondCardIndex - firstCardIndex);
}

export function isCardHigherThan(card, cardToCompare) {
  return compareCardsValues(card, cardToCompare) > 0;
}

export function isCardLowerThan(card, cardToCompare) {
  return compareCardsValues(card, cardToCompare) < 0;
}
