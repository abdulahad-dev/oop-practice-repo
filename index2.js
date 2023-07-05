const person = {};

person.name = 'Abdul Ahad';
person.email = 'abdulahad.its03@gmail.com';

// console.log(person);



//quokka.js run korty hobe

// Notes: oop er class create korar onek pattern ase jake gang of design pattern bole 


class Person {

    constructor(name, email) {
        this.name = name;
        this.email = email;
        // console.log(this);
    }

    changeName(name) {
        this.name = name;
    }

    // arrow = (email) => {
    //     this.email = email;
    // }



    sendEmail(msg) {
        console.log('To', this.email);
        console.log('Sending Email');
        console.log('MSG', msg);
    }

    print() {
        console.log(this)
    }
}

const p1 = new Person('Ahad', 'ahad@gmail.com')
const p2 = new Person('Shipa', 'shipa@gmail.com')
const p3 = new Person('Jamil', 'jamil@test.com')

p3.print();
// p2.sendEmail('Hello');

p1.changeName('Hsan Mahmud Nayem');
p3.changeName('Shayaika Salvy');

p1.print();
p2.print();
p3.print();



// p1.arrow('testing3@gmail.com');
// p1.print();
