import React from 'react';
import '../sass/Header.sass';
import ChangeColorBtn from './ChangeColor';
import { Link} from 'react-router-dom'

const Header = ({ changeColor, changePage, startPage }) => {
  const items = [
    { name: '/MainPage/', value: 'Главная' },
    { name: '/SecondPage/', value: 'Информация о персонажах' },
    { name: '/ThirdPage/', value: 'Список кораблей' },
  ];
  const allItems = items.map(({ name, value }) => {
    let isActiv = startPage === name;
    return (
      <li onClick={() => changePage(name)} key={name} className={isActiv ? 'header__item active' : 'header__item'}>
        <Link key={name} className={isActiv ? 'header__item active' : 'header__item'} to={name}>
          {value}
        </Link>
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
