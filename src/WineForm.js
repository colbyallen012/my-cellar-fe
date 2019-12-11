import React, { Component } from 'react';
import './WineForm.css'

export class WineForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      vineyard: '',
      name: '',
      color: '',
      type: '',
      year: 0,
      rating: 0,
    }
  }

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({ [name]: value})
    console.log(this.state)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
  }

  render() {
    return(
      <div className='WineForm'>
        <form className='wine-input' onSubmit={this.handleSubmit}>
          <input
            type='text'
            value={this.state.vineyard}
            name='vineyard'
            placeholder='Vineyard'
            onChange={this.handleChange}
          />
          <input
            type='text'
            value={this.state.name}
            name='name'
            placeholder='Name'
            onChange={this.handleChange}
          />
          <button>Add Wine</button>
        </form>
      </div>
    )
  }
}

export default WineForm