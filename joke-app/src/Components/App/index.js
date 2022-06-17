import Button from "../Button";
import Display from "../Display";
import { useEffect, useState } from "react";

import "./App.css";

function App() {

  const [joke, setJoke] = useState({
    joke: "GET READY FOR THE FUNNIEST JOKE OF YOUR LIFE!",
    answer: " ",
  });

    async function fetchData() {
      const result = await fetch("https://v2.jokeapi.dev/joke/Any?safe-mode");
      const fetchJoke = await result.json();
      console.log(fetchJoke);
      setJoke({ joke: fetchJoke.setup, answer: fetchJoke.delivery });
    }
  

  const [jokeEs, setJokeEs] = useState({joke:"ESTAR LISTO PARA REIR!", answer:""})

  function handleClickEs() {
    async function fetchData() {
      const result = await fetch("https://v2.jokeapi.dev/joke/Any?lang=es");
      const fetchJoke = await result.json();
      console.log(fetchJoke);
      setJokeEs({ joke: fetchJoke.setup, answer: fetchJoke.delivery });
    }
    fetchData();
  }

console.log('testing joke', joke)
  return (
    <main>
    {joke.delivery}
      <div className="top">
        <h1>RANDOM JOKE GENERATOR</h1>
        <Button text="GENERATE JOKE" className="button" handleClick={fetchData} />
      </div>
      <section className="bottom-display">
        <Display joke={joke} />
      </section>
      <div className="top-es">
        <h1>LEER CHISTES GRACIOSOS</h1>
        <Button text="BROMA" className="button-es" handleClick={handleClickEs} />
      </div>
      <section className="bottom-display-es">
      <Display joke={jokeEs} />
      </section>
    </main>
  );
}

export default App;
