import React from 'react';
import './App.css';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Nav from './component/Nav/Nav';
import Profile from './component/Profile/Profile';

const App = (props) => {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Profile />
      <Footer />
    </div>
  );
}

export default App;
