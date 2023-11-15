import React from "react";
import "./Update.css";
function Update() {
  return (
    <div className="update">
      <h1>Update</h1>
      <div>
        <input type="text" placeholder="ID" />
        <button>Search</button>
      </div>
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Age" />
      <input type="number" placeholder="Phone No." />
      <input type="email" placeholder="Email" />
      <button>Update</button>
      <button>Delete</button>
    </div>
  );
}

export default Update;
