import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import Tasks from '../Tasks/Tasks'
import { onEditList, onAddTask, onToggleTask, onEditTask, onDeleteTask } from '../../state/reducer'

const Main = ({ lists, onEditList, onAddTask, onToggleTask, onEditTask, onDeleteTask }) => {
    return (
        <div className='todo__tasks'>
            <Route exact path='/' render={() => lists.map(list =>
                <Tasks
                    key={list.id}
                    list={list}
                    onEditList={onEditList}
                    onAddTask={onAddTask}
                    onToggleTask={onToggleTask}
                    onEditTask={onEditTask}
                    onDeleteTask={onDeleteTask}
                />)} />
            <Route path='/list/:listId' render={(routeObj) =>
                <Tasks
                    lists={lists}
                    listId={routeObj.match.params.listId}
                    onEditList={onEditList}
                    onAddTask={onAddTask}
                    onToggleTask={onToggleTask}
                    onEditTask={onEditTask}
                    onDeleteTask={onDeleteTask}
                />} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        lists: state.lists
    }
}

export default connect(mapStateToProps, { onEditList, onAddTask, onToggleTask, onEditTask, onDeleteTask })(Main)