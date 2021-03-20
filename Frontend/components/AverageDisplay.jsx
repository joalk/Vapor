import React from 'react';

export const AverageDisplay = (props) => {

    const dailyAverage = [];

    const weeklyAverage = [];

    const monthlyAverage = [];

    const total = () => {
        if (props.puffArray.length) {
        return props.puffArray.reduce((acc, el) => {
            acc += Number(el['puffs'])
            return acc
        }, 0)
    } else {
        return;
    }
    }

    const dayAverage = () => {
        if (props.puffArray.length) {
            let day = total() / props.puffArray.length;
            dailyAverage.push(day)
            return day;
        } else {
            return 0;
        }
        
    }

    const weekAverage = () => {
        if (props.puffArray.length >= 7) {

        }
    }


    return (
        <div className="display">
            <h1>Total puff count: {total()}</h1>
            <h1>Average puff count / day: {dayAverage()}</h1>
        </div>
    )
}