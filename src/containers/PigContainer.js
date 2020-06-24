import React, { Fragment } from "react";
import Pig from '../components/Pig.js'


class PigContainer extends React.Component {
  
  
  render() {
    
    return (
      <div >
        {this.props.pigs.map(pig => 
          <Pig
            pig={pig}
            key={pig.id}
          />
        )}
      </div>
    );
  }
}

export default PigContainer;
