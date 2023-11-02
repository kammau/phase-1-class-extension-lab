// Your code here
class Polygon {
    constructor(sides) {
        this.sides = sides;
        this.count = this.sides.length
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        if (Array.isArray(this.sides) === true) {
            let sum = 0;
            for (var side of this.sides) {
                sum += side
            }
            return sum
        } else {
            return;
        }
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.count === 3) {
            let sideA = this.sides[0]
            let sideB = this.sides[1]
            let sideC = this.sides[2]

            return ((sideA + sideB > sideC) && (sideA + sideC > sideB) && (sideB + sideC > sideA))

        } else {
            return "Not Valid!"
        }
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.count === 4) {
            let sideA = this.sides[0]
            let sideB = this.sides[1]
            let sideC = this.sides[2]
            let sideD = this.sides[3]

            return ((sideA === sideB) && (sideB === sideC) && (sideC === sideD))
        } else {
            return "Not Valid!"
        }
    }

    get area() {
        if (this.count === 4) {
            let sideA = this.sides[0]
            let sideB = this.sides[1]

            return (sideA * sideB)
        } else {
            return "Not Valid!"
        }
    }
}