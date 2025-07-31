import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './app.css';
import Flashcard from './flashcard';

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios.get('https://flashcard-api.onrender.com/cards')
      .then(res => setCards(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="app">
      <h1>German Vocabulary Flashcards</h1>
      <div className="flashcards">
        {cards.map((card, i) => <Flashcard key={i} card={card} />)}
      </div>
    </div>
  );
}

export default App;
