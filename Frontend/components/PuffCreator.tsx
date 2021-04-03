import React from 'react';

interface PuffCreatorProps {
    puffChange: (e: any) => void,
    puffSubmit: (e: any) => void,
    puffValue: string,
}

export const PuffCreator: React.FC<PuffCreatorProps> = ({puffChange, puffSubmit, puffValue}) => {
    return (
        <div className="puffcreator">
            <form onSubmit={e => puffSubmit(e)}>
                <label>
                    Puff Count:   
                    <input type="number" name="count" onChange={puffChange} value={puffValue}/>
                </label>
                <input className="btn"type="submit" value="Submit"/>
            </form>
        </div>
    )
}