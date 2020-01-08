import React from 'react';
import '../sass/ItemList.sass';

const allItems = (props) => {
  const { data, changeItem, itemId } = props;
  const allItems = data.map(({ name, id }) => {
    const isActive = id === itemId;
    return (
      <div onClick={() => changeItem(id)} className={isActive ? 'itemName itemName_active' : 'itemName'} key={id}>
        {name}
      </div>
    );
  });
  return <div className='wrap'>{allItems}</div>;
};

export default allItems;
