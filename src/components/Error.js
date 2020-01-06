import React from 'react';
import '../sass/Error.sass';
import DethStar from '../img/Death-star.svg';

const Error = () => {
    return (
     <div className='error'>
       <img src={DethStar} alt='error'/>
       <div className='error__txt'>Возникли некоторые проблемы <br/>Скоро они будут исправлены &#128517; </div>
     </div>
    );
}
export default Error