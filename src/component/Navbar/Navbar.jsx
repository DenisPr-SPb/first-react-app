import React from 'react';
import { NavLink } from 'react-router-dom';
import Friend from './Friend/Friend';
import style from './Navbar.module.css';

const Navbar = (props) => {


  const friendElement = props.state.map ((friend) => {
    return <Friend name={friend.name} id={friend.id}/>
  })


  return (
    <nav className={style.nav}>
        <div className={style.item}>
          <NavLink to='/profile'>Profile</NavLink>
        </div>
        <div className={style.item}>
          <NavLink to='/dialogs'>Messages</NavLink>
        </div>
        <div className={style.item}>
          <NavLink to='/news'>News</NavLink>
        </div>
        <div className={style.item}>
          <NavLink to='/music'>Music</NavLink>
        </div>
        <div className={style.item}>
          <NavLink to='/settings'>Settings</NavLink>
        </div>

        <div className={style.navFriends}>
          Friends
        </div>

        <div className={style.friends}>
          <div className={style.friendElement}></div>
          { friendElement }
        </div>
    </nav>
  );
}

export default Navbar;
