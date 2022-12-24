import React from "react";
import useHome from "./use-home";
import useAuth from "../../hook/use-auth";
import HomeBox from "../../components/home-box";

const Home = () => {
  const {
    addaToDo,
    deleteItemSLice,
    deleteList,
    addaToDoSlice,
    setToDoListTitleSlice,
    toDoListTitle,
    setToDoListTitle,
    toDoList,
    toDoListSlice,
    toDoListTitleSlice,
    token

  } = useHome()


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
    {/*{toDoListTitleSliceInput}*/}

    <button onClick={addaToDoSlice}>Add to Do list</button>

    <ul>
      {toDoListSlice.map((item, index) => {
        return <li key={index} onClick={() => deleteItemSLice(index)}>{item}</li>
      })}
    </ul>

    <HomeBox tokenData={token}/>

  </div>
}

export default Home