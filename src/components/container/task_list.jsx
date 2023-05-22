import React from 'react';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';



const TaskListComponent = () => {

    const defaultTask = new Task('Example','tarea xd',false,LEVELS.NORMAL);



    return (
        <div>
            <div>
                Tus tareas:
            </div>
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
};



export default TaskListComponent;
