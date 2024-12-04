import "bootstrap/js/dist/dropdown";
import { useState } from "react";

export default function Dropdown({ handleChangeForm }) {
  const [selectedStatus, setSelectedStatus] = useState("Seleziona categoria");
  const handleSelectedStatus = (selection) => {
    setSelectedStatus(selection);
    handleChangeForm;
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
          onClick={() => handleSelectedStatus("Categoria 1")}
        >
          Categoria 1
        </li>
        <li
          className="dropdown-item"
          onClick={() => handleSelectedStatus("Categoria 2")}
        >
          Categoria 2
        </li>
        <li
          className="dropdown-item"
          onClick={() => handleSelectedStatus("Categoria 3")}
        >
          Categoria 3
        </li>
      </ul>
    </div>
  );
}
