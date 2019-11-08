import React from 'react';

export default function Loader () {
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