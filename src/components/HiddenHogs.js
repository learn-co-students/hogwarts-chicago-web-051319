import React, { Component } from 'react'

export default class HiddenHogs extends Component{
  render () {
    return(
      <div>

       <img src={this.props.image}/>
       <p>name: {this.props.name}</p>
       <p>specialty: {this.props.specialty}</p>
        <div>
          <p>'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water': {this.props.details}</p>
          <p>'highest medal achieved': {this.props.medal}</p>
          </div>
      </div>
    )
  }
}
