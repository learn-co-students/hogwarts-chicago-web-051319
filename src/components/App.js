import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';


import HogTile from './HogTile'
import Filter from './Filter'



class App extends Component {


  constructor() {
    super()
    this.state={
      greased: false,
      sortedBy: ""
    }
  }

  receiveFilter = (greaseInfo, sortedByInfo) => {
    this.setState({
      greased: greaseInfo,
      sortedBy: sortedByInfo,

    })
  }



  generateHogTiles = () => {
    let allHogs = hogs
    let weight = "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
    {this.state.greased === true ? allHogs=hogs.filter(hog => hog.greased === true) : allHogs=hogs}
    {this.state.sortedBy === "name" ? allHogs.sort((a, b) => a.name.localeCompare(b.name)) : allHogs.sort((a, b) => a[weight] - b[weight])}
    return allHogs.map((data, index) =>
    <HogTile
      handleHide = {this.handleHide}
      key={index}
      image={require(`../hog-imgs/${data.name.toLowerCase().replace(/ /g,"_")}.jpg`)}
      name={data.name}
      specialty={data.specialty}
      greased={data.greased}
      details={data["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]}
      medal={data["highest medal achieved"]}
    />)
  }


    //
    // handleHide = (event) => {
    //   let hiddenHog=parseInt(event.target.parentNode.id)
    //  console.log(this.state.allHogs);
    //
    // }




  render() {
    return (
      <div className="App">
          < Nav />
          < Filter receiveFilter = {this.receiveFilter}/>


          <div className="ui grid container">
          {this.generateHogTiles()}
          </div>

      </div>
    )
  }
}

export default App;
