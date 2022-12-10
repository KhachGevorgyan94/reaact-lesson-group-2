import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {authorizationType} from "../../store/redusers/auth/type";

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const dispatch = useDispatch()

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleClick = () => {
    if (formData.email && formData.password) {
      console.log(formData)
      localStorage.setItem('token_test', (formData.email + formData.password).toString())
      window.location.reload()
      // dispatch({type: authorizationType.SET_TOKEN_DATA, payload: formData.email + formData.password})
    }
  }
  return <div>

    <input onChange={handleChange} name='email' type="text" value={formData.email}/>
    <input onChange={handleChange} name='password' type="password" value={formData.password}/>
    <button onClick={handleClick}>Log in</button>

  </div>
}

export default Login