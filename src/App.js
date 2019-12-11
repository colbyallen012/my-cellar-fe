import React, {Component} from 'react';
import { fetchWines, deleteWine} from './ApiCalls'
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

  removeVino = async (id) => {
    await deleteWine(id)
    this.getWines()
  }

  render () {
    return (
      <div className='App'>
        <h1>Vino Cellar</h1>
        <WineForm  getWines={this.getWines}/>
        <Wines wines={this.state.wines} removeVino={this.removeVino}/>
      </div>
    )
  }
}

export default App;