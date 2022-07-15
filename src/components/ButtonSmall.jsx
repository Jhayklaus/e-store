import React from "react";

const ButtonSmall = ({ color, text }) => {
  return (
    <button style={{ backgroundColor: color }} className="btn-small">
      {text}
    </button>
  );
};

const ButtonIco = ({ color, text, icon, textColor }) => {
  return (
    <button style={{ backgroundColor: color, color: textColor }} className="btnIco">
      {text}
      {icon}
    </button>
  );
};

export default ButtonSmall;
