import React from "react";
import './style.scss'

const TabComponent = ({data, isDark}) => {

  //  props = {data:null}
  return <div className={`P-tab-component 
                        ${isDark ? 'P-dark-component' : ''}`}>

    {data.title ? <h3>{data.title}</h3> : null}
    {/*{data && data.title ? <h3>{data.title}</h3> : null}*/}
    {/*{data && data.description ? <p>{data.description}</p> : null}*/}
    { data.description ? <p>{data.description}</p> : null}

  </div>
}
export default TabComponent