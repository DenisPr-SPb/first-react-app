import React from 'react';
import style from './MyPosts.module.css';
import Posts from './Post/Posts';

const MyPosts = (props) => {
  return (
    <div>
      <div className={style.posts}>
        my posts
        <div>
          <textarea ></textarea>
          <button>Add post</button>
        </div>
        
        <Posts message='Hi, how are you' likeCount='15'/>
        <Posts message='It is my new post' likeCount='20'/>

      </div>
    </div>
  );
}

export default MyPosts;
