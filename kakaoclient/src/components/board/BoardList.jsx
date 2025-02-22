//rfce
import React from 'react'
import axios from 'axios';
import { Table, Row, Col, Form, Button } from 'react-bootstrap'
import { useState, useEffect } from 'react'

function BoardList() {
    const [boardList,setBoardList] = useState([]);

    useEffect(() => {
        callBoardList()
    },[]);   // 1회성

    const callBoardList =  () => {
        let url = "/boardList";
        //axios.get().then(성공시).catch(실패시)
        axios.get("/boardList")
            .then((res)=>{
                setBoardList(res.data);
            })
            .catch((err)=> {
                console.log('err: ', err.message)
            });
    }; //callBoardList End

    // BoardList.jsx 문서 전체데이터 출력 처리 axios
    return (
        <div>
                <Table >
                    <thead>
                        <tr>
                            <th>번 호</th>
                            <th>제 목</th>
                            <th>이 름</th>
                            <th>작성일</th>
                        </tr>
                    </thead>
                    <tbody>
                        {boardList.map(boards => (
                            <tr key={boards.id}>
                                <td>{boards.id}</td>
                                <td>{boards.title}</td>
                                <td>{boards.name}</td>
                                <td>{boards.wdate}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
        </div>
    )
}
export default BoardList