import Button from "../Button";
import Display from "../Display";
import { useState } from "react";
import "./App.css";

function App() {
  function handleClick() {
    return console.log("button works");
  }
  const [joke, setJoke] = useState({
    joke: "get ready for the funniest joke of your life",
    answer: " ",
  });

  function handleClick(e) {}

  return (
    <main>
      <Display />
      <Button handleClick={handleClick} />
    </main>
  );
}

export default App;
