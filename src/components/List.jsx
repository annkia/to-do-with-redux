import React from 'react';
import './List.scss';
import { connect } from  'react-redux';



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

const List = (props) =>  
    <ul>
        {props.tasks.length}
    </ul>

const mapStateToProps = state => ({tasks:state.tasks});

export default connect(mapStateToProps, {})(List);