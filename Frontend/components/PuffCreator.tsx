import React from 'react';

interface PuffCreaterProps {
    puffChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    puffSubmit: (e: React.ChangeEvent<HTMLInputElement>) => void,
    puffValue: string,
}

export const PuffCreator = (props: PuffCreaterProps) => {
    return (
        <div className="puffcreator">
            <form onSubmit={()=>props.puffSubmit}>
                <label>
                    Puff Count:   
                    <input type="number" name="count" onChange={props.puffChange} value={props.puffValue}/>
                </label>
                <input className="btn"type="submit" value="Submit"/>
            </form>
        </div>
    )
}