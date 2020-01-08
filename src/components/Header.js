import React from 'react';
import '../sass/Header.sass';
import ChangeColorBtn from './ChangeColor';

const Header = ({ changeColor, changePage, startPage }) => {
  const items = [
    { name: 'MainPage', value: 'Главная' },
    { name: 'SecondPage', value: 'Больше инофрмации' },
    { name: 'ThirdPage', value: 'О нас' },
  ];
  const allItems = items.map(({ name, value }) => {
    let isActiv = startPage === name;
    return (
      <li onClick={() => changePage(name)} key={name} className={isActiv ? 'header__item active' : 'header__item'}>
        {value}
      </li>
    );
  });

  return (
    <nav>
      <ul className='header'>{allItems}</ul>
      <ChangeColorBtn changeColor={changeColor} />
    </nav>
  );
};

export default Header;
