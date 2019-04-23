import types from '../types/types';

let i=0;

const addTask =( text )=> ({
    type: types.ADD_TASK,
    payload:{
        id:i++, 
        text 
    }
});

const taskDone = (id) =>({
    type: types.TASK_DONE,
    payload: {
        id
    }
})

const removeTask = (id) =>({
    type: types.REMOVE_TASK,
    payload: {
        id
    }
})

const removeAll =({
    type: types.REMOVE_ALL

})

export default{
    addTask,
    taskDone,
    removeTask,
    removeAll
}

//wywołanie w konsoli redux action
// ({
//     type: 'ADD_TASK',
//     payload:{
//         id:4, 
//         text:'text' 
//     }
// })

// ({
//     type: 'REMOVE_TASK',
//     payload: {
//         id:4
//     }
// })