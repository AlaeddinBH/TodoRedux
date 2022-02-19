import { ADD_TASK, COMPLETE_TASK, DECREMENT, DELETE_TASK, EDIT_TASK, INCREMENT } from "./actionTypes";
import makeid from './id.js'
const initialState = {
    counter: 0,
    tasks:[
        {id:makeid(10),action:'learn react',isDone:true},
        {id:makeid(100),action:'learn redux',isDone:false}
    ]
};

function Reducer(state = initialState,action){
    
    switch(action.type){
        case INCREMENT:
            return {...state, counter : state.counter + 1 }
        case DECREMENT:
            return {...state, counter : state.counter - 1 }
       
        case DELETE_TASK:
            return {
                ...state,tasks:state.tasks.filter(el=>el.id!==action.payload )
            }
        case COMPLETE_TASK:
            return {
                ...state,tasks:state.tasks.map(el=>el.id===action.payload? {...el,isDone:!el.isDone}:el  )
            }
        case EDIT_TASK: 
            return {
                ...state,tasks:state.tasks.map(el=>el.id===action.payload.id ? action.payload: el)
            }    
        case ADD_TASK:
            return {
                ...state,tasks:[...state.tasks,action.payload]
            }

        default: return state;
        }
};

export default Reducer; 