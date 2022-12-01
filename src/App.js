import React, {useEffect, useState} from "react";
import './App.css'
import CustomBox from "./components/custom-input";

function App() {
  // nmab dzevi  haytararutyunner  shaat hazvadep en anum kariqic elnelov
  const x = 34

  const [productList, setProductList] = useState([])
  const [pageLoader, setPageLoader] = useState(false)

  useEffect(() => {
    //  ComponentDidMount
    // Ashxatum e  @ndamenn  mek angam  3  varkyan  heoto mez talov mor zangvac
    setPageLoader(true)
    setTimeout(() => {
      setProductList([
        {
          name: 'Test 1',
          date: '20/11/2022'
        },
        {
          name: 'Test 2',
          date: '20/11/2022'
        },
        {
          name: 'Test 3',
          date: '20/11/2022'
        }
      ])
    }, 3000)
  }, [])


  useEffect(() => {
    //  ComponentDidUpdate
    // Ashxatum e  erb productneri listi het  popoxutyun e texi unece staytum
    console.log(productList)
    if (productList.length) {
      setPageLoader(false)
    }
  }, [productList])


  return <div>
    {!pageLoader ? <div>
      {productList.length ? productList.map((item, index) => {
        return <CustomBox key={index} data={item}/>
      }) : <p>Empty Product List</p>}
    </div> : <p>Loading...</p>}
  </div>
}

export default App
