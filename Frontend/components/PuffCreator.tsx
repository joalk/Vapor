import React from 'react';

interface PuffCreaterProps {
    puffChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    puffSubmit: (e: React.ChangeEvent<HTMLInputElement>) => void,
    puffValue: string,
}

export const PuffCreator: React.FC<PuffCreaterProps> = ({puffChange, puffSubmit, puffValue}) => {
    return (
        <div className="puffcreator">
            <form onSubmit={()=>puffSubmit}>
                <label>
                    Puff Count:   
                    <input type="number" name="count" onChange={puffChange} value={puffValue}/>
                </label>
                <input className="btn"type="submit" value="Submit"/>
            </form>
        </div>
    )
}