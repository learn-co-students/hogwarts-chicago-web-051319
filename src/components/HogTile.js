import React, { Component } from 'react'

export default class HotTile extends Component{

  constructor(){
    super()
    this.state={
      clicked: false
    }
  }

  handleClick = () => {
    if (this.state.clicked === false){
    this.setState({
      clicked: true
    })}else{
      this.setState({
        clicked: false
    })}
  }



  render () {
    return(
      <div className="ui eight wide column" >
       <img src={this.props.image}/>
       <p>name: {this.props.name}</p>
       <p>specialty: {this.props.specialty}</p>
       <button onClick={this.handleClick}>Show Details</button>
       // <button onClick={(event) => this.props.handleHide(event)}>Hide</button>
        <div style={{display: this.state.clicked === true  ? 'block' : 'none' }}>
          <p>'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water': {this.props.details}</p>
          <p>'highest medal achieved': {this.props.medal}</p>
          </div>
      </div>
    )
  }
}
