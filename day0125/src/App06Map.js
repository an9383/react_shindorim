import hydran from './images/a3.png' ;
import './App.css';

import MyTest from './components/MyTest';
import MyBTS from './components/MyBTS';
import MyBoard from './components/MyBoard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';

//2025-02-01
import Jeju from './components/Jeju';

function App() {
  //배열은 리액트, Vue, javascript기반에서 [ ]
  const tripPlace = [
    {
      place:'제주도', 
      image:'images/img_mountains_wide.jpg', 
      rating:4.5
    },
    {
      place:'영국런던', 
      image:'images/img_nature_wide.jpg', 
      rating:2.7
    },
    {
      place:'설악산', 
      image:'images/a1.png', 
      rating:3.4
    }
   ];

  //{tripPlace.map( (city,index) =>(구현<Jeju문서/>) ) } ;
  return (
    <div className="App">
      App.js <br></br>
      첫번째 map함수 <br></br>
      { tripPlace.map((city,index) => (<Jeju index={index} place={city.place} picture={city.image} rating={city.rating} />)) }
      <hr></hr>
      두번째 map함수 <br></br>
      { tripPlace.map((city,index) => { return (<Jeju index={index} place={city.place} picture={city.image} rating={city.rating} />) } )  }
    </div>
  );
}
export default App;