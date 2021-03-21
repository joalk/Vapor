import React from 'react';

export const Day = (props) => {

    return (
        <div className="day">
            <h1>{props.puffs}</h1>
            <div className="button">
                <button onClick={() => props.puffEdit(props.id)}>edit</button>
                <button>delete</button>
            </div>
        </div>
    )
}