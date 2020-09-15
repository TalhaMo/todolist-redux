import {ADD,DELETE,EDIT,COMPLETE} from '../Constants/actionTypes';

const initialState={
    tasks:[
        { id: 0,isCompleted:false, text: "task1" },
        { id: 1,isCompleted:false, text: "task2" },
        { id: 2,isCompleted:false, text: "task3" },
    ]
}
const reducer=(state=initialState,action)=>{
    switch (action.type) {
        case ADD:
            return{
            ...state,
            tasks: state.tasks.concat(action.payload),
          };
           case DELETE:
          return{
          ...state,
          tasks: state.tasks.filter((todo) => todo.id !== action.payload),
        };
        case EDIT:
          return{
          ...state,
          tasks: state.tasks.map(todo=> todo.id===action.payload.id ? {...todo,isCompleted: false,text:action.payload.text} : todo ),
        };
        case COMPLETE:
      return {
        ...state,
        tasks: state.tasks.map(todo =>
          todo.id === action.payload ? { ...todo, isCompleted: !todo.isCompleted } : todo
        ),
      };
            default:
                return state;
}
}
export default reducer;