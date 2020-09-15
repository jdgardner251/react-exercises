import React from "react";
import "./App.css";
import Stats from './Stats';

// Import the stats component
// import Stats from "./stats/stats";

function App() {
  return (
    <div className="App">
      <header className="App__header">
        <h1>React Exercises</h1>
      </header>
      <section>
        <h2>Stats</h2>
        <Stats label="Books Read" value={14} change={5} />
        <Stats label="Pies Eaten" value={3} change={-30} /> 
      </section>
    </div>
  );
}

export default App;
