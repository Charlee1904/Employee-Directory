import { Component, useEffect } from "react";
// import React, {useState, useEffect} from 'react';
import EmployeeTable from './EmployeeTable';


class Employee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employee:[],
            sorted:[],
        };
    }

    componentDidMount(){
        const url = 'https://randomuser.me/api/?results=15';
         fetch(url)
            .then((response) => {
                 return response.json();
        })
        .then((data) => {
            this.setState({employee: data.results})
        })
        .catch((error)=> console.log(error));
    }

    
    renderItems() {
        return this.state.employee.map((item) => (
            <EmployeeTable key={item.email} item={item}/>
        ));
    }
    
    render() {
        return (
            <div className="row">
             {this.renderItems()}
            </div>
        )
    }
}

export default Employee;