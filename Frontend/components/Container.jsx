import React, { Component } from 'react';
import { Month } from './Month.jsx'
import { PuffCreator } from './PuffCreator.jsx';
// import { AverageDisplay } from './AverageDisplay.jsx';

export class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            puffValue: '',
            puffArray: [],
            total: 0,
            average: 0,
            decrease: false
        }
        this.puffChange = this.puffChange.bind(this);
        this.puffSubmit = this.puffSubmit.bind(this);
    }

    puffChange (e) {
        this.setState({puffValue: e.target.value});
    }

    puffSubmit (e) {
        e.preventDefault();
        let total = this.state.puffArray.reduce((acc, el) => {
            acc += Number(el['puffs'])
            return acc
        }, 0)
        let prevAverage = this.state.average;
        this.setState(prevState => ({
            puffArray: [...prevState.puffArray, { puffs: prevState.puffValue, id: prevState.id + 1 }],
            puffValue: '',
            total:total,
            average: total / this.state.puffArray.length
        }).then(
        data => {if (prevAverage > this.state.average) {
            this.setState(({ decrease: true }))
        } else {
            this.setState(({ decrease: false }))
        }}))
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
            {/* <AverageDisplay 
                puffArray={this.state.puffArray}
                prevAverage={this.state.prevAverage}
                total={this.state.total}
            /> */}
        </div>
    )
    }
}