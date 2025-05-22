import hydran from './images/a3.png' ;
import './App.css';

import MyTest from './components/MyTest';
import MyBTS from './components/MyBTS';
import MyBoard from './components/MyBoard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
            <Route path='bts' element={<MyBTS/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
