import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AddForm from "./AddForm";
import { deleteTodo, markAsDone } from "../features/todo/todoSlice";

const FILTERS = ["All", "Active", "Done"];

export default function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("All");

  const remaining = todos.filter((t) => !t.isDone).length;

  const visible = todos.filter((t) => {
    if (filter === "Active") return !t.isDone;
    if (filter === "Done") return t.isDone;
    return true;
  });

  return (
    <main className="app">
      <header className="app__header">
        <h1>Tasks</h1>
        <p className="app__sub">
          {remaining === 0
            ? "Nothing left to do"
            : `${remaining} ${remaining === 1 ? "task" : "tasks"} left`}
        </p>
      </header>

      <AddForm />

      <div className="chips" role="tablist" aria-label="Filter tasks">
        {FILTERS.map((f) => (
          <button
            key={f}
            role="tab"
            aria-selected={filter === f}
            className={`chip ${filter === f ? "chip--active" : ""}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {visible.length === 0 ? (
        <p className="empty">
          {filter === "All"
            ? "No tasks yet. Add your first one above."
            : `No ${filter.toLowerCase()} tasks.`}
        </p>
      ) : (
        <ul className="list">
          {visible.map((todo) => (
            <li key={todo.id} className="item">
              <button
                className={`check ${todo.isDone ? "check--done" : ""}`}
                onClick={() => dispatch(markAsDone(todo.id))}
                aria-label={
                  todo.isDone
                    ? `Mark "${todo.task}" as not done`
                    : `Mark "${todo.task}" as done`
                }
                aria-pressed={todo.isDone}
              >
                {todo.isDone && (
                  <svg
                    viewBox="0 0 16 16"
                    width="12"
                    height="12"
                    aria-hidden="true"
                  >
                    <path
                      d="M3.5 8.5l3 3 6-7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>

              <span
                className={`item__text ${todo.isDone ? "item__text--done" : ""}`}
              >
                {todo.task}
              </span>

              <button
                className="icon-btn"
                onClick={() => dispatch(deleteTodo(todo.id))}
                aria-label={`Delete "${todo.task}"`}
              >
                <svg
                  viewBox="0 0 16 16"
                  width="14"
                  height="14"
                  aria-hidden="true"
                >
                  <path
                    d="M4 4l8 8M12 4l-8 8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
