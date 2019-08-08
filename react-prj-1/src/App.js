import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    // return (
    //   <div className="App">
    //     <h1>Hello World! I'm a react app</h1>
    //   </div>
    // );

    //Alternate and lengthier way to create HTML instead of using JSX
    //Second argument is the configuration, third are the number of child
    //elements
    
    return React.createElement('div', {className:'App'}, 
      React.createElement('h1', null, 'Hello!')
      );
  }
}

export default App;
