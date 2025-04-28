import './App.css';
import { useState } from 'react';

import Controller from './components/Controller';
import ControllerViewer from './components/ControllerViewer';
import Wrapper from './components/Wrapper';

function App() {
  const [count, setCount] = useState(500);
  
  const handlesetCount = (value) =>{ setCount(count+value) } ;

  return (
    <div className="App">
      App.js <br></br>
      <Wrapper> 
        <ControllerViewer count = {count} />
        <Controller  dispatch = {handlesetCount} />
      </Wrapper>

      <p></p>
      <section>
         <ControllerViewer count = {count} />
         <Controller  dispatch = {handlesetCount} />
      </section>
      
    </div>
  );
}
export default App;