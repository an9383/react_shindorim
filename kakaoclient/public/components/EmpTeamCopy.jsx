//rfce
import React from 'react'

function EmpTeam({name,age,addr,index}) {
  return (
    <div>
     {index+1}번째 Name:{name} Age:{age} Juso:{addr}
   </div>
  )
}
export default EmpTeam