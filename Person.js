_name = Symbol('name');
_email = Symbol('email');

class Person {
    constructor(name, email) {
        this[_name] = name;
        this[_email] = email;
    }

    get name() {
        return this[_name];

    }

    set name(value) {

        this[_name] = value;
    }

    print() {
        // console.log('ClassName = Person, ' + this + '');
        console.log(this + '');

    }

    toString() {
        return `Name: ${this[_name]}, Email: ${this[_email]}`;
    }

    get email() {
        return this[_email];
    }

    set email(value) {
        this[_email] = value;
    }
}


module.exports = Person;
























// ========================Person Class=======================

// class Person {
//     constructor(name, email) {
//         this._name = name;
//         this._email = email;
//     }

//     get name() {
//         return this._name;

//     }

//     set name(value) {

//         this._name = value;
//     }

//     print() {
//         // console.log('ClassName = Person, ' + this + '');
//         console.log(this + '');

//     }

//     toString() {
//         return `Name: ${this._name}, Email: ${this._email}`;
//     }

//     get email() {
//         return this._email;
//     }

//     set email(value) {
//         this._email = value;
//     }
// }


// module.exports = Person;
