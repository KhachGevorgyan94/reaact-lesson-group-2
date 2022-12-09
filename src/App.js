import React, {useEffect, useRef, useState} from "react";
import './App.css'
import axios from "axios";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const boxRef = useRef()
  const [user, setUserData] = useState({
    firstName: '',
    lastName: ''
  })

  const [userId, setUSerId] = useState("63921096aaf0eb03e8f93efa")


  useEffect(() => {
    getUsersList()
    // deleteUser("63920f96aaf0eb03e8f93ef4")
  }, [])

  const updateUser = async (id) => {
    const result = await axios.put(`https://crudcrud.com/api/df935a9b72704684a2841073c1dbe78e/user/${id}`, user)
    console.log(result)
    if (result.status === 200) {
      await getUsersList()
    }
  }

  const handleChange = (e) => {
    setUserData({...user, [e.target.name]: e.target.value})
  }

  const getUsersList = async () => {
    const result = await axios.get('https://crudcrud.com/api/df935a9b72704684a2841073c1dbe78e/user')

    console.log(result.data)
  }
  const deleteUser = async (id) => {
    const result = await axios.delete(`https://crudcrud.com/api/df935a9b72704684a2841073c1dbe78e/user/${id}`)

    console.log(result.data)
  }

  const handleSubmit = async () => {

    if (userId) {
      await updateUser(userId)

    } else {
      const result = await axios.post('https://crudcrud.com/api/df935a9b72704684a2841073c1dbe78e/user', user)
      console.log(result)

      if (result.data._id) {
        toast.success('Registration was succesfule')
      } else {
        toast.error('Wrong Data')
      }
    }

  }

  return <div className="P-box" style={{display: 'inline-block'}} ref={boxRef}>

    <input type="text" name='firstName' value={user.firstName} onChange={handleChange}/>
    <input type="text" name='lastName' value={user.lastName} onChange={handleChange}/>
    <button onClick={handleSubmit}>
      create user
    </button>
    {!loader ? <div>
      {toDoList.length ? <ul>
        {toDoList.map((item, index) => {
          return <li key={index}>{item.title}</li>
        })}
      </ul> : <p>ToDompty</p>}
    </div> : <p>loading ...</p>}

    <div className='icon-buffer'></div>

    <ToastContainer/>
  </div>

}

export default App
