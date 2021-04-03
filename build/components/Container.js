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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { Component } from 'react';
import { Month } from './Month';
import { PuffCreator } from './PuffCreator';
import { AverageDisplay } from './AverageDisplay';
var Container = (function (_super) {
    __extends(Container, _super);
    function Container(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            puffValue: '',
            puffArray: [],
            id: 0,
            total: 0,
            average: 0,
            decrease: false,
            edit: false,
            editId: 0
        };
        _this.puffChange = _this.puffChange.bind(_this);
        _this.puffSubmit = _this.puffSubmit.bind(_this);
        _this.puffEdit = _this.puffEdit.bind(_this);
        _this.puffDelete = _this.puffDelete.bind(_this);
        return _this;
    }
    Container.prototype.puffChange = function (e) {
        this.setState({ puffValue: e.target.value });
        console.log(this.state);
    };
    Container.prototype.puffSubmit = function (e) {
        var _this = this;
        e.preventDefault();
        var newPuffArray;
        if (this.state.edit) {
            newPuffArray = this.state.puffArray.map(function (item) {
                return item.id === _this.state.editId ? __assign(__assign({}, item), { puffs: _this.state.puffValue }) : item;
            });
        }
        else {
            newPuffArray = this.state.puffArray.concat([{ puffs: this.state.puffValue, id: this.state.id + 1 }]);
        }
        var total = newPuffArray.reduce(function (acc, el) {
            acc += Number(el['puffs']);
            return acc;
        }, 0);
        var average = total / newPuffArray.length;
        this.setState(function (prevState) { return ({
            puffArray: newPuffArray,
            puffValue: '',
            total: total,
            average: average,
            decrease: prevState.average > average,
            id: prevState.id + 1,
            edit: false
        }); });
        console.log(this.state);
    };
    Container.prototype.puffEdit = function (id) {
        console.log(id);
        var puffEdit = this.state.puffArray.find(function (item) { return item.id === id; });
        alert('Please edit and submit');
        this.setState(function (prevState) { return ({
            puffValue: puffEdit.puffs,
            edit: true,
            editId: puffEdit.id
        }); });
    };
    Container.prototype.puffDelete = function (id) {
        var newPuffArray = this.state.puffArray;
        for (var i = 0; i < this.state.puffArray.length; i++) {
            if (newPuffArray.id === id) {
                newPuffArray.splice(i, 1);
            }
        }
        this.setState(function (prevState) { return ({
            puffArray: newPuffArray
        }); });
    };
    Container.prototype.render = function () {
        console.log(this.state);
        return (React.createElement("div", { className: "container" },
            React.createElement(Month, { puffArray: this.state.puffArray, puffEdit: this.puffEdit, puffDelete: this.puffDelete }),
            React.createElement(PuffCreator, { puffChange: this.puffChange, puffSubmit: this.puffSubmit, puffValue: this.state.puffValue }),
            React.createElement(AverageDisplay, { puffArray: this.state.puffArray, average: this.state.average, total: this.state.total, decrease: this.state.decrease })));
    };
    return Container;
}(Component));
export { Container };
export default Container;
//# sourceMappingURL=Container.js.map