import React from 'react';
import './sass/App.sass';
import MainPage from './Pages/MainPage';
import SecondPage from './Pages/SecondPage';
import ThirdPage from './Pages/ThirdPage';
import HeaderBlock from './components/Header';
import { Provider } from './components/ColorContext';

export default class App extends React.Component {
  state = {
    page: 'MainPage',
    colorClass: '',
  };

  componentDidMount() { 
    console.log(this.props)
  }

  rgb2hex = (rgb) => {
    const rgbColor = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
    return rgbColor && rgbColor.length === 4
      ? '#' + ('0' + parseInt(rgbColor[1], 10).toString(16)).slice(-2) + ('0' + parseInt(rgbColor[2], 10).toString(16)).slice(-2) + ('0' + parseInt(rgbColor[3], 10).toString(16)).slice(-2)
      : '';
  };
  changeColor = (newColor) => {
    const color = this.rgb2hex(document.body.style.background);
    if (newColor === color || color === '') {
      document.body.style.background = '#ffffff';
      this.setState({
        colorClass: 'mainBlock__white',
      });
    } else {
      document.body.style.background = newColor;
      this.setState({
        colorClass: '',
      });
    }
  };
  changePage = (newPage) => {
    this.setState({ page: newPage });
  };
  renderForMainPage = () => {
    return (
      <Provider value={this.state.colorClass}>
        <MainPage />
      </Provider>
    );
  };
  render() {
    const { page } = this.state;
    let visiblePage;
    switch (this.state.page) {
      case 'MainPage':
        visiblePage = this.renderForMainPage();
        break;
      case 'SecondPage':
        visiblePage = <SecondPage />;
        break;
      case 'ThirdPage':
        visiblePage = <ThirdPage />;
        break;
      default:
        visiblePage = <MainPage />;
        break;
    }
    return (
      <div className='containerfluid'>
        <HeaderBlock changeColor={this.changeColor} changePage={this.changePage} startPage={page} />
        <div className='container content'>{visiblePage}</div>
      </div>
    );
  }
}

App.defaultProps = {
  fjwifj: 89,
  updateInterval: () => { },
}