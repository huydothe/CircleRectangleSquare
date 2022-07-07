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
var rectangle_1 = require("./rectangle");
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(color, filled, side) {
        var _this = _super.call(this, color, filled, side, side) || this;
        _this.getSide = function () { return _this.side; };
        _this.setSide = function (side) { return _this.side = side; };
        _this.getArea = function () { return Math.pow(_this.side, 2); };
        _this.getPerimeter = function () { return 2 * _this.side; };
        _this.getInfo = function () { return "A Rectangle with width = ".concat(_this.side, ", which is a subclass of ").concat(_this.toString()); };
        _this.side = side;
        return _this;
    }
    return Square;
}(rectangle_1.Rectangle));
var square = new Square('yellow', true, 40);
console.log(square.getInfo());
