import React from 'react';
import ReactDOM from 'react-dom';
import { AverageDisplay } from './components/AverageDisplay.jsx';
import { Container } from './components/Container.jsx'
import { PuffCreator } from './components/PuffCreator.jsx';

class App extends React.Component {
	// name property goes here:
get name() {
  return 'Joal'
}

  render() {
    return (
        <div className="app">
            <h1>My name is {this.name}.</h1>
            <div className="panel">
              <Container />
              <PuffCreator />
            </div>
              <AverageDisplay />
        </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));