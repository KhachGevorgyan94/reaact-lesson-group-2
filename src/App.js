import React, {useEffect, useState} from "react";
import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import {Switch, Route, Redirect} from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import {useDispatch, useSelector} from "react-redux";
import {authorizationType} from "./store/redusers/auth/type";

function App() {
  const token = useSelector(state => state.authReducer.token)
  const [loading, setIsLoading] = useState(true)
  const dispatch = useDispatch()
  useEffect(() => {
    setTimeout(() => {
      dispatch({type: authorizationType.CHECK_TOKEN})
      setIsLoading(false)
    }, 2000)

  }, [])

  useEffect(() => {

    console.log(token)
  }, [token])


  return <div>
    {!loading && token ? <Switch>
        <Route path='/home' component={Home}/>
        <Redirect to={'/home'}/>
      </Switch> :
      <Switch>
        <Route path='/login' component={Login}/>
        <Redirect to={'/login'}/>
      </Switch>}
  </div>
}

export default App
