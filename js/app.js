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


// setInterval(() => {
//     let hours = new Date().getHours();
//     if(hours > 12) {
//         hours -= 12;
//     }
//     let minutes = new Date().getMinutes();
//     if(minutes < 10) {
//         minutes = '0' + minutes;
//     }
//     let seconds = new Date().getSeconds();
//     if(seconds < 10) {
//         seconds = '0' + seconds;
//     }
//     h1.innerText = `${hours}:${minutes}:${seconds}`;
// }, 1000);

// new Promise((resolve,reject) => {
//     setTimeout(() => {
//         reject('hello')
//     }, 2000);
// }).then((mes) => {
//     console.log(mes)
// }).catch((err) => {
//     console.error(err)
// })

function bgChanger(color,delay=1000) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(color)
        }, delay);
    })
}

bgChanger('red')
    .then((color) => {
        document.body.style.backgroundColor = color;
        return bgChanger('orange',5000)
    }).then((color) => {
        document.body.style.backgroundColor = color;
        return bgChanger('yellow')
    }).then((color) => {
        document.body.style.backgroundColor = color;
        return bgChanger('green')
    }).then((color) => {
        document.body.style.backgroundColor = color;
        return bgChanger('blue')
    }).then((color) => {
        document.body.style.backgroundColor = color;
        return bgChanger('indigo')
    }).then((color) => {
        document.body.style.backgroundColor = color;
        return bgChanger('violet')
    }).then(color => {
        document.body.style.backgroundColor = color;
    })



// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('red')
//     }, 2000);
// }).then((color) => {
//     document.body.style.backgroundColor = color;
//     new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('orange')
//         }, 2000);
//     }).then((color) => {
//         document.body.style.backgroundColor = color;
//     })
// }).catch(() => console.error('oooops'))