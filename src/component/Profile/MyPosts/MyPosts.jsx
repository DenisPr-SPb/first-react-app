import React from 'react';
import style from './MyPosts.module.css';
import Posts from './Post/Posts';

const MyPosts = (props) => {



  const postElement = props.state.posts.map ( (post) => {
    return <Posts message={post.message} likesCount={post.likesCount}/>
  })

  const newPostElement = React.createRef();

  const addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = '';
  }

  return (
    <div>
      <div className={style.posts}>
        <h2>my posts</h2>
        <div>
          <div>
            <textarea ref={newPostElement}></textarea>
          </div>
          <div>
            <button onClick={ addPost }>Add post</button>
          </div>
        </div>
        
        { postElement }

      </div>
    </div>
  );
}

export default MyPosts;
