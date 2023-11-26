import './UserStyled.css';
import user from './../../img/user.png';
import { useState } from 'react';

const User = () => {
  const [modal, open_Modal] = useState(false);

  const openModal = () => {
    open_Modal(!modal);
  };

  const errr = e => {
    e.preventDefault();
    // console.log(Pasword);
  };
  return (
    <div>
      <div className="user_block">
        <button type="button" onClick={openModal} className="buttonModal">
          sign in
        </button>
        <img
          className="user_logo"
          src={user}
          width="40"
          height="40"
          alt="logo-user"
        />
      </div>
      {modal && (
        <div className="Modal_window">
          <button className="clousModal" onClick={openModal}>
            x
          </button>
          <h1>Авторизуйтеся будь ласка в формі нижче: </h1>
          <form className="user_form">
            <p>Логін</p>
            <input type="text" name="login"></input>
            <p>Електронна пошта</p>
            <input type="text" name="pasword"></input>
            <button onClick={errr} className="form_button" type="submit">
              увійти
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default User;
