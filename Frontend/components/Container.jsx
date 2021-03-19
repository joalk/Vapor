import React, { Component } from 'react';
import { Month } from './Month.jsx'
import { PuffCreator } from './PuffCreator.jsx';

export class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            puffValue: 0,
            puffArray: []
        }
        this.puffChange = this.puffChange.bind(this);
        this.puffSubmit = this.puffSubmit.bind(this);
    }

    puffChange (e) {
        this.setState({puffValue: e.target.value});
    }

    puffSubmit (e) {
        e.preventDefault();
        this.setState({
            puffArray: puffArray.push(e.target.value)
        })
    }

    render() {
    return (
        <div className="container">
            <h1>Hello</h1>
            {this.state.puffArray}
            <Month />
            <PuffCreator />
        </div>
    )
    }
}