import './App.css';
import { useState } from 'react';

import Controller from './components/Controller';
import ControllerViewer from './components/ControllerViewer';

function App() {
  const [count, setCount] = useState(500);
  
  const handlesetCount = (value) =>{ setCount(count+value) } ;

  return (
    <div className="App">
      App.js <br></br>
      <section>
         <ControllerViewer count = {count} />
      </section>

      <section>
         <Controller  dispatch = {handlesetCount} />
      </section>
      
    </div>
  );
}
export default App;