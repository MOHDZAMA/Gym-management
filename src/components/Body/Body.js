import React from "react";
import "./Body.css";
import Dashboard from "../../pages/Dashboard/Dashboard";
import { Link } from "react-router-dom";
function Body() {
  return (
    <div className="body">
      <Dashboard />
    </div>
  );
}

export default Body;
