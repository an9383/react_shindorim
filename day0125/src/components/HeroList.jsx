//rfce
import React from 'react' ;
import '../App.css' ;

function HeroList( {retheroList}) {
  return (
    <div className="App">
        HeroList.jsx <br></br>
        <table>
          <tr>
          <td> 번호 </td> <td> 코 드</td> <td>이 름</td>  <td>제 목</td>
          </tr>
           {
            retheroList.map( (item,i) => { 
            //retheroList.map( function(item,i) { 
            return(
              <tr> 
                <td> {i+1}번째 </td>  
                <td> {item.code} 
                </td> <td> {item.name} </td>  
                <td> {item.title} </td>
              </tr>)
            })
           }
        </table>
    </div>
  )
}
export default HeroList