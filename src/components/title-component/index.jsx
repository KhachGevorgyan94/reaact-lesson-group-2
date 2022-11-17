import React from "react";
import './style.scss'

class TitleComponent extends React.Component {
  render() {
    return <section>
      <div className='G-container'>
        <div className='P-title-information'>
          <h3 className='P-green'>{this.props.title}</h3>
          <p>{this.props.description}</p>
        </div>
      </div>
    </section>
  }
}

export default TitleComponent