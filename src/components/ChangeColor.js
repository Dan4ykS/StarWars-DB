import React from 'react';

const changeColorButton = ({ changeColor }) => {
  return <button onClick={() => changeColor('#1f1f1f')}>Сменить тему</button>;
};

export default changeColorButton;
