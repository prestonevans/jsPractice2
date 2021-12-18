const h1 = document.querySelector('h1')

// h1.addEventListener('click',()=> {
//     console.log('clicked')
// })

h1.addEventListener('keyup',(e) => {
    if(/[a]/i.test(e.key)) {
        console.log(e.key)
        console.log('hey')
    }
})
h1.addEventListener('blur', () => {
    let string = h1.textContent;
    string = string.replace(/\s+/g, ' ');
    string = string.match(/\w+/gi)
    .map(word => word[0].toUpperCase() + word.slice(1).toLocaleLowerCase())
    .join(' ')
    h1.textContent = string;
})