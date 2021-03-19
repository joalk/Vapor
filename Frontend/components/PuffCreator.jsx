import React from 'react';

export const PuffCreator = (props) => {
    return (
        <div className="puffcreator">
            <form onSubmit={props.puffSubmit}>
                <label>
                    Puff Count:
                    <input type="number" name="count" onChange={props.puffChange} value={props.puffValue}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}