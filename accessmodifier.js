const person = {};

person.name = 'Abdul Ahad';
person.email = 'abdulahad.its03@gmail.com';

// console.log(person);



//quokka.js run korty hobe

// Notes: oop er class create korar onek pattern ase jake gang of design pattern bole 


class Person {

    constructor(name, email) {
        this._name = name;
        this._email = email;
        // console.log(this);
    }

    getName() {
        return this._name;
    }

    setName(name) {
        this._name = name;
    }


    getEmail() {
        return this._email;
    }

    setEmail(email) {
        this._email = email;
    }

    sendMail(msg) {
        console.log('To:', this._email);
        console.log('MSG', this._sanitizeMsg(msg));
    }

    _sanitizeMsg(msg) {
        return msg.trim().toLowerCase();
    }

    print() {
        console.log(this)
    }
}

const p1 = new Person('Ahad', 'ahad@gmail.com')
const p2 = new Person('Shipa', 'shipa@gmail.com')
const p3 = new Person('Jamil', 'jamil@test.com')

// p1._name = 'Changed Name';
p1.setName('habibullah');
p1.setEmail('habibullahtechbd@gmail.com')
console.log(p1.getName(), p1.getEmail());


p1.sendMail('      wow! It is Working    ');

console.log(p1.name);
