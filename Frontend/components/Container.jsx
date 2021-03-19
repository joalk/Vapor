import React, { Component } from 'react';
import { Month } from './Month.jsx'
import { PuffCreator } from './PuffCreator.jsx';

export class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            puffValue: 0,
            puffArray: [],
        }
        this.puffChange = this.puffChange.bind(this);
        this.puffSubmit = this.puffSubmit.bind(this);
    }

    puffChange (e) {
        this.setState({puffValue: e.target.value});
    }

    puffSubmit (e) {
        e.preventDefault();
        this.setState({ puffArray: [...this.state.puffArray, this.state.puffValue] })
    }

    render() {
    return (
        <div className="container">
            <h1>{this.state.puffArray}</h1>
            <Month />
            <PuffCreator 
                puffChange={this.puffChange}
                puffSubmit={this.puffSubmit}
            />
        </div>
    )
    }
}