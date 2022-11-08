import React from "react";

import './style.scss'

class AboutUsModal extends React.Component {
  render() {
    return <div className='P-about-us-modal'>
      <div className='P-about-us-modal-bg' onClick={this.props.closeModal}></div>

      <div className='P-about-modal-content'>
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>
        <button onClick={this.props.closeModal}> close</button>
      </div>

    </div>
  }

}

export default AboutUsModal