import React from 'react';

const Ans = ({quiz}) => {
    const {name} = quiz
    return (
        <div>
        <p>topic:{name}</p>
    
        </div>
    );
};
export default Ans;