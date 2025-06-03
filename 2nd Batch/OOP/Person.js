class Person {
    name
    email
    constructor (name, email) {
        this.name = name
        this.email = email
    }
    print() {
        return `My name is ${this.name}`;
    }
}

const obj1 = new Person('sujon', 'liya@gmail.com');
console.log(obj1.print());
