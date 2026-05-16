// components/Sidebar.js
import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul>
        <li>
          <NavLink to="/ngo">Proposal Requests</NavLink>
        </li>
        <li>
          <NavLink to="/webinars">Upcoming Webinars</NavLink>
        </li>
        <li>
          <NavLink to="/matching">NGO-Donor Matching</NavLink>
        </li>
        <li>
          <NavLink to="/faq">FAQ Help</NavLink>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
