/*  const Animal = function(options) {
   this.name = options.name
   this.color = options.color

   // this.voice = function() {
   //   console.log('Base voice from ', this.name)
   // }
 }

 Animal.prototype.voice = function() {
   console.log('Base voice from ', this.name)
 }



 const dog = new Animal({name: 'Rex', color: '#fff'})

/*  dog.voice()

 const Cat = function(options) {
   Animal.apply(this, arguments)
   this.hasTail = options.hasTail
  this.type = 'cat'
 }

 Cat.prototype = Object.create(Animal.prototype)
 Cat.prototype.constructor = Cat


 const cat = new Cat({name: 'Murzik', color: '#fff', hasTail: true})
 console.log(cat);
 console.log(dog); */


 class Animal{
    constructor(options){
        this.name = options.name;
        this.color = options.color;
    }

    voice(){
        console.log('Base voice from ', this.name)
    }
 }



 class Cat extends Animal{
    constructor(options){
        super(options)

        this.hasTail = options.hasTail
        this.type = 'cat'
    }

    voice(){
        console.log(this.name + ' says meaw meaw');
    }
 }




    const cat = new Cat({name: 'Murzik', color: '#fff', hasTail: true})
    const dog = new Animal({name: 'Rex', color: 'yellow'}) 

    console.log(cat);
    console.log(dog);




    /// EXAMPLES

Object.prototype.print = function(){
    console.log(`Im  object: `, this);
}

cat.print()

Array.prototype.mapAndLog = function() {
    console.log('Array to map');
    return this.map.apply(this, arguments)
}

console.log([1, 2, 3, 4].mapAndLog(x => x ** 2));



class Car{
    constructor(brand){
        this.carname = brand;
    }

    present(){
        console.log('I have a ' + this.carname)
    }
}

class Model extends Car{
    constructor(brand, mod){
        super(brand)
        this.model = mod
    }

    show(){
        return this.present() + ', it is a ' + this.model
    }
}

const myCar = new Model('Ford', 'Mustang')
console.log(myCar);



class Rectangle {
    constructor(height, weight){
        this.name = 'Rectangle'
        this.height = height
        this.weight = weight
    }

    getName(){
        console.log('Hi, I am a ', this.name + '.');
    }
}


class Square extends Rectangle{
    constructor(length){
        super(length, length)
        this.name = 'Square'
    }
}


const square = new Square(500, 600)
console.log(square);



class Fish {
    constructor(habitat, length){
        this.habitat = habitat;
        this.length = length;
    }
}


class Trought extends Fish{
    constructor(habitat, length, variety){
        super(habitat, length);
        this.variety = variety;
    }
}

let saltwater = new Fish("saltwater", "360m");
console.log(saltwater);

let rainbowTrout = new Trought('freshwater', '120m', 'rainbow')
console.log(rainbowTrout);


class Site {
    constructor(siteName){
        this.siteName = siteName
    }


    welcome(){
        console.log(`Welcome to ${this.siteName}`);
    }
}

let site = new Site('www.gavroshcyril.com')
console.log(site.welcome());



class User {
    constructor(name){
        this.name = name;
    }

    get name(){
        return this._name
    }

    set name(value){
        if(value.length < 4){
            console.log('Name is very short');
            return;
        }
        this._name = value;
    }
}


let user = new User("Cyril")
console.log(user.name);

class Person {
    #name

    constructor(name){
        this.#name = name
    }


    getName(){
        return this.#name
    }

    setName(name){
        this.#name = name
    }
}

const person = new Person('Cyril')
console.log(person.getName());