const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPADTE-NEW-MESSAGE-BODY';

const initialState = {
    messages: [
        {id:'1' ,message:'Moi'},
        {id:'2' ,message:'Kuka sina olet?'},
        {id:'3' ,message:'Mina olen Denis'},
        {id:'4' ,message:'New message'},
    ],

    newMessageBody:'',
    
    dialogs: [
        {id:'1', name:'Denis'},
        {id:'2', name:'Sveta'},
        {id:'3', name:'Polya'},
        {id:'4', name:'Dima'},
    
    ],
}

const dialogsReducer = (state = initialState, action) => {
    
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