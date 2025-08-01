import React, { useEffect, useState } from "react";
import axios from "axios";
import Flashcard from "./flashcard";

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios.get("https://flashcard-api.onrender.com/cards")
      .then((response) => setCards(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>German Flashcards</h1>
      <div className="flashcard-container">
        {cards.map((card, index) => (
          <Flashcard key={index} word={card.word} meaning={card.meaning} />
        ))}
      </div>
    </div>
  );
}

export default App;
