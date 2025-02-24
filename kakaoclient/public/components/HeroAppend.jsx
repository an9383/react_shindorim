//rfce
import React from 'react'

// <HeroAppend code={code} name={name} title={title}  onChangeCode={onChangeCode}  
// onChangeName={onChangeName}  onChangeTitle={onChangeTitle} />
function HeroAppend({code,name,title,onChangeCode,onChangeName,onChangeTitle, onKeyEnterHero}) {
  
  return (
    <div>
      <b>HeroAppend.jsx</b> <br></br>
        코드 : <input type="text" onChange={onChangeCode} value={code} /> <br/>
        이름 : <input type="text" onChange={onChangeName} value={name} /> <br/>
        제목 : <input type="text" onChange={onChangeTitle} value={title} onKeyDown={onKeyEnterHero} />  <br/>
    </div>
  )
}

export default HeroAppend