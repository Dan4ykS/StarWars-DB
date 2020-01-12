import React from 'react';
import { Consumer } from '../components/ColorContext';
import ErrorBoundry from '../components/ErrorBoundry';
import { StarshipDetails } from '../components/ItemDetails';
import { withRouter } from 'react-router-dom';

const starshipPage = ({ match }) => {
  const { id } = match.params;
  return (
    <Consumer>
      {(changeColor) => {
        return (
          <ErrorBoundry>
            <div className='col-12'>
              <div className={`mainBlock ${changeColor} fadeInLeft animated`}>
                <StarshipDetails itemId={id} />
              </div>
            </div>
          </ErrorBoundry>
        );
      }}
    </Consumer>
  );
};

export default withRouter(starshipPage);
