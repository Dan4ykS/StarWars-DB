import React from 'react';
import '../sass/MainPage.sass';
import SWApiService from '../SWApiService';
import ErrorBoundry from '../components/ErrorBoundry';
import { PersonsList, PlanetsList, StarshipsList } from '../components/ItemList';
import { PersonDetails, PlanetDetails, StarshipDetails } from '../components/ItemDitails';
import { Consumer } from '../components/ColorContext';

export default class MainPage extends React.Component {
  swapi = new SWApiService();
  state = {
    planetId: 2,
    personId: 1,
  };

  changePlanet = (id) => {
    this.setState({ planetId: id });
  };

  changePerson = (id) => {
    this.setState({ personId: id });
  };

  render() {
    return (
      <div className='row'>
        <Consumer>
          {(colorClass) => {
            return (
              <ErrorBoundry>
                <div className='col-12'>
                  <div className={`mainBlock ${colorClass} fadeInDown animated`}>
                    <PersonDetails arr={this.state.personId} />
                  </div>
                </div>
              </ErrorBoundry>
            );
          }}
        </Consumer>

        <Consumer>
          {(colorClass) => {
            return (
              <ErrorBoundry>
                <div className='col-6'>
                  <div className={`mainBlock ${colorClass} fadeInLeft animated`}>
                    <PlanetsList changeItem={this.changePlanet} itemId={this.state.planetId} />
                  </div>
                </div>
              </ErrorBoundry>
            );
          }}
        </Consumer>

        <Consumer>
          {(colorClass) => {
            return (
              <ErrorBoundry>
                <div className='col-6'>
                  <div className={`mainBlock ${colorClass} fadeInDown animated `}>
                    <PlanetDetails itemId={this.state.planetId} />
                  </div>
                </div>
              </ErrorBoundry>
            );
          }}
        </Consumer>
      </div>
    );
  }
}
