import React from 'react';
import styled from 'styled-components'
import {Draggable} from "react-beautiful-dnd";

const Container = styled.div`
border : 1px solid lightgrey;
border-radius : 25px;
padding: 3px 15px 3px 15px;
margin : 5px;
background-color: ${props => (props.isDragging ? "lightgreen" : "white")};
`

const Task = props => {
    const {task, index} = props;

    return (
        <Draggable draggableId={task.id} index={index}>
            {(provided, snapshot) => (
                <Container
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    isDragging={snapshot.isDragging}
                >
                    {task.content}
                </Container>
            )}
        </Draggable>
    );
}

export default Task;