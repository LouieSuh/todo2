import React, { useState } from "react";
import styled from "styled-components";

const DueContainer = styled.div`
display:flex;
flex-direction:row;
`;


const CheckBox = styled.div`
background-color:red;
width: 20px;
height:20px;
border-radius: 50px;
margin-right:10px;
`;


const Working = styled.div`
   font-size:24px;
    


`;

const TrashBin = styled.div`
background-color:grey;
width: 20px;
height:20px;
border-radius: 50px;
margin-right:10px;
`;



function TodoItem(){
    return(
        <DueContainer>
            <CheckBox>
            </CheckBox>
            <Working> Web Development </Working>
        </DueContainer>
    )
    
}

export default TodoItem;