let input = document.querySelector('input');
let button = document.getElementById('crossed_out_button');
let ul = document.querySelector('ul');
let form = document.querySelector('form');
let tasks = [];

if (localStorage.tasks){
    tasks = JSON.parse(localStorage.tasks);
}

for (let task of tasks){
    let button = document.createElement('button');
        button.innerText = 'X';

        let li = document.createElement('li');

        let p = document.createElement('p');
        p.innerText = task;

        let checkbox = document.createElement('input')
        checkbox.type = 'checkbox';
        checkbox.addEventListener('click', (event) => {
            p.classList.toggle('crossedout')
        })

        button.addEventListener('click', (event) => {
            li.remove();
        })

        li.appendChild(button);
        li.appendChild(p);
        li.appendChild(checkbox);
        ul.appendChild(li);
}

function addLi(text){
    if (input.value != ''){
        tasks.push(text);
        localStorage.tasks = JSON.stringify(tasks);

        let button = document.createElement('button');
        button.innerText = 'X';

        let li = document.createElement('li');

        let p = document.createElement('p');
        p.innerText = text;

        let checkbox = document.createElement('input')
        checkbox.type = 'checkbox';
        checkbox.addEventListener('click', (event) => {
            p.classList.toggle('crossedout')
        })

        button.addEventListener('click', (event) => {
            li.remove();
        })

        li.appendChild(button);
        li.appendChild(p);
        li.appendChild(checkbox);
        ul.appendChild(li);
        
        input.value = '';
    }
}

form.addEventListener('submit', function(event){
    event.preventDefault();
    addLi(input.value);
})

button.addEventListener('click', function(event){
    event.preventDefault();
    let pArray = document.querySelectorAll('p');
    let checkboxArray = ul.querySelectorAll('input');
    for (let i = 0; i < pArray.length; i++){
        pArray[i].classList.add('crossedout');
        checkboxArray[i].checked = true;
    }
})