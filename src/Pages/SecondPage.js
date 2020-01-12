import React from 'react';
import ErrorBoundry from '../components/ErrorBoundry';
import { PersonDetails } from '../components/ItemDetails';
import { Consumer } from '../components/ColorContext';

const SecondPage = () => {
  return (
    <Consumer>
      {(changeColor) => {
        return (
          <ErrorBoundry>
            <div className='col-12'>
              <div className={`mainBlock ${changeColor} fadeInLeft animated`}>
                <PersonDetails />
              </div>
            </div>
          </ErrorBoundry>
        );
      }}
    </Consumer>
  );
};

export default SecondPage;
