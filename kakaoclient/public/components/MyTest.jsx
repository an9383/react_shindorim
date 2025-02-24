//rce
import React, { Component } from 'react'

export class MyTest extends Component {
   static defaultProps  = { book:'비타민', price:9200 } ;

  render() {
    const mystyle = { fontSize:'14pt', color:'green', fontWeight:'bold'}
    const {book, price} = this.props
    return (
      <div style={mystyle}>
        MyTest문서 <br></br>
        책제목 : {book }  <br></br>
        책가격 : {price }  <br></br>
        {
         /* 책제목 : {this.props.book }  <br></br>
         책가격 : {this.props.price }  <br></br> */
        }
       </div>
    )
  }
}
export default MyTest