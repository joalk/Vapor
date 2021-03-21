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
            id: 0,
            total: 0,
            average: 0,
            decrease: false
        }
        this.puffChange = this.puffChange.bind(this);
        this.puffSubmit = this.puffSubmit.bind(this);
        this.puffEdit = this.puffEdit.bind(this);
    }

    puffChange (e) {
        this.setState({puffValue: e.target.value});
    }

    puffSubmit (e) {
        e.preventDefault();
        let newPuffArray = this.state.puffArray.concat([{puffs: this.state.puffValue, id: this.state.id + 1}])
        let total = newPuffArray.reduce((acc, el) => {
            acc += Number(el['puffs'])
            return acc
        }, 0)
        let average = total / newPuffArray.length
        this.setState(prevState => ({
            puffArray: newPuffArray,
            puffValue: '',
            total:total,
            average: average,
            decrease: prevState.average > average,
            id: prevState.id + 1
        }))
        console.log(this.state)
    }

    puffEdit (id) {
        console.log(id)
    }


    render() {
    return (
        <div className="container">
            <Month puffArray={this.state.puffArray} puffEdit={this.puffEdit}/>
            <PuffCreator
                puffChange={this.puffChange}
                puffSubmit={this.puffSubmit}
                puffValue={this.state.puffValue}
            />
            <AverageDisplay 
                puffArray={this.state.puffArray}
                average={this.state.average}
                total={this.state.total}
                decrease={this.state.decrease}
            />
        </div>
    )
    }
}