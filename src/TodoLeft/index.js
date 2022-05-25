import React, { useState } from "react";
import styled from "styled-components";


function TodoLeft({todos , age}){

    return(
        
        <>
        <div> {todos.length} todos left </div>
        <div> {age} years </div>

        </>
        
        
    )

};


export default TodoLeft;
