import React, { Component } from 'react';
import '../App.css';
import Header from './Header'
import hogs from '../porkers_data';
import HogGallery from './HogGallery'
import HiddenHogs from './HiddenHogs'
import NavBar from './NavBar'

class App extends Component {
  constructor(){
    super()
    this.state={
      hiddenHogs:[],
      showHogs: hogs.sort(this.compareName),
      filter: 'name',
      showHidden: false
    }
  }

  hideHog = (hogToHide) => {
    const currentHiddenHogs = this.state.hiddenHogs
    let filteredHogs = this.state.showHogs.filter((hog) => !hog.name.includes(hogToHide.name))
    this.setState({
      hiddenHogs: [...currentHiddenHogs, hogToHide],
      showHogs: filteredHogs
    })
  }

  filterHogs = (filterType) => {
    this.setState({
      filter: filterType
    },
      ()=> {this.showFilteredHogs()}
    )
  }

   compareName = (hogA, hogB) => {
    const nameA = hogA.name.toUpperCase();
    const nameB = hogB.name.toUpperCase();
  
    let comparison = 0;
    if (nameA > nameB) {
      comparison = 1;
    } else if (nameA < nameB) {
      comparison = -1;
    }
    return comparison;
  }

  compareWeight = (hogA, hogB) => {
    const weightA = hogA['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
    const weightB = hogB['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
  
    let comparison = 0;
    if (weightA > weightB) {
      comparison = 1;
    } else if (weightA < weightB) {
      comparison = -1;
    }
    return comparison;
  }

  showFilteredHogs = () => {
    if (this.state.filter === 'name'){
      const nameSortedHogs = this.state.showHogs.sort(this.compareName)
      this.setState({
        showHogs: nameSortedHogs
      })
    } else if (this.state.filter === 'weight'){
      const weightSortedHogs = this.state.showHogs.sort(this.compareWeight)
      this.setState({
        showHogs: weightSortedHogs
      })
    }
  }

  showGreasedHogs = (booleanValue) => {
    if (booleanValue === true) {  
      const greasedHogs = this.state.showHogs.filter((hog) => hog.greased === true)
        this.setState({
          showHogs: greasedHogs
        })
    } else {
      let remainingHogs = []
      const hideHogs = this.state.hiddenHogs
      if (hideHogs.length > 0) {
        let allHogs = hogs
        for (let i=0; i< hideHogs.length; i++) {
          remainingHogs = allHogs.filter((hog) => !hog.name.includes(hideHogs[i].name))
          allHogs = allHogs.filter((hog) => !hog.name.includes(hideHogs[i].name))
        }
      } else if (hideHogs.length === 0){
        remainingHogs = hogs
      }
      this.setState({
        showHogs: remainingHogs.sort(this.compareName)
      })
    }
  }

  showHiddenHogs = () => {
    this.setState({
      showHidden: !this.state.showHidden
    })
  }

  render(){
    return (
      <div className="App">
          < Header /> 
          < NavBar currentHogs={this.state.showHogs} filterHogs={this.filterHogs} greasedHogs={this.showGreasedHogs} showHiddenHogs={this.showHiddenHogs}/>
          {this.state.showHidden ? < HiddenHogs hiddenHogs={this.state.hiddenHogs}/> : null }
          < HogGallery hogs={this.state.showHogs} hideHog={this.hideHog}/>
      </div>
    )
  }
}

export default App;
