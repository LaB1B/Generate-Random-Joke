import React , {Component} from 'react'
import "./App.css"
import HandleJokes from "./components/handleJokes";
import gif from "./GIF/Gif.js"
import axios from 'axios';


class App extends Component {
  state = {
    RandomGif : gif[Math.floor(Math.random() * gif.length)],
    joke : {}
  }

  componentDidMount() {
    axios("https://generatejoke.herokuapp.com/api/jokes/random").then((data) => this.setState({joke : data.data})).catch(err => console.log(err))
  }

  render() {
    if (this.state.joke.length <= 0) {
      return <h1>helloh </h1>
    } else {

      return (
        <React.Fragment>
          
      <HandleJokes joke = {this.state.joke} GIF = {this.state.RandomGif}/>
       
     </React.Fragment>
  ); 
}
}
}

export default App
