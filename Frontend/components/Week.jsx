import React from 'react';
import { Day } from './Day.jsx'

export const Week = () => {
    let days = [];
    for (let i = 0; i < 8; i++) {
        days.push(<Day />)
    }
    return (
        <div className="week">
            {days}
        </div>
    )
}