import React from 'react';
export var Day = function (props) {
    return (React.createElement("div", { className: "day" },
        React.createElement("h1", null, props.puffs),
        React.createElement("div", null,
            React.createElement("button", { className: "btn", onClick: function () { return props.puffEdit(props.id); } }, "edit"),
            React.createElement("button", { className: "btn", onClick: function () { return props.puffDelete(props.id); } }, "delete"))));
};
//# sourceMappingURL=Day.js.map