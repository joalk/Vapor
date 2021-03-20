import React from 'react';

export const AverageDisplay = (props) => {

    return (
        <div className="display">
            <h1>Total puff count: {props.total}</h1>
            <h1>Average puff count / day: {props.average}</h1>
        </div>
    )
}