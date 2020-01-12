import React from 'react';
import { Redirect } from 'react-router-dom';
import '../sass/Page404.sass';

const page404 = ({ redirectToMainPage, redirect }) => {
  if (redirect) {
    return <Redirect to='/MainPage/' />;
  }
  return (
    <>
      <h1>Эта страница не найдена !!! </h1>
      <button className='customBtn' onClick={redirectToMainPage}>
        На главную
      </button>
    </>
  );
};

export default page404;
