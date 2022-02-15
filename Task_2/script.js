let obj = {name: 'user'};

localStorage.name = JSON.stringify(obj);

let b = JSON.parse(localStorage.name);

console.log(b)

let user = {name: 'use'};

localStorage.user = JSON.stringify(user);

let newUser = JSON.parse(localStorage.user);

console.log(newUser);