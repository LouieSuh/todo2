import React, { useState } from "react";
import styled from "styled-components";
import TodoAdd from "../TodoAdd";
import TodoDate from "../TodoDate";
import TodoLeft from "../TodoLeft";
import TodoItem from "../TodoItem";
import TodoList from "../TodoList";


const Container = styled.div`
    height: 100vh;
    background-color: lightgreen;
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: black;
`;

const Todobox = styled.div`
    width: 300px;
    height: 500px;
    background-color: lightblue;
`

function Mainpage(){

    const[todos,setTodos] = useState([]);
    
    const addTodo = (todo)=>{
 
        // ... part copy everything on list.
        setTodos([...todos,todo]);
    }
    // .filter -->
    // .map --> iterate the array


    const removeTodo = (id) => {
        console.log(id);
        const newTodos = todos.filter((todo)=> todo.id != id);
        setTodos((newTodos));
    }

    const changeIsDone = (id) => {
        const currentTodo = todos[id - 1];
        console.log(currentTodo)
        
       
        
    }


    return(
        <Container>
            <Todobox>
                <TodoDate />
                <TodoLeft todos={todos} />
                <TodoAdd todos={todos} updateTodo={addTodo}/>
                <TodoList todos={todos} deleteTodo = {removeTodo}/>
                 {/*<TodoItem todos={todos} remove={deleteTodo}/>*/}
                
            </Todobox>
        </Container>
    );
}

export default Mainpage;