const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPADTE-NEW-MESSAGE-BODY';

const dialogsReducer = (state, action) => {
    
    switch (action.type) {

        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.newText;
            return state;

        case ADD_MESSAGE: 
            let newMessage = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id:9, message: newMessage});
            return state;

        default: 
            return state;    
    }
}

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}
export const updateNewMessageText = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        newText: text
    }
}

export default dialogsReducer;