//rfce

import React from 'react' ;
import {emp, datas} from  '../data/data.js';
import EmpTeam from './EmpTeam.jsx';
import Wrapper from './Wrapper.jsx';

function Emp() {

  return (
    <div>
     <br></br>
     <Wrapper>
      1인회사 <br></br>
      이름:{emp.name} 나이:{emp.age} 주소:{emp.addr} <p></p> <br></br>

      {/* {datas.map((p) => (<EmpTeam name={p.name} age={p.age} addr={p.addr} /> )) }   */}
      {datas.map((p,index) => (<EmpTeam msg={p}/> )) }  
     </Wrapper>
    </div>
  )
}export default Emp

