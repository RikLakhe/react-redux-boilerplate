import React, {useState} from 'react';
import styled from 'styled-components'
import {DragDropContext} from "react-beautiful-dnd";

import initialData from './initialData'
import Column from './Column'

const Container = styled.div`
display:flex;
`;

const useDragable = props => {
    const [columns, setColumns] = useState(initialData.columns)
    const [columnOrder, setColumnOrder] = useState(initialData.columnOrder)
    const [tasks, setTasks] = useState(initialData.tasks)

    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    };

    const onDragEnd = (result) => {
        const {destination, source, draggableId} = result;

        if (!destination) {
            return;
        }

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        const start = columns[source.droppableId];
        const finish = columns[destination.droppableId];

        if (start === finish) {
            const newTaskIds = Array.from(start.taskIds);

            newTaskIds.splice(source.index, 1);
            newTaskIds.splice(destination.index, 0, draggableId);

            const newColumn = {
                ...start,
                taskIds: newTaskIds,
            };

            const newState = {
                columns: {
                    ...columns,
                    [newColumn.id]: newColumn,
                },
            };

            setColumns(newState.columns);
            return;
        }

        // Moving from one list to another

        // get from column data and to column data
        const startTaskIds = Array.from(start.taskIds);
        const finishTaskIds = Array.from(finish.taskIds);

        // remove from column at given index
        startTaskIds.splice(source.index, 1);
        // add the task in to column at given index
        finishTaskIds.splice(destination.index, 0, draggableId);

        // create new variable of two columns to and from
        const newStart = {
            ...start,
            taskIds: startTaskIds,
        };
        const newFinish = {
            ...finish,
            taskIds: finishTaskIds,
        };

        // put together start and finish columns
        const newState = {
            columns: {
                ...columns,
                [newStart.id]: newStart,
                [newFinish.id]: newFinish,
            },
        };

        // update the state
        setColumns(newState.columns);
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Container>
                {columnOrder.map((columnId) => {
                    const column = columns[columnId];
                    const task = column.taskIds.map(taskId => tasks[taskId]);

                    return <Column key={column.id} column={column} tasks={task}/>
                })}
            </Container>
        </DragDropContext>
    )
};

export default useDragable;