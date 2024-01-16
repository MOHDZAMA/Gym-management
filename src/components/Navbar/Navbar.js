import React, { useState } from "react";

import {
  MdOutlineLightMode,
  MdOutlineDarkMode,
  MdNotificationsNone,
} from "react-icons/md";

import "./Navbar.css";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [theam, setTheam] = useState(false);

  const toggleTheam = () => {
    setTheam(!theam);
    // if (theam) {
    // document.body.classList.remove("dark");
    // } else {
    // document.body.classList.add("dark");
    // }
  };

  const handleImageClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <div className="nav-left">
        <h1>Admin</h1>
      </div>

      <div className="nav-right">
        <i>
          <MdNotificationsNone />
        </i>
        {theam ? (
          <i>
            <MdOutlineDarkMode onClick={toggleTheam} />
          </i>
        ) : (
          <i>
            <MdOutlineLightMode onClick={toggleTheam} />
          </i>
        )}

        <div className="dropdown-container">
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            onClick={handleImageClick}
          />
          {isOpen && (
            <div className="dropdown-menu">
              <ul>
                <li>General</li>
                <li>Setting</li>

                <li onClick={() => signOut(auth)}>Logout</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
