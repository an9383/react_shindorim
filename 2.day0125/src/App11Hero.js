import './App.css';
import { useState } from 'react';
import Emp from './components/Emp';
import HeroList from './components/HeroList';
import HeroAppend from './components/HeroAppend';

function App() {
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [hero, setHero] = useState([{"code":100, "name":"kim", "title":"제주"}] 
  );
  
  const onChangeCode = (e) => {
    setCode(e.target.value) ; 
  }

  const onChangeName = (e) => {
    setName(e.target.value) ; 
  }

  const onChangeTitle = (e) => {
    setTitle(e.target.value) ; 
  }
  
  const handleAddHero = (e) => {
    setHero( hero.concat( {"code":code, "name":name, "title":title} ));
    setCode(""); //초기화
    setName(""); //초기화
    setTitle(""); //초기화
    console.log('토요일 어벤져스 ', hero);
  }

  const onKeyEnterHero= (e) => {
    if(e.key === 'Enter'){ handleAddHero(); }
  }
  
  return (
    <div className="App"> 
     <b>App.js</b> <br></br> <br></br>
      <HeroList  retheroList ={hero} /> <br></br>

      <HeroAppend 
          code={code} name={name} title={title}  
          onChangeCode={onChangeCode}  onChangeName={onChangeName} 
          onChangeTitle={onChangeTitle} onKeyEnterHero={onKeyEnterHero} />

      <button type='button' onClick={handleAddHero}> 히어로추가 </button>

    </div>
  );
}
export default App;