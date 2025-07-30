import React, { useState } from 'react';
import './flashcard.css';

function Flashcard({ english, german }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="card" onClick={() => setFlipped(!flipped)}>
      <div className={`card-inner ${flipped ? 'flipped' : ''}`}>
        <div className="card-front">{english}</div>
        <div className="card-back">{german}</div>
      </div>
    </div>
  );
}

export default Flashcard;
