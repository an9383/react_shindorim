//rfce
import React from 'react'

function HeroAppend({ code, name, title, onChangeCode, onChangeName, onChangeTitle ,onKeyEnterHero}) {
  return (
    <div>
         <b> HeroAppend.jsx </b><br />
        코드 : <input type="text" onChange={onChangeCode}  value={code} /> <br/>
        이름 : <input type="text" onChange={onChangeName} value={name} /> <br/>
        제목 : <input type="text" onChange={onChangeTitle}  value={title}  onKeyDown={onKeyEnterHero}/> <br/>
    </div>
  )
}
export default HeroAppend