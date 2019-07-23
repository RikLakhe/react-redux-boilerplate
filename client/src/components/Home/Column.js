import React from 'react';
import styled from 'styled-components'
import { Droppable } from "react-beautiful-dnd";

import Task from './Task'

const Container = styled.div`
margin: 8px;
width: 25%;
height: 100%;
display: flex;
flex-direction: column;
`;

const Title = styled.h3`
    color:blue;
    padding: 8px;
`;

const TaskList = styled.div`
margin: 5px ;
height: 100%;
border:${props => (props.isDraggingOver ? "4px solid lightgreen" : "1px solid lightgrey")}; 
border-radius : 20px;
padding:8px;
background-color: ${props => (props.isDraggingOver ? "skyblue" : "white")};
`;

const Column = (props) => {
    const {key, column, tasks} = props;
    return (
        <Container>
            <Title>{column.title}</Title>
            <Droppable droppableId={column.id}>
                {(provided,snapshot) => (
                    <TaskList
                        ref={provided.innerRef}
                        isDraggingOver={snapshot.isDraggingOver}
                        {...provided.droppableProps}
                    >
                        {tasks.map((task,index)=><Task key={task.id} task={task} index={index} />)}
                        {provided.placeholder}
                    </TaskList>
                    )}
            </Droppable>
        </Container>
    )
}

export default Column;