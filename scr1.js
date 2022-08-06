// class circle
//  {
//     constructor(radius, color)
//     {
//         this.radius = radius;
//         this.color = color;


//     }
 
    
// }



class circle
 {
    constructor(radius, color)
    {
        this.radius = radius;
        this.color = color;


    }
 get radi(){
    return this.radius
 }
 get colo(){
    return this.color
 }
 get area(){
    return Math.PI*this.radius*this.radius;
 }
 get cir(){
    return 2*Math.PI*this.radius;
 }
get str(){
    return toString()
}
}

var c1 = new circle()
console.log(c1);
var c2=new circle(1.0);
console.log(c2)
var c3=new circle(1.0,"red");
console.log(c3)

var c=new circle(1.0,"red");
console.log(c.radi)
console.log(c.colo)
console.log(c.area)
console.log(c.cir)

