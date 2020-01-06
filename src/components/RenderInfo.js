import React from 'react';
const RenderInfoBlock = ({ item, fild, label }) => {
  const itemFild = item[fild] === undefined ? 'нет данных' : item[fild] === 'unknown' ? 'неизвестно' : item[fild];
  return (
    <li>
      <span>{`${label}: ${itemFild}`}</span>
    </li>
  );
}
export default RenderInfoBlock