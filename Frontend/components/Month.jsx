import React from 'react';
import { Day } from './Day.jsx'

export const Month = (props) => {
    let days = [];
    for (let i = 0; i < props.puffArray.length; i++) {
        days.push(<Day puffs={props.puffArray[i].puffs}/>)
    }
    return (
        <div className="month">
            {days}
        </div>
    )
}