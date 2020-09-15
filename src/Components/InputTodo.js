import React,{useState} from 'react';
import { connect, useDispatch } from 'react-redux';
import { addTodo } from '../Redux/Actions/todoActions';

const InputTodo = () => {
const [input, setInput] = useState('')
 
  const dispatch = useDispatch();
const handleChange=(e)=>{
    setInput(e.target.value)
}

const add=()=>{
    dispatch(addTodo({ id:Math.random(), text: input, isCompleted: false }))
    setInput('')
}

    return (
        <div>
            <input type='text' value={input} onChange={handleChange}/>
            <button onClick={add}>ADD</button>
        </div>
    )
}

export default connect()(InputTodo)
