var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import React, { Component } from 'react';
import Container from './components/Container';
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(App.prototype, "name", {
        get: function () {
            return 'Joal';
        },
        enumerable: false,
        configurable: true
    });
    App.prototype.render = function () {
        return (React.createElement("div", { className: "app" },
            React.createElement("h1", null,
                "My name is ",
                this.name,
                "."),
            React.createElement(Container, null)));
    };
    return App;
}(Component));
export { App };
//# sourceMappingURL=App.js.map