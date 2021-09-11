import React from "react";
import TipButton from "./TipButton";

const TipForm = () => {
  const tipPercentages = ["5%", "10%", "15%", "25%", "50%"];

  return (
    <form className="bill-portion">
      <h3 className="bill">Bill</h3>
      <input id="bill-input" type="number" placeholder="0" />
      <h3 className="tip">Select Tip %</h3>
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
      <div className="people-container">
        <h3 className="number-of-people">Number of People</h3>
        <input id="people-input" type="number" min="1" placeholder="0" />
      </div>
      <div className="amounts-container">
        <div className="tip-amount-container">
          <span className="total-per-person">
            <h3 className="total-h3">Tip Amount</h3>
            <p className="per-person">/ person</p>
          </span>
          <p className="amount">$0.00</p>
        </div>
        <div className="tip-amount-container">
          <span className="total-per-person">
            <h3 className="total-h3">Total</h3>
            <p className="per-person">/ person</p>
          </span>
          <p className="amount">$0.00</p>
        </div>
        <button id="reset-btn" type="reset">
          Reset
        </button>
      </div>
    </form>
  );
};

export default TipForm;
