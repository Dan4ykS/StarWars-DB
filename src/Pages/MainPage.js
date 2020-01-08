import React from 'react';
import '../sass/MainPage.sass';
import ErrorBoundry from '../components/ErrorBoundry';
import { PlanetsList } from '../components/ItemList';
import { PersonDetails, PlanetDetails } from '../components/ItemDetails';
import { Consumer } from '../components/ColorContext';
import { withRouter } from 'react-router-dom';

const MainPage = ({ history, match }) => {
  const { id } = match.params;
  return (
    <>
      <Consumer>
        {(colorClass) => {
          return (
            <ErrorBoundry>
              <div className='col-12'>
                <div className={`mainBlock ${colorClass} fadeInDown animated`}>
                  <PersonDetails />
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
                  <PlanetsList changeItem={(id) => history.push(`${id}`)} itemId={id} />
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
                  <PlanetDetails itemId={id} />
                </div>
              </div>
            </ErrorBoundry>
          );
        }}
      </Consumer>
    </>
  );
};
export default withRouter(MainPage);
