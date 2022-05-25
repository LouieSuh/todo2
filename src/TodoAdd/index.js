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
    background-color: #D3D3D3;
`;

const Button = styled.div`
    font-size: 30px;
    border-radius: 3px;
    margin: 1px;
    border: 1px solid;
`;



function TodoAdding({todos, updateTodo}){

    const [todo, setTodo] = useState({
        text: "",
        id: null,
        isDone: false,
    });
    


    const onClickChange = ()=>{
        updateTodo(todo);
    };

    const todoAdd = (e) => {
        const { name, value } = e.target;
            setTodo ({
                id: "", todos,length + 1;
                text: value,
                isDone; false,
    });
    };

    return(
        <LabelWrapper>
            <Input 
            type="text"
            name="text"
            value={todo.text}
            onChange={todoAdd}></Input>

            <Button onClick={onClickChange}> Add</Button>
        </LabelWrapper>
        
    )
};

export default TodoAdding;