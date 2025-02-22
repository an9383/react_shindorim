//rfce
import React from 'react'

function EmpTeam(props) {
    const { name, age, addr} = props.msg ;
  return (
    <div>
     Name:{name} Age:{age} Juso:{addr}
   </div>
  )
}
export default EmpTeam


/*
import React from 'react'

function EmpTeam({name,age,addr}) {
  return (
    <div>
     Name:{name} Age:{age} Juso:{addr}
   </div>
  )
}
export default EmpTeam
*/