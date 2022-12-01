import React, {useEffect, useState} from "react";


const CustomBox = ({data}) => {
  // props = {}

  const [newDate, setNewDate] = useState('')

  useEffect(() => {
    // Schatum e mekq angam stexcvelu pahin
    console.log(data)
    setNewDate(data.date.split('/').join('~'))
  }, [])

  return <div className='P-custom-box'>
    <h3>Lorem ipsum.</h3>
    <p>{data.name}</p>
    <h1>{newDate}</h1>

  </div>
}
export default CustomBox