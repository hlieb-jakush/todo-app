import React from 'react'
import { useState } from 'react'
import './RenamePopup.scss'

const RenamePopup = ({ svg, currentName, onRename }) => {
    const [createMode, setCreateMode] = useState(false)
    const [inputValue, setInputValue] = useState(currentName)
    const [warning, setWarning] = useState(false)

    const toggleCreateMode = () => {
        setCreateMode(!createMode)
    }

    const toggle = () => {
        setInputValue(currentName)
        setWarning(false)
        toggleCreateMode()
    }

    const rename = () => {
        if (inputValue) {
            onRename(inputValue)
            toggle()
        } else {
            setWarning(true)
        }
    }

    return (
        <div className='rename-popup'>
            {!createMode ?
                (
                    <span className='rename-popup__button' onClick={toggle}>
                        {svg}
                    </span>
                ) : (
                    <div className='rename-popup__field'>
                        <input
                            className={warning ? 'warning' : null}
                            placeholder='Новое название'
                            type='text' autoFocus={true}
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <button onClick={rename}>Переименовать</button>
                        <button onClick={toggle}>Отмена</button>
                    </div>
                )
            }


        </div>
    )
}

export default RenamePopup