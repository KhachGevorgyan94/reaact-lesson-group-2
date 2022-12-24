import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {toDoActions} from "../../store/redusers/to-do/type";
import {createToDo, removeItem} from "../../store/redusers/todo-slice";
import useAuth from "../../hook/use-auth";

const useHome = () => {

  const {token, setToken} = useAuth()


  const [toDoListTitle, setToDoListTitle] = useState('')
  const [toDoListTitleSlice, setToDoListTitleSlice] = useState('')
  let toDoList = useSelector(state => state.todoListReducer.toDoList)

  let toDoListSlice = useSelector(state => state.TodoSlice.toDoList)
  const dispatch = useDispatch()

  useEffect(() => {
  }, [toDoList])


  const addaToDo = () => {
    dispatch({type: toDoActions.CREATE_TO_DO, payload: toDoListTitle})
    setToDoListTitle('')
    setToken(toDoListTitle)
  }

  const addaToDoSlice = () => {
    dispatch(createToDo(toDoListTitleSlice)) // payload = asdhaskjhdasd
    setToDoListTitleSlice('')
  }

  const deleteItemSLice = (index) => {
    dispatch(removeItem(index))
  }

  const deleteList = (index) => {
    dispatch({type: toDoActions.REMOVE_LIST, payload: index})
  }

  useEffect(() => {
    console.log(token, 'token')
  }, [token])


  return {
    addaToDo,
    addaToDoSlice,
    deleteItemSLice,
    deleteList,
    setToDoListTitle,
    setToDoListTitleSlice,
    toDoListTitle,
    toDoListTitleSlice,
    toDoListSlice,
    toDoList,
    token
  }
}

export default useHome