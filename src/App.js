import React, { Component } from "react";

import "./App.css";

import QuizContainer from "./components/quiz-container/quiz-container.component";

class App extends Component {
  render() {
    return (
      <article className="App">
        <QuizContainer />
      </article>
    );
  }
}

export default App;
