import React from 'react';

function Condition({isOn}){
    // const {isOn} = props;
    return(
        <>
            <div>현재 리액트가 {isOn ? "on" : "off"}</div>
        </>
    )
}

export default Condition;