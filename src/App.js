import React,{useState} from 'react';
import './App.css';
import InputTodo from './Components/InputTodo';
import TodoList from './Components/TodoList';

function App() {
  const [todos, setTodos] = useState([
    { id: 0,isCompleted:false, text: "task1" },
    { id: 3,isCompleted:false, text: "task2" },
    { id: 2,isCompleted:false, text: "task3" },
  ]);



const handleDelete = (index) => {
  setTodos(todos.filter((todo) => todo.id !== index));
};

const handleComplete=(id)=>{
  setTodos(todos.map(todo=>
      todo.id===id? {...todo,isCompleted:!todo.isCompleted}  : todo
    ))
}

const handleEdit=(id,editedText)=>{
  setTodos(todos.map(todo=> todo.id===id ? {...todo,text:editedText} : todo ))
}

  return (
    <div className="App">
     <InputTodo />
     <TodoList todos={todos} handleComplete={handleComplete} handleEdit={handleEdit}  handleDelete={handleDelete} />
    </div>
  );
}

export default App;
