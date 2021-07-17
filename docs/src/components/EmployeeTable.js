import React from 'react';

class EmpoloyeeTable extends React.Component {
    render() {
        const {item} = this.props; 
        console.log({item}); 

     return (
    <div>
    <div className="mt-4 ml-4 container grid grid-cols-3 gap-2 place-items-start h-35">
    <table className="flexjustify-center border-separate border border-gray-800 border-3...">
        <thead>
            <tr>
                <th className="border border-green-600 ...">Photo</th>
                <th className="border border-green-600 ...">Employee Name</th>
                <th className="border border-green-600 ...">Email</th> 
            </tr>
        </thead>

        <tbody>
            <tr>
            <td className="border border-green-600 ..."><img src={item.picture.thumbnail} alt="pics"/></td> 
            <td className="border border-green-600 ..."><p> {item.name.last}</p></td>
            <td className="border border-green-600 ..."><p>{item.email}</p></td>
            <td className="border border-green-600 ..."></td> 
            </tr>
        </tbody>
    </table>
        </div>
    </div>
    )}
}
  
export default EmpoloyeeTable
 
  



