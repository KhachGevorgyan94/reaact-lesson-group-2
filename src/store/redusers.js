import {combineReducers} from 'redux'
import authReducer from "./redusers/auth/auth";
import todoListReducer from "./redusers/to-do/todo-list-reducer";
import TodoSlice from "./redusers/todo-slice";


/**
 * @combineReducers   da reduxi  koxmic  trvac  funkcianeric mekn e  vor@ hnaravorutyun e talis
 * projectum stexcvac  bolor redusernern miavorel  mek amboxjanak reduseri  mej  ev ayd  ambocjakan reduser@
 * verjum veragrum eqn  createStore methodin vori mijocov kstexcvi arden amboxjakan  stat@ hamakarg@
 * **/
const rootReducer = combineReducers({
  // auth:authReducer, //{}
  // toDo:todoListReducer //{}
  authReducer,
  todoListReducer,
  TodoSlice
})
console.log(rootReducer)
// authReducer = authReducer

export default rootReducer

// new state  = {
// authReducer:{token:''}
// todoListReducer:{toDoList:[]}
// }

