import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import Dialogs from './component/Dialogs/Dialogs';
import Header from './component/Header/Header';
import Music from './component/Music/Music';
import Navbar from './component/Navbar/Navbar';
import News from './component/News/News';
import Profile from './component/Profile/Profile';
import Settings from './component/Settings/Settings';





const App = (props) => {
  return (
      <div className="app-wrapper">
        
        <Header />

        <Navbar state={props.state.sideBar}/>

        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/dialogs' element={
              <Dialogs store = { props.store } />
            }/>

            <Route path='/profile' element={
              <Profile  profilePage={props.state.profilePage} 
                        dispatch={ props.dispatch } 

              />
            }/>

            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </div> 


        
      </div>
  );
}

export default App;
