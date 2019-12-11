import React, {Component} from 'react';
import './App.css';

export class App extends Component {
  constructor() {
    super()
    this.state = {
      wines: []
    }
  }

  render () {
    return (
      <div className='App'>
        <h1>Vino Cellar</h1>
      </div>
    )
  }
}

export default App;