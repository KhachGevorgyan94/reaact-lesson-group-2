import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {toDoActions} from "../../store/redusers/to-do/type";
import {removeList} from "../../store/redusers/to-do/todo-list-reducer";
import TodoSlice, {createToDo, removeItem} from "../../store/redusers/todo-slice";

const Home = () => {

  const [toDoListTitle, setToDoListTitle] = useState('')
  const [toDoListTitleSlice, setToDoListTitleSlice] = useState('')
  /**
   * useSelector()  da reduxi  hamar naxatesvac hookeric mekn e  vori mijocov meqn karoxanum
   * eqn vercnel stayti mej pahvac mer reduserneri  koxmoc stexcvac initial stayti cankacac parametr
   *  let toDoList = useSelector(state => state.todoListReducer.toDoList)
   *  @stat@  handisanum e  mer global  reduxi stayt@
   *  @todoListReducer  da  mer steytum pahvac  reduserneric mekn e
   *  @toDoList => todoListReducer-i initial staytum pahvac parametrneric mek ne
   * **/

  let toDoList = useSelector(state => state.todoListReducer.toDoList)

  let toDoListSlice = useSelector(state => state.TodoSlice.toDoList)

  /**
   * useDispatch() reduxi amenakarevor methodneric mekn e
   * vori mijocov meqn  karoxanum enq inch vor informacianer poxancel  mer reudernerin  hamapatasxan
   * voronq el katarum en irench asaneliq gorcoxutyunnern
   * greladzevn hetevyaln e
   *   const dispatch = useDispatch()
   *   voric heto kanchum enq dispatch()  ays method@  arguimentoc poxancelu  action object@
   *   @action => {type:'', payload:''}
   *   vorpes type nshelov te vor method@ petq e  kanchvii  voronq  pahvac en reduerneri  mej
   *   payload -  poxancum eqn inch vor informacia  vor@  karox e voch partadir lineln
   *   aysinqn kaxvac inch vor iravichakneric kariq chka  informacia uxarkel  state ayl parzapes katarel voroshaki stugumner
   * **/
  const dispatch = useDispatch()

  useEffect(() => {
  }, [toDoList])
  const addaToDo = () => {
    dispatch({type: toDoActions.CREATE_TO_DO, payload: toDoListTitle})
    setToDoListTitle('')
  }

  const addaToDoSlice = () => {
    dispatch(createToDo(toDoListTitleSlice)) // payload = asdhaskjhdasd
    setToDoListTitleSlice('')
  }

  const deleteItemSLice = (index)=>{
    dispatch(removeItem(index))
  }

  const deleteList = (index) => {
    // tarberak 1
    dispatch({type: toDoActions.REMOVE_LIST, payload: index})
    // tarberak 2  erb amen  typi  hamar stexcum eqn arandzin funkcianer
    // dispatch(removeList(index))
  }
  return <div>
    <input value={toDoListTitle} type="text" onChange={(e) => {
      setToDoListTitle(e.target.value)
    }}/>

    <button onClick={addaToDo}>Add to Do list</button>

    <ul>
      {toDoList.map((item, index) => {
        return <li key={index} onClick={() => deleteList(index)}>{item}</li>
      })}
    </ul>
    <hr/>
    <p>redux toolkit</p>
    <input value={toDoListTitleSlice} type="text" onChange={(e) => {
      setToDoListTitleSlice(e.target.value)
    }}/>

    <button onClick={addaToDoSlice}>Add to Do list</button>

    <ul>
      {toDoListSlice.map((item, index) => {
        return <li key={index} onClick={() => deleteItemSLice(index)}>{item}</li>
      })}
    </ul>
  </div>
}

export default Home