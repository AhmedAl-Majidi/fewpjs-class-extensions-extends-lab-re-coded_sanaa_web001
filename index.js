class Polygon {
  constructor(sides){
    this.sides = sides;
  }
  get countSides (){
    return this.sides.length;
  }
  get perimeter (){
    let sidesSum = 0;
    for (let i = 0; i < this.sides.length; i++) {
      sidesSum += this.sides[i];
    }
    return sidesSum;
  }
}
