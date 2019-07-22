import React, {Component} from 'react';
import styled from 'styled-components'
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";

const Container = styled.div`
border : 1px solid lightgrey;
padding: 3px;
margin : 5px;
`
const Task = props => {
    const {task,index} = props;

    return (
        <Draggable draggableId={task.id} index={index}>
            {(provided, snapshot) => (
                <Container
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    {task.content}
                </Container>
            )}
        </Draggable>
    );
}

export default Task;