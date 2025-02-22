import React from 'react';
import {Link} from 'react-router-dom'

const BoardNav = (props) => {
    const {items, onMode} = props;
    
    return (
        <div className="App">
            {
                items ? items.map((item, i)=>{ //item=> List, Write
                    let itemMode=item.toLowerCase();
                    return(
                        <span>
                            <Link to="#"  onClick={()=>{ onMode(itemMode);}}> {item} </Link>
                        </span>
                    )
                }) : ''
            }

        </div>
    );
};
export default BoardNav;