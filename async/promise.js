/* const wine = new Promise((res,rej) => {
    
    setTimeout(() => {
        rej(Error('Your wine is have done'))
    }, 1500)
})

wine.then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
}) */


/* const family = [
    { member: 'mum', id: 1, winery: "Cartuxa" },
    { member: 'dad', id: 2, winery: "Schrader" },
    { member: 'sis', id: 3, winery: "Cafsdrtuxa" },
]

const getWine = (member) => {
    const winePromis = fetch('https://api.sampleapis.com/wines/reds')
    return winePromis
            .then(data => data.json())
            .then(list => {
                const wine = list.find(res => res.winery === member.winery)
                console.log(wine);
                return {
                    ...member,
                    wine
                }
            })
}

const getFamilyMember = (id) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            const member = family.find(res => res.id === id)
            if(member) {
                res(member)
            } else {
                rej(Error('Member famyly is not defined'))
            }
        },1500)
    })
}

getFamilyMember(1)
    .then(data => {
        return  getWine(data)
    })
    .then(newMember => {
        console.log(newMember)
    })
    .catch(err => console.log('err', err)) */

    /* const makeCofee = () => {
        return new Promise((res, rej) => {
            setTimeout( () => {
                res('Your coffee is done')
            }, 500)
        })
    }

    const makeToast = () => {
        return new Promise((res, rej) => {
            setTimeout( () => {
                res('Your toast is done')
            }, 2500)
        })
    }


    const coffeePromise = makeCofee()
    const toastPromise = makeToast()

    Promise.all([coffeePromise, toastPromise]).then(([coffeePromise, toastPromise]) => {
        console.log(coffeePromise);
        console.log(toastPromise);
    }) */

   /*  coffeePromise.then(data => console.log(data))
    toastPromise.then(data => console.log(data)) */


/* const beersPromise = fetch('https://api.sampleapis.com/beers/ale')
const winesPromise = fetch('https://api.sampleapis.com/wines/reds')

Promise.all([beersPromise, winesPromise]).then(data => {
    return Promise.all(data.map(res => res.json()))
}).then(finalData => {
    console.log(finalData);
})


console.log(1); ///1

setTimeout(()=> { console.log(2)}, 2000) //4

console.log(3); ///2

new Promise((res) => res(4)).then((data) => console.log(data)) ///3

setTimeout(() => console.log(5), 2000)//5

Promise.resolve(6).then((data) => console.log(data)) //5
new Promise((res) => setTimeout(() => res(7), 3000)).then((data) => console.log(data))//7 */

/* const promise = new Promise ((res, rej) => {
    setTimeout(()=> {
        res('Hello')
    }, 2000)
})


promise 
    .then((data) => console.log(data))
    .catch((err) => console.log('err', err))


     */

    const promise = Promise.reject()

    promise
        .catch(() => console.log(1))
        .then(() => console.log(2))
        .catch(() => console.log(3))