import React from 'react'
const WrapForElements = ({ img, item, elemToRender }) => {
  return (
    <>
      <div className='blockHeader'>{item.name}</div>
      <div className='mainBlock__wrap'>
        <div className='mainBlock__img'>
          <img src={img} alt='planet' />
        </div>
        <div className='mainBlock__descr'>
          <ul>
            {React.Children.map(elemToRender, (child) => {
              return React.cloneElement(child, { item });
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
export default WrapForElements;