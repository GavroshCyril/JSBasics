//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.
// repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"
const  repeatString = (substring, repetitions, separator) =>{
    let result = "";
    for (let i = 0; i < repetitions; i++) {
      result += substring;
      if (i < repetitions - 1) {
        result += separator;
      }
    }
    return result;
  }

  console.log(repeatString("yo", 3, " "));

//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.
// checkStart("Incubator", "inc") => true
// checkStart("Incubator", "yo") => false

const checkStart = ( str, substr) =>{
    return str.toLowerCase().startsWith(substr.toLowerCase());
  }


//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.
//truncateString("Всем студентам желаю удачи!", 10) => "Всем студе..."

const truncateString = (str, num) => {
    if (str.length <= num) {
      return str;
    } else {
      return str.slice(0, num) + "...";
    }
  }


  console.log(truncateString("Всем студентам желаю удачи!", 10));

//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении, если в параметрах пустая строка, то возвращает null.
// getMinLengthWord("Всем студентам желаю удачи!") => "Всем"
// getMinLengthWord("") => null


/*  FINALIZE  */
/* function getMinLengthWord(str){
    let words = str.split(' ')
    let shortest = words.reduce((shortWord, currentWord) => {
        return currentWord.length < shortWord.length ? currentWord : shortWord
    }, words[0])
    return shortest
}

console.log(getMinLengthWord("Всем студентам желаю удачи!"));
 */

const getMinLengthWord = (str) => {
    if (str.trim() === "") {
      return null;
    }
  
    const wordsFromString = str.split(" ");
    const shortestWord = wordsFromString.sort((a, b) => a.length - b.length);
  
    return shortestWord[0];
  };



//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв.
// setUpperCase("всем стУдентам Желаю удачИ!") => "Всем Студентам Желаю Удачи!"

/* const setUpperCase = (str) => {
    const res = str.toLowerCase().split(' ')
    for(let i = 0; i < res.length; i++){
        res[i] = res[i][0].toUpperCase() + res[i].substr(1)
    }

   return res.join(" ")
}

console.log(setUpperCase('she fgds sdf'));
 */

const setUpperCase = (str) => {
    const res = str.toLowerCase().split(" ");
  
    res.forEach((_el, i, arr) => (arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1)));
  
    return res.join(" ");
  };
  
  console.log(setUpperCase("she fgds sdf"));



// tasks by numbers


// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

const sum = (...rest) => {
    let result = 0;

    for (let number of rest) {
      result += number;
    }
    return result;
  }

  console.log(sum(5, 6, 2));

// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.
const getTriangleType = (a, b, c) => {
    if (!a || !b || !c) return 00;
  
    if ((a === b) === c) return 10;
  
    if (a && b && c) return 11;
  };
  
  console.log(getTriangleType(10, 20, 30));

// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

/* 120 => 3 */
/* 353 => 11 */

/* function getSum(num){
    let numIsStr = "" + num;
    let sum = 0
    for(let i = 0; i < numIsStr.length; i++)
        sum += +numIsStr[i]
    return sum
}

console.log(getSum(350)); */

const getSum = (num) => {
    const a = num.toString().split("");
  
    const b = a.reduce((acc, val) => (acc += Number(val)), 0);
  
    return b;
  };


// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

const isEvenIndexSumGreater = (arr) => {
  let evenSum = 0;
  let oddSum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      evenSum += arr[i];
    } else {
      oddSum += arr[i];
    }
  }
  return evenSum > oddSum ? 'true' : 'false';
}

console.log(isEvenIndexSumGreater([ 6, 2, 6, 4, 3]));


// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив. 
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.

// [1, -2, 3, 4.1, 5] => [1,9,25]

/* function getSquarePositiveIntegers(arr) {
    let result = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (Number.isInteger(arr[i]) && arr[i] > 0) {
        result.push(arr[i] * arr[i]);
      }
    }
  
    return result;
  }

  console.log(getSquarePositiveIntegers([1, -2, 3, 4.1, 5])); */


  function getSquarePositiveIntegers(arr) {
    const result = [];
  
    arr.forEach((el) => {
      if (Number.isInteger(el) && el >= 0) {
        result.push(Math.pow(el, 2));
      }
    });
  
    return result;
  }
  
  console.log(getSquarePositiveIntegers([1, -2, 3, 4.1, 5]));


  // 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно

  const sumToN = (N) => {
    let sum = 0;
    for (let i = 0; i <= N; i++) {
      sum += i;
    }
    return sum;
  }

  console.log(sumToN(3));


  // Calculate BMI
  function bmi(weight, height) {
    const res = weight / Math.pow(height, 2);
    if(res <= 18.5) return "Underweight"
    if(res <= 25.0) return "Normal"
    if(res <= 30.0) return "Overweight"
    if(res > 30) return "Obese"
}


// Disemvowel Trolls
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}



// Sum even numbers
const sumEvenNumbers = (input) => {
  let arr = input.filter(el => el % 2 === 0);
  let newEven = arr.reduce((sum, num) => {
      return num + sum 
  }, 0)

  return newEven
}



// Calculate average

function findAverage(array) {
  if (array.length !== 0 ) {
    let result = array.reduce(function add(sum, currValue) {
      return sum + currValue;
    }, 0);
    let average = result / array.length;
    return average
  } else {
    return 0;
  }
}

// What is between?
function between(a, b) {
  const arr = []
  for(let i = a; i <= b; i++){
    arr.push(i)
  }
   
   return arr
 }



 // If you can't sleep, just count sheep!!
const countSheep = function (num){
  let res = '';
for (let i = 1; i <= num; i++){
   res += i.toString() + ' sheep...';
}

return res

}



// Reversed Strings
function solution(str){
  return str.split('').reverse().join('')
}

// Student's Final Grade
function finalGrade (exam, projects) {
  if(exam > 90 || projects > 10){
    return 100;
  } else if(exam > 75 && projects >= 5){
    return 90;
  } else if(exam > 50 && projects >= 2){
    return 75;
  } else {
    return 0;
  }
}
