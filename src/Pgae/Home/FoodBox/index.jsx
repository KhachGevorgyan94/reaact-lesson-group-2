import React from "react";

// export default function FoodBox({box}){
//     return<div>
//         <img src={box.img} alt={box.alt}/>
//         <h2>{box.header}</h2>
//         <p>{box.description}</p>
//         <p className='price'>{box.price}</p>
//     </div>
// }

export default class FoodBox extends React.Component {
  render() {
    return <div>
      <img src={this.props.box.img} alt={this.props.box.alt}/>
      <h2>{this.props.box.header}</h2>
      <p>{this.props.box.description}</p>
      <p className='price'>{this.props.box.price}</p>
    </div>
  }
}