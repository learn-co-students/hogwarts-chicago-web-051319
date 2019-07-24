import React, {Component} from 'react';
import HogTile from './HogTile';

class HogContainer extends Component {

  renderHogs(){
    return this.props.hogs.map(hog => {
      return <HogTile hog={hog} />
    })
  }

  render(){
    return (
      <div>
        {this.renderHogs()}
      </div>
    )
  }
}
export default HogContainer;
