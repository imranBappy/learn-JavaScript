// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     eat(){
//         console.log(`${this.name} is eating`);
//     }
// }
// class Cricketer extends Person{
//     constructor(name,age, type, contry){
//         super(name, age);
//         this.name = name;
//         this.age = age;
//         this.type = type;
//         this.contry = contry;
//     }
//     play(){
//         console.log(`${this.name} is playing`);
//     }
// }

// const sakib = new Cricketer('Sakib', 30, "All rounder", "Bangladesh")
// const bappy = new Person('Bappy', 20)

// sakib.eat()
// bappy.eat()


class Person{
    constructor(name, post){
        this.name = name;
        this.post = post;
    };
    work(){
        return ` Hello, ${this.name}! You are a ${this.post}`
    };
    get getName(){
        return this.name.toUpperCase();
    };

    set setname(name){
        this.name = name.toUpperCase();
    };
};

const imran = new Person('Imran', 'Programmer')

// imran.setname = "bappy"

// console.log(imran.work());
// console.log(imran.getName);

// static 

class Student{
    constructor(name, id){
        this.name = name;
        this.id = id;
    }
    student(){
        const studentinfo = `${this.name} is good student his id is ${this.id}`;
        return studentinfo;
    }

    static isStatic(){
        console.log(`This is a static method`);
    }
}
const rakib = new Student('Rakib', 18)

console.dir(rakib.student())

console.dir(Student.isStatic());
