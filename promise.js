/* // синхронный код
function syncCode(){
    console.log('start');
    console.log(1);
    console.log(2);
    console.log(3);
    console.log('end');
}

syncCode()

// этот код выполнится синхронно, и выведет в консоль все строки по порядку, так как каждая операция будет блокировать выполнение следующей
// ===================================================================================================================================


// асинхронный код

function asyncCode(){
    console.log('start');

    setTimeout(() => {
        console.log(1);
    }, 2000)


    setTimeout(() => {
        console.log(2);
    }, 1000)

    console.log('end');
}

asyncCode() */

console.log('Request data...');
/* 

setTimeout(()=> {
    console.log('Preparing data...');

    const backendData = {
        server: 'aws',
        port: 2000,
        status: 'working',
    }


    setTimeout(() => {
        backendData.modified = true
        console.log('Data received: ', backendData);
    }, 2000)
}, 2000)

 */

const promise1 = new Promise((res, rej) => {
    setTimeout(() => {
        rej()
    }, 0)
})

promise1.catch((err) => {
    console.log(err);
})