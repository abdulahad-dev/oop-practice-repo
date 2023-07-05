const Person = require('./Person');
const Teacher = require('./Teacher');
const Student = require('./Student');

const p = new Person('A Ahad', 'ahad@as.com');
const t = new Teacher(
    'Shegufa Taranjum',
    'shegufa@gmail.com',
    'Computer Fundamental',
    40000
);
const s = new Student(
    'Shayekh',
    'shayek@test.com',
    ['Computer 101', 'Physics', 'Math'],
    40000
);

// console.log(s);

s.print();
t.print();
console.log(p)




// const p2 = (Person) t;
// console.log(p);
// console.log(t);
// console.log(s);

// t.name = 'Rabbil Hasan Rupom';
// console.log(t.name);
// console.log(t instanceof Teacher);
// console.log(t instanceof Person);
// console.log(p2);


