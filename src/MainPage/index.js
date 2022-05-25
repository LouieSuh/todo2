import React, { useState } from "react";
import styled from "styled-components";

import TodoDate from "../TodoDate";
import TodoLeft from "../TodoLeft";
import TodoAdd  from  "../TodoAdd";
import TodoItem from "../TodoItem";


const Container = styled.div`
    height: 100vh;
    background-color: lightblue;
    display: flex;
    
`;


const TodoContainer = styled.div`
    border-radius: 20px;
    background-color: lightyellow;
    width: 370px;
    height: 740px;
    padding: 20px;
    margin-left: 620px;
`;



function Mainpage(){



    // const [age, setAge] = useState(6);

    const [todos, setTodos] = useState([

        { isDone: false, text: "Hello", id: 1}

    ]);

    // const addTodo = (todo) => {
    //     setTodos([...todos, todo]);
    // };
    // console.log(todos);
    
    
    return (
        <Container>
            <TodoContainer>
                <TodoDate/>
                <TodoLeft todos={todos}  />
                <TodoAdd todos={todos} updateTodo={addTodo}/>
                <TodoItem/>
            </TodoContainer>
        </Container>
    )
}   

export default Mainpage;