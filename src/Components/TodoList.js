import React from 'react'
import Todo from './Todo'
import { connect, useSelector } from 'react-redux';

const TodoList = () => {
    const tasks = useSelector((state) => state.tasks);
    console.log(111,tasks)
    return (
        <div>
            {tasks.map(todo=>(
            <Todo key={todo.id} todo={todo} />
            ))}
        </div>
    )
}

export default connect()(TodoList);
