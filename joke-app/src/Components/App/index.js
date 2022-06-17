import Button from "../Button";
import Display from "../Display";
import { useState } from "react";
import "./App.css";

function App() {
  // const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  // const answer = await result.json();
  // console.log(answer.name);
  // setPokemon({ name: answer.name, imgSrc: answer.sprites.front_shiny });

  const [joke, setJoke] = useState({
    joke: "get ready for the funniest joke of your life",
    answer: " ",
  });

  function handleClick() {
    async function fetchData() {
      const result = await fetch("https://v2.jokeapi.dev/joke/Any?safe-mode");
      const fetchJoke = await result.json();
      setJoke({ joke: fetchJoke.setup, answer: fetchJoke.delivery });
    }
    fetchData();
  }

  return (
    <main>
      <h1>RANDOM JOKE GENERATOR</h1>
      <section className="bottom-display">
        <Button handleClick={handleClick} />
        <Display joke={joke} />
      </section>
    </main>
  );
}

export default App;
