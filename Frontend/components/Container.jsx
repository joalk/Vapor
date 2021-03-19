import React, { Component } from 'react';
import { Month } from './Month.jsx'
import { PuffCreator } from './PuffCreator.jsx';
import { AverageDisplay } from './AverageDisplay.jsx';

export class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            puffValue: '',
            puffArray: [],
            id: 1
        }
        this.puffChange = this.puffChange.bind(this);
        this.puffSubmit = this.puffSubmit.bind(this);
    }

    puffChange (e) {
        this.setState({puffValue: e.target.value});
    }

    puffSubmit (e) {
        e.preventDefault();
        this.setState(prevState => ({
            puffArray: [...prevState.puffArray, { puffs: prevState.puffValue, id: prevState.id }],
            puffValue: '',
            id: prevState.id + 1
        }))
        console.log(this.state)
    }

    render() {
    return (
        <div className="container">
            <Month puffArray={this.state.puffArray}/>
            <PuffCreator
                puffChange={this.puffChange}
                puffSubmit={this.puffSubmit}
                puffValue={this.state.puffValue}
            />
            <AverageDisplay puffArray={this.state.puffArray}/>
        </div>
    )
    }
}