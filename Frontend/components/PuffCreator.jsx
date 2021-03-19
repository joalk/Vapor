import React from 'react';

export const PuffCreator = () => {
    return (
        <div className="puffcreator">
            <form>
                <label>
                    Puff Count:
                    <input type="text" name="count" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}