import './App.css';
import hydran from './images/hydran.png' ;
import BoardWrite from './components/board/BoardWrite'
import BoardList from './components/board/BoardList'

function App() {
  return (
    <div className="App">
      <h3>App.js</h3>
      {/*<img src={hydran} width="350" height="120" /> <br></br>*/}
      {/*<BoardWrite />*/}
        <BoardList />

    </div>
  );
}
export default App;
