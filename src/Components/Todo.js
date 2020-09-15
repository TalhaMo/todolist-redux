import React from 'react'
import EditModal from './EditModal'
import {connect, useDispatch} from 'react-redux';
import {deletList,complete} from '../Redux/Actions/todoActions'
const Todo = ({todo}) => {
  const dispatch = useDispatch()

 


    return (
        <div>
            <input type='checkbox' onClick={()=>dispatch(complete(todo.id))}/>
            <p
        style={
          todo.isCompleted
            ? { textDecoration: "line-through" }
            : {  }
        }
      >
        {todo.text}
      </p>
            <EditModal buttonLabel="Edit" todo={todo}  />
            <button onClick={()=>dispatch(deletList(todo.id))}>delete</button>
        </div>
    )
}

export default connect()(Todo)
