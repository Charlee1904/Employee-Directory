import React, {Component, useState } from "react";
// import EmployeeTable from "./employeeData";


class Search extends React.Component {
        constructor(props) {
        super(props)
        this.state = {
                query:'',
                results:{},
                loading:false,
                message:''
        }
}

handleInput =(event) => {
        const query = event.target.value;
        console.warn(query)

}
        render() {
        return(
        <div>
        <div className="container">
                <h2>Search for Employee</h2>
                <input 
                        type= "text"
                        value=""
                        id="search-input"
                        placeholder="Search..."
                        onChange={this.handleInput}
                />
                </div>
        </div>
        )}
}
export default Search
// function Search() {
//  const[search,setSearch] = useState("");
//         return (
//          <div className="Search">
//              <input
//                 type="text" 
//                 placeholder="Search..."
//                 OnChange={(event)=> {
//                 setSearch(event.target.value);
//               }}/>
//          {EmployeeTable.filter((item) => {
//          if(search === "") {
//           return item
//         }else if(item.name.first.toLowerCase().includes(search.toLowerCase())) {
// }
//         }).map((item,key) => {
//          return(
//                 <div className="user" key={item.name.first}>
//                   <p>{item.name.first}</p>
//                 </div>
//                 );
//          })}
//         </div>
//  );
// }

// export default Search