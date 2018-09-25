import React, { Component } from 'react';
import Header from "./components/Header";
import MemoryCards from "./components/MemoryCards";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import charecters from "./GoT.json";
import './App.css';

class App extends Component {

  state = {
    charecters
  };

  render() {
    return (
      <Wrapper>
      <Navbar> 
        <ul>
          <li className="navbar-brand">GoT CLICKY GAME</li>
          <li>Click an image to begin!</li>
          <li>Score: | High Score: </li>
        </ul>
      </Navbar>
      <Header>
        <h1>GoT Clicky Game!</h1>
        <h2>Click on an image to score, but don't click the same image more than once!</h2>
      </Header>
      <div className="container">
        {this.state.charecters.map(charecter => (
          <MemoryCards
            id={charecter.id}
            img={charecter.img}
          />
        ))}
      </div>
      </Wrapper>
    );
  }
}
export default App;
