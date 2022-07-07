import {Shape} from "./Shape";

export class Rectangle extends Shape {
    private width:number;
    private length:number;

    constructor(color: string, filled: boolean, width: number, length: number) {
        super(color, filled);
        this.width = width;
        this.length = length;
    }
    getWidth=()=>this.width;
    getLength=()=>this.length;

    setWidth=(width)=>this.width=width;
    setLength=(length)=>this.length=length;

    getArea=()=>this.length*this.width;
    getPerimeter=()=>(this.length+this.width)*2;

    getInfo=()=>`A Rectangle with width = ${this.width} and length = ${this.length}, which is a subclass of ${this.toString()}`;
}

let rectangle=new Rectangle('blue',false,30,50);
console.log(rectangle.getInfo());