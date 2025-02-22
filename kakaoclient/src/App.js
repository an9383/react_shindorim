

// 2025-02-21 금요일 
import  React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//2-15-토요일 board테이블 + 게시판문서
import BoardApp from './components/board/BoardApp';
import BoardView from './components/board/BoardView';
import BoardModify from './components/board/BoardModify';
import BoardForm from './components/board/BoardForm';

//2-15-토요일 부트스트랩
import { Container, Row, Col } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Container>
              <Row>
                  <Col xs={12} sm={9} md={8} lg={8}>
                    <Routes>
                      <Route path="/"   element={<BoardApp />} />
                      <Route path="/board"   element={<BoardApp />} />
                      <Route path="/insert"   element={<BoardForm />} />
                      <Route path="/board/:id"   element={<BoardView />} />
                      <Route path="/boardEdit/:id"  element={<BoardModify />} />
                   </Routes>
                  </Col>
              </Row>
          </Container>
      </BrowserRouter>
    </div>
  );
}
export default App;  



/* 라우터없이 단독실행  전체출력만
//App.js
import  React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios';
import { Table, Button} from 'react-bootstrap';
import { useState, useEffect } from 'react';


function App() {
  const [boardList, setBoardList] = useState([]);

    useEffect(() => {
        callBoardList();
    }, []);

    const callBoardList = () => {
        let url="/boardList";
        axios.get(url)
            .then((res) => {
                setBoardList(res.data);
            })
            .catch((err) => {
                alert('error: ' + err.message);
            });
    };


  return (
    <div className="App">
        app.js <br></br> <br></br> 

        <div className='board-list'>
                <h2 className='text-center my-5'> Board List  12시 35분 </h2>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일</th>
                    </tr>
                    </thead>
                    <tbody>
                    { boardList.map(boards => (
                        <tr key={boards.id}>
                            <td>{boards.id}</td>
                            <td>  {boards.title} </td>
                            <td>{boards.name}</td>
                            <td>{boards.wdate}</td>
                        </tr>
                    )) }
                    </tbody>
                </Table>
                <Button className='mx-2 btnWrite' > 게시판 내용작성하기</Button>
            </div>
    </div>
  );
}
export default App;
*/
