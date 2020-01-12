import React from 'react';
import '../sass/PlanetInfo.sass';
import RenderInfoElem from './RenderInfoBlock';

// Закоментированый кусок кода - пример как использовать
// React.Children.map(нужен для добавляения новых свойст дочерним элементам компонента)

// const WrapForElements = (props) => {
//   const { children, data, img } = props
//   (children)
//   return (
//     <>
//       <div className='blockHeader'>{data.name}</div>
//       <div className='mainBlock__wrap'>
//         <div className='mainBlock__img'>
//           <img src={img} alt='planet' />
//         </div>
//         <div className='mainBlock__descr'>
//           <ul>
//             {React.Children.map(children, (child) => {
//               return React.cloneElement(child, { data });
//             })}
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// };

const personsDetailsConf = (data) => {
  return (
    <>
      <RenderInfoElem data={data} fild='name' label='Имя' />
      <RenderInfoElem data={data} fild='gender' label='Пол' />
      <RenderInfoElem data={data} fild='height' label='Рост' />
      <RenderInfoElem data={data} fild='hair_color' label='Цвет волос' />
    </>
  );
};

const starshipsDetailsConf = (data) => {
  return (
    <>
      <RenderInfoElem data={data} fild='name' label='Имя' />
      <RenderInfoElem data={data} fild='model' label='Модель' />
      <RenderInfoElem data={data} fild='cost' label='Цена' />
      <RenderInfoElem data={data} fild='hyperdriveRating' label='Рейтинг гипер прыжка' />
    </>
  );
};

const planetsDetailsConf = (data) => {
  return (
    <>
      <RenderInfoElem data={data} fild='name' label='Название планеты' />
      <RenderInfoElem data={data} fild='diameter' label='Диаметр' />
      <RenderInfoElem data={data} fild='orbital_period' label='Период вращения' />
      <RenderInfoElem data={data} fild='population' label='Население' />
    </>
  );
};

const RenderItemDetails = (props) => {
  const { data, img, type } = props;
  const content = type === 'planet' ? planetsDetailsConf(data) : type === 'person' ? personsDetailsConf(data) : type === 'starship' ? starshipsDetailsConf(data) : null;
  return (
    <>
      <div className='blockHeader'>{data.name}</div>
      <div className='mainBlock__wrap'>
        <div className='mainBlock__img'>
          <img src={img} alt='planet' />
        </div>
        <div className='mainBlock__descr'>
          <ul>{content}</ul>
        </div>
      </div>
    </>
  );
};

export default RenderItemDetails;
