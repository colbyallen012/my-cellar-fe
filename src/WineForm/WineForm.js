import React, { Component } from 'react';
import { postWine } from '../ApiCalls/ApiCalls';
import './WineForm.css';

export class WineForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      vineyard: '',
      name: '',
      color: '',
      type: '',
      year: '',
      rating: '',
    }
  }

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({ [name]: value})
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    await postWine(this.state)
    this.props.getWines()
    this.setState({vineyard: '', name: '', color: '', type: '', year: '', rating: ''})
  }

  render() {
    return(
      <div className='WineForm'>
        <h2 className='add-wine'>Add Wine</h2>
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
            placeholder='Bottle Name'
            onChange={this.handleChange}
          />
          <input
            type='text'
            value={this.state.color}
            name='color'
            placeholder='Color'
            onChange={this.handleChange}
          />
          <input
            type='text'
            value={this.state.type}
            name='type'
            placeholder='Type'
            onChange={this.handleChange}
          />
          <input
            type='number'
            value={this.state.year}
            name='year'
            placeholder='Year'
            onChange={this.handleChange}
          />
          <input
            type='number'
            value={this.state.rating}
            name='rating'
            placeholder='Rating'
            onChange={this.handleChange}
          />
          <button className='add'>Submit</button>
        </form>
      </div>
    )
  }
}

export default WineForm