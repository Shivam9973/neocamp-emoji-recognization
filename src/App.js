import React from "react";
import "./styles.css";
import { useState } from "react";

var emojiGuide = {
  "ð§": "Climbing",
  "ðĪš": "Fencing",
  "ð": "Horse Racing",
  "ðïļ": "Golf",
  "ð": "Surfing",
  "ð": "Swimming",
  "ðïļ": "Weight Lifting",
  "ðĪž": "Wrestling",
  "ðĪļ": "Cartwheeling",
  "ðī": "Riding",
  "âđïļ": "Bouncing Ball"
};

var emojis = Object.keys(emojiGuide);

function App() {
  const [meaning, setMeaning] = useState(" ");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiGuide[userInput];

    if (meaning === undefined) {
      meaning = "We do not have this in our databased ";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiGuide[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1> Activity Emoji </h1>

      <input onChange={emojiInputHandler} />

      <h3 className="text-style">{meaning}</h3>

      <h3>We have this emojis</h3>
      {emojis.map(function (emoji) {
        return (
          <spam
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "1.3rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </spam>
        );
      })}
    </div>
  );
}

export default App;
