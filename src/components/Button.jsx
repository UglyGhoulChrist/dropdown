import React from "react";

function Button({ onClick, text, icon }) {
  return (
    <button onClick={onClick} className="btn">
      <span className="btn-text">{text}</span>
      <i className="material-icons">{icon}</i>
    </button>
  );
}
export default Button;
