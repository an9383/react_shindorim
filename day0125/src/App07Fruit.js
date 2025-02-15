import hydran from './images/a3.png' ;
import './App.css';

import MyTest from './components/MyTest';
import MyBTS from './components/MyBTS';
import MyBoard from './components/MyBoard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';

//2025-02-01
import Jeju from './components/Jeju';
import AAA from './components/AAA';
import { BBB } from './components/BBB';
import { useState } from 'react';

function App() {
  //배열은 리액트, Vue, javascript기반에서 [ ]
  const [fruit, setFruit]=useState(''); //항목하나 관리
  const [fruitList, setFruitList]=useState(['수박','망고','딸기']); //배열단위 관리 

  const handleChangeFruit =(e) =>{
    setFruit(e.target.value);
  }

  const handleEnterFruit = (e) => {
    if(e.key === 'Enter'){ handleAddFruit(); }
  }

  const handleAddFruit = (e) => {
    //과일항목추가
    setFruitList( fruitList.concat(fruit));
    setFruit("");
  }
   
  return (
    <div className="App">
      App.js <br></br>
      {/* {fruitList.map(item, index)}; */}
      {fruitList.map((item, index)=>(<p> {index+1}번째 {item}</p>) )} 

      <input type="text" onChange={handleChangeFruit} onKeyDown={handleEnterFruit} value={fruit} />
      <button type="button" onClick={handleAddFruit}>과일추가</button>
    </div>
  );
}
export default App;