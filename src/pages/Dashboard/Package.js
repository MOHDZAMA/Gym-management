import React from "react";
import "./Package.css";
function Package() {
  return (
    <div className="package">
      <h1>Package</h1>
      <input type="text" placeholder="Duration" />
      <input type="number" placeholder="Price" />
      <button>ADD</button>
    </div>
  );
}

export default Package;
