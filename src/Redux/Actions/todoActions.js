
import {ADD,DELETE,EDIT,COMPLETE} from '../Constants/actionTypes';
  
  export const addTodo = (payload) => {
    return { type: ADD, payload };
  };
  export const deletList=(payload)=>{
    return {type:DELETE,payload}
  }
  export const editList=(payload)=>{
    return {type:EDIT,payload}
  }
  export const complete=(payload)=>{
    return {type:COMPLETE,payload}
  }