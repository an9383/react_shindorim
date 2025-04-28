//rfce

import React from 'react'
import  { useState } from 'react'

function MyBTS() {
    const [title, setTitle] = useState('./images/a1.png');
    const [memo, setMemo] = useState('./images/main_4.jpg');
    const [num, setNum] = useState(100);

  return (
    <div>
        MyBTS.jsx  <br></br>
        <img src={title} width='150' height='100'  /> &nbsp;
        <img src={memo} width='150' height='100'  /> <br></br>
        초기값 : {num}
    </div>
  )
}
export default MyBTS