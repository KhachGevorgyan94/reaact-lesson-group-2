import React from "react";


class App extends React.Component {

  state = {
    formData: {
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      password: ''
    },
    errorData: {
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      password: ''
    }
  }

  onChangeFirstName = (e) => {
    //    lav tarberak
    this.setState({
      formData: {
        ...this.state.formData,
        [e.target.name]: e.target.value
      }
    })

    //  vat  tarberak
    // if(e.target.name==='lastName'){
    //   this.setState({formData:  {...this.state.formData,lastName:e.target.value}})
    // }
    // if(e.target.name==='email'){
    //   this.setState({formData:{...this.state.formData,email:e.target.value}})
    // }
    // if(e.target.name==='address'){
    //   this.setState({formData:{...this.state.formData,address:e.target.value}})
    // }
  }

  handleClick = () => {
    const {formData, errorData} = this.state
    const newErrorData = {
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      password: ''
    }


    if (!formData.firstName.trim().length) {
      newErrorData.firstName = 'Lracreq Anun@'
    }
    if (!formData.lastName.trim().length) {
      newErrorData.lastName = 'Lracreq Azganun@'
    }

    this.setState({errorData: newErrorData})
    console.log(formData)
  }

  render() {
    const {formData, errorData} = this.state
    return <>
      <div>
        <div>
          <label>
            <input name={'firstName'}
                   onChange={this.onChangeFirstName}
                   value={formData.firstName}
                   placeholder='first name'
                   className='P-inputs' type="text"/>

            {errorData.firstName ? <p>{errorData.firstName}</p> : null}
          </label>
        </div>
        <div>
          <label>
            <input name={'lastName'}
                   onChange={this.onChangeFirstName}
                   value={formData.lastName}
                   placeholder='last name' className='P-inputs' type="text"/>
          </label>
        </div>
        <div>
          <label>
            <input name={'email'}
                   onChange={this.onChangeFirstName}
                   value={formData.email}
                   placeholder='email' className='P-inputs' type="text"/>
          </label>
        </div>
        <div>
          <label>
            <input name={'address'}
                   onChange={this.onChangeFirstName}
                   value={formData.address}
                   placeholder='address'
                   className='P-inputs'
                   type="text"/>
          </label>
        </div>
        <div>
          <label>
            <input name={'password'}
                   onChange={this.onChangeFirstName}
                   value={formData.password}
                   placeholder='password'
                   className='P-inputs' type="password"/>
          </label>
        </div>
      </div>
      <button onClick={this.handleClick}>
        clock me
      </button>
    </>
  }
}

export default App

