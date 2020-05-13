import React from 'react'
import TaskTitle from './TaskTitle/TaskTitle'
import Task from './Task/Task'
import TasksForm from './TasksForm/TasksForm'
import './Tasks.scss'

const Tasks = ({ list, lists, listId, onEditList, onAddTask, onToggleTask, onEditTask, onDeleteTask }) => {

    const currentList = list || lists.find(list => list.id === parseInt(listId, 10))

    const editTask = (listId, id, text) => {
        let newText = window.prompt('123', text)
        if (newText) onEditTask(listId, id, newText)
    }

    return (
        <div className='tasks'>
            <TaskTitle currentList={currentList} onEditList={onEditList} />
            {!currentList.tasks.length && !list && <h2>Задачи отсутствуют</h2>}
            <Task
                currentList={currentList}
                onToggleTask={onToggleTask}
                onEditTask={editTask}
                onDeleteTask={onDeleteTask}
            />
            <TasksForm list={currentList} onAddTask={onAddTask} />
        </div >
    )
}

export default Tasks