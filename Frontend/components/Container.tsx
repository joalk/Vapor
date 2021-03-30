import React, { Component } from 'react';
import { Month } from './Month'
import { PuffCreator } from './PuffCreator';
import { AverageDisplay } from './AverageDisplay';

interface State {
    puffValue: string;
    puffArray: [];
    id: number;
    total: number;
    average: number;
    decrease: boolean;
    edit: boolean;
    editId: number;

}

export class Container extends Component <{}, State>{
    constructor(props: {}) {
        super(props);
        this.state = {
            puffValue: '',
            puffArray: [],
            id: 0,
            total: 0,
            average: 0,
            decrease: false,
            edit: false,
            editId: 0
        }
        this.puffChange = this.puffChange.bind(this);
        this.puffSubmit = this.puffSubmit.bind(this);
        this.puffEdit = this.puffEdit.bind(this);
        this.puffDelete = this.puffDelete.bind(this);
    }

    puffChange (e) {
        this.setState({puffValue: e.target.value});
    }

    puffSubmit (e) {
        e.preventDefault();
        let newPuffArray;
        if (this.state.edit) {
            newPuffArray = this.state.puffArray.map(item => {
                return item.id === this.state.editId ? { ...item, puffs: this.state.puffValue } : item
            })

        } else {
            newPuffArray = this.state.puffArray.concat([{puffs: this.state.puffValue, id: this.state.id + 1}])
        }
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
            id: prevState.id + 1,
            edit: false
        }))
        console.log(this.state)
    }

    puffEdit (id) {
        console.log(id)
        let puffEdit = this.state.puffArray.find(item => item.id === id)
        alert('Please edit and submit')
            this.setState(prevState => ({
                puffValue: puffEdit.puffs,
                edit: true,
                editId: puffEdit.id
            }))
    }

    puffDelete (id) {
        let newPuffArray = this.state.puffArray;
        for (let i = 0; i < this.state.puffArray.length; i++) {
            if (this.state.puffArray[i].id === id) {
                newPuffArray.splice(i, 1)
            }
        }
        this.setState(prevState => ({
            puffArray: newPuffArray
        }))
    }


    render() {
    return (
        <div className="container">
            <Month puffArray={this.state.puffArray} puffEdit={this.puffEdit} puffDelete={this.puffDelete}/>
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