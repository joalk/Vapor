import React from 'react';
import ReactDOM from 'react-dom';
import { Container } from './components/Container.jsx'

class App extends React.Component {
	// name property goes here:
get name() {
  return 'Joal loves Darren'
}

  render() {
    return (
        <div>
            <h1>My name is {this.name}.</h1>
            <Container />
        </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));