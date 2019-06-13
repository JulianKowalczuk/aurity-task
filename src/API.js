import axios from 'axios';

axios.defaults.baseURL = 'https://deckofcardsapi.com/api/deck/';

async function getRandomCard() {
  const response = await axios.get('new/draw/?count=1');

  return response.status === 200 && response.data && response.data.success
    ? response.data.cards[0]
    : undefined;
}

export default { getRandomCard };
