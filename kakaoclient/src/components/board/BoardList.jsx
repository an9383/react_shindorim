//rfce
import React from 'react'
import axios from 'axios';
import { Table, Row, Col, Form, Button } from 'react-bootstrap'
import { useState, useEffect } from 'react'

function BoardList() {
    const [boardList,setBoardList] = useState([]);  // setBoardList에 설정된 값을 boardList에 설정

    useEffect(() => {
        callBoardList()
    },[]);   // 1회성

    const callBoardList =  () => {
        let url = "/boardList";
        //axios.get().then(성공시).catch(실패시)
        axios.get("/boardList")
            .then((res)=>{
                setBoardList(res.data);
                console.log('전체데이터출력성공');  // 전체 데이터를 setBoardList 에 ��어서 UI 에 출력
            })  // 성공시 수행
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
                        {boardList.map((boards) => (
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