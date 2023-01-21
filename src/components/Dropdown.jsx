import React, { useState } from "react";
import Button from "./Button";
import DropdownList from "./DropdownList";

function Dropdown() {
  const [showDropdownList, setShowDropdownList] = useState(false);

  return (
    <div className="dropdown-wrapper open">
      <Button
        text={"Account Settings"}
        icon={"public"}
        onClick={() => setShowDropdownList((prev) => !prev)}
      />
      {showDropdownList && <DropdownList />}
    </div>
  );
}
export default Dropdown;
