import React, {Component} from 'react';
import { MemoryRouterProps } from 'react-router';
import { Container } from './components/Container'

export class App extends Component {
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
