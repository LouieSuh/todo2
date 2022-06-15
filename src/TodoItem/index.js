import React, { useState } from "react";
import styled, {css} from "styled-components";
import {useHistory} from "react-router-dom";

const Container = styled.div`
    display:flex;
    flex-direction:row;
`;
const Input = styled.button`
    width: 50px;
    height:50px;
    ${(props) =>
        props.isDone &&
        css`
            background-color: #fccf03;
        `
    }
`;


const CheckBox2 = styled.img`
    width: 50px;
    height:50px;
    margin-left: 150px;
=======

const Working = styled.div`
   fontsize:24;
    


`;

function rubish bin(){
    if rubish bin == "clicked" 
    clear rubish bin; 
}
>>>>>>> 50ecb886346e2cae1be3745fc2c8c23acadc238e
`;

const Text = styled.div`
    color: #87f542;
    font-weight: 800;
    font-size: 15px;
    margin-top: 30px;
`

function TodoItem({deleteTodo,todo}){
    
    const onClickChange = () =>{
        deleteTodo(todo.id);
    }
 

    
    return(
        <Container>
        <Input isDone={todo.isDone}></Input>
        <Text>{todo.text}</Text>
        <CheckBox2  src="https://cdn-icons-png.flaticon.com/512/3096/3096673.png" onClick={onClickChange}  />
        </Container>
    );
}

export default TodoItem;
