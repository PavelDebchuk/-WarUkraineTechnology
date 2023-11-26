import React from 'react';
import './HeaderStyled.css';
import User from 'components/User';
const Header = () => {
  return (
    <header className="Header">
      <User />
      <h1 className="Header_title">stop war</h1>
      <nav className="Header_nav">
        <ul className="Header_list">
          <li className="Header_item">про війну</li>
          <li className="Header_item">зброя учасників</li>
          <li className="Header_item">союзники</li>
          <li className="Header_item">auto</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
