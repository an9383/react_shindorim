import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Row, Col, Button, Card} from 'react-bootstrap';
import { AiFillHeart, AiFillDislike } from 'react-icons/ai';
import 'bootstrap/dist/css/bootstrap.min.css';


const BoardView = () => {
    const { id } = useParams();
    const [board, setBoard] = useState({});
    const [replies, setReplies] = useState([]);
    const [newReply, setNewReply] = useState({ writer: '', memo: '' });
    const navigate = useNavigate();

    const getBoard = async () => {
        try {
            const board = await axios.get(`/boardView/${id}`);
            setBoard(board.data[0]);
        } catch (err) {
            alert('err: ' + err.message);
        }
    };

    const getReplies = async () => {
        try {
            const response = await axios.get(`/boards/${id}/replies`);
            setReplies(response.data);
        } catch (err) {
            console.error('Error fetching replies:', err);
        }
    };

    useEffect(() => {
        getBoard();
        getReplies();
    }, []);

    const onDelete = async () => {
        if (window.confirm(id + '번 게시글을 삭제하시겠습니까?')) {
            await axios.get(`/boardDelete/${id}`);
            navigate('/board');
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewReply({ ...newReply, [name]: value });
    };

    const addReply = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`/boards/${id}/replies`, newReply);
            setNewReply({ writer: '', memo: '' });
            getReplies();
        } catch (err) {
            console.error('댓글등록 Error: ', err);
        }
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
    
                </Col>
            </Row>
        </div>
    );
};
export default BoardView;
