import hydran from './images/a1.png' ;
import './App.css';

function App() {
  var msg1 = 'msg1 선유도' ;
  let msg2 = 'msg2 여의도 ' ;
  const msg3 = 'msg3 제주도 ' ;  

  return (
    /*주석 */
    <div className="App">
      <img src={hydran} width="300" height="100" /> <br></br>
        writer: 라일락  <br></br>
        {msg1} {msg2} {msg3} <br></br>
        날짜 : {new Date().toLocaleDateString()} <br></br>
        시간: {new Date().toLocaleTimeString()} <br></br>
    </div>
  );
}
export default App;
