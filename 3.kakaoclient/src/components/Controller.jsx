//rfce
import React from 'react'

function Controller({dispatch}) {
  //연산만처리 
  return (
    <div>
       
        <button onClick={()=>dispatch(-1)}>-1</button>
        <button onClick={()=>dispatch(-10)}>-10</button>
        <button onClick={()=>dispatch(-100)}>-100</button>
        <button onClick={()=>dispatch(+100)}>+100</button>
        <button onClick={()=>dispatch(+10)}>+10</button>
        <button onClick={()=>dispatch(+1)}>+1</button>
        {/* <button onClick={ ()=>{setCount(count+5) }}> 증가+ </button>
        <button onClick={ ()=>{setCount(count-5) }}>  감소- </button> */}
    </div>
  )
}
export default Controller