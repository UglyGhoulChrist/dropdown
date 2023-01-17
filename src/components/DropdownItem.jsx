import React from "react";

function DropdownItem({ link, onClick, activeLink }) {
  return (
    <li className={link === activeLink ? "active" : null}>
      <a onClick={() => onClick(link)} href="#">
        {link}
      </a>
    </li>
  );
}
export default DropdownItem;
