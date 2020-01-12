import React from 'react';
import '../sass/ItemList.sass';

const allItems = (props) => {
  const { data, changeItem, itemId, changeColor } = props;
  console.log(changeColor)
  const allItems = data.map(({ name, id }) => {
    const isActive = id === +itemId,
      activeColor = changeColor === '' ? 'itemName_active' : 'itemName_activeWhite';
    return (
      <div onClick={() => changeItem(id)} className={isActive ? `itemName ${activeColor}` : 'itemName'} key={id}>
        {name}
      </div>
    );
  });

  return <div className='wrap'>{allItems}</div>;
};

allItems.defaultProps = {
  changeItem: () => { },
  changeColor: undefined
};

export default allItems;
