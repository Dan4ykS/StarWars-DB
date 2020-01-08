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
    colorClass: '',
    redirect: false,
  };

  redirectToMainPage = () => {
    this.setState(({ redirect }) => {
      return {
        redirect: !redirect,
      };
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
      document.body.style.background = '#0240efc9';
      document.body.style.color = newColor;
      this.setState({
        colorClass: 'mainBlock__white',
      });
    } else {
      document.body.style.background = newColor;
      document.body.style.color = '#0240efc9';
      this.setState({
        colorClass: '',
      });
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
                  <Route exact path='/ThirdPage/:id([1-9]|[1-2][\d])?' component={StarshipPage} exact />
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

App.defaultProps = {
  fjwifj: 89,
  updateInterval: () => {},
};
