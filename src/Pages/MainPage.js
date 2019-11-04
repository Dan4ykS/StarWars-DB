import React from 'react';
import '../sass/MainPage.sass';
import PlanetInfoBlock from '../components/PlanetsInfo'
import AllPlanetBlock from '../components/AllPlanet'


export default class App extends React.Component {
  render(){
    return (
      <div className='row'>
        <div className='col-12'>
          <PlanetInfoBlock
          desiredClass = 'planetsBlock fadeInDown animated' />
        </div>
        <div className='col-md-6'>
          <AllPlanetBlock />
        </div>
        <div className='col-md-6'>
          <PlanetInfoBlock
          desiredClass = 'planetsBlock fadeInRight animated' />
        </div>
      </div>
    );
  }
}