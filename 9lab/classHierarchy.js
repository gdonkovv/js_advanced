function classHierarchy() {

    class Figure {
        constructor(units) {
            if (units === undefined) {
                this.units = "cm";
            } else {
                this.units = units;
            }
        }
        get area() {

        }
        changeUnits(units) {
            this.units = units;
        }
        toString() {
            return `Figures units: ${this.units}`;
        }
    }

    class Circle extends Figure {
        constructor(radius, units) {
            super(units);
            if (this.units === "mm") {
                this.radius = radius * 10;
            } else if (this.units === "m") {
                this.radius = radius / 100;
            } else {
                this.radius = radius;
            }
        }
        get area() {
            return Math.PI * this.radius * this.radius;
        }

        changeUnits(units) {
            let prevUnits = this.units;
            super.changeUnits(units);
            if (prevUnits === "mm") {
                if (this.units === "cm") {
                    this.radius = this.radius / 10;
                } else if (this.units === "m") {
                    this.radius = (this.radius / 10) / 100;
                }
            } else if (prevUnits === "cm") {
                if (this.units === "mm") {
                    this.radius = this.radius * 10;
                } else if (this.units === "m") {
                    this.radius = this.radius / 100;
                }
            } else if (prevUnits === "m") {
                if (this.units === "cm") {
                    this.radius = this.radius * 100;
                } else if (this.units === "mm") {
                    this.radius = this.radius * 100 * 10;
                }
            }
        }

        toString() {
            return super.toString() + ` Area: ${this.area} - radius: ${this.radius}`;
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units);
            if (this.units === "mm") {
                this.width = width * 10;
                this.height = height * 10;
            } else if (this.units === "m") {
                this.width = width / 100;
                this.height = height / 100;
            } else {
                this.width = width;
                this.height = height;
            }
        }
        get area() {
            return this.width * this.height;
        }
        changeUnits(units) {
            let prevUnits = this.units;
            super.changeUnits(units);
            if (prevUnits === "mm") {
                if (this.units === "cm") {
                    this.width = this.width / 10;
                    this.height = this.height / 10;
                } else if (this.units === "m") {
                    this.width = (this.width / 10) / 100;
                    this.height = (this.height / 10) / 100;
                }
            } else if (prevUnits === "cm") {
                if (this.units === "mm") {
                    this.width = this.width * 10;
                    this.height = this.height * 10;
                } else if (this.units === "m") {
                    this.width = this.width / 100;
                    this.height = this.height / 100;
                }
            } else if (prevUnits === "m") {
                if (this.units === "cm") {
                    this.width = this.width * 100;
                    this.height = this.height * 100;
                } else if (this.units === "mm") {
                    this.width = this.width * 100 * 10;
                    this.height = this.height * 100 * 10;
                }
            }

        }
        toString() {
            return super.toString() + ` Area: ${this.area} - width: ${this.width}, height: ${this.height}`;
        }
    }



    // let c = new Circle(5);
    // console.log(c.area); // 78.53981633974483
    // console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

    // let r = new Rectangle(3, 4, 'mm');
    // console.log(r.area); // 1200
    // console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

    // r.changeUnits('cm');
    // console.log(r.area); // 12
    // console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

    // c.changeUnits('mm');
    // console.log(c.area); // 7853.981633974483
    // console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50

    return {
        Figure,
        Circle,
        Rectangle
    }
}
classHierarchy();



