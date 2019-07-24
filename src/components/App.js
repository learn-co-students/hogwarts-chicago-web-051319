import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import Filter from './Filter'
import HogContainer from './HogContainer'
import hogs from '../porkers_data';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      hogs:hogs
    }
  }

  handleCheckBox(isGreased){
    if(isGreased){
      const filteredHogs = this.state.hogs.filter((hog) => {
        return hog.greased
      })
      this.setState({
        hogs:filteredHogs
      })
    } else {
      this.setState({
        hogs: hogs
      })
    }
  }

  handleSelect(filterType){
    if(filterType === 'weight'){
      this.handleSortByWeight()
    } else if (filterType === 'name') {
      this.handleSortByName()
    }
  }

  handleSortByName(){
    const sortedHogs = this.state.hogs.sort(function(a, b) {
      var nameA = a.name.toUpperCase();
      var nameB = b.name.toUpperCase();
      if(nameA < nameB){
        return -1;
      }
      if(nameA > nameB){
        return 1;
      }
      return 0;
    });
    this.setState({
      hogs: sortedHogs
    })
  }

  handleSortByWeight(){
    const sortedHogs = this.state.hogs.sort(function(a, b) {
      const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water';
      var weightA = a[weight];
      var weightB = b[weight];
      if(weightA < weightB){
        return -1;
      }
      if(weightA > weightB){
        return 1;
      }
      return 0;
    });
    this.setState({
      hogs: sortedHogs
    })
  }


  render() {
    const {hogs} = this.state;
    return (
      <div className="App">
          < Nav />
          < Filter
          handleCheckBox={ (isGreased)=> this.handleCheckBox(isGreased)}
          handleSelect={ (filterType) => this.handleSelect(filterType)}
          />
          < HogContainer hogs={hogs} />

      </div>
    )
  }
}

export default App;
