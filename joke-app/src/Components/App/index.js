import Button from '../Button';
import Display from '../Display';
import { useState } from 'react';

import './App.css';

function App() {
  const [joke, setJoke] = useState({
    joke: 'GET READY FOR THE FUNNIEST JOKE OF YOUR LIFE!',
    answer: ' ',
  });

  async function fetchData() {
    const data = await fetch('https://v2.jokeapi.dev/joke/Any?safe-mode');
    const jokeObj = await data.json();
    console.log(jokeObj);
    // api sometimes joke in joke/anwser format or in setup/ delivery when the joke type is twopart.

    if (jokeObj.type === 'twopart') {
      setJoke({ joke: jokeObj.setup, answer: jokeObj.delivery });
    }
    setJoke({ joke: jokeObj.joke, answer: jokeObj.answer });
  }

  const [jokeEs, setJokeEs] = useState({
    joke: 'ESTAR LISTO PARA REIR!',
    answer: '',
  });

  async function fetchDataES() {
    const data = await fetch('https://v2.jokeapi.dev/joke/Any?lang=es');
    const jokeObj = await data.json();
    console.log(jokeObj);
    // api sometimes joke in joke/anwser format or in setup/ delivery when the joke type is twopart.
    if (jokeObj.type === 'twopart') {
      setJokeEs({ joke: jokeObj.setup, answer: jokeObj.delivery });
    }
    setJokeEs({ joke: jokeObj.joke, answer: jokeObj.answer });
  }

  console.log('testing joke', joke);
  console.log('testing spanish joke', jokeEs);
  return (
    <main>
      {joke.delivery}
      <div className='top'>
        <h1>RANDOM JOKE GENERATOR</h1>
        <Button
          text='GENERATE JOKE'
          className='button'
          handleClick={fetchData}
        />
      </div>
      <section className='bottom-display'>
        <Display joke={joke} />
      </section>
      <div className='top-es'>
        <h1>LEER CHISTES GRACIOSOS</h1>
        <Button text='BROMA' className='button-es' handleClick={fetchDataES} />
      </div>
      <section className='bottom-display-es'>
        <Display joke={jokeEs} />
      </section>
    </main>
  );
}

export default App;
