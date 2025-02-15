//rfce
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        {/* a태그 Link사용 href속성 to  */}
        {/* <a href='https://www.naver.com'>네이버</a> */}
        {/* to속성을 path연결  element={<MyBts />>} */}
        <Link to="/board">board</Link> &nbsp;
        <Link to="/bts">bts</Link>  &nbsp;
        <Link to="/test">test</Link>   &nbsp;
    </div>
  )
}
export default Header
