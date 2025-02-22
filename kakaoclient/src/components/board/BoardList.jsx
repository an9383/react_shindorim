import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Table, Button} from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css'; 

const BoardList = ({ onMode }) => { 
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


    if (boardList.length > 0) {
        return (
            <div className='board-list App'>
                <h2 className='text-center my-5'> Board List  12:53 </h2>
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
                    {boardList.map(boards => (
                        <tr key={boards.id}>
                            <td>{boards.id}</td>
                            <td> <Link to={`/board/${boards.id}`}>{boards.title}</Link> </td>
                            <td>{boards.name}</td>
                            <td>{boards.wdate}</td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
                <Button className='mx-2 btnWrite' onClick={() => onMode('write')} > 게시판 내용작성하기</Button>
            </div>
        );
    } else {
        return <div> </div>;
    }
};
export default BoardList;

