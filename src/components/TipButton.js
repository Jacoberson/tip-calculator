import React from "react";

const TipButton = ({ percent, setPercentage }) => {
  return (
    <button
      type="button"
      className="tip-button"
      value={percent}
      onClick={e => setPercentage(parseFloat(e.target.value))}>
      {percent}
    </button>
  );
};

export default TipButton;
