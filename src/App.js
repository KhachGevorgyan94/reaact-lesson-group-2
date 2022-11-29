import React, {useState} from "react";
import './App.css'
import CardBox from "./components/card-box";
import TabList from "./components/tab-list";

//  functional component 1
// const App = ()=>{
//
//   return <div>
//     asdfasdfasdf
//   </div>
// }

// export default App



/**
 * Functional  componetn @ react jsi  jamanakakic  methodneric mekn e  vor@  tuyl e talis  stexcel  componentner aranc  classi mijnordutyamb,
 * ayn karox e irenic nerkayacnel hasarak  function kam arrow  function
 * vor@  veradarcnu me  html  tesaki  model  {return e anum html tesaki model}
 * bolor  hnaravorutyunner@ voronq kirarum eqn  class  componentneri jamanak  hasaneli en  nayev  functional compomnentneri hamar
 * aranc  {this}  contexti  kirarutyan
 * **/

function App() {
  /**
   * Functional component vortex  cankacac tesaki  informacia  ogitagorcelu,
   * popoxelu hamar vorpeszi react@ haskana  ayd  tvyalnberi popoxutyunnern
   * kirarum eqn useState() hook@  vor@ irenic nerkayacnum e  mi  global  funkcia
   * ayn tuyl e talis stexcel  2 paramter, voroncic arajin@  aynd  popoxakann e  vor@
   * karox e linel inchpes primitiv aynpes el  object  tesaki popoxakan
   * isk ekrord parametr@ da  ayn  funkcian e  vori mijocov  popoxuma  haytararvac  popoxakani arjeq@  kam arjeqner@
   * const [showBox, setShowBox] = useState(true)  kirarutyunn
   * usestate@ () nshani  nersum spasum e  naxnakan  arjeq@  kaxvac popoixakani tesakic,  string, number, booleanr,  kam object
   *
   * **/

  const [showBox, setShowBox] = useState(true)

  const handleHideBox = ()=>{
    setShowBox(!showBox)
  }
  return <div>
    {/*{showBox?  <CardBox title={'title 1'} description={'description 1'}/>: null}*/}

    <TabList/>

    {/*<button onClick={handleHideBox}>hide Box</button>*/}

  </div>
}


export default App

/**
 * Class componenti  orinak
 *
 * class  App extends React.Component{
 *   render() {
 *     return <div>
 *       example  information
 *     </div>
 *   }
 * }
 *
 * **/

/**
 * Functional component tarberak 1
 *
 * function App(){
 *   return <div>
 *     example information
 *   </div>
 * }
 *
 * **/

/**
 * Functional component tarberak 2
 *
 * const  App = ()=>{
 *   return <div>
 *     example information
 *   </div>
 * }
 *
 * **/