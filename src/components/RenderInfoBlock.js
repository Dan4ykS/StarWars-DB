import React from 'react';

const RenderInfoBlock = ({ data, fild, label }) => {
  const itemFild = data[fild] === undefined || data[fild] === 'unknown' ? 'нет данных' : data[fild];

  return (
    <li>
      <span>{`${label}: ${itemFild}`}</span>
    </li>
  );
};
export default RenderInfoBlock;
