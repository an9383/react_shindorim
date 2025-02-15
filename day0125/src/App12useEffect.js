import './App.css';
import { useEffect, useState } from 'react';
import Emp from './components/Emp';
import HeroList from './components/HeroList';
import HeroAppend from './components/HeroAppend';

function App() {
  const [count, setCount] = useState(100) ;
  const [color, setColor] = useState('green');
  
  const [car, setCar] = useState({
    brand: "LG브랜드",
    model: "BMW모델",
    year: "1997년",
    color: "pink"
  });

  const updateColor = () =>{ 
    setCar( (all)=>{ 
      return {...all , color:'tomato', year:'2025년'} 
      //return {color:'red', year:'2025년'}  해당항목만 변경
    });
  }
  
  useEffect( (e) =>{
    //setTimeout(()=>{구현}, 두번째3000) ; 1초단위로 3씩증가 
    setTimeout(() => {setCount(count+3)}, 1000);
  },[]); 



  return (
    <div className="App"> 
    <b>App.js</b> <br></br> 
    
    숫자 : {count}  <br/>
    <button onClick={ ()=>{setCount(count+100) }}> 증가+100 </button>
    <button onClick={ ()=>{setCount(count=>count-50) }}> 감소-50 </button>

    <br></br> <hr></hr>
    {car.year} {car.brand} <span style={{color:car.color}}> {car.color} </span>  {car.model} <br></br> 
    <button onClick={updateColor}> car항목변경 </button>

    </div>
  );
}
export default App;