import React from 'react';
import './List.scss';
import { connect } from  'react-redux';
import   addTask  from '../actions/actions';
import   removeTask  from '../actions/actions';





// export default class List extends React.Component{
   
        
    
//     render(){
//         // this.props={
//         //     toDo:['Umyć okna', 'Zakupy']
//         // }
//         return(
//             <div className="List">
//             <h1>Let's do this</h1>
//             <input type="text"></input>
//             <button >add task</button>
//             <h1>Your tasks</h1>
//             {/* <ol>
//                 <li>{this.props.toDo[0]}</li>
//                 <li>{this.props.toDo[1]}</li>
//             </ol> */}
//             </div>
//         );
//     }
// }
//{props.tasks.length}
// const List = (tasks) => ( 
//     <div>
//         <ul>
//             {tasks.map((task)=>(
//                 <li key={task.id}>
//                 {task.id}:{task.text}
//                 </li>
//             ))}
//         </ul>
//     </div>
// );
const mapStateToProps = state => ({tasks:state.tasks});

const mapDispatchToProps = dispatch =>({
    addTask:text=>{
        dispatch(addTask(text));
    },
    removeTask:id=>{
        dispatch(removeTask(id));
    }
})


const List = ({ tasks }) => (
	<div>
		<ul>
			{tasks.map((task) => (
				<li key={task.id}>
                    {task.id}:{task.text}
                    <button onClick={()=>removeTask(task.id)}>Remove </button>
				</li>
			))}
		</ul>
		<button onClick={() => addTask('test', 'test')}>Add</button>
	</div>
);

//za pomocą funkcji connect uzyskujemy dostęp do stanu, gdzie przechowujemy zadania z id
//connect przyjmuje 2 parametry: 1. obiekt, tu - stałą mapStateToProps w której mapujemy elementy ze stora na propsy
//2. akcje - może zostać puste
export default connect(mapStateToProps, mapDispatchToProps)(List);

//Jako drugi argument przekazany do connect, to mapDispatchToProps służy do wysyłania akcji do stora.

//dispatch jest funkcją stora Redux. Wywołujesz store.dispatch, aby wywołać akcję. To jedyny sposób na wywołanie zmiany stanu.
//mapDispatchToProps == mapDispatch