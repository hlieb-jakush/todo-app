import Axios from "axios";

const instance = Axios.create({ baseURL: 'http://localhost:3001/' });

const API = {
    getLists() {
        return instance.get('lists?_expand=color&_embed=tasks').then(response => response.data)
    },

    getColors() {
        return instance.get('colors').then(response => response.data)
    },

    addList(name, colorId) {
        return instance.post('lists', { name, colorId }).then(response => response.data)
    },

    editList(id, newName) {
        return instance.patch(`lists/${id}`, { name: newName }).then(response => response.data)
    },

    deleteList(id) {
        return instance.delete(`lists/${id}`).then(response => response.data)
    },

    addTask(listId, text) {
        return instance.post('tasks', { listId, text, completed: false }).then(response => response.data)
    },

    editTask(id, text) {
        return instance.patch(`tasks/${id}`, { text }).then(response => response.data)
    },

    toggleTask(id, value) {
        return instance.patch(`tasks/${id}`, { completed: value }).then(response => response.data)
    },

    deleteTask(id) {
        return instance.delete(`tasks/${id}`).then(response => response.data)
    }
}

export default API;