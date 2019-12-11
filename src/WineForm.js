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

  render() {
    return(
      <div className='WineForm'>
        <p>Dis is da wine form cussin</p>
      </div>
    )
  }
}

export default WineForm