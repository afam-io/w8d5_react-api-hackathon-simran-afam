function Display({joke}) {
   return (
   <div>
     <h2>{joke.joke}</h2>
     <br/>
     <h3>{joke.answer}</h3>
    </div>
   )
}

export default Display
