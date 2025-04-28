import {Table} from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';
import { addCount, addAge } from '../store';

function Cart(){
  let state = useSelector((state)=> state ) 
  let dispatch = useDispatch()
  console.log(state)


  return(
    <div>
      {state.user.name} {state.user.age}의 장바구니
      <button onClick={()=>{dispatch(addAge(1))}}>버튼</button>
      <Table>
        <thead>
          <tr> 
            <th>번호</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {
            state.shoes.map((a, i)=>
              <tr key={i}>
                <td>{state.shoes[i].id}</td>
                <td>{state.shoes[i].name}</td>
                <td>{state.shoes[i].count}</td>
                <td><button onClick={()=>{
                  dispatch(addCount(state.shoes[i].id))
                }}>  +추가  </button></td>
              </tr>
            )
          }
          
        </tbody>
      </Table>
    </div>
  )
}
export default Cart;