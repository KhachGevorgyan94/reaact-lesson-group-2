import React from "react";

class Counter extends React.Component {
  state = {
    counter: 0
  }

  // funkcianenr  class  makardakov sarqum enq arrow  function  standartov, aysinq nslaqov  funkcianer
  getMyName = () => {
    console.log('dddddddddddd')
    this.setState({counter: ++this.state.counter})
  }

  render() {
    return <div className='P-counter-box'>
      <button onClick={this.getMyName}>Click me</button>
      {/*HTML elemetni  vra  karox enq avelacnes  popoxakanner  iranc ardyunnqn tesnelu hamar,  {}  pakagceri  ognutyamb*/}
      <p>{this.state.counter}</p>
    </div>
  }
}

//componentn sarqeluc heto ayn  petq e  anpayman export anel, vorpiszi ayl  ejerum hasaneli lini
export default Counter