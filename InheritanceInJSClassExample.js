class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    displayInfo() {
        console.log(`${this.year} ${this.make} ${this.model}`);
    }
}

class ElectricCar extends Car {
    constructor(make, model, year, batteryLife) {
        super(make, model, year);   // Call parent constructor
        this.batteryLife = batteryLife;
    }

    displayBattery() {
        console.log(`Battery life: ${this.batteryLife} hours`);
    }
}

// Creating object
let myCar = new ElectricCar("Tesla", "Model 3", 2023, 10);

myCar.displayInfo();     // Inherited method
myCar.displayBattery();  // Child method
