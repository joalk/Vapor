import React from 'react';
import { Week } from './Week.jsx'

export const Month = () => {
    let weeks = [];
    for (let i = 0; i < 4; i++) {
        weeks.push(<Week />)
    }
    return (
        <div className="month">
            {weeks}
        </div>
    )
}