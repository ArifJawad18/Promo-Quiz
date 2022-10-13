import React from 'react';

const Questions = ({questions}) => {
    const {logo,name} = questions;
    return(
        <div>
           <img src={logo} alt="" />
            <h2>{name}</h2>
            
        </div>
    )
}

export default Questions;