import React from 'react';

function Hi(props){
    const {name, friend} = props;
    return(
        <>
        <h1>Hi!!{props.name}</h1>
        <h2>내 {props.firend}</h2>
        </>
    )
}

export default Hi;