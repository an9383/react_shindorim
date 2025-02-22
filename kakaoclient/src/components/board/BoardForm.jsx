import React,{useState, useRef, useEffect} from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const BoardForm = ({ onMode })  => { 
    const data={
        title:'',
        name:'',
        content:'',
    }
 
    const [form, setForm] = useState(data);
    const {title, name, content} = form;

    const refTitle=useRef();
    const refName=useRef();
    const refContent=useRef();


    const onChangeHandler=(e)=>{
        const frm={...form, [e.target.name]:e.target.value};
        setForm(frm);
    }

    const onSubmitHandler = ()=>{
        if(!title){
            alert('제목을 입력하세요 1111');
            refTitle.current.focus();
            return;
        }

        if(!name){
            alert('작성자를 입력하세요 이름 공백입니다 2222');
            refName.current.focus();
            return;
        }
    
        if(!content){
            alert('글 내용을 입력하세요 content공백입니다  3333');
            refContent.current.focus();
            return;
        }

        //탐탐이 다시 복붙 성공
        {
            axios.post('/boardWrite', form) //server의 주소랑 일치해야함.
                        .then(res=>{
                            if(res.data==='ok'){
                                alert('글등록 성공 목록으로 갑니다 testing 2 16  4 15 등록성공');
                                onMode('list');
                            }else{
                                alert('글 등록 실패')
                            }
                        })
                        .catch(err=>{ console.log(err); }) 
        }    
     } ;

    const onResetHandler=()=>{
        setForm({...form, title:'',content:'' ,name:'' })
    }
    
    return (
        <Row className='my-1'>
            <Col className='p-3' md={8}>
                <h2 className='text-center my-5'> BoardForm.jsx </h2>
                <Form>                    
                    <h4> 제목입력 </h4>
                    <Form.Control placeholder='제목을 입력하세요.' ref={refTitle}
                        className='my-3' name='title' value={title} onChange={onChangeHandler} />

                     <h4> 이름입력 </h4>
                    <Form.Control placeholder='작성자를 입력하세요.' ref={refName}
                        className='my-3' name='name' value={name} onChange={onChangeHandler} />

                    <h4> 내용입력 </h4>
                    <Form.Control as='textarea' rows={7} placeholder='내용을 입력하세요.' ref={refContent}
                        className='my-3' name='content' value={content} onChange={onChangeHandler} />

                    <div className='text-center'>
                        <Button className='mx-1 px-3' onClick={onSubmitHandler}> board글쓰기 </Button>
                        <Button className='mx-1 px-3' onClick={onResetHandler} variant='warning'> 다시쓰기 </Button>
                    </div>
                </Form>
            </Col>
        </Row>
    );
};
export default BoardForm;

