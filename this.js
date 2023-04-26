// ======================================================================================
// ======================================================================================
// Task 01
// Дан объект someObj, реализуйте функцию greeting и присвойте ее ключу объекта с аналогичным именем.
// Функция должна вернуть строку `My name is ${name}. I am ${age}`, где name и age берутся из свойств объекта

// type someObjType = {
//   name: string;
//   age: number;
// };


let someObj = {
    name: 'Eugene',
    age: 32,
};
  
  someObj.greeting = function(){
      console.log(`My name is ${this.name}. I am ${this.age}`);
  }
  

  someObj.greeting()
  console.log(someObj);

// ======================================================================================
// ======================================================================================

  // Task 02
// реализовать счетчик counter в виде объекта со следующими методами:
// get current count; - выводит текущее значение счетчика
// increment; - увеличивает значение счетчика на 1
// decrement; - уменьшает значение счетчика на 1
// set current count; - принимает и присваивает значение счетчику
// rest current count - устанавливает значение счетчика равным 0
// все методы должны ссылаться на сам объект


let counter = {
    count: 0,

    getCurrentCount(){
       return  this.count
    },
    increment(){
        return this.count++
    },
    decrement(){
        return this.count--
    },
    setCurrentCount(newCount){
       return  this.count = newCount
    },
    restCurrentCount(){
        return this.count = 0
    }
}

counter.increment()
counter.increment()
counter.increment()


console.log(counter.count);
console.log(counter.getCurrentCount());
console.log(counter.restCurrentCount());

console.log(counter.setCurrentCount(10));
console.log(counter.count);

// ======================================================================================
// ======================================================================================

// Task 03
// переделайте код из Task 02, что бы сработал следующий код:
// counter.setCurrentCount(10).increment().increment().increment().decrement().getCurrentCount() // 12


let counter1 = {
    count: 0,

    getCurrentCount(){
        this.count
        return this
    },
    increment(){
        this.count++
        return this
    },
    decrement(){
        this.count--
        return this
    },
    setCurrentCount(newCount){
        this.count = newCount
        return  this
    },
    restCurrentCount(){
        this.count = 0
        return this
    }
}

counter1.setCurrentCount(10).increment().increment().increment().decrement().getCurrentCount() 
console.log(counter1.count); //12




// ======================================================================================
// ======================================================================================


// Task 04
// Написать функцию конструктор myFirstConstructorFunc которая принимает 2 параметра name и age и возвращает объект
// у которого будут эти свойства и метод greeting из Task 01

function MyFirstConstructorFunc(name, age){
    this.name = name,
    this.age = age,

    this.greeting = function(){
        return `My name is ${this.name}. I am ${this.age}`;
    }

    return this;
}


const newPersonCyril = new MyFirstConstructorFunc('Cyril', 18)
const newPersonAndrei = new MyFirstConstructorFunc('Andrei', 24)

console.log(newPersonCyril.greeting());
console.log(newPersonAndrei.greeting());


// ======================================================================================
// ======================================================================================

// Task 05 есть 2 объекта One и Two. С помощью bind и метода sayHello заставьте поздороваться объект One

let One = { name: 'One' };
let Two = {
  name: 'Two',
  sayHello: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

let greetOne = Two.sayHello.bind(One);
greetOne()

// ======================================================================================
// ======================================================================================

// Task 06
// создайте объект helperObj у которого есть следующие методы:
// changeName - меняет значение у свойства name объекта на полученное значение
// setAge - устанавливает полученное значение в свойство age объекта
// greeting - используется функция sayHello из Task 05


let helperObj = {
    name: 'Cyril',
    age: 18,
  
  
    changeName: function(fixName){
      this.name = fixName;
      return this;
    },
  
    setAge: function(fixAge){
      this.age = fixAge;
      return this;
    },
  
    sayHello: function () {
      console.log(`Hello, my name is ${this.name} and im ${this.age} yo`);
    },
  };
  
  
  console.log(helperObj);
  console.log(helperObj.changeName('Arnold'));
  console.log(helperObj.setAge(19));
  helperObj.sayHello()
  console.log(helperObj);