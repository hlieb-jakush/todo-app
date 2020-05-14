import React from 'react'
import TaskTitle from './TaskTitle/TaskTitle'
import Task from './Task/Task'
import TasksForm from './TasksForm/TasksForm'
import './Tasks.scss'

const Tasks = ({ list, lists, listId, onEditList, onAddTask, onToggleTask, onEditTask, onDeleteTask }) => {

    const currentList = list || lists.find(list => list.id === parseInt(listId, 10))

    return (
        <div className='tasks'>
            <TaskTitle currentList={currentList} onEditList={onEditList} />
            {!currentList.tasks.length && !list && <h2>Задачи отсутствуют</h2>}
            <Task
                currentList={currentList}
                onToggleTask={onToggleTask}
                onEditTask={onEditTask}
                onDeleteTask={onDeleteTask}
            />
            <TasksForm list={currentList} onAddTask={onAddTask} />
        </div >
    )
}

export default Tasks