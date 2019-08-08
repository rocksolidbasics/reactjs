import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      {name: 'Shyam', sn: 'Sivaraman'},
      {name: 'Devi', sn: 'B'}
    ]
  }

  buttonClickHandler = (newName) => {
    this.setState({persons:[{name: newName, sn: 'Sivaraman'}]})
  }

  render() {
    return (
      //Passing references in function calls and passing around function from parent component
      //to child components
      <div className="App">
        <Person name={this.state.persons[0].name} click={this.buttonClickHandler.bind(this, 'New')}>Hello how are you!</Person>
        <button onClick={this.buttonClickHandler.bind(this, 'T Shyam')}>Change name</button>
      </div>
    );
  }
}

export default App;
