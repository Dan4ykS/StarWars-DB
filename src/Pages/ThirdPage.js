import React from 'react';
import { StarshipsList } from '../components/ItemList';
import ErrorBoundry from '../components/ErrorBoundry';
import { Consumer } from '../components/ColorContext';
import { withRouter } from 'react-router-dom';

const ThirdPage = ({ history, match }) => {
  const { id } = match.params;
  return (
    <Consumer>
      {(changeColor) => {
        return (
          <ErrorBoundry>
            <div className='col-12'>
              <div className={`mainBlock ${changeColor} fadeInDown animated`}>
                <StarshipsList
                  itemid={id}
                  changeItem={(itemid) => {
                    history.push(`${itemid}`);
                  }}
                />
              </div>
            </div>
          </ErrorBoundry>
        );
      }}
    </Consumer>
  );
};

export default withRouter(ThirdPage);
