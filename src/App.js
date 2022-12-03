import React, {useEffect, useRef, useState} from "react";
import './App.css'

function App() {
  /**
   * Reactii mijavayrum vorpiszi karoxananq  vercnel inch vor  informacia  html  dom elementneric vorevice meki masin
   * document.getElementsByClassName('P-box')
   * document.getElementById()
   * document.querySelector()
   * document.querySelectorAll() ev ayln dranc  poxarnum e  Reaacti  koxmic stexcvac nor Hook
   * vori anunne  useRef()
   * greladzevn  hetevyaln e , stexcum enq  popoxakan  vorin veragrum eqn {useRef}  funkcian,
   * ev ayd popoxakanen ogtagorcum eqn  html Dom elemetni vra atributi tesqov  {ref}  popoxakanin  veragrelov
   *
   * const exampleRef = useRef()
   * <div ref = {exampleRef}></div>
   * for@ irenic nerkayacnum e inch vor  objectvori mej ka  {current} ket
   * {current} irenic arden nerkayacnum e  tvyal  dom elementi  masin informacian,
   * isk ayn hasaneli linelu hamar nax@ntreli e  stugel payman  goyutyun uni te voch
   * dranic heto  nor arden  katarel inch vor gorcoxutyunner
   *
   * **/
  const boxRef = useRef()
  const inputRef = useRef()
  const fileRef = useRef()

  const [toDoList, setToDoList] = useState([])
  const [loader, setLoader] = useState(false)
  const [user, setUserData] = useState({
    fistName: '',
    lastName: ''

  })


  useEffect(() => {
    // const box = document.getElementsByClassName('P-box')
    document.querySelectorAll()
    // console.log(box)
    console.log(boxRef.current.get)
  }, [])

  const handleFoucs = () => {
    console.log('handleFoucs')
  }
  const handleBloor = () => {
    console.log('handleBloor')
  }

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  const handleClickBlur = () => {
    console.log('handleClick')
    console.log(inputRef)
    if (inputRef.current) {
      inputRef.current.blur()
    }
  }

  const uploadFile = () => {
    if (fileRef.current) {
      fileRef.current.click()
    }
  }

  useEffect(() => {
    getToDoList()
  }, [])


  const getToDoList = (id) => {

    /**
     * fetch() Asinxron axhatox  funkcia vor2 naxatesavc e  back end i  bazai  mijavayrickatarel  hetevyal  gorcoxutyunnern
     * CRUD - Create, Review, Update, Delete
     * fetch() - himnakan baxadrich masern en, argumentov stanum e 2  parametr
     * 1, parametr@  spasu me link,  te  vor hascein petq e  dimi invormacia stanalu  uxarkelu  popoxaelu kam jnjelu hamar
     *  fetch('', options)
     *  options@  nerkayacnum object vortex pahvum e voroshaki  informacia  harcum@  katarelu hamar  voroncic amenakarevornn en
     *  method - vor@  cuyc e talis te  inch  methoidov eqn  dimum beckendin  ka  4 tesaki himnakan methodner dranq en
     *  GET, POST, PUT, DELETE
     *  GET - ete kariq uneqn  bacic  inch vor informacia uxaki stanal ev nkarelo method@ nshum eqn  GET
     *  POST - ete  petq e inch vor  ban stexcel cankaca object ayd depqum  method@  dnum eqn POST
     *  PUT - ete petq e inch vor  stexcvac  marmin kam obkject popoxel  update anel dimum enq PUT  methodov
     *  DELETE - ete petq e inch vor stexcvac marmin jnjel dimum eqn ays methodov
     *
     *  body - naxatesvac e miayn POST ev PUT methodneri hamar  vori jamanak meqn  uxarkum enq inch vor informacia  , stexcelu kam popoxelu hamar
     *  body karox e linel canakcac tesaki  informacia,  boolean,  string, number, object, zangvac
     *
     *  ev headers vortex pahvu me voroshaki informacia  login exac  useri  masin
     *
     * **/

    setLoader(true)
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: 'fjghbfkjdlhsfgh;dfgkjhd;fhjfkdgjhs;flkhd;hfgkj'
      },
      body: user,
    }).then(data => {
      console.log(data)
      return data.json()
    }).then(newData => {
      setToDoList(newData)
      console.log(newData)

      setLoader(false)
    })


    //  methods: POST, GET, PUT, DELTE
    //           Create, review, update, delete
  }

  return <div className="P-box" style={{display: 'inline-block'}} ref={boxRef}>

    <input type="text"
           ref={inputRef}
           onFocus={handleFoucs}
           onBlur={handleBloor}
    />

    <input type="file" ref={fileRef} hidden/>
    <br/>
    <br/>
    <br/>
    <button onClick={handleClick}>CLick Focus</button>
    <button onClick={handleClickBlur}>CLick Blur</button>
    <button onClick={uploadFile}>Upload file</button>
    <br/>
    <br/>
    <br/>

    {!loader ? <div>
      {toDoList.length ? <ul>
        {toDoList.map((item, index) => {
          return <li key={index}>{item.title}</li>
        })}
      </ul> : <p>ToDompty</p>}
    </div> : <p>loading ...</p>}


  </div>

}

export default App
