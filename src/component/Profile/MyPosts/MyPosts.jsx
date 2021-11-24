import React from 'react';
import style from './MyPosts.module.css';
import Posts from './Post/Posts';

const MyPosts = (props) => {
  return (
    <div>
      <div className={style.posts}>
        my posts
        <div>
          <div>
            <textarea></textarea>
          </div>
          <div>
            <button>Add post</button>
          </div>
        </div>
        
        <Posts message='Hi, how are you' likeCount='15'/>
        <Posts message='It is my new post' likeCount='20'/>

      </div>
    </div>
  );
}

export default MyPosts;
