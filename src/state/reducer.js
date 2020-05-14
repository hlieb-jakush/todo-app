import API from "./api"

const INITIALIZATION = 'INITIALIZATION'
const SET_DATA = 'SET_DATA'
const ADD_LIST = 'ADD_LIST'
const EDIT_LIST = 'EDIT_LIST'
const DELETE_LIST = 'DELETE_LIST'
const ADD_TASK = 'ADD_TASK'
const EDIT_TASK = 'EDIT_TASK'
const DELETE_TASK = 'DELETE_TASK'
const TOGGLE_TASK = 'TOGGLE_TASK'

const initialState = {
    lists: [],
    colors: [],
    isSubmiting: false,
    initialized: false
}

export const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZATION:
            return {
                ...state,
                initialized: true
            }

        case SET_DATA:
            return {
                ...state,
                lists: [...action.lists],
                colors: [...action.colors]
            }

        case ADD_LIST:
            return {
                ...state,
                lists: [...state.lists, {
                    ...action.listObj,
                    tasks: [],
                    color: state.colors.find(color => color.id === action.colorId)
                }]
            }

        case EDIT_LIST:
            return {
                ...state,
                lists: [...state.lists.map(list => {
                    if (list.id === action.id) {
                        list.name = action.newName
                    }
                    return list
                })]
            }

        case DELETE_LIST:
            return {
                ...state,
                lists: [...state.lists.filter(list => list.id !== action.id)]
            }

        case ADD_TASK:
            return {
                ...state,
                lists: [...state.lists.map(list => {
                    if (list.id === action.taskObj.listId) {
                        list.tasks = [...list.tasks, action.taskObj]
                    }
                    return list
                })]
            }

        case EDIT_TASK:
            return {
                ...state,
                lists: [...state.lists.map(list => {
                    if (list.id === action.listId) {
                        list.tasks = [...list.tasks.map(task => {
                            if (task.id === action.id) {
                                task.text = action.text
                            }
                            return task
                        })]
                    }
                    return list
                })]
            }

        case TOGGLE_TASK:
            return {
                ...state,
                lists: [...state.lists.map(list => {
                    if (list.id === action.listId) {
                        list.tasks = [...list.tasks.map(task => {
                            if (task.id === action.id) {
                                task.completed = action.value
                            }
                            return task
                        })]
                    }
                    return list
                })]
            }

        case DELETE_TASK:
            return {
                ...state,
                lists: [...state.lists.map(list => {
                    if (list.id === action.listId) {
                        list.tasks = [...list.tasks.filter(task => task.id !== action.id)]
                    }
                    return list
                })]
            }

        default:
            return state
    }
}

const initialization = () => ({ type: INITIALIZATION })
const setData = (lists, colors) => ({ type: SET_DATA, lists, colors })
const addList = (listObj, colorId) => ({ type: ADD_LIST, listObj, colorId })
const editList = (id, newName) => ({ type: EDIT_LIST, id, newName })
const deleteList = (id) => ({ type: DELETE_LIST, id })

const addTask = (taskObj) => ({ type: ADD_TASK, taskObj })
const editTask = (listId, id, text) => ({ type: EDIT_TASK, listId, id, text })
const toggleTask = (listId, id, value) => ({ type: TOGGLE_TASK, listId, id, value })
const deleteTask = (listId, id) => ({ type: DELETE_TASK, listId, id })

export const initializeApp = () => (dispatch) => {
    let lists = API.getLists()
    let colors = API.getColors()
    Promise.all([lists, colors]).then((data) => dispatch(setData(data[0], data[1])))
        .then(() => dispatch(initialization()))
}

export const onAddList = (name, colorId) => (dispatch) => {
    API.addList(name, colorId)
        .then(data => dispatch(addList(data, colorId)))
}

export const onEditList = (id, newName) => (dispatch) => {
    API.editList(id, newName)
        .then(() => dispatch(editList(id, newName)))
}

export const onDeleteList = (id) => (dispatch) => {
    API.deleteList(id)
        .then(() => dispatch(deleteList(id)))
}

export const onAddTask = (listId, text) => (dispatch) => {
    API.addTask(listId, text)
        .then(data => dispatch(addTask(data)))
}

export const onEditTask = (listId, id, text) => (dispatch) => {
    API.editTask(id, text)
        .then(() => dispatch(editTask(listId, id, text)))
}

export const onToggleTask = (listId, id, value) => (dispatch) => {
    API.toggleTask(id, value)
        .then(() => dispatch(toggleTask(listId, id, value)))
}

export const onDeleteTask = (listId, id) => (dispatch) => {
    API.deleteTask(id)
        .then(() => dispatch(deleteTask(listId, id)))
}