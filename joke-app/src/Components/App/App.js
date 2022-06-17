import logo from "./logo.svg";
import Button from "../Button";
import "./App.css";

function App() {
  function handleClick() {
    return console.log("button works");
  }

  return <Button handleClick={handleClick} />;
}

export default App;
