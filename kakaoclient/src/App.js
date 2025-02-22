import  React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios';
import { Table, Button} from 'react-bootstrap';

import BoardForm from './components/board/BoardForm';
import BoardApp from './components/board//BoardApp';
import BoardView from './components/board/BoardView';
import BoardNav from './components/board/BoardNav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
    return (
        <div className="App">
            app.js  2:07 <br></br>
            <BrowserRouter>
                <Container />
                    <Row>
                        <Col xs={12} sm={9} md={8} lg={8}>
                            <Routes>
                                <Route path='/' element={<BoardApp />}> </Route>
                                <Route path='/board' element={<BoardApp />}> </Route>
                                <Route path='/insert' element={<BoardForm />}> </Route>
                                <Route path='/board/:id' element={<BoardView />}> </Route>
                            </Routes>
                        </Col>
                    </Row>
            </BrowserRouter>
        </div>
    );
}
export default App;

/*
import  React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios';
import { Table, Button} from 'react-bootstrap';
import { useState, useEffect } from 'react';

import BoardList from './components/board/BoardList';


function App() {
  const [boardList, setBoardList] = useState( [ ] );

  useEffect(()=>{
    callBoardList();
  }, []);

  const callBoardList = () => {
      axios.get("/boardList")
      .then((res) => {
          setBoardList(res.data);
      })
      .catch((err) => {
          console.log('error: ' + err.message);
      });
  }; //callBoardList End

  return (
    <div className="App">
        app.js  1:20 <br></br>

              <Table>
                <thead>
                <tr>
                  <th>번 호</th>
                  <th>제 목</th>
                  <th>이 름</th>
                  <th>작성일</th>
                </tr>
                </thead>
                <tbody>
                  {
                    boardList.map(boards => (
                      <tr key={boards.id}>
                            <td> {boards.id} </td>
                            <td> {boards.title} </td>
                            <td> {boards.name} </td>
                            <td> {boards.wdate} </td>
                      </tr>
                    ))
                  }
                </tbody>
              </Table>

    </div>
  );
}
export default App;
*/


/*
import './App.css';
import hydran from './images/hydran.png' ;
import BoardWrite from './components/board/BoardWrite.jsx' ;
import BoardList from './components/board/BoardList.jsx';
import axios from 'axios';

function App() {
  return (
    <div className="App">
      <h3>App.js 12:07 </h3>

      <BoardList />
    </div>
  );
}
export default App;
*/