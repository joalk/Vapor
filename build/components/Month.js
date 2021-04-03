import React from 'react';
import { Day } from './Day';
export var Month = function (props) {
    var days = [];
    for (var i = 0; i < props.puffArray.length; i++) {
        days.push(React.createElement(Day, { puffs: props.puffArray[i].puffs, id: props.puffArray[i].id, puffEdit: props.puffEdit, puffDelete: props.puffDelete }));
    }
    return (React.createElement("div", { className: "month" }, days));
};
//# sourceMappingURL=Month.js.map