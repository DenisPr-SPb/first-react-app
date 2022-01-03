import React from 'react';
import { addPostActionCreator, updateNewPostTextCreator } from '../../../redux/profileReducer';
import style from './MyPosts.module.css';
import Posts from './Post/Posts';

const MyPosts = (props) => {


  const postElement = props.posts.map ( (post) => {
    return <Posts message={post.message} likesCount={post.likesCount}/>
  })

  const newPostElement = React.createRef();

  const addPost = () => {
    props.dispatch(addPostActionCreator());
  }


  const onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextCreator(text));
  }

  return (
    <div>
      <div className={style.posts}>
        <h2>my posts</h2>
        <div>
          <div>
            <textarea onChange={ onPostChange } ref={newPostElement} value={ props.newPostText } />
          </div>
          <div>
            <button  onClick={ addPost }>Add post</button>
          </div>
        </div>
        
        { postElement }

      </div>
    </div>
  );
}

export default MyPosts;
