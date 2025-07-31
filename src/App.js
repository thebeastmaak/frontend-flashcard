import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './app.css';
import Flashcard from './flashcard';

const App = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios.get('https://flashcard-api.onrender.com/cards')
      .then(response => setCards(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="app">
      <h1>German Flashcards</h1>
      <div className="flashcards-container">
        {cards.map((card, index) => (
          <Flashcard key={index} word={card.word} meaning={card.meaning} />
        ))}
      </div>
    </div>
  );
};

export default App;
