import React from 'react';
import './sass/App.sass';
import MainPage from './Pages/MainPage'
// import SecondPage from './Pages/SecondPage'
import HeaderBlock from './components/Header'


export default class App extends React.Component {
  render(){
    return (
      <div className='containerfluid'>
        <HeaderBlock />
        <div className='container'>
          <MainPage />
          {/* <SecondPage /> */}
        </div>
      </div>
    );
  }
}