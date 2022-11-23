import React from "react";
import './App.css'

class App extends React.Component {
  state = {
    bgColor:'',
    text:'',
    fontSizeText:16
  }

 handleChangeColor = (e)=>{
   console.log(e.target.value)
   this.setState({bgColor:e.target.value})
  }

  handleChangeRange = (e)=>{
    console.log(e.target.value)
    this.setState({fontSizeText:e.target.value})
  }

  handleChangeInput = (e)=>{
    this.setState({text:e.target.value})
  }

  render() {
      return <div style={{backgroundColor:this.state.bgColor}}>
      <label >
        <input type="color" onChange={this.handleChangeColor}/>
      </label>

        <label >
          <input type="range"value={this.state.fontSizeText} max={40} min={10} onChange={this.handleChangeRange}/>
        </label>

        <label >
          <input className='P-input' type="text" value={this.state.text} onChange={this.handleChangeInput}/>
        </label>

        <p style={{fontSize:this.state.fontSizeText+'px'}}>{this.state.text}</p>
    </div>
  }
}

export default App

