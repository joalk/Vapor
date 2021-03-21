import React from 'react';
import { Day } from './Day.jsx'

export const Month = (props) => {
    let days = [];
    for (let i = 0; i < props.puffArray.length; i++) {
        days.push(<Day puffs={props.puffArray[i].puffs} id={props.puffArray[i].id} puffEdit={props.puffEdit} puffDelete={props.puffDelete}/>)
    }
    return (
        <div className="month">
            {days}
        </div>
    )
}