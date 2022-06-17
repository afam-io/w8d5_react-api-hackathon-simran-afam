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
    joke: "GET READY FOR THE FUNNIEST JOKE OF YOUR LIFE!",
    answer: " ",
  });

  function handleClick() {
    async function fetchData() {
      const result = await fetch("https://v2.jokeapi.dev/joke/Any?safe-mode");
      const fetchJoke = await result.json();
      console.log(fetchJoke);
      setJoke({ joke: fetchJoke.setup, answer: fetchJoke.delivery });
    }
    fetchData();
  }

  return (
    <main>
      <div className="top">
        <h1>RANDOM JOKE GENERATOR</h1>
        <Button className="button" handleClick={handleClick} />
      </div>
      <section className="bottom-display">
        <Display joke={joke} />
      </section>
    </main>
  );
}

export default App;
