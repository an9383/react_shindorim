//rfce
import React from 'react'

//~.map((city,index)=>(<Jeju index={index} place={city.place} picture={city.image} rating={city.rating} />))
function Jeju({index,place,picture,rating}) {
  return (
    <div>
       Jeju.jsx<br></br>
       {index+1}번째 {place}여행하고 싶어요 <br></br>
       평점 {rating}/5.0 <br></br>
       <img src={picture} width='350' height='100' /> <p></p>
    </div>
  )
}
export default Jeju