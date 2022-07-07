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
exports.Rectangle = void 0;
var Shape_1 = require("./Shape");
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(color, filled, width, length) {
        var _this = _super.call(this, color, filled) || this;
        _this.getWidth = function () { return _this.width; };
        _this.getLength = function () { return _this.length; };
        _this.setWidth = function (width) { return _this.width = width; };
        _this.setLength = function (length) { return _this.length = length; };
        _this.getArea = function () { return _this.length * _this.width; };
        _this.getPerimeter = function () { return (_this.length + _this.width) * 2; };
        _this.getInfo = function () { return "A Rectangle with width = ".concat(_this.width, " and length = ").concat(_this.length, ", which is a subclass of ").concat(_this.toString()); };
        _this.width = width;
        _this.length = length;
        return _this;
    }
    return Rectangle;
}(Shape_1.Shape));
exports.Rectangle = Rectangle;
var rectangle = new Rectangle('blue', false, 30, 50);
console.log(rectangle.getInfo());
