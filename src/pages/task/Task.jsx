import React from "react";
import styles from "./Task.module.css";
import { todoList, inputTodo, showEdit } from "../../atom/Atom";
import { useRecoilState } from "recoil";
import { v4 as uuidv4 } from "uuid";
import { AiTwotoneEdit } from "react-icons/ai";
import { Edit } from "../../components/edit/Edit";
import Tooltip from "@mui/material/Tooltip";

export function Task() {
  const [input, setInput] = useRecoilState(inputTodo);
  const [todos, setTodos] = useRecoilState(todoList);
  const [show, setShow] = useRecoilState(showEdit);
  const [editIndex, setEditIndex] = React.useState(null);
  const [editInput, setEditInput] = React.useState("");

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleAddTodo() {
    if (input) {
      const newTodo = {
        id: uuidv4(),
        todo: input,
        completed: false,
      };
      const updated = [...todos, newTodo];
      setTodos(updated);
      setInput("");
    }
  }

  function handleDelete(id) {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  }

  function handleEdit(index) {
    setEditIndex(index);
    setEditInput(todos[index].todo);
    setShow(true);
    setEditInput("");
  }

  function handleUpdate(updatedTodo) {
    const updatedTodos = [...todos];
    const updatedTodoItem = { ...updatedTodos[editIndex] };
    updatedTodoItem.todo = updatedTodo;
    updatedTodos[editIndex] = updatedTodoItem;
    setTodos(updatedTodos);
    setShow(false);
    setEditIndex(null);
  }

  return (
    <div className={styles.todoContainer}>
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          type="text"
          placeholder="Add todo..."
          value={input}
          onChange={handleChange}
        />
        <button className={styles.btn} onClick={handleAddTodo}>
          Add todo
        </button>
      </div>

      <hr />
      <div className={styles.lengthContainer}>
        {todos.length > 0 ? (
          <p className={styles.length}>Todo List ({todos.length})</p>
        ) : (
          <p className={styles.length}>No todos added</p>
        )}
      </div>
      <div className={styles.listContainer}>
        {todos.map((todo, index) => (
          <div key={todo.id} className={styles.todosContainer}>
            <div className={styles.container}>
              {show && editIndex === index ? (
                <Edit
                  todo={todo}
                  editInput={editInput}
                  setEditInput={setEditInput}
                  onUpdate={handleUpdate}
                  // show={setShow}
                />
              ) : (
                <div className={styles.todoEditContainer}>
                  <div>
                  <span className={styles.todo}>{todo.todo}</span>
                  </div>
                  <div className={styles.iconsContainer}>
                    <Tooltip title="edit">
                      <span className={styles.editIcon}>
                        <AiTwotoneEdit onClick={() => handleEdit(index)} />
                      </span>
                    </Tooltip>
                    <Tooltip title="delete">
                      <span
                        className={styles.deleteIcon}
                        onClick={() => handleDelete(todo.id)}
                      >
                        ❌
                      </span>
                    </Tooltip>
                  </div>
                </div>
              )}
            </div>
            {/* <div className={styles.iconsContainer}>
            <Tooltip title="edit">
            <span className={styles.editIcon}><AiTwotoneEdit onClick={() => handleEdit(index)} /></span>
            </Tooltip>
            <Tooltip title="delete">
            <span className={styles.deleteIcon} onClick={() => handleDelete(todo.id)}>❌</span>
            </Tooltip>
            {show && editIndex === index && (
              <Edit
                todo={todo}
                editInput={editInput}
                setEditInput={setEditInput}
                onUpdate={handleUpdate}
                show={setShow}
              />
            )}
          </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}
