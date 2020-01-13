import React, {Component} from 'react';
import { fetchWines, deleteWine} from '../ApiCalls/ApiCalls'
import WineForm from '../WineForm/WineForm.js'
import Wines from '../Wines/Wines.js'
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
        <section>
          <WineForm getWines={this.getWines}/>
          <Wines wines={this.state.wines} removeVino={this.removeVino}/>
        </section>
      </div>
    )
  }
}

export default App;