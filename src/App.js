import React, { Component } from 'react';
import './App.css';
import List from './components/List';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import store from './store'
import taskReducer from './reducers/reducers'
import toDo from './reducers/reducers'

// const toDo={
//   tasksToDo:['Umyć okna', 'Zakupy', 'Pranie', 'Upiec ciasto']
// }

// function taskReducer (state=toDo, action){
//   switch (action.type){
//     case 'REMOVEALL':
//       return{
//         ...state, tasksToDo: []
//       }
//     case 'ADD':
//       return {
//         ...state, tasksToDo: [...state.tasksToDo, action.newTask]
//       }
//     default:
//       return state
//   }
// }




// const store= createStore(taskReducer, composeWithDevTools());
// window.store=store;


class App extends Component {
  render() {
    return (
      <div className="App">
      <List/>
      </div>
    );
  }
}

export default App;
