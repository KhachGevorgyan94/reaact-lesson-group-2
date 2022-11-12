import React from "react";
import '../../../assets/style/global.scss';
import './style.scss';


class ComponentBox extends React.Component {

  // state  vorte  pahum eqn  tvyal  componenti hamar naxatesvac  popoxakannern  ays  tiruytyum  ogtagorcelu hamar
  // inchpes nayev  Reactin haskacnelu hamar,  inch vor popoxakan popoxelis nor  popoxvac ardyunqn nkarelu hamar
  state = {
    isHover: false,
  }

  //  funckainern  class componentneri jamanak  grum eqn  aarrow  function  slaqi =>  tesqov
  // ays  tiruytum   this  contextn haskanalu hamar
  giveBgColor = (e) => {
    this.setState({isHover: true})
  }

  removeBgColor = (e) => {
    this.setState({isHover: false})
  }

  render() {
    //  meqn paymanner karoix eqn  grel  canakca  tex sksac style, classname  tiruyutneric minchev  html  tegeri  vra
    //  paymannern grum enq  ?  nshann  cuyc tvox  mi toxani  gorcoxutyun mijocov ev kaxvac  drakan u bacxasakan linelu tarberaknern aradnacnum eqn  : nshanov
    //  Payman ?  drakan  linelu depqum katarvox  gorxoxutyun : bacasakan  linelu depqum  katarvox  gorxoxutyun
    return <div className={`G-padding-33 ${this.state.isHover ? 'P-hovered' : ''}`}
                style={{backgroundColor: this.state.isHover ? this.props.colorValue ? this.props.colorValue : 'blue' : 'transparent'}}
                onMouseLeave={this.removeBgColor}
                onMouseOver={this.giveBgColor}
                onClick={this.props.onClick}
    >
      <div className="compo-box hover">
        {/*  ays  tarberakov  html tegeri  vra eqn paymanner dnum vorpiszi  render lineli jamanak kaxvac paymanic   brouzerum haytnvi  te  che */}
        {/*  ete kariq  chka haytnvelu  kaxvac paymanic  talis enq  verjum null*/}
        {this.props.main && this.props.main.length ? <p>{this.props.main}</p> : null}
        {/*  child  argumenti  mijocov  aystex  nkarum eqn ayn   html  elementnern  voronq  poxancvel en  ays  component  hetvevyal tarberakov*/}
        {/*  <ComponentBox>   <h3>{item.text}</h3> </ComponentBox> */}
        {/*  ays  paragayum  knkare aystex  h3 teg@  ir hamapatasxan informaciauyov*/}
        {this.props.children}
      </div>
    </div>

  }
}

export default ComponentBox