export class Shape {
    private color:string;
    private filled:boolean;

    constructor(color: string, filled: boolean) {
        this.color = color;
        this.filled = filled;
    }
    getColor=()=>this.color;
    getFilled=()=>this.filled;

    setColor=(color)=>this.color=color;
    setFilled=(filled)=>this.filled=filled;
    toString=()=>`A Shape with color of ${this.color} and is fill ${this.filled}`
}
let shape=new Shape('red',false);
console.log(shape.toString());