import React, { Component} from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import PigContainer from "./PigContainer";
import Filter from '../components/Filter'

class App extends Component {

  state = {
      pigs: hogs, 
      showGreased: false,
      sortBy: 'name'
    }

    handleDropDown = (e) => {
      this.setState({sortBy: e.target.value})
    }

    handleGreased = (e) => {
      this.setState({showGreased: Boolean(e.target.value)})
    }

    filterPigs(){
      // let pigs = this.state
      if(this.state.showGreased) {
        return hogs.filter(hog => hog.greased === true)
      } else {
      return hogs
      }
    }

    sortByDropDown(array){
      if(this.state.sortBy === 'name') {
        return array.sort( (hog1, hog2) => hog1.name.localeCompare(hog2.name) )
      } else if (this.state.sortBy === 'weight') {
        return array.sort( (hog1, hog2) => hog1.weight - hog2.weight)
      }
    }
  

  render() {
    let displayHogs = this.filterPigs()
    let sortedArray = this.sortByDropDown(displayHogs)
    return (
      <div className="App">
        <Nav />
        <Filter 
        showGreased={this.state.showGreased}
        handleDropDown={this.handleDropDown}
        handleGreased={this.handleGreased}
        />
        <PigContainer pigs={sortedArray}/>
      </div>
    );
  }
}

export default App;
