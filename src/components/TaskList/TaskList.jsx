import React from "react";

function TaskList({ todo, setTodo }) {


    const DeleteTask = (id) => {
        let newTasklist = [...todo].filter(item => item.id !== id)
        setTodo(newTasklist)
    };


    return (
        <div className="TaskList">
            {todo.map(item => (
                <div className="Task" key={item.id}>
                    <h1>{item.title}</h1>
                    <h4>{item.body}</h4>
                    <button onClick={() => DeleteTask(item.id)}>Delete Task</button>
                </div>
            ))}
        </div>
    )
}

export default TaskList;