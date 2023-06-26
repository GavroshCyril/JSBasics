let url =
  "https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits";
let res = await fetch(url);

let commits = await res.json();
console.log(commits[0].author.login);
