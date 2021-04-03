import React from 'react';
export var PuffCreator = function (_a) {
    var puffChange = _a.puffChange, puffSubmit = _a.puffSubmit, puffValue = _a.puffValue;
    return (React.createElement("div", { className: "puffcreator" },
        React.createElement("form", { onSubmit: function (e) { return puffSubmit(e); } },
            React.createElement("label", null,
                "Puff Count:",
                React.createElement("input", { type: "number", name: "count", onChange: puffChange, value: puffValue })),
            React.createElement("input", { className: "btn", type: "submit", value: "Submit" }))));
};
//# sourceMappingURL=PuffCreator.js.map