import React from 'react';
import '../sass/MainPage.sass';
import ItemListBlock from '../components/ItemList';
import SWApiService from '../SWApiService';
import ErrorBoundry from '../components/ErrorBoundry';
import InfoBlock from '../components/ItemInfo';
import RenderInfoElem from '../components/RenderInfo';

export default class MainPage extends React.Component {
  swapi = new SWApiService();
  state = {
    planetId: 2,
  };

  changePlanet = (id) => {
    this.setState({ planetId: id });
  };

  render() {
    return (
      <div className='row'>
        <ErrorBoundry>
          <div className='col-12'>
            <div className='mainBlock fadeInDown animated'>
              <InfoBlock getItem={this.swapi.getPerson} getImgUrl={this.swapi.getPersonImg}>
                <RenderInfoElem fild='name' label='Имя' />
                <RenderInfoElem fild='gender' label='Пол' />
                <RenderInfoElem fild='height' label='Рост' />
                <RenderInfoElem fild='hair_color' label='Цвет волос' />
              </InfoBlock>
            </div>
          </div>
        </ErrorBoundry>
        <ErrorBoundry>
          <div className='col-6'>
            <div className='mainBlock fadeInLeft animated'>
              <ItemListBlock getData={this.swapi.getAllPlanets} changePlanet={this.changePlanet} planet={this.state.planetId}></ItemListBlock>
            </div>
          </div>
        </ErrorBoundry>
        <ErrorBoundry>
          <div className='col-6'>
            <div className='mainBlock fadeInRight animated'>
              <InfoBlock getItem={this.swapi.getPlanet} itemId={this.state.planetId} getImgUrl={this.swapi.getPlanetImg}>
                <RenderInfoElem fild='name' label='Название планеты' />
                <RenderInfoElem fild='diameter' label='Диаметр' />
                <RenderInfoElem fild='orbital_period' label='Период вращения' />
                <RenderInfoElem fild='population' label='Население' />
              </InfoBlock>
            </div>
          </div>
        </ErrorBoundry>
      </div>
    );
  }
}
