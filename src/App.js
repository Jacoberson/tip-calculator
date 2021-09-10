import React from "react";
import Header from "./components/Header";
import TipForm from "./components/TipForm";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content-container">
        <TipForm />
      </div>
    </div>
  );
}

export default App;
