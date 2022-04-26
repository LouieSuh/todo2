import { buildQueries } from '@testing-library/react';
import React, { useState } from 'react';
import styled from "styled-components";

import TodoDate from '../TodoDate';
import TodoLeft from '../TodoLeft';
import TodoAdd from '../TodoAdd';

const Container = styled.div`
    background-color: lightblue;
    width:2000px;
    height: 1000px; 
    display: flex;
    

`;

const react = styled.div `
    height: 100px;
    width: 100px;
    background-color: white;
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





function MainPage(){
    return (

        <Container>
            <TodoContainer>
                <TodoDate/>
                <TodoLeft/>
                <TodoAdd/>
            </TodoContainer>
        </Container>

    )
};
    

export default MainPage;






