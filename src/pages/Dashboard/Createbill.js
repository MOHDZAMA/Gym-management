import React from "react";
import "./Createbill.css";

function Createbill() {
  return (
    <div className="createbill">
      <h1>Createbill</h1>
      <div>
        <input type="text" placeholder="ID" />
        <button>Search</button>
      </div>

      <div>
        <label>Package</label>
        <select>
          <option value={2500}>2500</option>
          <option value={3500}>3500</option>
        </select>
      </div>
      <div>
        <input type="date" placeholder="Date" />
      </div>
      <div>
        <label>Mode</label>
        <select>
          <option value="cash">Cash</option>
          <option value="upi">Upi</option>
          <option value="credit card">Credit Card</option>
        </select>
      </div>
      <button>Renew</button>
    </div>
  );
}

export default Createbill;
