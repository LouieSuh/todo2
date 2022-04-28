import React, { useState } from "react";
import styled from "styled-components";

const Timestamp = styled.div`
    font-size: 40px;
`;

const Week = styled.div`
    font-size:25px;
`;

function TodoDate(){
const today = new Date();
console.log(today);
    return(
        <div>
            <Timestamp> 
                {today.getFullYear()}
                /
                {today.getDate()}
                /
                {today.getMonth()+1}
            </Timestamp>
            <Week>
                Tuesday
            </Week>
        </div>
    )
}

export default TodoDate;





