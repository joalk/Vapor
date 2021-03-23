import React from 'react';

export const Day = (props) => {

    return (
        <div className="day">
            <h1>{props.puffs}</h1>
            <div>
                <button className="btn" onClick={() => props.puffEdit(props.id)}>edit</button>
                <button className="btn" onClick={() => props.puffDelete(props.id)}>delete</button>
            </div>
        </div>
    )
}