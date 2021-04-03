import React, {Component} from 'react';
import Container from './components/Container'

interface IProps {
  name: string;
}

export class App extends Component <any, any>{
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