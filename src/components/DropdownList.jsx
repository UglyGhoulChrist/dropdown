import { useState } from "react";
import DropdownItem from "./DropdownItem";

function DropdownList() {
  const links = [
    "Profile Information",
    "Change Password",
    "Become PRO",
    "Help",
    "Log Out",
  ];
  const [activeLink, setActiveLink] = useState("");
  return (
    <ul className="dropdown">
      {links.map((link, idx) => (
        <DropdownItem
          onClick={(el) => setActiveLink(el)}
          key={idx}
          activeLink={activeLink}
          link={link}
        />
      ))}
    </ul>
  );
}
export default DropdownList;
