import React from 'react';
import '../sass/Header.sass';

export default class App extends React.Component {
  render(){
    return (
      <nav>
        <ul className='header'>
          <li className='header__item'><a href='#'>Пункт меню 1</a></li>
          <li className='header__item'><a href='#'>Пункт меню 2</a></li>
          <li className='header__item'><a href='#'>Пункт меню 3</a></li>
          <li className='header__item'><a href='#'>Пункт меню 4</a></li>
        </ul>
      </nav>
    );
  }
}