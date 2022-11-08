import React from "react";
import AbouitUsBox from "./components/abouit-us-box";
import './style.scss'

class AboutUs extends React.Component {
  state = {
    counter: 0,
  }

  //  new AbouitUsBox({title:'',description:'' })

  incrementClickButton = () => {
    this.setState({counter: ++this.state.counter})
  }


  render() {
    return <div>
      <AbouitUsBox onChangeCounter={this.incrementClickButton} counter={this.state.counter} title='title 1' description='description 1'  ></AbouitUsBox>
      <AbouitUsBox onChangeCounter={this.incrementClickButton} counter={this.state.counter} title='title 2' description='description 2' ></AbouitUsBox>
      <AbouitUsBox onChangeCounter={this.incrementClickButton} counter={this.state.counter} title='title 3' description='description 3' ></AbouitUsBox>
      <AbouitUsBox onChangeCounter={this.incrementClickButton} counter={this.state.counter} title='title 4' description='description 4' ></AbouitUsBox>
      <AbouitUsBox onChangeCounter={this.incrementClickButton} counter={this.state.counter} title='title 5' description='description 5' ></AbouitUsBox>

      <button onClick={this.incrementClickButton}>click {this.state.counter}</button>
    </div>
  }
}

export default AboutUs