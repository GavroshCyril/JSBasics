//1) Write polyfils for map, filter and reduce array methods



//2) Return an array of unique values
const a = [12, 3, 12, "12", 2, 5, 5, "Name", "Name", "Value"];
//exp res: [12, 3, "12", 2, 5, "Name", "Value"]


// THe first way
const uniqueArray = Array.from(new Set(a))
console.log(uniqueArray);


// THe second way
const uniqueValues = (arr) => {
    let res = []

    for(let str of arr){
        if(!res.includes(str)){
            res.push(str)
        }
    }

    return res;
}

console.log(uniqueValues(a));


// THe third way
const uniqueArr = (arr) => {
    return arr.filter((elem, id) => arr.indexOf(elem) === id)
}

console.log(uniqueArr(a));


//3) Рассчитать общую сумму, уплаченную за товары, стоимость которых не выше 12, и вернуть список товаров
 const bucket = [
   { product: "Potato", notes: 5, paid: 48 },
   { product: "Cucumber", notes: 3, paid: 84 },
   { product: "Сarrot", notes: 10, paid: 120 },
   { product: "Meet", notes: 10, paid: 200 },
   { product: "Milk", notes: 2, paid: 12 }
 ];

const hi = busket.filter((product) => product.paid/product.notes <= 12)
console.log(hi);

//exp res: {products: ['Potato',Сarrot, Milk], totalPaid: 180}


const calculatePaid = (bucket) => {
    const product = [];
    const totalPaid = 0;
    
    for (const i = 0; i < bucket.length; i++) {
      if (bucket[i].paid / bucket[i].notes <= 12) {
        totalPaid += bucket[i].paid;
        product.push(bucket[i].product); 
      }
    }

    return {product, totalPaid }; 
}

console.log(calculatePaidSumAndReturnProductList(bucket))



// 4) Напишите функцию, которая будет суммировать только числа из переданного вложенного массива. Используйте рекурсию.
// const a = [1, "4", [NaN, 8, null, [1]], 2];
//exp res: 12


//Start Task 5 ------===-----
 const shedule = [
    { number: 17, day: "Mon", time: "12:45", busStopName: "Melnikov lug" },
    { number: 10, day: "Mon", time: "12:45", busStopName: "Melnikov lug" },
    { number: 16, day: "Wen", time: "12:45", busStopName: "Melnikov lug" },
    { number: 9, day: "Mon", time: "11:25", busStopName: "Melnikov lug" },
    { number: 16, day: "Tue", time: "18:30", busStopName: "Melnikov lug" },
    { number: 4, day: "Thu", time: "10:45", busStopName: "Melnikov lug" },
    { number: 10, day: "Sut", time: "12:45", busStopName: "Melnikov lug" },
    { number: 5, day: "Thu", time: "12:45", busStopName: "Melnikov lug" },
    { number: 5, day: "Fri", time: "12:45", busStopName: "Univermag" },
    { number: 17, day: "Sun", time: "08:10", busStopName: "Melnikov lug" },
    { number: 8, day: "Fri", time: "12:45", busStopName: "Univermag" },
    { number: 3, day: "Wen", time: "16:45", busStopName: "Checherskaya" }
 ];
// exp res: {busStopName: {day: {time: [number], ...} | '-'}, ...}
/* {
    "Melnikov lug": {
        "Mon": {
            "12:45": [ 17,10 ],
            "11:25": [ 9 ]
        },
        "Wen": {
            "12:45": [16]
        },
        "Tue": {
            "18:30": [ 16]
        },
        "Thu": {
            "10:45": [4],
            "12:45": [5]
        },
        "Sut": {
            "12:45": [10]
        },
        "Sun": {
            "08:10": [ 17 ]
        }
    },
    "Univermag": {
        "Fri": {
            "12:45": [5, 8 ]
        }
    },
    "Checherskaya": {
        "Wen": {
            "16:45": [3]
        }
    }
} */


//End Task 5------===-----



//Start Task 6 ------===-----
// const metrics = [
//   { date: "2021-07-06T11:00:00+0000", country: "BY", referrer: "VK" },
//   { date: "2021-07-06T22:20:20+0000", country: "ENG", referrer: "INST" },
//   { date: "2021-07-06T22:30:30+0000", country: "ENG", referrer: "TW" },
//   { date: "2021-07-06T22:40:30+0000", country: "US", referrer: "TW" },
//   { date: "2021-07-07T08:20:00+0000", country: "FR", referrer: "VK" },
//   { date: "2021-07-07T23:30:00+0000", country: "US", referrer: "INST" },
//   { date: "2021-07-07T23:40:00+0000", country: "BY", referrer: "TEL" }
// ];
// exp res: {date: {clicks: {afterMN: 5, beforeMN: 2}, countriesTotal: {country: 12, ...}, referrerTotal: {referrer: 5, ...}},... }
/* 
{
    "2021-07-06": {
        "clicks": {
            "afterMN": 1,
            "beforeMN": 3
        },
        "countriesTotal": {
            "BY": 1,
            "ENG": 2,
            "US": 1
        },
        "referrerTotal": {
            "VK": 1,
            "INST": 1,
            "TW": 2
        }
    },
    "2021-07-07": {
        "clicks": {
            "afterMN": 1,
            "beforeMN": 2
        },
        "countriesTotal": {
            "FR": 1,
            "US": 1,
            "BY": 1
        },
        "referrerTotal": {
            "VK": 1,
            "INST": 1,
            "TEL": 1
        }
    }
}
*/
//End Task 6------===-----