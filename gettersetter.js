
class Person {

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
}

const p1 = new Person('Abdul Ahad', 'ahad@gmail.com')
const p2 = new Person('Shipa', 'shipa@gmail.com')
const p3 = new Person('Jamil', 'jamil@test.com')

p1.name = "Stack";
console.log(p1.name);
// console.log(p1)

p1.print();

// console.log(p1 + '')

console.log(p1 instanceof Person);