//rfce
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        {/* a태그 Link사용 href속성 to to속성을 path연결  element={<MyBts />>} */}
        <Link to="/emp">emp</Link>&nbsp;
        <Link to="/board">board</Link>&nbsp;
        <Link to="/bts">bts</Link>&nbsp;
        <Link to="/test">test</Link>
    </div>
  )
}
export default Header
