/* function* strGenerator(){
    yield 'H'
    yield 'e'
    yield 'l'
    yield 'l'
    yield 'o'
}

const str = strGenerator()
console.log(str.next());
console.log(str.next());
console.log(str.next());
console.log(str.next());
console.log(str.next());
console.log(str.next()); */


function* numberGen(n = 10){
    for(let i = 0; i <= n; i++){
        yield i
    }
}

const number = numberGen()
console.log(number.next());
console.log(number.next());
console.log(number.next());
console.log(number.next());
console.log(number.next());
console.log(number.next());
console.log(number.next());
console.log(number.next());
console.log(number.next());
console.log(number.next());
console.log(number.next());
console.log(number.next());


const iterator = {
    gen(n = 10){
        let i = 0;

        return {

        }
    }
}

for( let k of [1,1,2,3,5,8,13]){
    console.log(k);
}