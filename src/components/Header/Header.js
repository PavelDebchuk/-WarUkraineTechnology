import React from "react";
import "./HeaderStyled.css";
const Header = () => {
  return (
    <header className="Header">
       <h1 className="Header_title">stop war</h1>
       <nav className="Header_nav">
        <ul className="Header_list">
          <li className="Header_item">
            про війну
          </li>
          <li className="Menu_item">
            зброя учасників
          </li>
          <li className="Menu_item">
            auto
          </li>
        </ul>
       </nav>
    </header>
  )
}

export default Header;
