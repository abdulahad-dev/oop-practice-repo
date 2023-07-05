
class Person {

    static className = 'Person1';
    static PI = 3.1416;

    constructor(name, email) {
        this._name = name;
        this._email = email;
        // console.log(this);
    }

    get name() {
        return this._name;
        // console.log('This is a founcation call');
        // return this._name.toUpperCase().split('');
        // return this._name.toUpperCase().split(' ');
        // return this._name.toUpperCase().split(' ')[0];

    }

    set name(value) {
        if (value.toLowerCase() == 'stack learner') return;
        this._name = value;
    }

    print() {
        // console.log(this)
        console.log('ClassName = Person, ' + this + '');
    }

    toString() {
        // return 'Person Class';
        return `Name: ${this._name}, Email: ${this._email}`;
    }

    static isValid(age) {
        return age >= 18;
    }

    static isEqual(p1, p2) {
        if (p1.name !== p2.name) return false;
        if (p1.email !== p2.email) return false;

        return true;
    }
}

const p1 = new Person('Abdul Ahad', 'ahad@gmail.com')
const p2 = new Person('Shipa', 'shipa@gmail.com')
const p3 = new Person('Jamil', 'jamil@test.com')
const p6 = new Person('Jamil', 'jamil@test.com')
const p4 = { _name: 'Test', _email: 'test@gmail.com' };



// console.log(Person.PI);
console.log(Person.className)

const testUser = {
    name: 'Test',
    email: 'test@gmail.com',
    age: 15
}

let p5 = null

if (Person.isValid(testUser.age)) {
    p5 = new Person(testUser.name, testUser.email);
}

// console.log(p5);

console.log(Person.isEqual(p3, p6));
console.log(p3 == p6)

