class Student{
    constructor(name,age,grade){
        this.firstName=name;
        this.studentAge =age;
        this.gpa = grade;
    }
}


// const object1 = {
//   a: 'somestring',
//   b: 42,
//   c: false
// };

// console.log(Object.values(object1)[1]);
// console.log(object1['a']);
// console.log(delete object1.a);
// console.log(Object.values(object1));
// console.log(delete object1.x);

class Student{
    constructor(name,age,grade){
        this.firstName=name;
        this.studentAge =age;
        this.gpa = grade;
        this.fun1=()=>{console.log("hi");
        }


    }
}
var person = new Student('ayham',24,99);
console.log(person.fun1());



