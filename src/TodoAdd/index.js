import React, { useState } from "react";
import styled from "styled-components";

const LabelWrapper = styled.div`
    display: flex;
    flex-direction:row;
    margin:auto;
    width: 70%;
    justify-content: center;
    align-items: center;
`;

const Input = styled.input`
    width: 200px;
    height: 30px;

`;

const Button = styled.div`
    font-size: 35px;
    border-radius: 3px;
    margin: 1px;
    border: 1px solid
    
`;


function TodoAdd(){
    return(
        <LabelWrapper>
            <Input type="text"></Input>
            <Button> Add</Button> 
        </LabelWrapper>
        
    )
};

    export default TodoAdd;