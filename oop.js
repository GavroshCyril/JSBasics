// НАСЛЕДОВАНИЕ
// механизм, который позволяет одному классу (дочернему) наследовать свойства и методы другого класса (родителя)
class Animal {
    constructor(name){
        this.name = name
    }

    speak(){
        console.log(`${this.name} making noise!!!`);
    }
}

class Dog extends Animal{
    speak(){
        console.log(`${this.name} is barking`);
    }
}

const myAnimal = new Dog('Muchatar')
myAnimal.speak()

// в данном примере класс дог наследует все свойства и методы класса энимал и может их использовать и переопределять
// ====================================================================================================================


// ИНКАПСУЛЯЦИЯ
// механизм ООП, который ограничивает доступ к свойствам и методам класса снаружи

class BankAccount {
    constructor(balance){
        this._balance = balance
    }

    get balance(){
        return this._balance
    }

    set balance(val){
        if(val < 0){
            console.log('Balance cant be negative');
            return;
        }
        this._balance = val
    }


    deposit(val){
        this.balance += val
    }

    withdraw(val) {
        if (this.balance - val < 0) {
          console.log("Insufficient funds");
          return;
        }
        this.balance -= val;
      }
}


const account = new BankAccount(142)
console.log(account.balance);
account.deposit(10)
console.log(account.balance);
account.withdraw(200); // Insufficient funds
console.log(account.balance); // 152
// ====================================================================================================================


// ПОЛИМОРФИЗМ
// возможность использовать один и тот же метод для различных инстансов класса (объектов)

class Shape {
    draw(){
        console.log('Рисуем фигуру какую то');
    }
}

class Circle extends Shape{
    draw(){
        console.log('Рисуем круг');
    }
}

class Square extends Shape {
    draw(){
        console.log('Рисуем квадрат');
    }
}


const shape = new Shape()
const circle = new Circle()
const square = new Square()

shape.draw()
circle.draw()
square.draw()
// ====================================================================================================================


// АБСТРАКЦИЯ
// абстракция означает создание структуры свойств и методов, которые могут быть использованы для представлния конкретного объекта или категории объектов.

class Car {
    constructor(make, model){
        this.make = make
        this.model = model
    }

    honk(){
        console.log('Beep-beep');
    }
}

const myCar = new Car('BMW', 'X5')
console.log(myCar.make);
console.log(myCar.model);
myCar.honk()