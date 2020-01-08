import React from 'react';

const changeColorButton = ({ changeColor }) => {
  return <button onClick={() => changeColor('#1f1f1f')}>Сменить цвет</button>;
};

export default changeColorButton;
