class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(point1, point2) {
        let a = Math.abs(point1.x - point2.x);
        let b = Math.abs(point1.y - point2.y);

        let c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2)); 

        return c;
    }
}

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));