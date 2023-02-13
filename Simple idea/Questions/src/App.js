import React , { useState } from "react";
import data from "./data";
import SingleQuestion from "./singleQuestion";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [questions, setQuestion] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>question and answers about login</h3>
        <section className="info">
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
