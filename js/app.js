const h1 = document.querySelector('h1')

// // h1.addEventListener('click',()=> {
// //     console.log('clicked')
// // })

// h1.addEventListener('keyup',(e) => {
//     if(e.key.charCodeAt() >= 65 && e.key.charCodeAt() <= 90) {
//         console.log(e.key)
//         console.log('hey')
//     }
// })
// h1.addEventListener('blur', () => {
//     let string = h1.textContent;
//     string = string.match(/\w+/gi)
//     .map(word => word[0].toUpperCase() + word.slice(1).toLocaleLowerCase())
//     .join(' ')
//     h1.textContent = string;
// })


setInterval(() => {
    let hours = new Date().getHours();
    if(hours > 12) {
        hours -= 12;
    }
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    h1.innerText = `${hours}:${minutes}:${seconds}`;
}, 1000);