import hydran from './images/a3.png' ;
import './App.css';

import MyTest from './components/MyTest';
import MyBTS from './components/MyBTS';
import MyBoard from './components/MyBoard';

function App() {
  const now = (
    <div>
      날짜 : {new Date().toLocaleDateString()} <br></br>
      시간 : {new Date().toLocaleTimeString()} <br></br>
    </div>
  );

  return (
    <div className="App">
        <MyBoard />
    </div>
  );
}
export default App;
