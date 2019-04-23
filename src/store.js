import  taskReducer  from './reducers/reducers'
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';




const store= createStore(taskReducer, composeWithDevTools());
window.store=store;

export default store;