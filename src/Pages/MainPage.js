import React from 'react';
import '../sass/MainPage.sass';
import PlanetInfoBlock from '../components/PlanetInfo'
import AllPlanetsBlock from '../components/AllPlanets'

export default class MainPage extends React.Component {
  render(){
    return (
      <div className='row'>
        <div className='col-12'>
          <PlanetInfoBlock
          desiredClass = 'planetsBlock fadeInDown animated' />
        </div>
        <div className='col-lg-6'>
          <AllPlanetsBlock />
        </div>
        <div className='col-lg-6'>
          <PlanetInfoBlock
          desiredClass = 'planetsBlock fadeInRight animated' />
        </div>
      </div>
    );
  }
}