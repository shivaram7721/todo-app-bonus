import {atom} from 'recoil';

export const todoList = atom({
    key: "todoList",
    default:[]
})

export const inputTodo = atom({
    key: "input",
    default: ''
})

export const showEdit = atom({
    key: "showEdit",
    default: false
})