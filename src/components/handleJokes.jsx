import React, { Component } from 'react'

class HandleJokes extends Component {
    state = {
        Joke : {} ,
        buttonClicked : false,
        punchLine : "",
        punchLineGiven : false
    }

    GenerateJoke = () => {
        this.setState({ Joke: this.props.joke, buttonClicked: true });
    }
    handleReload = () => {
        window.location.reload()
    }

    RenderPunchLine = () => {
        this.setState({punchLine : this.state.Joke.punchline , punchLineGiven : true})
    }
    RenderJoke() {
        if (this.state.Joke.length === 0 ) {
            return null
        }
        else {
            return (
                <div>
                    <h4 className = "setup">{this.state.Joke.setup}</h4>
                </div>
            )
        }
    }

    render() {
        return (
          <div
            className="theme"
            style={{ backgroundColor: this.props.GIF.color }}
          >
            
            <img
              width="440px"
              src={require(`../GIF/${this.props.GIF.path}`).default}
              alt=""
            />
            <div className="Jokes w-75">
              <button
                className={`btn btn-${this.props.GIF.button}  w-25 m-4`}
                onClick={
                  this.state.buttonClicked === false
                    ? this.GenerateJoke
                    : (this.state.punchLineGiven === false ? this.RenderPunchLine : this.handleReload)
                }
              >
                {this.state.buttonClicked === false
                  ? "Spit a Joke"
                  : (this.state.punchLineGiven === false ? "Get Punchline" : "more....")}
              </button>
              <h4 className = "setup">{this.state.Joke.setup}</h4>
              <p className="punchline">{this.state.punchLine}</p>
            </div>
            <p className="sideNote">Refresh the page for new joke</p>
          </div>
        );
    }
}

export default HandleJokes
