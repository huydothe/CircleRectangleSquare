"use strict";
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
exports.__esModule = true;
exports.Circle = void 0;
var Shape_1 = require("./Shape");
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(color, filled, radius) {
        var _this = _super.call(this, color, filled) || this;
        _this.getInfo = function () {
            return "A circle with class radius = ".concat(_this.radius, ", which is subclass of  ").concat(_this.toString());
        };
        _this.getRadius = function () { return _this.radius; };
        _this.getArea = function () { return Math.PI * Math.pow(_this.radius, 2); };
        _this.getPerimeter = function () { return Math.PI * Math.pow(_this.radius, 1); };
        _this.setRadius = function (radius) { return _this.radius; };
        _this.radius = radius;
        return _this;
    }
    return Circle;
}(Shape_1.Shape));
exports.Circle = Circle;
var circle = new Circle('red', true, 40);
console.log(circle.getInfo());
