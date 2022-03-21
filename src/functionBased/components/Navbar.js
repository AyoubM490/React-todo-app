import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const links = [
    {
      id: 1,
      path: "/",
      text: "Home",
    },
    {
      id: 2,
      path: "/about",
      text: "About",
    },
  ];

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  const handleToggle = () => setNavbarOpen((prev) => !prev);

  return (
    <nav className="navBar">
      <button type="button" onClick={handleToggle}>
        {navbarOpen ? (
          <MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />
        ) : (
          <FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
        )}
      </button>
      <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
        {links.map((link) => (
          <li key={link.id}>
            <NavLink
              to={link.path}
              activeClassName="active-link"
              onClick={() => closeMenu()}
              exact
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
