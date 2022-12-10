import {createStore} from 'redux'
import rootReducer from "./redusers";
import TodoListReducer from "./redusers/to-do/todo-list-reducer";


// const store = createStore(TodoListReducer)
/**
 * @createStore()  reduxi  funkcianeric e  vori mijocov  stexcvac  redusernern
 * aysinqn  ayn funkcianern voroqn irancic nerkayacnum en redaxi hamar naxatesavc
 * initialStati arandzin pahestnerov  funkcianer voronq arandzin katarum en voroshaki gorcoxutyunner
 * ayd  bolor@ miavorum e  mek stori  kam  ayl kerp asac  1  stayti mej
 *
 * da  reduxi  karevoraguyn baxkacucic  maseric mekn e handisanum,  stexcelov  global pahestn
 * ayn  karox e ir mej nerarel inchpes 1  reduser  aynpes el mi qani reduserner,
 * mi qani reduserner  integrelu hamar  redux@  mez talis e mek ayl method  vori mijocov nax bolor nedusernenr miavorum
 * eqn irar  sarqelov mek amboxjakan, aynohetev  ayn  poxancum enq  ays  funkcain
 * **/


const store = createStore(rootReducer)

/**
 * // patkeracnum eqn  vor takic motavor ayspes e ashxatum ev  mer redusernerum
 * // stexcvac initialStatnern miavorvelov irar veragrvum en {state} in
 * **/
//   state = {}
//  state =  initialState = {
//   toDoList: [],
// }
//  state = {
// //   toDoList: [],
// // }
export default store

