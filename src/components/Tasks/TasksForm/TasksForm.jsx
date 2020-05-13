import React from 'react'
import { useState } from 'react'
import './TasksForm.scss'

const TasksForm = ({ list, onAddTask }) => {
    const [createMode, setCreateMode] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const toggleCreateMode = () => {
        setCreateMode(!createMode)
    }

    const reset = () => {
        setInputValue('')
        toggleCreateMode()
    }

    const addTask = () => {
        if (inputValue) {
            onAddTask(list.id, inputValue)
            reset()
        }
    }

    return (
        <div className='tasks__form'>
            {!createMode ?
                (
                    <div className='form__button' onClick={reset}>
                        <span>
                            <svg width="17" height="17" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 1V11" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M1 6H11" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                        <span>
                            Новая задача
                        </span>
                    </div>
                ) : (
                    <div className='form__field'>
                        <input
                            placeholder='Название задачи'
                            type='text' autoFocus={true}
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <button onClick={addTask}>Добавить</button>
                        <button onClick={toggleCreateMode}>Отмена</button>
                    </div>
                )
            }


        </div>
    )
}

export default TasksForm