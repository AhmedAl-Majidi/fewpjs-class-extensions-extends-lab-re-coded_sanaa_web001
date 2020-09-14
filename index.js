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

class Triangle extends Polygon {
  get isValid () {
    let side1 = this.sides[0]
    let side2 = this.sides[1]
    let side3 = this.sides[2]

    if((this.sides.length === 3) && (side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1)) return
    else {
      return false;
    }
  }
}
