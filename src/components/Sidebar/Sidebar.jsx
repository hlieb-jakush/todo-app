import React from 'react';
import './Sidebar.scss';
import HeadList from '../HeadList/HeadList';
import List from '../List/List';
import AddList from '../AddList/AddList';
import { connect } from 'react-redux';
import { onAddList, onDeleteList } from '../../state/reducer';

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