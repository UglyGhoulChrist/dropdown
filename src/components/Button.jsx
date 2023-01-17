import React from "react";

function Button({ onClick }) {
  return (
    <button onClick={onClick} className="btn">
      <span className="btn-text">Account Settings</span>
      <i className="material-icons">public</i>
    </button>
  );
}
export default Button;
