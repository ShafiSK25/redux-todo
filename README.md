# Redux Todo

A clean, minimal todo app built with React and Redux Toolkit.

**Live demo:** https://messywork.netlify.app/

## Features

- Add, complete and delete tasks
- Filter by All, Active or Done
- Live counter of tasks left
- Empty states and input validation (blank tasks are ignored)
- Responsive, monochrome design with keyboard-friendly focus styles

## Tech stack

- [React](https://react.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/) and [React Redux](https://react-redux.js.org/)
- [Vite](https://vite.dev/)
- Plain CSS
- Deployed on [Netlify](https://www.netlify.com/)

## Getting started

```bash
# clone the repo
git clone https://github.com/ShafiSK25/redux-todo.git
cd redux-todo

# install dependencies
npm install

# start the dev server
npm run dev
```

Then open the local URL shown in the terminal (usually http://localhost:5173).

## Scripts

| Command           | What it does                   |
| ----------------- | ------------------------------ |
| `npm run dev`     | Start the development server   |
| `npm run build`   | Create a production build      |
| `npm run preview` | Preview the production build   |

## Project structure

```
src/
├── app/
│   └── store.js          # Redux store
├── components/
│   ├── AddForm.jsx       # New task form
│   └── Todo.jsx          # Task list and filters
├── features/
│   └── todo/
│       └── todoSlice.js  # Todo reducers and actions
├── App.jsx
├── App.css
└── main.jsx
```

## How the state works

The `todoSlice` holds a `todos` array. Each todo looks like this:

```js
{ id: "abc", task: "demo-task", isDone: false }
```

Actions:

- `addTodo(task)` adds a new todo with a generated id
- `deleteTodo(id)` removes a todo
- `markAsDone(id)` updates a todo's completed state

## Author

Built by [ShafiSK25](https://github.com/ShafiSK25).
