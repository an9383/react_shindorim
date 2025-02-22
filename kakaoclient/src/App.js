import './App.css';
import hydran from './images/hydran.png' ;
import BoardWrite from './components/board/BoardWrite'
function App() {
  return (
    <div className="App">
      <h3>App.js</h3>
      <img src={hydran} width="350" height="120" /> <br></br>
      <BoardWrite />
    </div>
  );
}
export default App;
