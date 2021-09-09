import React from 'react'
import "./App.css"
import HandleJokes from "./components/handleJokes";
import gif from "./GIF/Gif.js"


function App() {
  let RandomGif = gif[Math.floor(Math.random() * gif.length)];
  return (
    <React.Fragment>
      <HandleJokes GIF = {RandomGif}/>
     </React.Fragment>
  ); 
}

export default App
