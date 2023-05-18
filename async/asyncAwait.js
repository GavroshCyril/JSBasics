const delay = ms => {
    return new Promise(res => setTimeout(() => res(), ms))
}

const url = 'https://jsonplaceholder.typicode.com/posts'

// function fetchPosts() {
//     console.log('Fetch posts started..,');
//    return delay(2000)
//     .then(()=> fetch(url))
//     .then((res) => res.json())
// }

// fetchPosts()
//     .then(data => {
//         console.log('DATA', data);
//     })
//     .catch(err => err)

async function fetchAsyncPosts( ){
    console.log('Fetch posts started..,')
    await delay(2000)
    const response = await fetch(url)
    const data = await response.json()

    console.log('DATA', data);
}

fetchAsyncPosts()

async function f() {
    try {
        let response = await fetch('http://no-such-url');
    } catch(err) {
      console.log(err); // TypeError: failed to fetch
    }
}

f();


/* async function showAvatar () {
    let res = await fetch('/article/promise-chaining/user.json')
    let user = await res.json()

    let githubResponse = await fetch(`https://api.github.com/users/${user.name}`)
    let githubUser = await githubResponse.json()

    let img = document.createElement('img')
    img.src = githubUser.avatar_url
    img.className = 'promise-avatar-example'

    await new Promise((res, rej) => setTimeout(res, 3000))

    img.remove()
    return githubUser;
}

showAvatar() */

const wringOut = new Promise()
const squatting = new Promise()

const myTrainnng = async () => {
    try{
        await wringOut(10)
        console.log('Wring out 10 times');
        await squatting(0)
        console.log('Wring out 20 times');
    } catch(err){
        console.log('Im tired.... I cant do this anymore');
    }
}