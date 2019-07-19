import React, {useState} from 'react';
import initialData from './initialData'

const useDragable = props => {
    const [initial, setInitial] = useState(initialData);

    return initial.columnOrder.map((columnId) => {
        const column = initial.columns[columnId];
        const tasks = column.taskIDs.map(taskId => initial.tasks[taskId])

        return column.title;
    })
}

export default useDragable;