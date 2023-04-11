/**
 * Task description: Write a method that verifies an argument is a plain object, not an array or null
 * Expected Result: True if object is plain, false otherwise. 
     ({ a: 1 }) => true, 
     ([1, 2, 3]) => false
 * Task complexity: 1 of 5
 * @param element - element to verify
 * @returns {boolean}

     export const isPlainObject = (element) => {
        throw new Error(`put your solution here ${element}`);
      };
      const data = { a: 1 };
      console.log(isPlainObject(data)); // true
*/

const isPlainObject = (obj) => {
    if(typeof obj === 'object' &&
    !Array.isArray(obj) && obj !== null) return true
    else return false
}

console.log(isPlainObject(null));




/** 
 * 2. MakePairs - Write a method that returns a deep array like [[key, value]]
  * Task description: Write a method that returns a deep array like [[key, value]] 
  * Expected Result: ({ a: 1, b: 2 }) => [['a', 1], ['b', 2]] 
  * Task complexity: 1 of 5 
  * @param {Object} object - Any object to transform into array 
  * @returns {Array} - a deep array 

export const makePairs = (object) => {
    throw new Error(`put your solution here ${object}`);
  };
  const data = { a: 1, b: 2 };
  console.log(makePairs(data)); // [['a', 1], ['b', 2]]

  */

  const data = { a: 1, b: 2 };
  const makePairs = (obj) =>  Object.entries(data)
  console.log(makePairs(data));






/** 
 *   3. Without - Write a method that returns a new object without provided properties
  * Task description: Write a method that returns new object without provided properties 
  * Expected Result: ({ a: 1, b: 2 }, 'b') => { a: 1 } 
  * Task complexity: 2 of 5 
  * @param {Object} object - Any object 
  * @param {?} args - list of properties to remove from object 
  * @returns {Object} - New object without listed values 

export const without = (object, ...args) => {
  throw new Error(`put your solution here ${object} ${args}`);
};
const data = { a: 1, b: 2 };
console.log(without(data, 'b')); // { a: 1 }

*/

let obj = {
    name: 'Cyril',
    lastName: 'Gavrik',
    age: 18,
    height: 189,
    obesity: false
}


const withoutParam = (object, ...args) =>{
    const newObject = { ...object };

    args.forEach((arg) => {
      delete newObject[arg];
    });
  
    return newObject;
}

console.log(withoutParam(obj, 'name'));



/** 
 * 
 * 4. IsEmpty - Write a method that makes a shallow check is object empty
  * Task description: Write a method that makes a shallow check is object empty 
  * Expected Result: ({}) => true, ({ a: undefined }) => true, 
      ({ a: 1 }) => false 
  * Empty values: '', null, NaN, undefined 
  * Task complexity: 2 of 5 
  * @param {Object} object - Object with values of primitive data types 
  * @returns {boolean} 

export const isEmpty = (object) => {
    throw new Error(`put your solution here ${object}`);
  };
  const data = { a: 1, b: undefined };
  const data2 = { a: undefined };
  console.log(isEmpty(data)); // false
  console.log(isEmpty(data2)); // true

*/


const isEmpty = (obj) => {
  const objectKeys = Object.keys(obj);
  
  if (objectKeys.length === 0) {
    return true;
  }

  return !objectKeys.filter((key) => obj[key] || obj[key] === 0 || obj[key] === false).length;
  
};


const data0 = { a: 1, b: undefined };
const data5 = { a: undefined }; 

console.log(isEmpty(data5));
console.log(isEmpty(data0)); 








/* 

  * Task description: Write a method that makes a shallow compare of two objects 
  * Expected Result: True if objects are identical, false if objects are different ({ a: 1, b: 1 }, { a: 1, b: 1 }) => true 
  * Task complexity: 2 of 5 
  * @param {Object<string | number>} firstObj - Object with values of primitive data types 
  * @param {Object<string | number>} secondObj - Object with values of primitive data types 
  * @returns {boolean} 

export const isEqual = (firstObject, secondObject) => {
  throw new Error(`put your solution here ${firstObject} ${secondObject}`);
};
const data = { a: 1, b: 1 };
const data2 = { a: 1, b: 1 };
const data3 = { a: 1, b: 2 };
console.log(isEqual(data, data2)); // true
console.log(isEqual(data, data3)); // false

*/

const isEqual = (obj1, obj2) =>   {
  const firstKeys = Object.keys(obj1);
  const secondKeys = Object.keys(obj2);
  
  if (firstKeys.length !== secondKeys.length) {
    return false;
  }
  
  for (const property in obj1) {
    if (obj1.hasOwnProperty(property) && (obj1[property] !== obj2[property])) {
      return false;
    }
  }
  
  return true;
  };
  
  
  const data1 = { a: 1, b: 1 };
  const data2 = { a: 1, b: 1 };
  const data3 = { a: 1, b: 2 };
  
  
  console.log(isEqual(data1, data2)); 
  console.log(isEqual(data1, data3));
