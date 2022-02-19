// export const incrementCounter = {
//     type: "INCREMENT_COUNTER"
// }; 

import { ADD_TASK, COMPLETE_TASK, DECREMENT, DELETE_TASK, EDIT_TASK, INCREMENT } from "./actionTypes"

// export const decrementCounter = {
//     type: "DECREMENT_COUNTER"
// }; 

// action creators
export const inc = () =>{
    return {
        type:INCREMENT
    }
}

export const dec = () =>{
    return {
        type:DECREMENT
    }
}

/// to do app actions //
///delete action ///
export const del = (id) => {
return {
    type:DELETE_TASK,
    payload:id
}
}

/// complete action ////
export const comp = (id) => {
    return {
        type:COMPLETE_TASK,
        payload:id
    }
}

export const edit = (editedTask) => {
    return {
        type: EDIT_TASK,
        payload:editedTask
    }
}

export const add = (addTask) => {
    return {
        type: ADD_TASK,
        payload: addTask
    }
}