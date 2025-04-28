
import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({ 
  name : 'user',
  initialState : {name : 'kim', age : 24},
  reducers : {
    changeName(state){
      state.name = 'park'
    },
    addAge(state, action){
      state.age += action.payload      
    }
  }
})

let shoes = createSlice({ 
  name : 'shoes',  
  initialState : [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name  : 'Grey Yordan', count : 1}
  ],
  reducers : {
    addCount(state, action){   //action은 dispatch로 보낸 값을 저장한다
      let id = action.payload
      let shoes = state.find((x)=> x.id == id )
      shoes.count = shoes.count + 1
      console.log(shoes.count)
    },
    addProduct(state, action){
      let id = action.payload.id
      if(!state.find((x)=> x.id == id)){    //state에 상품이 없으면 !false니까 true
        state.push({id : action.payload.id, name : action.payload.title, count : 1})
      } else{
        state.find((x)=> x.id == id).count += 1  
      }
      
    }
  }
})
export let { changeName, addAge } = user.actions  
export let { addCount, addProduct } = shoes.actions    

console.log(user.actions)

export default configureStore({
  reducer : {
    user : user.reducer,     //reducer에는 user의 state 정보
    shoes : shoes.reducer
   }
})







