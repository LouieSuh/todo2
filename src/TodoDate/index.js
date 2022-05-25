import React, { useState } from "react";
import styled from "styled-components";

const Timestamp = styled.div`
    font-size: 40px;
`;

const Week = styled.div`
    font-size:25px;
`;

const Title = styled.div`
    font-size: 13px;
`;



function TodoDate(){
const today = new Date();
const dayName = today.toLocaleString("en-US", {weekday: "long"});
console.log(today);
    return(
        <div>
            <Timestamp> 
                {today.getFullYear()}
                /
                {today.getMonth()+1}
                /
                {today.getDate()}
                
            </Timestamp>
            <Week>
                {dayName}
            </Week>
        </div>
    )
}

export default TodoDate;





