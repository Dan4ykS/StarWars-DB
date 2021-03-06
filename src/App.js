import React from 'react';
import './sass/App.sass';
import MainPage from './Pages/MainPage';
import SecondPage from './Pages/SecondPage';
import ThirdPage from './Pages/ThirdPage';
import HeaderBlock from './components/Header';
import { Provider } from './components/ColorContext';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StarshipPage from './Pages/StarshipPage';
import Page404 from './Pages/Page404';

export default class App extends React.Component {
  state = {
    page: '',
    colorClass: localStorage.getItem('theme'),
    redirect: false,
  };

  componentDidMount() {
    if (localStorage.length !== 0) {
      this.theme(localStorage);
    }
  }

  redirectToMainPage = () => {
    this.setState(({ redirect }) => {
      return {
        redirect: !redirect,
      };
    });
  };

  theme = (localStorage) => {
    document.body.style.background = localStorage.getItem('bgColor');
    document.body.style.color = localStorage.getItem('textColor');
    this.setState({
      colorClass: localStorage.getItem('theme'),
    });
  };

  rgb2hex = (rgb) => {
    const rgbColor = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
    return rgbColor && rgbColor.length === 4
      ? '#' + ('0' + parseInt(rgbColor[1], 10).toString(16)).slice(-2) + ('0' + parseInt(rgbColor[2], 10).toString(16)).slice(-2) + ('0' + parseInt(rgbColor[3], 10).toString(16)).slice(-2)
      : '';
  };

  changeColor = (newColor) => {
    const color = this.rgb2hex(document.body.style.background);
    if (newColor === color || color === '') {
      localStorage.setItem('bgColor', '#fff');
      localStorage.setItem('textColor', '#1f1f1f');
      localStorage.setItem('theme', 'mainBlock__white');
      this.theme(localStorage);
    } else {
      localStorage.setItem('bgColor', '#1f1f1f');
      localStorage.setItem('textColor', '#fff');
      localStorage.setItem('theme', '');
      this.theme(localStorage);
    }
  };

  changePage = (newPage) => {
    this.setState({ page: newPage });
  };

  render() {
    const { page, redirect } = this.state;
    return (
      <div className='containerfluid'>
        <Router>
          <HeaderBlock changeColor={this.changeColor} changePage={this.changePage} startPage={page} />
          <div className='container content'>
            <Provider value={this.state.colorClass}>
              <div className='row'>
                <Switch>
                  <Route path='/' render={() => <h1>Добро пожаловать</h1>} exact />
                  <Route path='/MainPage/:id([1-9]|[1-2][\d])?' component={MainPage} exact />
                  <Route path='/SecondPage/' component={SecondPage} exact />
                  <Route path='/ThirdPage/' component={ThirdPage} exact />
                  <Route path='/ThirdPage/:id([1-9]|[1-2][\d])?' component={StarshipPage} exact />
                  <Route
                    render={() => {
                      return <Page404 redirect={redirect} redirectToMainPage={this.redirectToMainPage} />;
                    }}
                  />
                </Switch>
              </div>
            </Provider>
          </div>
        </Router>
      </div>
    );
  }
}

// Назначение свойств по умолчанию
// App.defaultProps = {
//   fjwifj: 89,
//   updateInterval: () => {},
// };
