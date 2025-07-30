import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Flashcard from './flashcard';
import './App.css';

const API_URL = 'https://backend-flashcard-jqik.onrender.com';

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios.get(API_URL)
      .then(res => setCards(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container">
      <h1>German Flashcards</h1>
      <div className="card-grid">
        {cards.map(card => (
          <Flashcard key={card._id} english={card.english} german={card.german} />
        ))}
      </div>
    </div>
  );
}

export default App;
