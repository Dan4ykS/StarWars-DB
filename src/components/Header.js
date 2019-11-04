import React from 'react';
import '../sass/Header.sass';

export default class Header extends React.Component {
  items = [
    {name: 'MainPage', value: 'Главная'},
    {name: 'SecondPage', value: 'Больше инофрмации'},
    {name: 'ThirdPage', value: 'О нас'}
  ];
  render(){
    const items = this.items.map(({name,value}) => {
      const {changePage = () => {} ,startPage} = this.props;
      let isActiv = startPage === name;
      return(
        <li onClick = {() => changePage(name)} key = {name} className = {isActiv ? 'header__item active' : 'header__item'}>{value}</li>
      );
    })
    return (
      <nav>
        <ul className='header'>
          {items}
        </ul>
      </nav>
    );
  }
}