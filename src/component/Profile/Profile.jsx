import React from 'react';
import style from './Profile.module.css';

const Profile = (props) => {
  return (
    <div className={style.profile}>
      <div>
        <img src='https://pbs.twimg.com/media/CcvcLQvW0AAlEtL.jpg'/>
      </div>

      <div>
        <div>
          <img src="https://icdn.lenta.ru/images/2021/04/27/16/20210427163138131/square_320_c09ebae17387b7d6eeb9fa0d42afe5ee.jpg" alt="" />
        </div>
      </div>
      <div>
        my posts
        <div>
          New post
        </div>
        <div>
          <div>
            post 1
          </div>
          <div>
            post 2
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
