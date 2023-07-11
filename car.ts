// car.ts
class Car {
    constructor(
        public make: string,
        public model: string,
        public year: number,
    ) {}

    formattedString() {
        return `Car Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
    }
}

// Testing the class and method
let myCar = new Car('Toyota', 'Corolla', 2020);
console.log(myCar.formattedString());  // Output: Car Make: Toyota, Model: Camry, Year: 2021
