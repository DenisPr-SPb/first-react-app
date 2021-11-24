import React from 'react';
import style from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  return (
    <div className={style.profileInfo}>
      <div className={style.headImg}>
        <img src='https://pbs.twimg.com/media/CcvcLQvW0AAlEtL.jpg' alt=""/>
      </div>
      <div className={style.description}>
          <div className={style.avatar}>
            <img src="https://icdn.lenta.ru/images/2021/04/27/16/20210427163138131/square_320_c09ebae17387b7d6eeb9fa0d42afe5ee.jpg" alt="" />
          </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
