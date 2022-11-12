import React from "react";
import './style.scss'

class ProductBox extends React.Component {

  // state  vorte  pahum eqn  tvyal  componenti hamar naxatesvac  popoxakannern  ays  tiruytyum  ogtagorcelu hamar
  // inchpes nayev  Reactin haskacnelu hamar,  inch vor popoxakan popoxelis nor  popoxvac ardyunqn nkarelu hamar
  state = {
    newDate: ''
  }
  // componentDidMount
  // ayn ashxatum e  tvyal  component   brouzerum  haytnveluc animapes heto  render funkcian ashxateluc heto
  // ayn ashxatum e  mek angam miayn  compinent stexcvelu pahin
  // ev ete anhrajesht e  compoentn stexcvelu pahin katarvi inch vor  gorcoxutyun
  // textain arjeq popoxvi,  backendic  inforamcia stana, inch vor paymanner stugi  not htmlum inforamcian  cuyc ta
  // ayd amenn kazmakerpum eqn  ays mijavayrum
  componentDidMount() {
    console.log(this.props.item.date)
    let x = this.props.item.date.split('/').join('~')
    console.log(x)
    this.setState({newDate: x})
    console.log(this.props.item, ' product created')
  }

  // componentWillUnmount() {
  //   console.log(this.props.item,' product deleted')
  // }


  render() {
    return <div>
      <div className='P-image-block'
           style={{backgroundImage: `url('${this.props.item.image}')`}}/>
      <h3>{this.props.item.name}</h3>
      <h2>{this.props.item.description}</h2>
      <p>{this.props.item.price} {this.props.item.symbol}</p>
      <h4>{this.state.newDate}</h4>

      <button onClick={this.props.deleteMe}>delete me</button>
    </div>
  }
}

export default ProductBox