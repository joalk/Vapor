import React from 'react';
import { Container } from './components/Container.jsx'

export class App extends React.Component {
	// name property goes here:
get name() {
  return 'Joal'
}

  render() {
    return (
        <div className="app">
            <h1>My name is {this.name}.</h1>
              <Container />
        </div>
    )
  }
}
