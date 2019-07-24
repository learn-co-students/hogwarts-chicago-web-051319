import React, {Component} from 'react';

class HogTile extends Component {
  constructor(props){
    super(props);
    this.state = {
      showMore: false
    }
  }

  findImage(){
    const image_path = this.props.hog.name.toLowerCase().split(" ").join("_");
    const image = require(`../hog-imgs/${image_path}.jpg`)
    return image
  }

  handleShow(){
    this.setState({
      showMore: !this.state.showMore
    })
  }

  renderShowMore(){
    const weightKey = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water';
    return (
      <div>
        <p>Specialty: {this.props.hog.specialty}</p>
        <p>Greased: {this.props.hog.greased ? 'greased' : 'ungreased'}</p>
        <p>Medal: {this.props.hog['highest medal achieved']}</p>
        <p>Weight: {this.props.hog[weightKey]}</p>
      </div>
    )
  }

  render(){
    const image_path = this.findImage()
    return (
      <div>
        <img src={`${image_path}`} width={150} height={150} />
        <p>{this.props.hog.name}</p>
        <p>{this.state.showMore ? this.renderShowMore() : null}</p>
        <button onClick={() => this.handleShow()}>{this.state.showMore ? "Show Less" : "Show More"}</button>
      </div>
    )
  }
}
export default HogTile;
