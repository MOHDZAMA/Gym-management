import React, { useState } from "react";
import "./Dashboard.css";
import { BiReceipt, BiEdit, BiUserPlus, BiSpreadsheet } from "react-icons/bi";

import Createbill from "./Createbill";
import Update from "./Update";
import Addmembers from "./Addmembers";
import Package from "./Package";
import Popup from "../../components/Popup/Popup";
function Dashboard() {
  const [trigger, setTrigger] = useState(false);
  const [selection, setSelection] = useState("");
  const handleButtonClick = (selectedOption) => {
    setTrigger(true);
    setSelection(selectedOption);
  };
  return (
    <div className="dashboard">
      <button className="card1" onClick={() => handleButtonClick("CreateBill")}>
        CreateBill
        <i>
          <BiReceipt />
        </i>
      </button>
      <button
        className="card2"
        onClick={() => handleButtonClick("Update/Delete")}
      >
        Update/Delete
        <i>
          <BiEdit />
        </i>
      </button>
      <button className="card3" onClick={() => handleButtonClick("AddMember")}>
        AddMember
        <i>
          <BiUserPlus />
        </i>
      </button>
      <button className="card4" onClick={() => handleButtonClick("Package")}>
        Package{" "}
        <i>
          <BiSpreadsheet />
        </i>
      </button>
      <div className="table">
        <span>Table</span>
      </div>
      <div className="card5">
        <span>Active</span>
      </div>
      <Popup trigger={trigger} setTrigger={setTrigger}>
        {selection === "CreateBill" && <Createbill />}
        {selection === "Update/Delete" && <Update />}
        {selection === "AddMember" && <Addmembers />}
        {selection === "Package" && <Package />}
      </Popup>
    </div>
  );
}

export default Dashboard;
