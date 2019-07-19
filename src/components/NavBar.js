import React from 'react'

class NavBar extends React.Component {
    constructor(props){
        super(props)
        this.state= {
            isChecked: false
        }
    }

    handleChange = (e) => {
        if (e.target.checked) {
            this.setState({
                isChecked: true
            }, () => {this.props.greasedHogs(this.state.isChecked)})
        } else {
            this.setState({
                isChecked: false
            }, () => {this.props.greasedHogs(this.state.isChecked)})
        }
    }
    
    render(){
        return(
            <div style={{margin: 4 + 'em'}} className='smallHeader'>
                <label>Filter by:</label>
                <select onChange={(e) => {this.props.filterHogs(e.target.value)}}>
                    <option value='name'>Name</option>
                    <option value='weight'>Weight</option>
                </select>
                <label>Show Greased Hogs Only:</label>
                <input type='checkbox' className='piggyCheckbox'onChange={(e) => {this.handleChange(e)}} />
                <button onClick={() => {this.props.showHiddenHogs()}}>Show Me The Bacon!</button>
            </div>
        )
    }
}

export default NavBar