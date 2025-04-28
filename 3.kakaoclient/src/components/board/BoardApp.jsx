import React, { useState } from 'react';
import BoardForm from './BoardForm'
import BoardList from './BoardList';
import BoardNav from './BoardNav';


const BoardApp = () => {
    const [mode, setMode] = useState('list') ;
    
    const handleMode=(data)=>{   setMode(data);   }

    return (
        <div>    
          <BoardNav items={['List','Write']} onMode={handleMode}/> <hr></hr>
            { 
                (mode==='list') && <BoardList onMode={handleMode}></BoardList>
            }
            {
                (mode==='write') && <BoardForm onMode={handleMode}></BoardForm>
            }
        </div>
    );
};
export default BoardApp;

