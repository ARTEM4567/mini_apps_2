let images = document.querySelectorAll('img')
let body = document.querySelector('body');

if (localStorage.img){
    body.style.backgroundImage = `url(${images[localStorage.img].getAttribute('src')})`;
} else {
    body.style.backgroundImage = `url(${images[0].getAttribute('src')})`;
};

images.forEach((img, index) => {
    img.addEventListener('click', (event) => {
        localStorage.img = index;
        event.preventDefault;
        body.style.backgroundImage = `url(${img.getAttribute('src')})`;
        console.log(localStorage.img);
    })
})

