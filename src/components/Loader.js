import React from 'react';

export default class Loader extends React.Component {
  render(){
    return (
      <div className="lds-css ng-scope">
        <div className="lds-wedges">
          <div>
            <div>
              <div></div>
            </div>
            <div>
              <div></div>
            </div>
            <div>
              <div></div>
            </div>
            <div>
              <div></div>
            </div>
          </div>
        </div>
     </div> 
    );
  }
}