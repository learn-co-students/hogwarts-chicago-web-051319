import React, { Component } from 'react'

export default class Filter extends Component{
  constructor(){
    super()
    this.state={
      greased: false,
      sortedBy: ""
    }
  }


  handleGreasedChecked = () => {
   if (this.state.greased === false){
    this.setState({
      greased: true
    })}else{
      this.setState({
        greased: false
      })
    }
  }


  handleSort = (event) => {
     let sortValue = event.target.value
     this.setState({
       sortedBy: sortValue
     })
  }


  render(){
    // let greased = this.state.greased
    // let sorted = this.state.sortedBy
    const {greased, sortedBy} =　this.state
    return(
      <div className="ui centered grid container">

       Greased: <input type="checkbox" name="greased" onChange={() => this.handleGreasedChecked()}/>
       Sort by:
       <select name="sort" onChange={(event) => this.handleSort(event)}>
       <option value="none"></option>
        <option value="name">Name</option>
        <option value="weight">Weight</option>
       </select>
       <button onClick={()=>this.props.receiveFilter(greased, sortedBy)}>Submit</button>



      </div>
    )
  }

}
