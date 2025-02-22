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
        axios.get(url)
            .then((res)=>{setBoardList(res.data)})
            .catch((err)=>{alert("전체출력에러이유",err)})
    }; //callBoardList End

    // BoardList.jsx 문서 전체데이터 출력 처리 axios
    return (
        <div>
            {/*BoardWrite.jsx 3시30 <br></br>*/}
            <Row className='my-5'>
                <Col className='p-5'>
                    <h1 className='text-center my-5 text-primary' >게시글 작성</h1>
                    <Form>
                        <h4 className='text-success'> 제목</h4><Form.Control placeholder='제목을 입력하세요.'
                                                                           className='my-3' name='title'  />

                        <h4 className='text-info'> 작성자</h4><Form.Control placeholder='작성자를 입력하세요.'
                                                                         className='my-3' name='writer'  />

                        <h4 className='text-primary'> 내용</h4><Form.Control as='textarea' rows={10} placeholder='내용을 입력하세요.'
                                                                           className='my-3' name='contents'  />

                        <div className='text-center'>
                            <Button className='mx-2 px-3 btn-sm' variant="primary"  style={{ marginRight: '10px' }}>저장</Button>
                            <Button className='mx-2 px-3 btn-sm' variant="danger"  >초기화</Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}
export default BoardList