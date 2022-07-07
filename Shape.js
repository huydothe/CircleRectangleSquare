"use strict";
exports.__esModule = true;
exports.Shape = void 0;
var Shape = /** @class */ (function () {
    function Shape(color, filled) {
        var _this = this;
        this.getColor = function () { return _this.color; };
        this.getFilled = function () { return _this.filled; };
        this.setColor = function (color) { return _this.color = color; };
        this.setFilled = function (filled) { return _this.filled = filled; };
        this.toString = function () { return "A Shape with color of ".concat(_this.color, " and is fill ").concat(_this.filled); };
        this.color = color;
        this.filled = filled;
    }
    return Shape;
}());
exports.Shape = Shape;
var shape = new Shape('red', false);
console.log(shape.toString());
