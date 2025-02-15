import hydran from './images/a3.png' ;
import './App.css';
import MyTest from './components/MyTest.jsx';

function App() {
  var msg = '독도' ;
  const now = (
    <div>
      날짜 : {new Date().toLocaleDateString()} <br></br>
      시간 : {new Date().toLocaleTimeString()} <br></br>
    </div>
  );

  return (
    <div className="App">
        App.js문서영역 <p></p>
        <MyTest book='한라봉' price='23'  /> <br></br>
        <MyTest /> <br></br>
        <img src={hydran} width="300" height="100" /> <br></br>
    </div>
  );
}

export default App;
