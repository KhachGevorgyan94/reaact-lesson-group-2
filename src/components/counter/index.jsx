import React from "react";

class Counter extends React.Component {
  state = {
    counter: 0,
    pageLoader:false
  }
  // funkcianenr  class  makardakov sarqum enq arrow  function  standartov, aysinq nslaqov  funkcianer
  getMyName = () => {
    this.setState({pageLoader:true},()=>{
      const result = fetch('')

      if(result){
        this.setState({pageLoader:false})
      }
    })
    // const result = fetch('')
    // this.setState({pageLoader:false})

    // this.setState({counter: ++x}, ()=>{
    //   console.log(this.state.counter,'changed')
    // })

    console.log(this.state.counter,'2222222222') // 1

  }

  render() {
    return <div className='P-counter-box'>
      <button onClick={this.getMyName}>Click me</button>
      {/*HTML elemetni  vra  karox enq avelacnes  popoxakanner  iranc ardyunnqn tesnelu hamar,  {}  pakagceri  ognutyamb*/}
      <p>{this.counter}</p>
    </div>
  }
}

//componentn sarqeluc heto ayn  petq e  anpayman export anel, vorpiszi ayl  ejerum hasaneli lini
export default Counter