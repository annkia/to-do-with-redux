import types from '../types/types';

export const toDo={
    tasks:['Umyć okna', 'Zakupy', 'Pranie', 'Upiec ciasto']
  }

function taskReducer (state=toDo, action){
    switch (action.type){
      case types.REMOVE_ALL:
        return{
          ...state, tasks: []
        }
        case types.REMOVE_TASK:
        return{
          ...state, tasks: []
        }
      case types.ADD_TASK:
        return {
          ...state, tasks: [...state.tasks, action.payload]
        }
      case types.TASK_DONE:
          return{
            ...state
          }
      default:
        return state
    }
  }

  export default taskReducer;
