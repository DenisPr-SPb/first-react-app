import React from 'react';
import style from './Header.module.css';

const Header = (props) => {
  return (
    <header className={style.header}>
       <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Android_O_Preview_Logo.png/1024px-Android_O_Preview_Logo.png" alt="logo" />
    </header>
  );
}

export default Header;
