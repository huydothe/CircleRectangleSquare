import {Shape} from "./Shape";

export class Circle extends Shape{
    private radius:number;

    constructor(color: string, filled: boolean, radius: number) {
        super(color, filled);
        this.radius = radius;
    }
    getInfo=()=>
        `A circle with class radius = ${this.radius}, which is subclass of  ${this.toString()}`
    getRadius=()=>this.radius;
    getArea=()=>Math.PI*Math.pow(this.radius,2);
    getPerimeter=()=>Math.PI*Math.pow(this.radius,1);

    setRadius=(radius)=>this.radius

}

let circle=new Circle('red',true,40);
console.log(circle.getInfo());