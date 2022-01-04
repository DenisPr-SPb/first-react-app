const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
    posts: [
        {id:'1' ,message:'Hi, how are you', likesCount: 15},
        {id:'2' ,message:'It is my new post', likesCount: 20},
        {id:'3' ,message:'Some new post', likesCount: 23},
    ],
    newPostText: '',
}

const profileRducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST: 
            const newPost = {
                id: 5,
                message:state.newPostText,
                likesCount: 0,
            };
        
            state.posts.unshift(newPost);
            state.newPostText = '';
            return state;

        case UPDATE_NEW_POST_TEXT: 
            state.newPostText = action.newText;
            return state;

        default:
            return state;    
    }  
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export default profileRducer;