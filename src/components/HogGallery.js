import React from 'react'
import HogCard from './HogCard.js'

class HogGallery extends React.Component {
    constructor(props){
        super(props)
    }

    createHogCards = () => {
        return this.props.hogs.map((hog) => {
            return <HogCard hog={hog} key={hog.name} hideHog={this.props.hideHog}/>
        })
    }

    render(){
        return(
            <div className='ui grid container hoggyText pigContainer'>
                {this.createHogCards()}
            </div>
        )
    }
}

export default HogGallery