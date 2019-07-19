import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';


import HogTile from './HogTile'
import Filter from './Filter'
import HiddenHogs from './HiddenHogs'




class App extends Component {


  constructor() {
    super()
    this.state={
      greased: false,
      sortedBy: "",
      allHogs: hogs,
      hiddenHogs: [],
      hidden: false
    }
  }
// hogs = [1, 2, 3, 4]
  receiveFilter = (greaseInfo, sortedByInfo) => {

    let allHogs = this.state.allHogs
    let weight = "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
    {greaseInfo === true ? allHogs=hogs.filter(hog => hog.greased === true) : allHogs=hogs}
    {sortedByInfo === "name" ? allHogs.sort((a, b) => a.name.localeCompare(b.name)) : allHogs.sort((a, b) => a[weight] - b[weight])}

    this.setState({
      greased: greaseInfo,
      sortedBy: sortedByInfo,
      allHogs: allHogs,
    })
  }

  renderHogs = () => {
    console.log(this.state.allHogs);
    const filteredHogs = this.state.allHogs
    return filteredHogs.map((data, index) =>
    <HogTile
      handleHide = {this.handleHide}
      key={index}
      id={index}
      image={require(`../hog-imgs/${data.name.toLowerCase().replace(/ /g,"_")}.jpg`)}
      name={data.name}
      specialty={data.specialty}
      greased={data.greased}
      details={data["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]}
      medal={data["highest medal achieved"]}
    />)
  }



    handleHide = (event) => {
      let hiddenHogId=parseInt(event.target.parentNode.id)
      const hiddenHog=this.state.allHogs[hiddenHogId]

      const newHiddenHogs = this.state.hiddenHogs
      newHiddenHogs.push(hiddenHog)


      const newAllHogs =this.state.allHogs
      newAllHogs.splice(hiddenHogId, 1)

      this.setState({
        allHogs: newAllHogs,
        hiddenHogs: newHiddenHogs
      })

    }

    showHiddenHogs = () => {
      const hiddenHogs = this.state.hiddenHogs
      return hiddenHogs.map((data, index) =>
      <HiddenHogs
      key={index}
      image={require(`../hog-imgs/${data.name.toLowerCase().replace(/ /g,"_")}.jpg`)}
      name={data.name}
      specialty={data.specialty}
      greased={data.greased}
      details={data["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]}
      medal={data["highest medal achieved"]}
      />)
    }

    toggleHiddenHogs = () => {
      this.setState({
        hidden: !this.state.hidden
      })
    }




  render() {
    return (
      <div className="App">
          < Nav />
            {this.state.hidden ? this.showHiddenHogs() : null}
          < Filter receiveFilter = {this.receiveFilter} toggleHiddenHogs = {this.toggleHiddenHogs}/>

          <div className="ui grid container">
          {this.renderHogs()}

          </div>


      </div>
    )
  }
}

export default App;
