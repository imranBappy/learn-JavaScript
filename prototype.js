
// const personMethods = {
//     eat(){
//         console.log(`Persom is eatting`);
//     },
//     sleep (){
//         console.log(`Person is sleeping`)
//     },
//     play(){
//         console.log(`Person is playing`);
//     }
// }


function Person(name, age){
    // const person = {};
    // const person = Object.create(Person.prototype);
    // const this = Object.create(Person.prototype);

    this.name = name;
    this.age = age;
    
    // return this;
    // return person;
}

Person.prototype = {
     eat(){
        console.log(`Persom is eatting`);
    },
    sleep (){
        console.log(`Person is sleeping`)
    },
    play(){
        console.log(`Person is playing`);
    }
}

const imran = new Person('Imran', 20)
const Bappy = new  Person('Bappy', 20)


imran.eat()
Bappy.sleep()
imran.play()
console.dir(imran);



// const myPerson = Object.create(personMethods);

// myPerson.name = 'Imran';
// myPerson.age = 19;

// console.log(myPerson);

// function test(){}
// console.dir(test)
// console.log(test.prototype)