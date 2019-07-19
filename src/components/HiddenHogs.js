import React from 'react'
import HiddenHogCard from './HiddenHogCard'

class HiddenHogs extends React.Component {
    constructor(props){
        super(props)
    }

    createHiddenHogCards = () => {
        return this.props.hiddenHogs.map((hog) => {
            return <HiddenHogCard hog={hog} key={hog.name} />
        })
    }

    render(){
        return(
            <div className='ui grid container'>
                {this.createHiddenHogCards()}
            </div>
        )
    }
}

export default HiddenHogs