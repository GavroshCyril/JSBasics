function User( login, email ){
    this.login = login
    this.email = email
    this.online = false;
    this.login = function(){
        console.log(this.email, 'has logged in');
    }
}




let userOne = new User('gavrosh@gmail.com', 'cyrlgv')
let userTwo = new User('loliaadams@gmail.com', 'lolita adamsova')

console.log(userOne);
userTwo.login()



const parent = {
    name: 'Parent',

    greet(){
        console.log(`Hello, i am ` + this.name);
    }
}

/* const child = Object.create(parent)
child.name = "Child" */

const child = {
    name: 'Child',
    __proto__: parent
}

console.log(parent.greet());
console.log(child.greet());


const livingBeing = {
    breathe: function() {
      console.log("Дышит");
    }
  };
  
  // Прототип объекта "animal"
  const animal = Object.create(livingBeing);
  animal.eat = function() {
    console.log("Ест");
  };
  
  // Объект "dog" наследует свойства и методы из прототипа "animal"
  const dog = Object.create(animal);
  dog.bark = function() {
    console.log("Лает");
  };
  
  // Вызываем методы из цепочки прототипов
  dog.bark(); // "Лает"
  dog.eat(); // "Ест"
  dog.breathe(); // "Дышит"