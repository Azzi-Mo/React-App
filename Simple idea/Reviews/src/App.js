
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import React from "react";
import Reviews from "./Reviews";
function App() {
  return (
    <main>
    <section className="container">
    
    <div className="title">
    <h2 >Our Reviews</h2>
    <div className="underline"></div>
    </div>

    <Reviews/>
    
    </section>
    </main>
  );
}

export default App;
