import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './DialogItem.module.css';


const DialogItem = (props) => {
  return (
    <div className={style.dialog}>
    <NavLink to={'/dialog/' + props.id}>{props.name}</NavLink> 
  </div>
  )
}


export default DialogItem;
