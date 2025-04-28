//rfce
import React, { useState } from 'react'

function MyBoard() {
   //전역변수필드 변경setterXXX(), 값추출 타입 getterXXX()
   const [count, setCount] = useState(100) ;
   const [color, setColor] = useState('orange');
   
   //let,var  https://www.w3schools.com/
   //ES7 = ECMA (European Computer Manufacturer's Association)Script 
   let developer =  { nick:'kim', age:27 } ; //json=map=dict
   var {nick, age} = developer ;
   console.log('nick = ' , nick);
   console.log('age = ' , age);
   
   

  return (
    // {컬러변경, 숫자증감 이벤트}
    <div>
        MyBoard.jsx <br/>
        숫자 : {count}  <br/>
        <button onClick={ ()=>{setCount(count+5) }}> 증가+ </button>
        <button onClick={ ()=>{setCount(count-5) }}>  감소- </button>

        <p style={{background:color}}>안녕하세요 </p>
        <button onClick={()=>setColor('red')}> 빨간 </button>
        <button onClick={()=>setColor('blue')}> 파랑 </button>
        <button onClick={()=>setColor('green')}> 그린 </button>
        <hr></hr>
        개발자이름 : {developer.nick}대표님 <br></br>
        개발자나이 : {developer.age}세  <br></br>
        개발자이름 : {nick}대표님 <br></br>
        개발자나이 : {age}세  <br></br>
    </div>
  )
}
export default MyBoard
