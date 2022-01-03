import React from 'react';
import { addMessageActionCreator, updateNewMessageText } from '../../redux/dialogsReducer';
import DialogItem from './DialogItem/DialogItem';
import style from './Dialogs.module.css';
import Message from './Message/Message';


const Dialogs = (props) => {

  const state = props.store.getState().dialogsPage;

  const dialogElement= state.dialogs.map ( (dialog) => {
    return  <DialogItem name={dialog.name} id={dialog.id} />
  }) 

  const messagesElement = state.messages.map ( (message) => {
    return <Message message={message.message}/>
  })


  const newMessageBody = state.newMessageBody

  const addMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  }
  
  const onMessageChange = (event) => {
    let newText = event.target.value;
    props.store.dispatch(updateNewMessageText (newText))
  }

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        { dialogElement }
      </div>

      <div className={style.messages}>
        { messagesElement } 

        <div>
          <div>
            <textarea onChange={ onMessageChange } value={ newMessageBody }></textarea>
          </div>

          <div>
            <button onClick={ addMessage }>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
