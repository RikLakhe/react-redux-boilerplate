import React, {Component} from 'react';
import styled from 'styled-components'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import Task from './Task'

const Container = styled.div`
margin: 8px;
border : 1px solid lightgrey;
border-radius:2px;
width: 25%;
`;
const Title = styled.h3`
    color:blue;
    padding: 8px;
`;
const TaskList = styled.div`

margin: 5px ;
border: 2px solid lightgreen;
padding:8px;
`;

const Column = (props) => {
    const {key, column, tasks} = props;
    return (
        <Container>
            <Title>{column.title}</Title>
            <Droppable droppableId={column.id}>
                {(provided) => (
                    <TaskList
                        {...provided.droppableProps}
                        ref={provided.innerRef}
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