    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        greet() {
            return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
        }
    }

    let p1 = new Person("Pranjal", 20);

    document.getElementById("output").innerHTML = p1.greet();
