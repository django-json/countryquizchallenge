import React, { Component } from "react";

import "./App.css";

import AnswerItem from "./components/answer-item/answer-item.component";
import Button from "./components/button/button.component";

class App extends Component {
  render() {
    return (
      <article className="App">
        {/*<h1>Country Quiz</h1>*/}
        <AnswerItem />
        <Button variant="outline" label="Try again" />
      </article>
    );
  }
}

export default App;
