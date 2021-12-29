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
            {id:'3', name:'Polya'}
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
        if (action.type === 'ADD-POST') {
            const newPost = {
                id: 5,
                message:this._state.profilePage.newPostText,
                likesCount: 0,
            };
        
            this._state.profilePage.posts.unshift(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);

        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);

        }
    },

}

export default store;

window.store = store;