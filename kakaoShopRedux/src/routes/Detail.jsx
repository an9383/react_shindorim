import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addProduct } from "../store";
 
function Detail(props){

  let {id} = useParams();
  let shoes = props.shoes.find((x)=> x.id == id )
  let [count, setCount] = useState(0);
  let [탭, 탭변경] = useState(0);
  let dispatch = useDispatch()

  useEffect(()=>{
    setTimeout(()=>{ setAlert(false) }, 2000)
    return ()=>{  clearTimeout(shoes)   }
  }, [count] )  

  return(
    <div className={'container'}>
      <button onClick={()=>{ setCount(count+1) }} >버튼</button>
      {count}

      
      <div className="row">
        <div className="col-md-6">
          <img src={ import.meta.env.BASE_URL + 'shoes'+ (parseInt(id)+1) +'.jpg'} width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{shoes.title}</h4>
          <p>{shoes.content}</p>
          <p>{shoes.price}원</p>
          <button className="btn btn-danger" onClick={()=>{
            dispatch(addProduct(shoes));
          }}>주문하기</button> 
        </div>
      </div>
      
   
      <Nav justify variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link eventKey="link-0" onClick={()=>{ 탭변경(0) }}> 서비스Active </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" onClick={()=>{ 탭변경(1) }}> 관심항목 NavLink</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" onClick={()=>{ 탭변경(2) }}> 컬러상세Link </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent 탭={탭} /> 
    </div>
  )
}

function TabContent(props){
  let [fade, setFade] = useState('')

  useEffect(()=>{
    setTimeout(()=>{ setFade('end') } , 100) 
    return ()=>{  setFade('')  }
  }, [props.탭])


  return <div className={"start " + fade}>
    { [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][props.탭] }
    </div>
}
export default Detail;