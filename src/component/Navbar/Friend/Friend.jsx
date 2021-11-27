import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Friend.module.css';

const Friend = (props) => {

  return (
        <div className={style.friends}>
          <NavLink to={'/friend/' + props.id}>
            <div className={style.avatar}></div>
            <p className={style.name}>
              {props.name}
            </p>
          </NavLink>
        </div>

  );
}

export default Friend;
