import React, { useState } from 'react';
import './flashcard.css';

function Flashcard({ card }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={`flashcard ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped(!flipped)}>
      <div className="front">{card.word}</div>
      <div className="back">{card.translation}</div>
    </div>
  );
}

export default Flashcard;
