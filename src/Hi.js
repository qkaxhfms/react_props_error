import React from 'react';

function Hi(props){
    const {name, friend, one} = props;
    return(
        <>
            <h1>Hi!!{name}</h1>
            <h2>내 {friend}</h2>
            <h3>내 {one}</h3>
        </>
    )
}

export default Hi;