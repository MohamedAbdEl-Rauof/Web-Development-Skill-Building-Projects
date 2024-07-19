// script.js
document.addEventListener('DOMContentLoaded', () => {
  const gameBoard = document.getElementById('game-board');
  const cardValues = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H'];
  let flippedCards = [];
  let matchedPairs = 0;

  // Shuffle the cards
  cardValues.sort(() => 0.5 - Math.random());

  // Create the card elements
  cardValues.forEach(value => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.value = value;
    card.innerText = value;
    card.addEventListener('click', handleCardClick);
    gameBoard.appendChild(card);
  });

  function handleCardClick(event) {
    const clickedCard = event.target;
    
    if (flippedCards.length < 2 && !clickedCard.classList.contains('flip')) {
      clickedCard.classList.add('flip');
      flippedCards.push(clickedCard);

      if (flippedCards.length === 2) {
        if (flippedCards[0].dataset.value === flippedCards[1].dataset.value) {
          // Matched pair
          flippedCards = [];
          matchedPairs++;
          if (matchedPairs === cardValues.length / 2) {
            alert('Bravoooooooo You Win!');
          }
        } else {
          // Unmatched pair
          setTimeout(() => {
            flippedCards.forEach(card => card.classList.remove('flip'));
            flippedCards = [];
            alert('Game Over ');

          }, 1000);
        }
      }
    }
  }
});
