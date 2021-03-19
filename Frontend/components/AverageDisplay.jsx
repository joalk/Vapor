import React from 'react';

export const AverageDisplay = (props) => {

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


    return (
        <div className="display">
            <h1>{total()}</h1>
        </div>
    )
}