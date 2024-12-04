import "bootstrap/js/dist/dropdown";
import { useState } from "react";

export default function Dropdown({ setStatus }) {
  const [selectedStatus, setSelectedStatus] = useState("stato");
  const handleSelectedStatus = (selection) => {
    setSelectedStatus(selection);
    setStatus(selection);
  };

  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {selectedStatus}
      </button>
      <ul className="dropdown-menu">
        <li
          className="dropdown-item"
          onClick={() => handleSelectedStatus("draft")}
        >
          draft
        </li>
        <li
          className="dropdown-item"
          onClick={() => handleSelectedStatus("published")}
        >
          published
        </li>
      </ul>
    </div>
  );
}
