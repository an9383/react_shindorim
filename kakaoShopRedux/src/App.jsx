import { useState } from 'react'
import './App.css'
import { Navbar, Container, Nav, Row, Col} from 'react-bootstrap'
import bg from './bg.png'
import data from './data.js'
import { Routes, Route,  useNavigate, Outlet } from 'react-router-dom'
import Detail from './routes/Detail.jsx'
import Cart from './routes/Cart.jsx'

function App() {

  // let [shoes, 제목변경] = useState(data);
  let [shoes, title] = useState(data);
  let navigate = useNavigate();

  return (
    <div className='App'>  
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#" onClick={()=>{ navigate('/') }}> [빛나사이트]</Nav.Link>
            <Nav.Link href="#" onClick={()=>{ navigate('/') }}> [Home]</Nav.Link>
            <Nav.Link href="#" onClick={()=>{ navigate('/cart') }}> [장바구니]</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      <Routes>
        <Route path='/' element={ 
          <div>
            <button onClick={()=>{ 
              let copy = [...shoes]
              copy.sort((a,b)=> a.title.toLowerCase() > b.title.toLowerCase() ? 1:-1)
              title(copy)
            }}> 정렬버튼 </button>
            <div className='main-bg' style={{ backgroundImage : 'url(' + bg + ')' }}></div>
            <Row>
              {
                shoes.map(function(a, i){
                  return(
                    <Shu key={i} navigate={navigate} shoes={shoes} id={shoes[i].id} i={i}/>
                  )
                })
              }
            </Row>
          </div> 
        } />
        <Route path='/detail/:id' element={ <Detail shoes={shoes} /> } />
        <Route path='/cart' element={ <Cart/> } />
        <Route path='*' element={ <div> 페이지문서 잠시 서비스 중지합니다 </div> } />
        <Route path='/about' element={ <About/> } >
          <Route path='one' element={ <div>첫주문시 사과쥬스 서비스</div> }/>
          <Route path='two' element={ <div>생일기념 쿠폰받기</div> }/>
        </Route> 
      </Routes>
    </div>
  )
}
export default App


function About(){
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div> 
  )
}

function Shu(props){
  return(
    <Col sm={4} onClick={()=>{ props.navigate('/detail/'+props.id) }}>  
      <img src={ import.meta.env.BASE_URL + 'shoes' +(props.id+1) +'.jpg'} width='80%'/>
      <h4>{props.shoes[props.i].title}</h4>
      <p>{props.shoes[props.i].content}</p>
      {props.i}
    </Col>
  )
}



