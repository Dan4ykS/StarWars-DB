import React from 'react';
import './sass/App.sass'
import MainPage from './Pages/MainPage'
import SecondPage from './Pages/SecondPage'
import ThirdPage from './Pages/ThirdPage'
import HeaderBlock from './components/Header'

export default class App extends React.Component {
  state = {
    page: 'MainPage'
  }
  changePage = (newPage) => {
    this.setState({page: newPage})
  };
  render(){
    const {page} = this.state;
    let visiblePage;
    switch (this.state.page) {
      case 'MainPage':
        visiblePage = <MainPage />
        break;
      case 'SecondPage':
        visiblePage = <SecondPage />
        break;
      case 'ThirdPage':
        visiblePage = <ThirdPage />
        break;
      default:
        visiblePage = <MainPage />
        break;
    }
    return (
      <div className='containerfluid'>
        <HeaderBlock
        changePage = {this.changePage}
        startPage = {page} />
        <div className='container content'>
          {visiblePage}
        </div>
      </div>
    );
  }
}