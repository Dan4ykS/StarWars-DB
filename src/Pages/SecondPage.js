import React from 'react';
import '../sass/MainPage.sass';
import PlanetInfoBlock from '../components/PlanetsInfo'


export default class App extends React.Component {
  render(){
    return (
      <div className='row'>
        <div className='col-lg-6'>
          <PlanetInfoBlock />
        </div>
      </div>
    );
  }
}