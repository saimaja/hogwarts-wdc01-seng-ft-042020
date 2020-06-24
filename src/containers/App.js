import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import PigContainer from "./PigContainer";
import Searchbar from '../components/Searchbar'

class App extends Component {

  constructor(){
    super()
    this.state = {
      pigs: hogs, 
      // currentPig: null,
      searchBar: ""
    }
  }

  


  render() {
    
    return (
      <div className="App">
        <Nav />
        <Searchbar/>
        <PigContainer pigs={this.state.pigs}/>
      </div>
    );
  }
}

export default App;
