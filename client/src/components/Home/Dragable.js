import React, {useState} from 'react';
import initialData from './initialData'
import {DragDropContext} from "react-beautiful-dnd";

import Column from './Column'

const useDragable = props => {
    const [initial, setInitial] = useState(initialData);

    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    };

    const onDragEnd = (result) => {
        if (!result.destination) {
            return;
        }

        console.log('result.',result)

        initial.columns = reorder(
            initial.columns,
            result.source.index,
            result.destination.index
        );
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            {initial.columnOrder.map((columnId) => {
                const column = initial.columns[columnId];
                const tasks = column.taskIds.map(taskId => initial.tasks[taskId]);

                return (
                    <Column key={column.id} column={column} tasks={tasks}/>
                    )
            })
            }
        </DragDropContext>
    )
};

export default useDragable;