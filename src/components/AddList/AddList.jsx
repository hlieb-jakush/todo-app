import React from 'react'
import List from '../List/List'
import './AddList.scss'
import { useState } from 'react'
import AddListPopup from './AddListPopup/AddListPopup'

const AddList = ({ colors, onAddList }) => {
    const [visiblePopup, setVisiblePopup] = useState(false)

    return (
        <div className='addList'>
            <List
                items={[
                    {
                        name: 'Добавить список', icon: (<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 1V11" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M1 6H11" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        ), active: false, className: 'list__add-button'
                    },
                ]}
                onClick={() => setVisiblePopup(true)}
            />
            {visiblePopup && <AddListPopup colors={colors} onAddList={onAddList} setVisiblePopup={setVisiblePopup} />}
        </div>

    )
}

export default AddList;