import {useState} from "react";

function useInput({ type,label /*...*/ }) {


  const [value, setValue] = useState("");
  const input = <div className='p-input'>
    {label?<p>{label}</p>:null}
    <input value={value} onChange={e => setValue(e.target.value)} type={type} />
  </div>;


  return [value, input];

}

export default useInput