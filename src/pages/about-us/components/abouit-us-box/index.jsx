import React from "react";
import AboutUsModal from "../about-us-modal";

class AbouitUsBox extends React.Component{

  state = {
    isOpenModal:false
  }

  openModal = ()=>{
    this.setState({isOpenModal:true})
  }

  closeModal = ()=>{
    this.setState({isOpenModal:false})

  }

  render() {
    return <div className='P-about-box'>
      {this.props.title && this.props.title.trim().length?<h3>{this.props.title}</h3>: null}
      <p>{this.props.description}</p>
      <span>{this.props.counter}</span>
      <button onClick={this.props.onChangeCounter}>Click me</button>
      <button onClick={this.openModal}>Show info modal</button>


      {this.state.isOpenModal?<AboutUsModal title={this.props.title}  description={this.props.description} closeModal={this.closeModal}/>: null}
    </div>
  }
}

export default AbouitUsBox