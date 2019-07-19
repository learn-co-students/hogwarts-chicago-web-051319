import React from 'react'
// import '../hog-imgs'

class HogCard extends React.Component {
    constructor(props){
        super(props)
        this.state={
            showInfo: false
        }
    }

    imageName = () => {
        const name = this.props.hog.name.toLowerCase().split(' ').join('_')
        const picture = require(`../hog-imgs/${name}.jpg`)
        return picture
    }

    hideCardInfo = () => {
        this.setState({
            showInfo: false
        })
    }

    showCardInfo = () => {
        this.setState({
            showInfo: true
        })
    }

    render(){
        return(
            <div className='ui four wide column pigTile' >
                <img src={this.imageName()} alt={this.props.hog.name} />
                <h3>{this.props.hog.name}</h3>
                <p>{this.props.hog.specialty}</p>
                {this.props.hog.greased ? <p>Greased</p> : <p>Not Greased</p> }
                <button onClick={ () => {this.props.hideHog(this.props.hog)} }>Make me Bacon</button>
                { this.state.showInfo ?
                <div>
                    <button onClick={this.hideCardInfo}>Hide Info</button>
                    <p>Weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water : {this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
                    <p className="achievementText">Highest Medal Achieved: {this.props.hog['highest medal achieved']}</p>
                </div>
                : <button onClick={this.showCardInfo}>More Info</button>
                }
            </div>
        )
    }
}

export default HogCard