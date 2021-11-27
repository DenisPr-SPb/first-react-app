import React from 'react';
import style from './Posts.module.css';

const Posts = (props) => {
  return (
          <div className={style.post}>
            <div>
              <img src="https://klike.net/uploads/posts/2020-04/1587719791_1.jpg" alt="" />
            </div>

            <div className={style.postMessage}>
              {props.message}

              <div className={style.likes}>
                likes: {props.likesCount}
              </div>
            </div>
          </div>

  );
}

export default Posts;
