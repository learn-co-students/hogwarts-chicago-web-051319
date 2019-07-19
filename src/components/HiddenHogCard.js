import React from 'react'
// import '../hog-imgs'

class HiddenHogCard extends React.Component {
    constructor(props){
        super(props)
    }

    imageName = () => {
        const name = this.props.hog.name.toLowerCase().split(' ').join('_')
        const picture = require(`../hog-imgs/${name}.jpg`)
        return picture
    }


    render(){
        return(
            <div className='ui eight wide column' >
                <img src={this.imageName()} alt={this.props.hog.name} />
                <p>RIP {this.props.hog.name}</p>
            </div>
        )
    }
}

export default HiddenHogCard