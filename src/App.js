import React from "react";

import "./App.css";

import Quiz from "./components/quiz/quiz.component";
import Footer from "./components/footer/footer.component";

function App() {
  return (
    <article className="App">
      <Quiz />
      <Footer />
    </article>
  );
}

export default App;
