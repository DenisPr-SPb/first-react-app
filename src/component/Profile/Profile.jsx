import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import style from './Profile.module.css';

const Profile = (props) => {
  return (
    <div className={style.profile}>
      <div className={style.headImg}>
        <img src='https://pbs.twimg.com/media/CcvcLQvW0AAlEtL.jpg'/>
      </div>
      <div className={style.profileWrapper}>
        <div>
          <div className={style.avatar}>
            <img src="https://icdn.lenta.ru/images/2021/04/27/16/20210427163138131/square_320_c09ebae17387b7d6eeb9fa0d42afe5ee.jpg" alt="" />
          </div>
        </div>

        <MyPosts />
      </div>
    </div>
  );
}

export default Profile;
