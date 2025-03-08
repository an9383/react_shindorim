import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Row, Col, Button, Card, Form, Modal } from 'react-bootstrap';
import { AiFillHeart, AiFillDislike } from 'react-icons/ai';
import 'bootstrap/dist/css/bootstrap.min.css';


const BoardView = () => {
    const { id } = useParams();
    const [board, setBoard] = useState({});
    const [replies, setReplies] = useState([]);
    const [newReply, setNewReply] = useState({ writer: '', memo: '' });
    const navigate = useNavigate();

    //댓글수정에 필요함 
    const [editingReply, setEditingReply] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);
    

    const getBoard = async () => { //getBoard함수를 36번라인  useEffect()에서호출
        const board = await axios.get(`/boardView/${id}`); //1건상세 데이터가져오기 서버의 52라인과연결
        setBoard(board.data[0]);
    };

    const getReplies = async () => {
        try {
            const response = await axios.get(`/boards/${id}/replies`);  //kakaoserver폴더 server.js문서 
            setReplies(response.data);
        } catch (err) {
            console.error('03-08-토요일 졸리는 시간 Error fetching replies:', err);
        }
    };

    useEffect(() => {
        getBoard();
        getReplies(); //28번라인, 서버단 boards/:번호/replies찾음
    }, []);

    const onDelete = async () => {
        if (window.confirm(id + '번 게시글을 삭제하시겠습니까?')) {
            await axios.get(`/boardDelete/${id}`);
            navigate('/board');
        }
    };

    //댓글 추가전에 기존내용 복사 ...퍼짐연산배열 spread연산배열
    const handleInputChange = (e) => { 
        const { name, value } = e.target;
        setNewReply({ ...newReply, [name]: value });
    };

    //댓글 추가
    const addReply = async (e) => {
        //e.preventDefault();
        //try {
            await axios.post(`/boards/${id}/replies`, newReply); //server.js문서 
        //} catch (err) { console.error('댓글등록 Error: ', err);      }
    };

   
    //댓글 삭제
    const deleteReply = async (replyId) => {
        //try {
            alert(replyId , '번호 댓글 삭제합니다');
            await axios.delete(`/replies/${replyId}`); //server.js문서에 통신 
            getReplies();
        //} catch (err) { console.error('Error deleting reply:', err);   }
    };


    //댓글 수정
    const updateReply = async (e) => {
        //e.preventDefault(); 생략가능
        //try {
            await axios.put(`/replies/${editingReply.num}`, editingReply);
            setShowEditModal(false);
            setEditingReply(null);
            getReplies(); //댓글내용 뿌리기
        //} catch (err) {console.error('Error updating reply:', err);  }
    }; 

    //댓글에 댓글입력시  onChange이벤트에서 호출함
    const handleEditInputChange = (e) => {
        const { name, value } = e.target;
        setEditingReply({ ...editingReply, [name]: value });
    };

    //댓글에  수정
    const startEditingReply = (reply) => {
        setEditingReply(reply);
        setShowEditModal(true);
    };


    return (
        <div className="board-view">
            <Row className='my-5'>
                <Col className='px-5'>
                    <h2 className='my-5 text-center'>Board View [No. {id}]</h2>
                    <div className='text-end my-2'>
                        <Link to={`/boardEdit/${id}`}>
                            <Button className='btn mx-2'>수정</Button>
                        </Link>
                        <Button className='btn' variant='danger' onClick={onDelete}>삭제</Button>
                    </div>
                    <Card>
                        <Card.Body>
                            <h5>[{board.id}] {board.title}</h5>
                            <hr />
                            <div className='cArea'>{board.content}
                                <br />
                                <AiFillHeart style={{ color: 'hotpink' }} />
                                <AiFillDislike style={{ color: 'green' }} />
                            </div>
                        </Card.Body>
                        <Card.Footer>
                            Created on {board.wdate} by {board.name}
                        </Card.Footer>
                    </Card>

                    <Button className='btn mt-4' variant='secondary' onClick={() => navigate('/board')}> Board List </Button>
    
                  
                    <ul className="list-group">
                        {replies.map(reply => (
                            <li key={reply.num} className="list-group-item d-flex justify-content-between align-items-center">
                                <div>
                                    <strong>{reply.writer}:</strong> {reply.memo}
                                    <br />
                                    <small>{reply.reg_date}</small>
                                </div>
                                <div>
                                    <Button variant="info" size="sm" className="mx-1" >댓글Edit</Button>
                                    <Button variant="danger" size="sm" onClick={()=> deleteReply(reply.num)}> 댓글삭제 </Button>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <h3 className="mt-4"> 댓글추가영역 Add a Reply</h3>
                    <Form onSubmit={addReply}>
                        <Form.Group className="mb-3">
                            <Form.Label>작성자writer</Form.Label>
                            <Form.Control
                                type="text"
                                name="writer"
                                value={newReply.writer}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>댓글memo</Form.Label>
                            <Form.Control
                                type="text"
                                name="memo"
                                value={newReply.memo}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Button type="submit">Add Reply</Button>
                    </Form>
                </Col>
            </Row>

            {/* 댓글을 수정입력해야 하는 입력란을 모달dialog박스 */}
            <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Reply</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={updateReply}>
                        <Form.Group className="mb-3">
                            <Form.Label>작성자</Form.Label>
                            <Form.Control
                                type="text"
                                name="writer"
                                value={editingReply?.writer || ''}
                                onChange={handleEditInputChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>댓글</Form.Label>
                            <Form.Control
                                type="text"
                                name="memo"
                                value={editingReply?.memo || ''}
                                onChange={handleEditInputChange}
                                required
                            />
                        </Form.Group>
                        <Button type="submit">Update Reply</Button>
                    </Form>
                </Modal.Body>
            </Modal>

        </div>
    );
};
export default BoardView;
