import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
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
              <Dialogs state={props.state.dialogsPage} />
            }/>

            <Route path='/profile' element={
              <Profile state={props.state.profilePage} addPost={ props.addPost }/>
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
