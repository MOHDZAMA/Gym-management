import React, { useState } from "react";
import "./sidebar.css";
import {
  AiOutlineAudit,
  AiOutlineMessage,
  AiOutlineShopping,
  AiOutlineShoppingCart,
  AiOutlinePieChart,
} from "react-icons/ai";
import { MdMenu } from "react-icons/md";

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className={isSidebarOpen ? "open" : "sidebar"}>
      <div className="sidebar-logo">
        <span>RockGym</span>
        <i onClick={handleToggleSidebar}>
          <MdMenu />
        </i>
      </div>

      <div className="sidebar-links">
        <div>
          <i>
            <AiOutlineAudit />
          </i>
          <a href="/dashbord">Dashbord</a>
        </div>
        <div>
          <i>
            <AiOutlinePieChart />
          </i>
          <a href="addmembers">Diet Chart</a>
        </div>
        <div>
          <i>
            <AiOutlineShopping />
          </i>
          <a href="products">Products</a>
        </div>
        <div>
          <i>
            <AiOutlineShoppingCart />
          </i>
          <a href="orders">Orders</a>
        </div>
        <div>
          <i>
            <AiOutlineMessage />
          </i>
          <a href="message">Message</a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
