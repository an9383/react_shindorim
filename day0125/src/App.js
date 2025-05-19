// App01First.js
import './App.css';
import { useEffect, useState } from 'react';
import BoardWrite from './components/BoardWrite';

function App() {
    return (
    <div className="App">
     <b>App.js</b> <br></br>
      <BoardWrite />
    </div>
  );
}

// App02MyTest.js
// import hydran from './images/a3.png' ;
// import './App.css';
// import MyTest from './components/MyTest.jsx';

// function App() {
//   var msg = '독도' ;
//   const now = (
//     <div>
//       날짜 : {new Date().toLocaleDateString()} <br></br>
//       시간 : {new Date().toLocaleTimeString()} <br></br>
//     </div>
//   );

//   return (
//     <div className="App">
//         App.js문서영역 <p></p>
//         <MyTest book='한라봉' price='23'  /> <br></br>
//         <MyTest /> <br></br>
//         <img src={hydran} width="300" height="100" /> <br></br>
//     </div>
//   );
// }

// App03MyBTS
// import hydran from './images/a3.png' ;
// import './App.css';
// import MyTest from './components/MyTest';
// import MyBTS from './components/MyBTS';

// function App() {
//   const now = (
//     <div>
//       날짜 : {new Date().toLocaleDateString()} <br></br>
//       시간 : {new Date().toLocaleTimeString()} <br></br>
//     </div>
//   );

//   return (
//     <div className="App">
//         <MyBTS />
//     </div>
//   );
// }

// App04Myoard
// import hydran from './images/a3.png' ;
// import './App.css';
// import MyTest from './components/MyTest';
// import MyBTS from './components/MyBTS';
// import MyBoard from './components/MyBoard';

// function App() {
//   const now = (
//     <div>
//       날짜 : {new Date().toLocaleDateString()} <br></br>
//       시간 : {new Date().toLocaleTimeString()} <br></br>
//     </div>
//   );

//   return (
//     <div className="App">
//         <MyBoard />
//     </div>
//   );
// }

// App05Router
// import hydran from './images/a3.png' ;
// import './App.css';
// import MyTest from './components/MyTest';
// import MyBTS from './components/MyBTS';
// import MyBoard from './components/MyBoard';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Header from './components/Header';


// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Header />
//         <Routes>
//             <Route path='/board' element={<MyBoard/>}> </Route>
//             <Route path='/bts' element={<MyBTS/>}> </Route>
//             <Route path='/test' element={<MyTest/>}> </Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// App06Jeju
// import hydran from './images/a3.png' ;
// import './App.css';
// import MyTest from './components/MyTest';
// import MyBTS from './components/MyBTS';
// import MyBoard from './components/MyBoard';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Header from './components/Header';

// //2025-02-01
// import Jeju from './components/Jeju';

// function App() {
//   //배열은 리액트, Vue, javascript기반에서 [ ]
//   const tripPlace = [
//     {
//       place:'제주도',
//       image:'images/img_mountains_wide.jpg',
//       rating:4.5
//     },
//     {
//       place:'영국런던',
//       image:'images/img_nature_wide.jpg',
//       rating:2.7
//     },
//     {
//       place:'설악산',
//       image:'images/a1.png',
//       rating:3.4
//     }
//    ];

//   //{tripPlace.map( (city,index) =>(구현<Jeju문서/>) ) } ;
//   return (
//     <div className="App">
//       App.js <br></br>
//       첫번째 map함수 <br></br>
//       { tripPlace.map((city,index) => (<Jeju index={index} place={city.place} picture={city.image} rating={city.rating} />)) }
//       <hr></hr>
//       두번째 map함수 <br></br>
//       { tripPlace.map((city,index) => { return (<Jeju index={index} place={city.place} picture={city.image} rating={city.rating} />) } )  }
//     </div>
//   );
// }

// App07Fruit
// import hydran from './images/a3.png' ;
// import './App.css';
// import MyTest from './components/MyTest';
// import MyBTS from './components/MyBTS';
// import MyBoard from './components/MyBoard';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
// //2025-02-01
// import Jeju from './components/Jeju';
// import AAA from './components/AAA';
// import { BBB } from './components/BBB';
// import { useState } from 'react';

// function App() {
//   //배열은 리액트, Vue, javascript기반에서 [ ]
//   const [fruit, setFruit]=useState(''); //항목하나 관리
//   const [fruitList, setFruitList]=useState(['수박','망고','딸기']); //배열단위 관리

//   const handleChangeFruit =(e) =>{
//     setFruit(e.target.value);
//   }

//   const handleEnterFruit = (e) => {
//     if(e.key === 'Enter'){ handleAddFruit(); }
//   }

//   const handleAddFruit = (e) => {
//     //과일항목추가
//     setFruitList( fruitList.concat(fruit));
//     setFruit("");
//   }

//   return (
//     <div className="App">
//       App.js <br></br>
//       {/* {fruitList.map(item, index)}; */}
//       {fruitList.map((item, index)=>(<p> {index+1}번째 {item}</p>) )}

//       <input type="text" onChange={handleChangeFruit} onKeyDown={handleEnterFruit} value={fruit} />
//       <button type="button" onClick={handleAddFruit}>과일추가</button>
//     </div>
//   );
// }

// App08Controller
// import './App.css';
// import { useState } from 'react';

// import Controller from './components/Controller';
// import ControllerViewer from './components/ControllerViewer';

// function App() {
//   const [count, setCount] = useState(500);

//   const handlesetCount = (value) =>{ setCount(count+value) } ;

//   return (
//     <div className="App">
//       App.js <br></br>
//       <section>
//          <ControllerViewer count = {count} />
//       </section>

//       <section>
//          <Controller  dispatch = {handlesetCount} />
//       </section>

//     </div>
//   );
// }

// App09Wrapper
// import './App.css';
// import { useState } from 'react';
// import Controller from './components/Controller';
// import ControllerViewer from './components/ControllerViewer';
// import Wrapper from './components/Wrapper';

// function App() {
//   const [count, setCount] = useState(500);

//   const handlesetCount = (value) =>{ setCount(count+value) } ;

//   return (
//     <div className="App">
//       App.js <br></br>
//       <Wrapper>
//         <ControllerViewer count = {count} />
//         <Controller  dispatch = {handlesetCount} />
//       </Wrapper>

//       <p></p>
//       <section>
//          <ControllerViewer count = {count} />
//          <Controller  dispatch = {handlesetCount} />
//       </section>

//     </div>
//   );
// }

// App10Emp
// import './App.css';
// import { useState } from 'react';
// import Emp from './components/Emp';

// function App() {
//   return (
//     <div className="App">
//      App.js <br></br> <br></br>
//       <Emp />
//     </div>
//   );
// }

// App11Hero
// import './App.css';
// import { useState } from 'react';
// import Emp from './components/Emp';
// import HeroList from './components/HeroList';
// import HeroAppend from './components/HeroAppend';

// function App() {
//   const [code, setCode] = useState("");
//   const [name, setName] = useState("");
//   const [title, setTitle] = useState("");
//   const [hero, setHero] = useState([{"code":100, "name":"kim", "title":"제주"}]
//   );

//   const onChangeCode = (e) => {
//     setCode(e.target.value) ;
//   }

//   const onChangeName = (e) => {
//     setName(e.target.value) ;
//   }

//   const onChangeTitle = (e) => {
//     setTitle(e.target.value) ;
//   }

//   const handleAddHero = (e) => {
//     setHero( hero.concat( {"code":code, "name":name, "title":title} ));
//     setCode(""); //초기화
//     setName(""); //초기화
//     setTitle(""); //초기화
//     console.log('토요일 어벤져스 ', hero);
//   }

//   const onKeyEnterHero= (e) => {
//     if(e.key === 'Enter'){ handleAddHero(); }
//   }

//   return (
//     <div className="App">
//      <b>App.js</b> <br></br> <br></br>
//       <HeroList  retheroList ={hero} /> <br></br>

//       <HeroAppend
//           code={code} name={name} title={title}
//           onChangeCode={onChangeCode}  onChangeName={onChangeName}
//           onChangeTitle={onChangeTitle} onKeyEnterHero={onKeyEnterHero} />

//       <button type='button' onClick={handleAddHero}> 히어로추가 </button>

//     </div>
//   );
// }

// App12useEffect
// import './App.css';
// import { useEffect, useState } from 'react';
// import Emp from './components/Emp';
// import HeroList from './components/HeroList';
// import HeroAppend from './components/HeroAppend';

// function App() {
//   const [count, setCount] = useState(100) ;
//   const [color, setColor] = useState('green');

//   const [car, setCar] = useState({
//     brand: "LG브랜드",
//     model: "BMW모델",
//     year: "1997년",
//     color: "pink"
//   });

//   const updateColor = () =>{
//     setCar( (all)=>{
//       return {...all , color:'tomato', year:'2025년'}
//       //return {color:'red', year:'2025년'}  해당항목만 변경
//     });
//   }

//   useEffect( (e) =>{
//     //setTimeout(()=>{구현}, 두번째3000) ; 1초단위로 3씩증가
//     setTimeout(() => {setCount(count+3)}, 1000);
//   },[]);

//   return (
//     <div className="App">
//     <b>App.js</b> <br></br>

//     숫자 : {count}  <br/>
//     <button onClick={ ()=>{setCount(count+100) }}> 증가+100 </button>
//     <button onClick={ ()=>{setCount(count=>count-50) }}> 감소-50 </button>

//     <br></br> <hr></hr>
//     {car.year} {car.brand} <span style={{color:car.color}}> {car.color} </span>  {car.model} <br></br>
//     <button onClick={updateColor}> car항목변경 </button>

//     </div>
//   );
// }

// App13Hero
// import './App.css';
// import { useEffect, useState } from 'react';
// import HeroList from './components/HeroList';
// import HeroAppend from './components/HeroAppend';

// function App() {
//   const [code, setCode] = useState("");
//   const [name, setName] = useState("");
//   const [title, setTitle] = useState("");
//   const [hero, setHero] = useState([{"code":100, "name":"kim", "title":"제주"}]
//   );

//   const onChangeCode = (e) => {
//     setCode(e.target.value) ;
//   }

//   const onChangeName = (e) => {
//     setName(e.target.value) ;
//   }

//   const onChangeTitle = (e) => {
//     setTitle(e.target.value) ;
//   }

//   const handleAddHero = (e) => {
//     setHero( hero.concat( {"code":code, "name":name, "title":title} ));
//     setCode(""); //초기화
//     setName(""); //초기화
//     setTitle(""); //초기화
//     console.log('토요일 어벤져스 ', hero);
//   }

//   const onKeyEnterHero= (e) => {
//     if(e.key === 'Enter'){ handleAddHero(); }
//   }

//   useEffect( (e)=>{
//     setHero( hero.concat(
//        {"code":900, "name":"도넛", "title":"여름"} ,
//        {"code":700, "name":"커피", "title":"가을"}
//     ));
//   },[]);


//   return (
//     <div className="App">
//      <b>App.js</b> <br></br> <br></br>
//       <HeroList  retheroList ={hero} /> <br></br>

//       <HeroAppend
//           code={code} name={name} title={title}
//           onChangeCode={onChangeCode}  onChangeName={onChangeName}
//           onChangeTitle={onChangeTitle} onKeyEnterHero={onKeyEnterHero} />

//       <button type='button' onClick={handleAddHero}> 히어로추가 </button>

//     </div>
//   );
// }

export default App;