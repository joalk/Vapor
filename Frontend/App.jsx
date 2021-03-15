import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	// name property goes here:
get name() {
  return 'Joal'
}

  render() {
    return <h1>My name is {this.name}.</h1>;
  }
}

ReactDOM.render(<App />, document.getElementById('app'));