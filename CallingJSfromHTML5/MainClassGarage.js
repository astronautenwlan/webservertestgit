class Garage {
    cars = [];

    constructor(firstCar) {
        this.cars.push(firstCar)
    }

    getCars () {
        return this.cars
    }

    addCar(car) {
        this.cars.push(car)
    }

}


let oneGarage = new Garage(oneCar)