import React from "react";
import TipButton from "./TipButton";

const TipForm = () => {
  const tipPercentages = ["5%", "10%", "15%", "25%", "50%"];

  return (
    <form className="bill-portion">
      <p className="bill">Bill</p>
      <input id="bill-input" type="number" />
      <p className="tip">Select Tip %</p>
      <div className="tip-button-container">
        {tipPercentages.map(percent => (
          <TipButton key={percent} percent={percent} />
        ))}
        <input
          id="custom-input"
          type="number"
          placeholder="Custom"
          min="1"
          max="100"
        />
      </div>
    </form>
  );
};

export default TipForm;
