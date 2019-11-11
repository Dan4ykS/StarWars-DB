import React from 'react';
import '../sass/MainPage.sass';
import PlanetInfoBlock from '../components/PlanetInfo';
import ItemListBlock from '../components/ItemList';
import SWApiService from '../SWApiService';

export default class MainPage extends React.Component {
  swapi = new SWApiService();
  render(){
    return (
      <div className='row'>
        <div className='col-12'>
          <PlanetInfoBlock
          desiredClass = 'mainBlock fadeInDown animated' />
        </div>
        <div className='col-lg-6'>
          <ItemListBlock getData = {this.swapi.getAllPlanets} />
        </div>
        <div className='col-lg-6'>
          <PlanetInfoBlock
          desiredClass = 'mainBlock fadeInRight animated' />
        </div>
      </div>
    );
  }
}