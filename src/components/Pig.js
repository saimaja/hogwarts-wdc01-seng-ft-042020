import React from 'react'


class Pig extends React.Component {

    // getPigImg = () => {
    //     let pigName = this.props.pig.name.toLowerCase()
    //     pigName.replace((/" "/g, "_"))
    //     return pigName +'.jpg'
    // }


    render(){
        let pigName = this.props.pig.name.toLowerCase().replace(/ /g, "_")+'.jpg'
        
        
        let onePig = this.props.pig
        return (
            <div className='pigTile'>
                <p>Name: {onePig.name}</p>
                <img src ={require('../hog-imgs/'+pigName)}/>
               

            </div>
        )
    }
}


export default Pig 