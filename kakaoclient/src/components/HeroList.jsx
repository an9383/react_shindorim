import React  from 'react';
import '../App.css';


function HeroList({heroList}){
    return(
        <div className="App">
            <h3>Hero List</h3>
            <table>
              <tr>
                <th>code</th>
                <th>name</th>
                <th>title</th>
              </tr>
  
                {
                 //heroList.map(function(item, i){ 가능
                 heroList.map((item, i) => {
                    return (
                        <tr key={i}>
                            <td>{item.code}</td>
                            <td>{item.name}</td>
                            <td>{item.title}</td>
                        </tr>
                    );  
                 })
                }                                                               
        
        </table>
        </div>
    )
}
export default HeroList;
