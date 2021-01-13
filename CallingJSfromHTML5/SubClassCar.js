class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    getYear() {
        return this.year
    }

    setYear(newYear) {
        this.year = newYear
    }

}


var oneCar = new Car("Car's Name", 1989)