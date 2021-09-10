import React from "react";

const TipButton = ({ percent }) => {
  return (
    <button type="button" className="tip-button">
      {percent}
    </button>
  );
};

export default TipButton;
