// Your code here
class Cat {
    constructor(name, sex){
        console.log(`${name} says meow!`)
        this.speak = function(){return `${name} says meow!`}
    }
}
  
class Dog {
    constructor(name, sex){
        this.speak = function(){return `${name} says woof!`}
    }
}
  
class Bird {
    constructor(name, sex){
        if (sex == 'male'){
        this.speak = function(){return `It's me! ${name}, the parrot!`}
        } else {
            this.speak = function(){return `${name} says squawk!`}
        }
    }
} 