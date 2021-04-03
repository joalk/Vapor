import React from 'react';
export var AverageDisplay = function (props) {
    return (React.createElement("div", { className: "display" },
        React.createElement("h2", null,
            "Total puff count: ",
            props.total),
        React.createElement("h2", null,
            "Average puff count / day: ",
            props.average),
        React.createElement("h1", { className: "congrats" }, props.decrease ? 'Congrats! Your daily puff average has decreased!' : '')));
};
//# sourceMappingURL=AverageDisplay.js.map