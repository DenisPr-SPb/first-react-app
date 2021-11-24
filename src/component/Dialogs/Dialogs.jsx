import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Dialogs.module.css';


const DialogItem = (props) => {
  return (
    <div className={style.dialog}>
    <NavLink to={'/dialog/' + props.id}>{props.name}</NavLink> 
  </div>
  )
}

const Message = (props) => {
  return (
    <div className={style.message}>{props.message}</div>
  )
}


const Dialogs = (props) => {
  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        <DialogItem name='Denis' id='1'/>
        <DialogItem name='Sveta' id='2'/>
        <DialogItem name='Polya' id='3'/>
        <DialogItem name='Dima' id='4'/>
      </div>

      <div className={style.messages}>
        <Message message='Hei'/>
        <Message message='Kuka sina olet?'/>
        <Message message='Mina olen Denis'/>
      </div>
    </div>
  );
}

export default Dialogs;
