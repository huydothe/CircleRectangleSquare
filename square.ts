import {Rectangle} from "./rectangle";

class Square extends Rectangle {
    private side:number;
    constructor(color: string, filled: boolean, side:number) {
        super(color, filled,side,side);
        this.side=side;
    }
    getSide=()=>this.side;

    setSide=(side)=>this.side=side;

    getArea=()=>Math.pow(this.side,2);
    getPerimeter=()=>2*this.side;

    getInfo=()=>`A Square with width = ${this.side}, which is a subclass of ${this.toString()}`;
}

let square=new Square('yellow',true,40);
console.log(square.getInfo())