import React, { useState } from "react";

function Flashcard({ word, meaning }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={`flashcard ${flipped ? "flipped" : ""}`} onClick={() => setFlipped(!flipped)}>
      <div className="front">{word}</div>
      <div className="back">{meaning}</div>
    </div>
  );
}

export default Flashcard;
