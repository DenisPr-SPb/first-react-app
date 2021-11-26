import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import style from './Dialogs.module.css';
import Message from './Message/Message';


const Dialogs = (props) => {

  const dialogElement= props.state.dialogs.map ( (dialog) => {
    return  <DialogItem name={dialog.name} id={dialog.id} />
  }) 

  const messagesElement = props.state.messages.map ( (message) => {
    return <Message message={message.message}/>
  })

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        { dialogElement }
      </div>

      <div className={style.messages}>
        { messagesElement } 
      </div>
    </div>
  );
}

export default Dialogs;
