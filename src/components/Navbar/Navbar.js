import React from "react";

import {
  MdOutlineLightMode,
  MdOutlineDarkMode,
  MdNotificationsNone,
  MdMenu,
} from "react-icons/md";

import "./Navbar.css";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="nav-left">
        <button onClick={() => signOut(auth)}>Logout</button>
      </div>

      <div className="nav-right">
        <i>
          <MdNotificationsNone />
        </i>
        <i>
          <MdOutlineLightMode />
        </i>

        <i>
          <MdOutlineDarkMode />
        </i>

        <img
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
    </div>
  );
};
export default Navbar;
