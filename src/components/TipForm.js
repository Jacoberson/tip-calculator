import React, { useState, useEffect } from "react";
import TipButton from "./TipButton";

const TipForm = () => {
  const tipPercentages = ["5%", "10%", "15%", "25%", "50%"];
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState("");
  const [percentage, setPercentage] = useState("");
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const tipResult = (bill * percentage) / 100 / people;
    const totalResult = bill / people + tipResult;
    setTipAmount(tipResult.toFixed(2));
    setTotal(totalResult.toFixed(2));
  }, [bill, percentage, people]);

  const resetAmounts = () => {
    setBill("");
    setPeople("");
    setPercentage("");
  };

  return (
    <div className="content-container">
      <form className="bill-portion">
        <h3 className="bill">Bill</h3>
        <input
          id="bill-input"
          type="number"
          placeholder="0"
          value={bill}
          onChange={({ target }) => setBill(Number(target.value))}
        />
        <h3 className="tip">Select Tip %</h3>
        <div className="tip-button-container">
          {tipPercentages.map(percent => (
            <TipButton
              key={percent}
              percent={percent}
              setPercentage={setPercentage}
            />
          ))}
          <input
            id="custom-input"
            type="number"
            placeholder="Custom"
            min="1"
            max="100"
            onChange={({ target }) => setPercentage(Number(target.value))}
          />
        </div>
        <div className="people-container">
          <h3 className="number-of-people">Number of People</h3>
          <input
            id="people-input"
            type="number"
            min="1"
            placeholder="0"
            value={people}
            onChange={({ target }) => setPeople(Number(target.value))}
          />
        </div>
      </form>
      <div className="amounts-container">
        <div className="tip-amount-container">
          <span className="total-per-person">
            <h3 className="total-h3">Tip Amount</h3>
            <p className="per-person">/ person</p>
          </span>
          <p className="amount">
            ${bill && percentage && people ? tipAmount : "0.00"}
          </p>
        </div>
        <div className="tip-amount-container">
          <span className="total-per-person">
            <h3 className="total-h3">Total</h3>
            <p className="per-person">/ person</p>
          </span>
          <p className="amount">
            ${bill && percentage && people ? total : "0.00"}
          </p>
        </div>
        <button
          id="reset-btn"
          type="reset"
          disabled={!bill || !percentage || !people}
          className={(!bill || !percentage || !people) && "disabled"}
          onClick={() => resetAmounts()}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default TipForm;
