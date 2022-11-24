import React, {useEffect, useState} from "react";

const CardBox = ({title, description}) => {
  /**
   * functional componenti  jamanak  bolor parametrnern  voronq spasu me tvyal  component@  karox enq vercnel destrukturizaciai  mijocov
   * {title, description} voronq  durs e hanum props objecti mijic  ev miangamic karox eqn kirarel  mer  componenti  nersum aranc  {this} contexti
   *   props = {title, description, ...ev ayln }
   * **/


  const [counter, setCounter] = useState(0)
  const [cards, setCards] = useState([])
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


  /**
   *   let oldCounter = 0  nmanatip popoxakanner  stexcelic  ete cankananq popoxel,
   *   react js@  chi haskana  ayd  popoxutyunnern  ev render chi karox anel
   *   nman  paragayum misht  ogtagorcu meqn  reacti  koxmic trvac useState()  hooK@
   *   vori mijocov popoxelov  mer ajreqnern  react@  khaskana ayd  popoxutyunnern ev render kani  mer  componentn  krkin
   * **/

  let oldCounter = 0


  const incrementCounter = () => {
    let x = counter
    ++x
    console.log(x, 'x value ')
    setCounter(x)
    console.log(counter, 'counter')
    /**
     * aystex oldCounter i arjeq@ karox eqn tesnel  te inchpes e  popoxvum, 1,2,3...  bayc reacti  tiruytum htmli  mijavaytum chenq kaarox tesnel  ayd popoxutyunn
     * qani vor  react@ der chi ahskanum  inch  arjeq e popoxvel
     * **/
    ++oldCounter
    console.log(oldCounter)
  }



  /**
   * useEffect()  hajord dasin noric  kpatmem
   * **/

  //  componentDidUpdate
  //  useEffect(() => {
  //   //  cankacac logika
  //   console.log(counter,'useEffect counter')
  // }, [counter])

  // componentDidMount
  // componentDidUnMount
  // componentDidUpdate


  // componentDidMount
  useEffect(() => {
    console.log('componentDidMount')
  }, [counter])

  useEffect(() => {

    return () => {
      // componentDidUnMount
      console.log('componentDidUnMount')

    }
  }, [])


  return <div className='P-card-bop'>
    <h3>{title}</h3>
    <p>{description}</p>
    <button onClick={incrementCounter}>Click me</button>
    <h1>{counter}</h1>
    <h1>{oldCounter}</h1>
  </div>
}

export default CardBox