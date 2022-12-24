import {useState} from "react";

const useAuth = () => {
  const [token, setToken] = useState('')

  return {token, setToken}
}

export default useAuth