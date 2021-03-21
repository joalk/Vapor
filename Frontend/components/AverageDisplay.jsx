import React from 'react';

export const AverageDisplay = (props) => {

    return (
        <div className="display">
            <h2>Total puff count: {props.total}</h2>
            <h2>Average puff count / day: {props.average}</h2>
            <h1>{props.decrease ? 'Congrats! Your daily puff average has decreased!' : ''}</h1>
        </div>
    )
}