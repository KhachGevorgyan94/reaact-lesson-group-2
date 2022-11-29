import React, {useState} from "react";
import TabComponent from "../tab-component";
import './style.scss'

// example 1
// function TabList() {
//   return <div></div>
// }
//
// export default TabList

// example 2
// const TabList = ()=>{
//   return <div></div>
// }
// export default TabList

// example 3
// export const TabList = () => {
//   return <div></div>
// }


const TabList = () => {
  // use statre kmaxq
  const [contentInfo, setContentInfo] = useState(null)
  // popoxakan // funckai vor@  poxum e  tvyal popoxakani arjeq@

  const [inputValue, setInputValue] = useState('')
  const [usersName, setUsersName] = useState([])


  const tapTestData = [
    {
      title: 'Front end developer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, ut?',
      categoryId: 'Programming'
    },
    {
      title: 'Account',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, ut?',
      categoryId: 'Accounting'
    },
    {
      title: 'UI/UX Design',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, ut?',
      categoryId: 'Design'
    }
  ]

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSelect = (selectedType) => {
    console.log(selectedType)
    let selectedCategory = tapTestData.filter(item => item.categoryId === selectedType)
    console.log(selectedCategory)
    setContentInfo(selectedCategory[0])
  }


  const handleClick = () => {
    console.log(inputValue)
    setUsersName([...usersName, inputValue])
    setInputValue('')
  }

  return <div className='Tab-list'>
    {/*<ul className='P-header-tab'>*/}
    {/*  <li className={`${contentInfo && contentInfo.categoryId==='Programming'? 'P-active-tab':''}`}*/}
    {/*      onClick={()=>handleSelect('Programming')}>Programming</li>*/}
    {/*  <li className={`${contentInfo && contentInfo.categoryId==='Accounting'? 'P-active-tab':''}`}*/}
    {/*      onClick={()=>handleSelect('Accounting')}>Accounting</li>*/}
    {/*  <li className={`${contentInfo && contentInfo.categoryId==='Design'? 'P-active-tab':''}`}*/}
    {/*      onClick={()=>handleSelect('Design')}>Design</li>*/}
    {/*</ul>*/}


    {/*{contentInfo?<div className='P-tab-component-section'>*/}
    {/*  <TabComponent data={contentInfo} isDark={true}/>*/}
    {/*  <TabComponent data={contentInfo} isDark={false}/>*/}

    {/*</div>:null}*/}

    <label htmlFor="">
      <input type="text" value={inputValue} onChange={handleChange}/>
      <button onClick={handleClick}> add users</button>
    </label>


    <ul>
      {usersName.map((item, index) => {
        return <li>{index}. {item}</li>
      })}
    </ul>


  </div>
}

export default TabList


// class TestComponent extends React.Component{
//   state = {
//      contentInfo:null
//   }
//
//   constructor() {
//     super();
//     this.state = {
//
//     }
//   }
//   render() {
//     return <div></div>
//   }
// }