import React, {Component} from 'react';
import { fetchWines } from './ApiCalls'
import WineForm from './WineForm.js'
import Wines from './Wines.js'
import './App.css';

export class App extends Component {
  constructor() {
    super()
    this.state = {
      wines: []
    }
  }

  componentDidMount () {
    this.getWines()
  }

  getWines = async () => {
    await fetchWines()
      .then(wines => this.setState({wines: wines}))
      .catch(error => error.message)
  }

  render () {
    return (
      <div className='App'>
        <h1>Vino Cellar</h1>
        <WineForm  getWines={this.getWines}/>
        <Wines wines={this.state.wines} />
      </div>
    )
  }
}

export default App;