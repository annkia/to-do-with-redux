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
          ...state,
          tasks: state.tasks.filter(task=>task.id!==action.payload.id)
        }
      case types.ADD_TASK:
        return {
          ...state,
          tasks: [...state.tasks, action.payload]
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


//  case EDIT_POST:
//             return{
//                 ...state,
//                 //ternary operator 
//                 //jeśli post.id jest taki sam jak action.payload.id to
//                 //true action.payload
//                 //false post - zostaw
//                 //porównujem
//                 posts:state.posts.map(post=>post.id===action.payload.id ? action.payload:post)

//             }
//porównujemy czy post się zmienił, jeśli tak to zamiast starego nadpisujemy nowy,
//nie porównujemy treści tylko id
//nowe id pochodzi action.payload