import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function AddForm() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (evt) => {
    evt.preventDefault();
    const value = task.trim();
    if (!value) return;
    dispatch(addTodo(value));
    setTask("");
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <label htmlFor="task" className="sr-only">
        New task
      </label>
      <input
        id="task"
        className="input"
        type="text"
        placeholder="What needs doing?"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        autoComplete="off"
      />
      <button className="btn" type="submit" disabled={!task.trim()}>
        Add task
      </button>
    </form>
  );
}
