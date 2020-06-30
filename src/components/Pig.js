import React from 'react'


class Pig extends React.Component {


    state = {toggle: false}
      

    toggleInfo = (e) => {
        let currentToggle = this.state.toggle
        this.setState({toggle: !currentToggle})
    }

    render(){
        let pigName = this.props.pig.name.toLowerCase().replace(/ /g, "_")+'.jpg'
        let onePig = this.props.pig
        // debugger
        return (
            <div onClick={this.toggleInfo} className='pigTile'>
                {this.state.toggle
                ?
                <div>
                <p>Name: {onePig.name}</p>
                <img src={require('../hog-imgs/'+pigName)}/>
                <p>Weight: {onePig.weight}</p>
                <p>Specialty: {onePig.specialty}</p>
                <p>Medal: {onePig["highest medal achieved"]}</p>
                </div>
                :
                <div>
                <p>Name: {onePig.name}</p>
                <img src={require('../hog-imgs/'+pigName)}/>
                </div>  
                }
                
            </div>
        )
    }
}


export default Pig 