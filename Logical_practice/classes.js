// Undestanding class representation creation.
// creating methods in class and using then of parent class constructor using inheritance.

class car {
    //constructor function will be used here for giving some values.
    constructor(model, name) {
        this.model = model;
        this.name = name;
    }

    // method creation 
    start() {
        console.log(this.model);
    }
}

newCar = new car("bwm", "krish");
newCar.start();

// Applying inheretance in Javascript

class bike {
    constructor(name, model) {
        this.name = name;
        this.model = model;
    }

    start() {
        console.log(this.model);
    }

}

// inheritance of parent class with new class

class scooty extends bike {

    scootyStart() {
        console.log(this.name)
    }

    //method
    start() {
        // super keyword which denotes the value or method accessing from parent class
        super.start();
        //this keyword here will be access of the method which is under the same class.
        this.scootyStart();
    }
}

//object creation 
newScooty = new scooty("A125", "Activa");
newScooty.start();