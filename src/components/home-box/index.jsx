import useAuth from "../../hook/use-auth";
import {useEffect} from "react";

const HomeBox = ({tokenData}) => {
  const {token, setToken} = useAuth()

  useEffect(()=>{
    setToken(tokenData)
  },[tokenData])
  return <div>
    <p>useAuth - token = {token}</p>
    <p>from props  - tokenData = {tokenData}</p>
  </div>
}
export default HomeBox