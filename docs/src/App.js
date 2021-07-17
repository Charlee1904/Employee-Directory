import React, {Component} from "react";
import './App.css';
import Employee from "./components/employeeData"
import Search from "./components/Search";



class App extends Component {
  render(){
    return (
  <div>
    <Search/>
    <Employee/>
  </div>
    )
  }
}

export default App;