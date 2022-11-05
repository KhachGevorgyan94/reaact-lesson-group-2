import React from "react";
import './style.scss'
import Counter from "../../components/counter";


class Home extends React.Component {

  // constructor() {
  //   super();
  //
  //   console.log('111111111111')
  // }
  //  informacian  paherlu hamar anpayman mer  bolor popoxakannenr stexcum eqn  stati  tiruytum
  state = {
    isBool: false,
    counter: 0
  }

  colorRed = () => {
    // stayti  tiruytic  arjeq  popoxelu hamar ogtagorcum eqn setState funkcian
    //  for react@ haskana  inch vor popoxakan popoxvel e
    this.setState({isBool: true})
  }

  render() {
    //  clasnern  haytararum eqn  classNamei  mijocov, clasneri  vra  karox eq  nman dzev  paymanner dnel
    return <div className={`P-home-page ${this.state.isBool ? 'P-color-red' : ''}  `}>
      Home
      <button onClick={this.colorRed}>click</button>

      <div className='G-flex'>
        <Counter></Counter>
        <Counter></Counter>
        <Counter></Counter>
        <Counter></Counter>
      </div>


    </div>
  }
}

export default Home