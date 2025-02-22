import axios from 'axios';
import React, { useState } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
//import 'bootstrap/dist/css/bootstrap.min.css';

function BoardWrite() {
    const [form, setForm] = useState({
        title: "",
        writer: "",
        contents: ""
    });
  return (
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
                            <Button className='mx-2 px-3 btn-sm' variant="primary" style={{ marginRight: '10px' }} >저장</Button>
                            <Button className='mx-2 px-3 btn-sm' variant="success" >초기화</Button>
                        </div>
                    </Form>
                </Col>
            </Row>
    )
}

export default BoardWrite