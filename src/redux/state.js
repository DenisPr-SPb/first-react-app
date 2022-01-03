import dialogsReducer from "./dialogsReducer";
import profileRducer from "./profileReducer";
import sidebarReducer from "./sidebarRducer";

let store = {
    _state: {

        profilePage: {
            posts: [
                {id:'1' ,message:'Hi, how are you', likesCount: 15},
                {id:'2' ,message:'It is my new post', likesCount: 20},
                {id:'3' ,message:'Some new post', likesCount: 23},
            ],
            newPostText: '',
        },
    
    
        dialogsPage: {
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
        },
    
    
        sideBar: [
            {id:'1', name:'Denis'},
            {id:'2', name:'Sveta'},
            {id:'3', name:'Polya'},
        ],
    
    },
// --------------------------------------------------------------------
    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
// --------------------------------------------------------------------
    _callSubscriber() {
        console.log('rended')
    },
// --------------------------------------------------------------------
    dispatch(action) {

        this._state.profilePage = profileRducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sideBar = sidebarReducer(this._state.sideBar, action);

        this._callSubscriber(this._state);

    },
}

export default store;

window.store = store;