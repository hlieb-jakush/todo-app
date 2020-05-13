import React from 'react'
import { connect } from 'react-redux'
import HeadList from '../HeadList/HeadList'
import List from '../List/List'
import AddList from '../AddList/AddList'
import { onAddList, onDeleteList } from '../../state/reducer'
import './Sidebar.scss'

const Sidebar = ({ lists, colors, onAddList, onDeleteList, routeObj }) => {
    return (
        <div className='todo__sidebar'>
            <HeadList />
            <List items={lists} onDeleteList={onDeleteList} routeObj={routeObj} />
            <AddList colors={colors} onAddList={onAddList} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        lists: state.lists,
        colors: state.colors
    }
}

export default connect(mapStateToProps, { onAddList, onDeleteList })(Sidebar)