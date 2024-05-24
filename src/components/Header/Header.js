import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './HeaderStyled.css';
import User from 'components/User';
import HomePage from '../Page/HomePage/HomePage.jsx';
import WarPage from 'components/Page/WarPage';
import Machinery from 'components/Page/Machinery';
import Allies from 'components/Page/AlliesPage';

const Header = () => {
  console.log(HomePage.length);
  return (
    <div>
      <header className="Header">
        <User />
        <h1 className="Header_title">Стоп Війні</h1>
        <nav className="Header_nav">
          <ul className="Header_list">
            <li className="Header_item">
              <Link className="Header_item_color" to="/">
                Головна
              </Link>
            </li>
            <li className="Header_item">
              <Link className="Header_item_color" to="/warInfo">
                Про війну
              </Link>
            </li>
            <li className="Header_item">
              <Link className="Header_item_color" to="machineryPage">
                Військова техніка
              </Link>
            </li>
            <li className="Header_item">
              <Link className="Header_item_color" to="alliesPage">
                Союзники
              </Link>
            </li>
            <li className="Header_item">auto</li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/warInfo" element={<WarPage />} />
        <Route path="/machineryPage" element={<Machinery />} />
        <Route path="/alliesPage" element={<Allies />} />
      </Routes>
    </div>
  );
};

export default Header;
